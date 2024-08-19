import React, {useEffect} from "react";
import {CircleMinus, CirclePlus, NotebookPen} from "lucide-react";
import {SymbolsAttachment} from "./symbols_attachment";
import {cn} from "@/lib/utils";
import {useAtomValue} from "jotai/index";
import {ChannelMode} from "@/components/channel/model";

export interface UrlAttachment {
  type: "url",
  url: string,
  og_title: string,
  og_description: string,
  og_image: string
}

// scratch_pad
export interface ScratchPad {
  type: "scratch_pad",
  title?: string,
  content: string
}


export type Attachment = UrlAttachment | ScratchPad | SymbolsAttachment


export const Attachments: React.FC<{ attachments?: Attachment[] }> = ({attachments}) => {
  if (!attachments) return null;
  return <div className="mb-4">
    {attachments.map((attachment, i) => {
      if (attachment.type === "url") {
        return <UrlAttachment key={i} {...attachment}/>
      }
      if (attachment.type === "scratch_pad") {
        return <ScratchPadAttachment key={i} {...attachment}/>
      }
      if (attachment.type === "symbols") {
        return <SymbolsAttachment key={i} {...attachment}/>
      }
    })}
  </div>
}

export const ScratchPadAttachment: React.FC<ScratchPad> = ({content, title}) => {
  const [expanded, setExpanded] = React.useState(false)
  const mode = useAtomValue(ChannelMode)
  useEffect(() => {
    setExpanded(mode === 'pro')
  }, [mode])
  if (!expanded) {
    return <div className="max-w-[800px]">
      <div className="text-xs font-semibold justify-between text-slate-500 py-2 flex items-center cursor-pointer hover:bg-slate-100"
           onClick={() => setExpanded(true)}>
        <div className="flex items-center">
          <NotebookPen className="inline mr-1" size={14}/>
          Scratch Pad:
          <div className="pl-2 underline underline-offset-4">{title}</div>
        </div>
        <CirclePlus className=" ml-1" size={14}/>
      </div>

    </div>
  }


  return <div className="max-w-[800px]">
    <div className="text-xs font-semibold justify-between text-slate-500 py-2 flex items-center cursor-pointer hover:bg-slate-100"
         onClick={() => setExpanded(false)}>
      <div className="flex items-center">
        <NotebookPen className="inline mr-1" size={14}/>
        Scratch Pad:
        <div className="pl-2 underline underline-offset-4">{title}</div>

      </div>
      <CircleMinus className=" ml-1" size={14}/>
    </div>

    <div
      className={cn("max-w-[800px] overflow-auto relative font-mono border border-slate-400 p-1 px-4 rounded-md whitespace-pre-line w-fit min-w-[640px]",)}>
      {content}
    </div>
  </div>
}


export const UrlAttachment: React.FC<UrlAttachment> = ({url, og_title, og_description, og_image}) => {
  return <div className="w-[480px] ml-auto mt-3 pl-4 border-l-4">
    <div>
      <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
        {og_title}
      </a>
      <div className="line-clamp-2">
        {og_description}
      </div>
    </div>
    <img src={og_image} alt="og_title"/>
  </div>
}
