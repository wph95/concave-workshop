import TiDBIcon from "@/components/channel/tidb_icon";
import React from "react";
import {Message} from "@/components/channel/Messages/widgets";
import {ROOT_SYMBOLS} from "@/components/channel/data";

export const MESSAGES: Message[] = [
  {
    author: 'user',
    content: 'Hi, I need fix it. https://github.com/pytest-dev/pytest/issues/5257',
    attachments: [{
      type: "url",
      url: "https://github.com/pytest-dev/pytest/issues/5257",
      og_title: "_pytest.capture.EncodedFile mode should not include `b` (binary) · Issue #5257 · pytest-dev/pytest",
      og_description: "a detailed description of the bug or suggestion Exception when youtube-dl logs to pytest captured output. Youtube-dl looks for b in out.mode to decide whether to writes bytes or str. _pytest.captur...",
      og_image: "https://opengraph.githubassets.com/707dcb9ef47e568159c9f298d47b9e70cc8eb8091450a3231fafcd7b74c88e33/pytest-dev/pytest/issues/5257"
    }]
  }, {
    author: 'Bob',
    content: 'Hi! I\'m looking into it.',
    hints: [
      {
        title: 'Identify',
        content: <>
          Found a <span className="font-semibold text-blue-800">pytest/pytest</span> github issue.
        </>
      },
      {
        title: 'Searching',
        content: <>
          Searching <span className="font-semibold text-blue-800">pytest/pytest</span>
        </>
      },
      {
        title: 'Searching Details',
        content: <>
          load knowledge from <TiDBIcon/> TiDB Cloud
        </>
      },

    ]
  },
  {
    author: 'Bob',
    content: 'The issue arises when youtube-dl logs to pytest. _pytest.capture.EncodedFile incorrectly reports rb+ mode, causing an exception when write() is passed bytes.',
  },
  {
    author: 'Bob',
    content: <>{"I will ask the team to submit a PR to fix this.\n"}Assign to <span
      className="text-blue-800 font-semibold underline underline-offset-4">@Peter</span>, <span
      className="text-blue-800 font-semibold underline underline-offset-4">@Tom</span></>,
  },
  {
    author: 'Peter',
    content: '👀',
  },
  {
    author: 'Tom',
    content: '👀',
  },
  {
    author: 'Peter',
    content: [
      "I reviewed the issue and provided a preliminary analysis of the user-reported problem.",
      "Let's figure out the root cause and fix it.",
    ].join('\n'),
    attachments: [{
      type: "scratch_pad",
      title: "Problem Description",
      content: [
        "Problem Description:",
        "-   Exception occurs when youtube-dl logs to pytest captured output",
        "-   The issue involves _pytest.capture.EncodedFile mode incorrectly including 'b' (binary)",
        "-   youtube-dl checks for 'b' in out.mode to decide whether to write bytes or str",
        "-   _pytest.capture.EncodedFile incorrectly advertises 'rb+' mode",
        "-   ITs write() method raises an exception when passed bytes",
      ].join('\n')
    }]
  },
  {
    author: 'Tom',
    content: 'I Reviewed your analysis, Peter. I listed some keywords to help us find the root cause.',
    hints: [
      {title:"", content: "Thinking context"},
      {title:"", content: <>use tool:<span className="text-orange-500 font-semibold pl-2 font-mono">@concave/symbol_searcher.get_symbol_tokens</span></>},
      {title:"", content: "Choose top 10 keywords"},
    ],
    attachments: [{
      type: "scratch_pad",
      title: "Keywords [10]",
      content: [
        "Keywords:",
        "[\"_pytest.capture.EncodedFile\",\"write\",\"TypeError\",\"capture\",\"pytest\",\"pytest_capture\",\"SysCapture\",\"capture_fixtures\",\"FDCapture\"]"
      ].join('\n')
    }]
  },
  {
    author: 'Peter',
    content: "Looks good. I'll use these keywords to search files, and choose the files that are most relevant to the issue.",
    hints: [
      {title:"", content: "Think context"},
      {title:"", content: <>use tool:<span className="text-orange-500 font-semibold pl-2 font-mono">@concave/full_search.search</span></>},
      {title:"", content: "Get files containing keywords, group by keywords"},
    ],
    attachments: [{
      type: "scratch_pad",
      title: "Search Results",
      content: [
        "SysCapture: [2]",
        " - src/_pytest/capture.py",
        " - src/_pytest/pytester.py",
        "FDCapture: [1]",
        " - src/_pytest/capture.py",
        "capture_fixtures: [1]",
        " - src/_pytest/capture.py",
        "..."
      ].join('\n')
    }]
  },
  {
    author: 'Peter',
    content: "I'm analyzing the files to identify related symbols.",
    hints: [
      {title: "Searching Details", content: "choose top 10 files"},
      {title: "Searching Details", content: "evaluate files, choose relevant symbols"},
      {title: "Searching Details", content: "search relative symbols from Source Files"},
      {title: "Searching Details", content: <>search relative symbols from  <TiDBIcon/> TiDB Cloud</>},
      {title: "Searching Details", content: "evaluate symbols, choose final results"},
    ]
  },
  {
    author: 'Peter',
    content: "I found some symbols that i think are causing the issue.",
    attachments: [{
      type: "symbols",
      symbols: ROOT_SYMBOLS,
    }]
  },
]
