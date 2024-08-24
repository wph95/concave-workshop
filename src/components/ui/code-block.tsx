'use client';
import {CodeBlock as CB} from 'react-code-block';
import {themes} from 'prism-react-renderer';
import {useLineContext} from "react-code-block/dist/contexts";
import {cn} from "@/lib/utils";

const LineNumber = ({
                      offset = 0
                    }: { offset: number }) => {
  const {lineNumber} = useLineContext();
  return (
    <span className="table-cell pr-4 text-sm text-gray-500 text-right select-none">{lineNumber + offset}</span>
  )
}

const LineContent = ({children, lines, offset}: { offset: number, children: React.ReactNode, lines?: number[] }) => {
  const { lineNumber,   } = useLineContext();
  const isHighlighted = lines?.includes(lineNumber + offset)

  return (
    <div className={cn("table-cell", isHighlighted ? "bg-green-100": "")}>
      {children}
    </div>
  )
}

export default function CodeBlock({code, language, words, offset=0, lines}: {
  code: string,
  language: string
  offset?: number
  lines?: number[]
  words?: string[]
}) {
  return (
    <CB code={code} language={language}
        lines={lines}
        words={words}
        theme={themes.github}
    >
      <CB.Code className="">
        <div className="table-row">

          <LineNumber offset={offset ?? 0}/>
          <LineContent lines={lines} offset={offset}>
            <CB.Token/>
          </LineContent>
        </div>
      </CB.Code>
    </CB>
  );
}

