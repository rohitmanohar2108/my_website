"use client";

import React from "react";
import { CodeBlock } from "./code-block";

export function CodeBlockDemo() {
  const code = `function growthMindset() {
  const challenges = new Array();

  while (challenges.length > 0) {
    skills.improve();
    knowledge.expand();
  }

  return 'Success guaranteed';
}

// Your potential is unlimited!`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock
        language="tsx"
        filename="growthMindset.tsx"
        highlightLines={[1, 4, 7]}
        code={code}
      />
    </div>
  );
}
