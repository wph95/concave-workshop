import React from "react";
import {NotebookPen} from "lucide-react";

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
  content: string
}

export type Attachment = UrlAttachment | ScratchPad


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
    })}
  </div>
}

export const ScratchPadAttachment: React.FC<ScratchPad> = ({content}) => {
  return <div>
    <div className="text-xs font-semibold text-slate-500 py-2 flex items-center">
      <NotebookPen className="inline mr-1" size={14}/>
      Scratch Pad
    </div>
    <div className="font-mono border border-slate-400 p-2 rounded-md whitespace-pre-line w-fit min-w-[640px]">
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
