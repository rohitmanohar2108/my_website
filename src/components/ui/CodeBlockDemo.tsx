"use client";

import React from "react";
import { CodeBlock } from "./code-block";
import useMediaQuery from "../hooks/ useMediaQuery"

export function CodeBlockDemo() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const largeScreenCode = `const DesignEngineerCard = () => {
  const [ideas, setIdeas] = React.useState(["UI/UX", "React", "System Design"]);

  const addIdea = () => {
    const newIdea = prompt("What's your next brilliant idea?");
    if (newIdea) {
      setIdeas([...ideas, newIdea]);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">CSE x Design Toolkit</h2>
      <ul className="list-disc pl-5 mb-3">
        {ideas.map((idea, idx) => (
          <li key={idx}>{idea}</li>
        ))}
      </ul>
      <button 
        onClick={addIdea}
        className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Add Idea 💡
      </button>
    </div>
  );
};`;

  const smallScreenCode = `const MiniCard = () => {
  const [items, setItems] = React.useState(["Idea 💡"]);

  const addItem = () => {
    const idea = prompt("Your idea?");
    if (idea) setItems([...items, idea]);
  };

  return (
    <div>
      <ul>{items.map((i, idx) => <li key={idx}>{i}</li>)}</ul>
      <button onClick={addItem}>Add</button>
    </div>
  );
};`;

  return (
    <div className="max-w-[144%] lg:-mx-28  lg:w-[1000%]">
      <CodeBlock
        language="jsx"
        filename={isSmallScreen ? "MiniCard.jsx" : "DesignEngineerCard.jsx"}
        highlightLines={isSmallScreen ? [2, 6] : [4, 6, 9, 11, 14]}
        code={isSmallScreen ? smallScreenCode : largeScreenCode}
      />
    </div>
  );
}
