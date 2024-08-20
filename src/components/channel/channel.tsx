"use client"

import React, {useEffect, useRef} from "react";
import {AuthorLine, LeftMessage, Message, RightMessage} from "@/components/channel/Messages/widgets";
import {Author, TEAM} from "@/components/avatar-group/avatar-group";
import {MESSAGES} from "@/components/channel/messages";


const MessageRow = ({message, author}: {
  message: Message,
  author?: Author
}) => {
  if (message.author === 'user') {
    return (
      <>
        <RightMessage message={message} author={author}/>
      </>

    )
  }

  return (
    <>
      <LeftMessage message={message} author={author}/>
    </>

  )
}


export default function Channel() {
  const ref = useRef<HTMLDivElement | null>(null)

  const [messages, setMessages] = React.useState<Message[]>([MESSAGES[0]])
  useEffect(() => {
    for (let i = 1; i < MESSAGES.length; i++) {
      setTimeout(() => {
        setMessages(prev => [...prev, MESSAGES[i]])
      }, i * 2000)
    }
  }, [])

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }, [messages]);


  return (
    <div className="flex flex-col  px-6 py-6 scroll-auto overflow-auto"
         style={{height: 'calc(100vh - 64px)'}}
    >
      {
        messages.map((m, index) => {
          const showAuthor = m.author !== 'user' && index > 0 && m.author !== MESSAGES[index - 1]?.author;
          const author = showAuthor ? TEAM.find(u => u.name === m.author) : undefined;
          return (
            <MessageRow key={index} message={m} author={author}/>
          )
        })
      }

      <div ref={ref} className="h-0.5 w-full"/>
    </div>
  )
}
