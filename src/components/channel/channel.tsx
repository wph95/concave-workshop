"use client"
import React from "react";
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
  return (
    <div className="flex flex-col justify-between  px-6 py-6 scroll-auto overflow-auto"
      style={{height: 'calc(100vh - 48px)'}}
    >
      {
        MESSAGES.map((m, index) => {
          const showAuthor = m.author !== 'user' && index > 0 && m.author !== MESSAGES[index - 1]?.author;
          const author = showAuthor ? TEAM.find(u => u.name === m.author) : undefined;
          return (
            <MessageRow key={index} message={m} author={author}/>
          )
        })
      }
    </div>
  )
}
