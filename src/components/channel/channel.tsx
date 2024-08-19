"use client"
import React from "react";
import TiDBIcon from "@/components/channel/tidb_icon";
import {AuthorLine, LeftMessage, Message, RightMessage} from "@/components/channel/Messages/widgets";
import {Author, TEAM} from "@/components/avatar-group/avatar-group";
import {MESSAGES} from "@/components/channel/messages";





const MessageRow = ({message, author}: {
  message: Message,
  author?: Author
}) => {
  const m = message;
  const auth_line = author ? <AuthorLine author={author.name} avatar={author.avatar}/> : null;
  if (m.author === 'user') {
    return (
      <>
        {auth_line}
        <RightMessage message={message}/>
      </>

    )
  }

  return (
    <>
      {auth_line}
      <LeftMessage message={message}/>
    </>

  )
}


export default function Channel() {
  return (
    <div className="flex flex-col justify-between  px-6 py-6 scroll-auto">
      {
        MESSAGES.map((m, index) => {
          const showAuthor = m.author !== 'user' && index > 0 && m.author !== MESSAGES[index - 1]?.author;
          console.log(index, m.author, MESSAGES[index - 1]?.author, showAuthor)
          const author = showAuthor ? TEAM.find(u => u.name === m.author) : undefined;
          return (
            <MessageRow key={index} message={m} author={author}/>
          )
        })
      }
    </div>
  )
}
