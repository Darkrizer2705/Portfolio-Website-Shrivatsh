import { useEffect, useState } from "react";

export function TypedText({ words, speed = 70, pause = 1400 }: { words: string[]; speed?: number; pause?: number }) {
  const [idx, setIdx] = useState(0);
  const [sub, setSub] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!del && sub === word) {
      t = setTimeout(() => setDel(true), pause);
    } else if (del && sub === "") {
      setDel(false);
      setIdx((i) => i + 1);
    } else {
      t = setTimeout(
        () => setSub((s) => (del ? word.slice(0, s.length - 1) : word.slice(0, s.length + 1))),
        del ? speed / 2 : speed
      );
    }
    return () => clearTimeout(t);
  }, [sub, del, idx, words, speed, pause]);

  return (
    <span className="inline-flex items-center">
      <span className="gradient-text font-semibold">{sub}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] bg-primary animate-blink" />
    </span>
  );
}
