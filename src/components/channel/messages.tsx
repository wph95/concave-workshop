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
      {title: "", content: "Thinking context"},
      {title: "",
        content: <>use tool:<span
          className="text-orange-500 font-semibold pl-2 font-mono">@concave/symbol_searcher.get_symbol_tokens</span></>
      },
      {title: "", content: "Choose top 10 keywords"},
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
      {title: "", content: "Think context"},
      {title: "",
        content: <>use tool:<span
          className="text-orange-500 font-semibold pl-2 font-mono">@concave/full_search.search</span></>
      },
      {title: "", content: "Get files containing keywords, group by keywords"},
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
      {title: "Searching Details", content: <>search relative symbols from <TiDBIcon/> TiDB Cloud</>},
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
  {
    author: 'Peter',
    content: "I will ask the team to submit a PR to fix this.",
  },
  {
    author: 'Bob',
    content: "Thx Peter! Let me create a patch for this issue.",

  },
  //     def __getattr__(self, name):
  //         return getattr(object.__getattribute__(self, "buffer"), name)
  {
    author: 'Bob',
    content: "I have submitted a PR to fix this issue.",
    attachments: [{
      type: "patch",
      patch: {
        offset: 454,
        lines: [456, 457],
        diff: [
          "def __getattr__(self, name):",
          '    if name == "mode":',
          '        return "r"',
          "    return getattr(object.__getattribute__(self, 'buffer'), name)",

        ].join("\n"),

      }
    }]
  },
  {
    author: 'Peter',
    content: "I reviewed the PR and merged it. The issue is fixed now.",
  }
  ,
  {
    author: 'Peter',
    content: "@YOU, could you double check the fix?",
  }
]


export const TIDB_MESSAGES: Message[] = [
  {
    author: 'user',
    content: 'We need resolve this. https://github.com/pingcap/tidb-vector-python/issues/58',
    attachments: [{
      type: "url",
      url: "https://github.com/pingcap/tidb-vector-python/issues/58",
      og_title: "[Crash]  use  TiDB Vector Store in LlamaIndex, tidb_vector throw exception · Issue #58 · pingcap/tidb-vector-python",
      og_description: "Exception ignored in: &lt;function TiDBVectorClient.__del__ at 0x1693e63e0&gt; Traceback (most recent call last): File &quot;/Users/justwph/Library/Caches/pypoetry/virtualenvs/concave-KQBUMHDg-py3.11/lib/pyth...",
      og_image: "https://opengraph.githubassets.com/e769241ba5bb4d2ae1eb2cf0d6da4e2b428da2efea421dac046f270e1e0c943f/pingcap/tidb-vector-python/issues/58"
    }]
  }, {
    author: 'Bob',
    content: 'Hi! I\'m looking into it.',
    hints: [
      {
        title: 'Identify',
        content: <>
          Found a <span className="font-semibold text-blue-800">pingcap/tidb-vector-python</span> github issue.
        </>
      },
      {
        title: 'Searching',
        content: <>
          Searching <span className="font-semibold text-blue-800">pingcap/tidb-vector-python</span>
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
    content: 'The issue An exception occurred in the __del__ method of the TiDBVectorClient class. ',
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
        "- The issue suggests that an exception occurs in the __del__ method of TiDBVectorClient. The error message indicates that a 'NoneType' object lacks a 'close' attribute.",
        "- The exception stack trace specifies that the issue arises in the tidb_vector file, in the __del__ method.",
        "- The user logs suggest they're checking whether self._connection is not None and self._connection.is_active. Their expectation is for self._connection to be an active SQLAlchemy Connection object.",
        "- Upon reviewing the code, the __del__ method attempts to close self._connection. However, self._connection sets self._engine as a SQLAlchemy Engine, not Connection. This seems to have led to confusion or a misunderstanding.",
      ].join('\n')
    }]
  },
  {
    author: 'Peter',
    content: "I will ask the team to submit a PR to fix this.",
  },
  {
    author: 'Bob',
    content: "Thx Peter! Let me create a patch for this issue.",

  },
  {
    author: 'Bob',
    content: "I have submitted a PR to fix this issue.",
    attachments: [{
      type: "patch",
      patch: {
        offset: 173,
        lines: [175, 177, 176],
        diff: [
          "def __del__(self) -> None:",
          "    if self._bind is not None:",
          "        if hasattr(self._bind, 'close') and callable(getattr(self._bind, 'close', None)):",
          "            self._bind.close()",
        ].join("\n"),

      }
    }]
  },
  {
    author: 'Peter',
    content: "I reviewed the PR and merged it. The issue is fixed now.",
  }
]
