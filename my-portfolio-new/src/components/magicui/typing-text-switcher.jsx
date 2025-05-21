"use client";

import { TypingAnimation } from "./typing-animation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const texts = [
    "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    "First, solve the problem. Then, write the code. – John Johnson",
    "Simplicity is the soul of efficiency. – Austin Freeman",
    "Programs must be written for people to read, and only incidentally for machines to execute. – Harold Abelson",
    "Good code is its own best documentation. – Steve McConnell",
    "Code never lies, comments sometimes do. – Ron Jeffries",
  ];

export default function TypingTextSwitcher() {
    const [index, setIndex] = useState(0);
    const [visibleText, setVisibleText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
  
    const fullText = texts[index];
    const typingSpeed = 100; // ms per character
    const delayAfterTyping = 1000;
  
    useEffect(() => {
      if (charIndex < fullText.length) {
        const timeout = setTimeout(() => {
          setVisibleText((prev) => prev + fullText[charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          // reset để gõ text tiếp theo
          setIndex((prev) => (prev + 1) % texts.length);
          setVisibleText("");
          setCharIndex(0);
        }, delayAfterTyping);
        return () => clearTimeout(timeout);
      }
    }, [charIndex, fullText]);
  
    return (
      <motion.div
        className="text-sm font-mono text-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={index}
      >
        {visibleText}
        <motion.span
          className="inline-block w-[1ch] animate-blink"
          style={{ opacity: 1 }}
        >
          |
        </motion.span>
      </motion.div>
    );
}
