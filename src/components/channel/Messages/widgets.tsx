import React, {FC} from "react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {cn} from "@/lib/utils";
import {Attachment, Attachments} from "@/components/channel/Messages/attachments";
import {BadgeCheck, Check, CircleCheck, SquareCheckBig} from "lucide-react";

interface MessageProps {
  className?: string
  message: Message
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

export const LeftMessage: MessageFC = ({message: {content, hints, attachments}, className}) => {
  return <div className="mb-1">
    <div className={cn("bg-secondary w-fit py-2 px-4 text-xl my-1 max-w-[800px] whitespace-pre-line", className)}>
      {content}
    </div>
    <Hints hits={hints}/>
    <Attachments attachments={attachments}/>
  </div>

}
export const Hints: FC<{ hits?: Hint[] }> = ({hits}) => {
  if (!hits) return null;
  return <div className="mb-1">
    {
      hits.map(({title, content, offset}, i) => {
        return <div key={i} className={cn("flex items-center gap-1", `ml-${(offset ?? 0) * 3}`)}>
          <div className="flex items-center">
            - {content} <SquareCheckBig size={16} className="ml-2  stroke-green-600"/>
          </div>
        </div>
      })
    }
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
