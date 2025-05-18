import React, { useState, useEffect } from "react";

const texts = [
  { text: "Rohit Manohar", color: "text-rose-500" },
  { text: "Developer", color: "text-blue-400" },
  { text: "CSE Student at NITK", color: "text-green-400" },
  { text: "Tech Enthusiast", color: "text-yellow-400" },
];

const CustomTypewriter = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];
    const fullText = current.text;

    let timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1500); // Delay before delete
        }
      } else {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <span className={`${texts[index].color} sm:text-5xl lg:text-7xl`}>
      {displayedText}
      <span className="animate-pulse font-sans">|</span>
    </span>
  );
};
export default CustomTypewriter;