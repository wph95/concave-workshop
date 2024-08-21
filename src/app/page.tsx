"use client"
import {Button} from "@/components/ui/button";
import {Github, Search} from "lucide-react";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";

export default function Home() {
  const router = useRouter()

  return (<main className="w-full h-full font-mono">
    <section className="bg-bg relative h-[640px] w-full flex items-center justify-center p-4 md:p-24"

    >
      <div className="flex flex-col max-w-[960px] relative border-2 border-white h-[400px] mt-[80px] w-full">
        <div className="absolute text-3xl text-white font-mono px-8 bg-bg"
             style={{
               top: "-20px"
             }}
        >
          {">_:"} Concave
        </div>


        <div className="flex absolute -top-5 right-4 bg-bg">
          <a
            href={"https://github.com/concave-ai"}
            target="_blank"
            className="cursor-pointer flex items-center gap-2 border border-white px-4 text-white py-1.5 rounded-xl text-md">
            <Github size={18}/>
            Github
          </a>
        </div>

        <div className="flex-grow flex justify-end items-center p-6 md:p-12">
          <div className="text-white text-3xl md:text-4xl text-right">
            <p className="mb-1">Open Source, Trusted</p>
            <p>Autonomous Software Engineering</p>
          </div>
        </div>


        <div className="flex gap-4 absolute bottom-8 right-16">
          <a
            href={"https://github.com/concave-ai"}
            target="_blank">
            <Button className="bg-bg border-white border">Read Doc</Button>
          </a>
          <Button className="bg-orange-500  hover:bg-orange-600 border border-white"
                  onClick={() => router.push("/playground")}

          >Playground</Button>
        </div>

      </div>

    </section>

    <VIDE_SECTION/>
    <CodeSearch/>
    <Fleet/>
  </main>)
}
//  █████████▓▒
const bench = `
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║        
║  Concave Fleet GPT4o | 78% | 89% | ███████████████████████████████████████▒▒▒▒▒   ║
║                                                                                   ║
║    SWEAgent Calude3  | 21% | 42% | ██████████▒▒▒▒▒▒▒▒▒▒▒                          ║
║  SWEAgent Calude3.5  | 42% | 47% | █████████████████████▒▒▒                       ║
║       SWEAgent GPT4o | 36% | 64% | ██████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒               ║
║                                                                                   ║
║   Identify Accuracy  | File | Symbol |                                            ║
║                                                                                   ║
║                                                                                   ║
║  SWE_Bench Verified, filter:repo=PyTest                                           ║ 
╚═══════════════════════════════════════════════════════════════════════════════════╝`


const VIDE_SECTION = () => {
  return (
    <section className="relative  w-full flex  justify-center p-4 md:p-8 ">

      <div className="flex flex-col   max-w-[960px] relative border-2 border-white py-16  w-full">
        <div className="text-3xl mb-1">
          Concave L·IDE
        </div>

        <div className="text font-semibold underline underline-offset-4">
          World First IDE for LLMs
        </div>
        <div className="mt-6 space-y-1">
          <div>
            - Provider the most powerful and efficient tools for LLMs
          </div>

          <div className="pl-8">
            - <span className="font-semibold underline underline-offset-4">Hybrid Code Search.</span> help LLMs to understand the codebase.
          </div>
          <div className="pl-16 font-semibold underline underline-offset-4">
            - Full-Text Search
          </div>
          <div className="pl-24 text-sm">
            - Source Code
          </div>
          <div className="pl-24 text-sm">
            - Git Info. Commit, Issues, and PRs ... [WIP]
          </div>
          <div className="pl-16 font-semibold  underline underline-offset-4">
            - Key Search. local or TiDB Serverless
          </div>
          <div className="pl-24">
            - Symbols [Code Intelligence]. methods, class, variables...

          </div>
          <div className="pl-16 font-semibold  underline underline-offset-4">
            - Vector Search. TiDB Serverless
          </div>
          <div className="pl-24 text-sm">
            - Symbols Code snippet
          </div>
          <div className="pl-24 text-sm">
            - Documents
          </div>


          <div>
            - Provider the code workspace for LLMs
          </div>
        </div>

      </div>
    </section>
  )
}

const CodeSearch = () => {
  return (
    <section className="relative h-full w-full justify-center flex p-4 md:p-8 bg-secondary">
      <div className="flex flex-col max-w-[960px] relative  py-4  w-full gap-3">
        <div className="text-2xl font-semibold">
          L·IDE Hybrid Code Search
        </div>
        <div>
          Design for helping LLMs to understand the codebase.
        </div>
        <div className="relative flex items-center max-w-2xl ">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-slate-400"/>
          <Input value="Code related to `EncodedFile`" className=" pl-8" />
        </div>
      </div>

    </section>
  )
}

const Fleet = () => {
  return (
    <section className="relative h-[640px] w-full flex  justify-center p-4 md:p-8 border-b border-slate-700">

      <div className="flex flex-col   max-w-[960px] relative border-2 border-white py-8  w-full">
        <div className="text-2xl mb-1">
          Concave Fleet
        </div>
        <div>
          Experimental, end-to-end issue auto-resolution solution.
          Based on Concave LIDE + TiDB Serverless.
          <br/>
          Significantly outperforms existing open-source solutions.
        </div>


        <div className="w-full overflow-x-auto mb-2">
         <pre className="mt-4">
          {bench}
        </pre>


        </div>

        <a
          href={"https://github.com/concave-ai/fleet/blob/main/docs/fleet_report.md"}
          target="_blank"
        >
          <Button className="bg-orange-500  hover:bg-orange-600 border border-slate-700 w-fit">Read Detail Report</Button>
        </a>

      </div>
    </section>
  )
}
