"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import React from "react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const SemanticSearchResult = `connecting to tidb serverless snippet/pytest-dev/pytest/4787fd...

q: Code related to 'EncodedFile'
-----------top 6--------------
   1  | 0.744 _pytest.capture.EncodedFile
   2  | 0.737 _pytest.capture.DontReadFromInput.encoding
   3  | 0.737 _pytest.capture.EncodedFile.__slots__
   4  | 0.733 _pytest.capture.EncodedFile.name
   5  | 0.723 _pytest.pytester.Testdir._makefile
   6  | 0.716 _pytest.capture.EncodedFile.mode
------------------------------
model: voyage-code-2, _dimension: 1536

`

const SYMBOLS_SEARCH_RESULT = `connecting to tidb serverless symbols/pytest-dev/pytest/4787fd...

_pytest.capture.EncodedFile#
kind: CLASS

Defined: /src/_pytest/capture.py#425
---------------------------------------------------------
425 | class EncodedFile(object):
426 |     errors = "strict"  # possibly needed by py3 code (issue555)
427 |
428 |     def __init__(self, buffer, encoding):
429 |         self.buffer = buffer
             ......

References:
- src/_pytest/capture.py#422 @_pytest.capture.safe_text_dupfile()
---------------------------------------------------------
420 |            mode += "b"
421 |        f = os.fdopen(newfd, mode, 0)  # no buffering
422 |    return EncodedFile(f, encoding or default_encoding)
`
const change_results = `
Latest 5 changes:
- 698c4e7, capture: track current state in _state attributes, 2019-05-14 14:54:03
- 08ded29, capture: do not set logging.raiseExceptions = False, 2019-04-10 14:07:29
- 951213e, Use new suspend/resume in global_and_fixture_disabled, 2019-03-17 17:27:25
- d406786, pdb: handle capturing with fixtures only, 2019-03-18 17:27:59 
- da81c1e, Merge pull request #4950 from blueyed/capture, 2019-03-19 17:12:22 


`

const highlightKeywords = (text: string, only_commands = false) => {
  const keywords = only_commands?{
    commands: ['concave'],
    files: []
  } :{
    commands: ['concave'],
    files: ['EncodedFile'],
  }

  let highlightedText = text
  Object.entries(keywords).forEach(([type, words]) => {
    words.forEach(word => {
      const regex = new RegExp(`\\b${word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/\\\*/g, '.*')}\\b`, 'g')
      highlightedText = highlightedText.replace(regex, `<span class="highlight-${type}">$&</span>`)
    })
  })

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />
}

export default function Terminal() {
  const [expanded, setExpanded] = React.useState(false)

  const terminalHistory = [
    { command: "key_search 'EncodedFile'", output: "/src/_pytest/capture.py\n" +
        "  401 | class EncodedFile(io.TextIOWrapper):\n" +
        "  530 |                     tmpfile = EncodedFile(\n" +
        "\n" +
        "/testing/test_capture.py\n" +
        " 1479 |     ef = capture.EncodedFile(tmpfile, encoding=\"utf-8\")" },
    {
      command: "semantic_search 'EncodedFile'",
      output: SemanticSearchResult
    },

    {
      command: "symbol_search 'EncodedFile'",
      output: SYMBOLS_SEARCH_RESULT
    },

    {
      command: "history_search 'EncodedFile'",
      output: change_results
    },

  ]



  return (
    <div className="w-full mx-auto rounded-lg shadow-lg overflow-hidden">
      <div className="bg-gray-700 p-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="flex-grow text-center text-sm text-gray-400 font-mono">
          concave-workspace@pytest#4787fd
        </div>
      </div>
      <ScrollArea className={cn("p-4 bg-gray-900", expanded? "h-full": "h-[400px]")}>
        {terminalHistory.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center">
              <span className="text-green-400 font-mono mr-2">$</span>
              <span className="text-white font-mono font-semibold">
                <span className="highlight-commands">
                  concave{" "}
                </span>
                {item.command}
              </span>
            </div>
            <div className="text-gray-300 font-mono ml-4 mt-1 whitespace-pre-wrap">
              {highlightKeywords(item.output)}
            </div>
          </div>
        ))}
      </ScrollArea>
      <Button
        size="sm"
        variant="outline"
        className="absolute transform -translate-x-1/2 -translate-y-1/2 -bottom-[24px] left-1/2 shadow-xl"
       onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Collapse" : "Expand"}
      </Button>
    </div>
  )
}
