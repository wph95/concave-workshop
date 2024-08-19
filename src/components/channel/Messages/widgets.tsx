import React, {FC, useEffect} from "react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {Attachment, Attachments} from "@/components/channel/Messages/attachments";
import {
  BadgeCheck,
  Check,
  CheckCheck, ChevronDown,
  ChevronRight, ChevronUp,
  CircleCheck,
  CircleMinus,
  CircleSlash,
  SquareCheckBig
} from "lucide-react";
import {Author} from "@/components/avatar-group/avatar-group";
import {useAtomValue} from "jotai";
import {ChannelMode} from "@/components/channel/model";

interface MessageProps {
  className?: string
  message: Message
  author?: Author
}

interface Hint {
  title: string,
  content: any,
  offset?: number
}

export interface Message {
  author: string,
  content: string | React.ReactNode,
  attachments?: Attachment[],
  hints?: Hint[]
}

type MessageFC = React.FC<MessageProps>


export const AuthorLine: React.FC<{
  author: string,
  avatar: string
}> = ({author, avatar}) => {
  return <div className="flex gap-2 items-end mb-2">
    <Avatar className="h-6 w-6">
      <AvatarImage src={avatar} alt=""/>
    </Avatar>
    <div className="font-semibold">
      {author}
    </div>
  </div>
}

export const LeftMessage: MessageFC = ({author, message: {content, hints, attachments}, className}) => {


  return (
    <div className="relative">
      {
        author && <div className="pl-8 font-semibold mt-5">
          {author.name}
          </div>
      }
      {
        author && <div className="absolute top-3 -left-2.5 mt-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt=""/>
          </Avatar>
        </div>
      }


      <div className="mb-1 pl-8">
        <div className={cn("bg-secondary w-fit py-2 px-4 text-xl my-1 max-w-[800px] whitespace-pre-line", className)}>
          {content}
        </div>
        <Hints hits={hints}/>
        <Attachments attachments={attachments}/>
      </div>
    </div>
  )


}
export const Hints: FC<{ hits?: Hint[] }> = ({hits}) => {
  const [expanded, setExpanded] = React.useState(false);
  const mode = useAtomValue(ChannelMode)
  useEffect(() => {
    setExpanded(mode === 'pro')
  }, [mode])

  if (!hits) return null;
  if (!expanded) {
    return <div className="flex items-center gap-1 hover:bg-slate-300/40 w-full" onClick={() => setExpanded(v => !v)}>
      {expanded ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
      {hits.length} Actions
      <CheckCheck size={16} className="ml-2  stroke-green-600"/>
    </div>
  }


  return <div className="mb-1 ">
    <div className="flex items-center gap-1 hover:bg-slate-300/40 w-full" onClick={() => setExpanded(v => !v)}>
      <ChevronDown size={16}/>
      {hits.length} Actions
      <CheckCheck size={16} className="ml-2  stroke-green-600"/>
    </div>
    <div className=" pl-3 ml-2 border-l-2 border-slate-200">
      {
        hits.map(({title, content, offset}, i) => {
          return <div key={i}
                      className={cn("flex items-center gap-1 hover:bg-slate-300/40 w-full", `ml-${(offset ?? 0) * 3}`)}>
            <div className="flex items-center">
              <SquareCheckBig size={16} className="mr-2  stroke-green-600"/>
              {content}
            </div>
          </div>
        })
      }
    </div>
  </div>
}

export const RightMessage: MessageFC = ({message: {content, hints, attachments}}) => {
  return <>
    <div className="ml-auto p-2 px-4 bg-blue-600 text-white rounded-xl mb-2">
      <div className="text-xl">
        {content}
      </div>
    </div>
    <Hints hits={hints}/>
    <Attachments attachments={attachments}/>
  </>
}
