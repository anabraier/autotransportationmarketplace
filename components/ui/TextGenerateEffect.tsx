"use client";
import { useState, useEffect } from "react";

interface TextGenerateEffectProps {
  words: string[];
  className?: string;
}

export const TextGenerateEffect = ({
  words,
  className = "",
}: TextGenerateEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[index]);
        setIndex(index + 1);
      }, 50); // Speed of the animation

      return () => clearTimeout(timeout);
    }
  }, [index, words]);

  return (
    <h1 className={`${className} text-white font-bold`}>{displayedText}</h1>
  );
};
