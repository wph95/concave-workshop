"use client"
import React from "react";
import {CirclePlus, Folder, NotebookPen} from "lucide-react";
import CodeBlock from "@/components/ui/code-block";

export interface SymbolsAttachment {
  type: "symbols",
  symbols: {
    name: string,
    file_path: string,
    file_content: string,
  }[]
}

export const SymbolsAttachment: React.FC<SymbolsAttachment> = ({symbols}) => {
  const [selected, setSelected] = React.useState(0)

  return <div>
    <div className="text-xs font-semibold text-slate-500 py-2 flex items-center">
      <NotebookPen className="inline mr-1" size={14}/>
      Symbols viewer
      {/*<CirclePlus className="inline ml-1" size={14}/>*/}
    </div>
    <div className="flex font-mono border border-slate-400  rounded-md whitespace-pre-line w-fit  ">
      <div className="w-[240px] flex-grow-0 flex-shrink-0">
        <div className="font-semibold text-xs px-2 py-2">
          <Folder className="inline mr-2" size={14}/>
          _pytest.capture
        </div>
        <ul className="py-1.5 list-disc pl-5 ">

          {
            symbols.map((symbol, index) => {
              const name = symbol.name.split('.').slice(2).join('.')
              return (
                <li
                  key={index}
                  className="flex pl-2 pr-2 py-1.5 w-full justify-between items-center text-xs hover:bg-slate-300/40 data-[active=true]:font-semibold  data-[active=true]:bg-sky-100 cursor-pointer  "
                  data-active={selected === index}
                  onClick={() => setSelected(index)}
                >
                  {name}
                  {selected === index && <span className="bg-blue-600 w-2 h-2 rounded-full"></span>}
                </li>
              )
            })
          }
        </ul>

      </div>

      <div className="border-l border-slate-400 w-fit min-w-[640px]
      ">
        <div className="bg-slate-200 font-semibold px-4 py-1.5">
          {symbols[selected].file_path}
        </div>
        <div className=" px-4 py-2 h-[360px] overflow-auto">
          <CodeBlock
            words={["__getattr__"]}
            code={
            symbols[selected].file_content
          } language="py"/>
        </div>


      </div>
    </div>

  </div>
}
