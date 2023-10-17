// CodeDisplay.tsx

import React from 'react';

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  return (
    <div className="bg-stone-100 dark:bg-black max-h-96 dark:text-slate-300 overflow-auto scrollbar-hide">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;