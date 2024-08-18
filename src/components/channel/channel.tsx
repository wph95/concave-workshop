import React from "react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {Loader} from "lucide-react";
import {cn} from "@/lib/utils";
import TiDBIcon from "@/components/channel/tidb_icon";

interface MessageProps {
  children: React.ReactNode
  className?: string
}


const message = [
  {
    author: 'user',
    content: 'Hi, I need fix it. https://github.com/pytest-dev/pytest/issues/5257',
    attachment: {
      "type": "url",
      "url": "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
      "meta": {
        "og:title": "_pytest.capture.EncodedFile mode should not include `b` (binary) · Issue #5257 · pytest-dev/pytest",
        "og:description": "a detailed description of the bug or suggestion Exception when youtube-dl logs to pytest captured output. Youtube-dl looks for b in out.mode to decide whether to writes bytes or str. _pytest.captur...",
        "og:image": "https://opengraph.githubassets.com/707dcb9ef47e568159c9f298d47b9e70cc8eb8091450a3231fafcd7b74c88e33/pytest-dev/pytest/issues/5257"
      }
    }
  }
]

const UrlAttachment: React.FC<{
  url: string,
  title: string,
  description: string,
  image: string
}> = ({url, title, description, image}) => {
  return <div className="w-[480px] ml-auto mt-3 pl-4 border-l-4">
    <div>
      <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline">
        {title}
      </a>
      <div className="line-clamp-2">
        {description}
      </div>
    </div>
    <img src={image} alt=""/>
  </div>
}

const AuthorLine: React.FC<{ author: string }> = ({author}) => {
  return <div className="flex gap-2 items-end mb-2">
    <Avatar className="h-6 w-6">
      <AvatarImage src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" alt=""/>
    </Avatar>
    <div className="font-semibold">
      {author}
    </div>
  </div>
}


const LeftMessage: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({children, className}) => {
  return <div className={cn("bg-secondary w-fit py-2 px-4 text-xl my-1 max-w-[800px] whitespace-pre-line", className)}>
    {children}
  </div>

}
const HintMessage: React.FC<MessageProps> = ({children, className}) => {
  return <div className={cn("w-fit px-1 text-slate-700 mt-1", className)}>
    {children}
  </div>
}

const RightMessage: React.FC<React.PropsWithChildren> = ({children}) => {
  return <div className="ml-auto p-2 px-4 bg-blue-600 text-white rounded-xl">

    <div className="text-xl">
      {children}
    </div>

  </div>

}


export default function Channel() {
  return (
    <div className="flex flex-col justify-between  px-6 py-6 scroll-auto">

      <RightMessage>
        Hi, Need Help! https://github.com/pytest-dev/pytest/issues/5257
      </RightMessage>

      <UrlAttachment
        url={message[0].attachment.url}
        title={message[0].attachment.meta["og:title"]}
        description={message[0].attachment.meta["og:description"]}
        image={message[0].attachment.meta["og:image"]}
      />

      <AuthorLine author="bob"/>
      <LeftMessage className="!mt-1">
        {"Hi! I'm looking into it."}
      </LeftMessage>

      <HintMessage>
        Found a <span className="font-semibold text-blue-800">pytest/pytest</span> github issue. <Loader className=" inline ml-3 h-4 w-4 animate-spin"/>
      </HintMessage>
      <HintMessage>
        Searching   <span className="font-semibold text-blue-800">pytest/pytest</span>
      </HintMessage>
      <HintMessage className="pl-4 flex items-center">

        - load knowledge from
        <TiDBIcon />
        TiDB Cloud
      </HintMessage>

      <LeftMessage className="mt-3">
        {
          "The issue arises when youtube-dl logs to pytest. _pytest.capture.EncodedFile incorrectly reports rb+ mode, causing an exception when write() is passed bytes."
        }
      </LeftMessage>

      <LeftMessage>
        {"I will ask the team to submit a PR to fix this. \n cc @Peter, @Tom"}
      </LeftMessage>



    </div>
  )
}
