"use client"
import {Button} from "@/components/ui/button";
import {Github, Search} from "lucide-react";
import {useRouter} from "next/navigation";
import {Input} from "@/components/ui/input";
import TiDBIcon from "@/components/channel/tidb_icon";
import {SearchSection} from "@/components/homepage/search-section";

const Bold = ({children}: { children: React.ReactNode }) => {
  return <span className="font-semibold">{children}</span>
}
const BU = ({children}: { children: React.ReactNode }) => {
  return <span className=" font-semibold underline underline-offset-4">{children}</span>
}
export default function Home() {
  const router = useRouter()

  return (<main className="w-full h-full font-mono">
    <section className=" bg-bg relative h-[640px] w-full flex items-center justify-center p-4 md:p-24"

    >
      <div
        className="z-10 flex flex-col max-w-[960px] relative border-2 border-white h-[400px] mt-[80px] w-full dot_shadow bg-bg">
        <div className="z-20 absolute text-3xl text-white font-mono px-8 bg-bg"
             style={{
               top: "-20px"
             }}
        >
          {"$_"} Concave
        </div>


        <div className="flex absolute -top-5 right-4 bg-bg">
          <a
            href={"https://github.com/concave-ai"}
            target="_blank"
            className="z-20 cursor-pointer flex items-center gap-2 border border-white px-4 text-white py-1.5 rounded-xl text-md">
            <Github size={18}/>
            Github
          </a>
        </div>

        <div className="flex-grow flex justify-end items-center p-6 md:p-12 bg-bg z-10">
          <div className="text-white text-3xl md:text-4xl text-right">
            <p className="mb-1">Open Source, Trusted</p>
            <p>Autonomous Software Engineering</p>
          </div>
        </div>


        <div className="z-10 flex gap-4 absolute bottom-8 right-16">
          <a
            href={"https://github.com/concave-ai"}
            target="_blank">
            <Button className="bg-bg border-white border">Read Doc</Button>
          </a>
          <a
            href={"/playbook"}
            target="_blank">
            <Button className="bg-orange-500  hover:bg-orange-600 border border-white">
              Playground
            </Button>
          </a>
        </div>

      </div>

    </section>
    <Goal/>

    <VIDE_SECTION/>
    <SearchSection/>
    <Fleet/>
  </main>)
}
//  █████████▓▒
const bench = `
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                                                                                   ║        
║  Concave Fleet GPT4o | 78% | 89% | ███████████████████████████████████████▒▒▒▒▒   ║
║                                                                                   ║
║   SWEAgent Calude3   | 21% | 42% | ██████████▒▒▒▒▒▒▒▒▒▒▒                          ║
║   SWEAgent Calude3.5 | 42% | 47% | █████████████████████▒▒▒                       ║
║   SWEAgent GPT4o     | 36% | 64% | ██████████████████▒▒▒▒▒▒▒▒▒▒▒▒▒▒               ║
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

        <div className="text italic  underline underline-offset-4">
          World First IDE for LLMs
        </div>
        <div className="mt-6 space-y-1">
          <div>
            - Provider the most powerful and efficient tools for LLMs
          </div>

          <div className="pl-8">
            - <span className="font-semibold underline underline-offset-4">Hybrid Code Search.</span> help LLMs to
            understand the codebase.
          </div>
          <div className="pl-16 font-semibold ">
            - Full-Text Search. (Local)
          </div>
          <div className="pl-24 text-sm">
            - Source Code
          </div>
          <div className="pl-24 text-sm">
            - Git Info. Commit, Issues, and PRs ... [WIP]
          </div>
          <div className="pl-16 font-semibold flex gap-1 items-center	">
            - Key Search. (<TiDBIcon/> TiDB Serverless)
          </div>
          <div className="pl-24">
            - Symbols [Code Intelligence]. methods, class, variables...

          </div>
          <div className="pl-16 font-semibold flex items-center	 gap-1">
            - Vector Search. (<TiDBIcon/> TiDB Serverless)
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
const Goal = () => {
  return (
    <section className="relative h-full w-full justify-center flex p-4 md:p-8 bg-secondary">
      <div className="flex flex-col max-w-[960px] relative  py-4  w-full gap-3">
        <div className="text-2xl ">
          Goal for concave
        </div>
        <div>
          We are creating <BU>Open-Source</BU>, <BU>Trusted</BU>, and <BU>Fully  Autonomous Software Engineering</BU>.
          <br/>
          We design and develop Concave for existing LLMs to lower the barrier to participating in autonomous software
          engineering.
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
          <Button className="bg-orange-500  hover:bg-orange-600 border border-slate-700 w-fit">Read Full
            Report</Button>
        </a>

      </div>
    </section>
  )
}
