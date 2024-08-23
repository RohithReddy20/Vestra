import React, { useState, useEffect } from "react";

const words = ["Easy", "Powerful", "Intuitive"];

const useTextAnimation = (text: string, isVisible: boolean) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isVisible) {
      const animateIn = (index: number) => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          timeoutId = setTimeout(() => animateIn(index + 1), 100);
        } else {
          timeoutId = setTimeout(animateOut, 1000);
        }
      };

      const animateOut = () => {
        const outAnimation = (index: number) => {
          if (index >= 0) {
            setDisplayText(text.slice(0, index));
            timeoutId = setTimeout(() => outAnimation(index - 1), 100);
          }
        };
        outAnimation(text.length);
      };

      animateIn(0);
    } else {
      setDisplayText("");
    }

    return () => clearTimeout(timeoutId);
  }, [text, isVisible]);

  return displayText;
};

export default function AnimatedText() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];
  const displayText = useTextAnimation(currentWord, true);

  useEffect(() => {
    const wordDuration = currentWord.length * 200 + 2000; // Time to animate in, pause, and animate out
    const timeoutId = setTimeout(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, wordDuration);

    return () => clearTimeout(timeoutId);
  }, [currentWord]);

  return (
    <div className="flex items-center justify-center">
      <div
        className="ml-1 text-5xl md:text-[80px] font-bold font-ttfir text-center flex text-[#E52D27]"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentWord.split("").map((char, index) => (
          <span
            key={index}
            className="transition-opacity duration-300 ease-in-out"
            style={{ opacity: index < displayText.length ? 1 : 0 }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
