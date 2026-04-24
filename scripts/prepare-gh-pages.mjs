import { promises as fs } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceClientDir = path.join(root, "dist", "client");
const publishDir = path.join(root, "build");

async function preparePublishDir() {
  await fs.rm(publishDir, { recursive: true, force: true });
  await fs.cp(sourceClientDir, publishDir, { recursive: true });
}

async function main() {
  await preparePublishDir();

  const assetsDir = path.join(publishDir, "assets");
  const entries = await fs.readdir(assetsDir, { withFileTypes: true });
  const buildVersion = Date.now().toString();

  const jsCandidates = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!/^index-.*\.js$/.test(entry.name)) continue;

    const filePath = path.join(assetsDir, entry.name);
    const stat = await fs.stat(filePath);
    jsCandidates.push({ name: entry.name, size: stat.size });
  }

  if (jsCandidates.length === 0) {
    throw new Error("Could not find an index-*.js entry chunk in build/assets.");
  }

  // Pick the largest index chunk, which is the runtime entry in this build.
  jsCandidates.sort((a, b) => b.size - a.size);
  const entryScript = jsCandidates[0].name;
  const entryPath = path.join(assetsDir, entryScript);

  // TanStack Start client bundle hydrates a server-rendered document by default.
  // For GitHub Pages we publish static files, so switch to client render.
  const entrySource = await fs.readFile(entryPath, "utf8");
  let patchedEntrySource = entrySource.replace(
    "hydrateRoot(document,",
    "createRoot(document.body).render(",
  );

  // TanStack Start injects a basepath from Vite base; on hash routing for Pages,
  // a root basepath keeps route matching predictable.
  patchedEntrySource = patchedEntrySource.replace(
    /basepath:"[^"]*"/,
    'basepath:"/"',
  );

  if (patchedEntrySource === entrySource) {
    throw new Error("Could not patch entry bundle: hydrateRoot(document,...) not found.");
  }

  await fs.writeFile(entryPath, patchedEntrySource, "utf8");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Shrivatsh Kuppusubramaniam</title>
  </head>
  <body>
    <script>
      if (!location.hash) {
        location.replace(location.pathname + location.search + "#/");
      }
    </script>
    <script type="module" src="./assets/${entryScript}?v=${buildVersion}"></script>
  </body>
</html>
`;

  await fs.writeFile(path.join(publishDir, "index.html"), html, "utf8");
  await fs.writeFile(path.join(publishDir, "404.html"), html, "utf8");

  console.log(`Prepared GitHub Pages HTML with entry: ${entryScript}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
