// CodeDisplay.tsx

import React from 'react';

interface CodeDisplayProps {
  code: string;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ code }) => {
  return (
    <div className="bg-violet-50 dark:bg-black max-h-96 dark:text-violet-200 overflow-auto">
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeDisplay;