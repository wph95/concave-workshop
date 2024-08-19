'use client';
import { CodeBlock as CB } from 'react-code-block';
import { themes} from 'prism-react-renderer';

export default function CodeBlock({ code, language, words }:{
  code: string,
  language: string
  words: string[]
}) {
  return (
    <CB code={code} language={language}
        words={words}
        theme={themes.github}
    >
      <CB.Code className="">
        <div className="table-row">
          <CB.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none" />
          <CB.LineContent className="table-cell">
            <CB.Token />
          </CB.LineContent>
        </div>
      </CB.Code>
    </CB>
  );
}

