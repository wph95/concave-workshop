"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Channel from "@/components/channel/channel";
import {useAtom} from "jotai";
import {ChannelMode} from "@/components/channel/model";

export default function  WorkshopPage() {
  const [mode, setMode] = useAtom(ChannelMode)
  return (
    <Tabs defaultValue="channel" asChild>
      <main className="flex min-h-screen max-h-screen flex-col ">
        <header className="bg-secondary w-full px-8">
          <div className="h-12 flex items-center justify-between">
            <div className="text-slate-500">
              Playbook / PyTest-174
            </div>

            <div className="border  border-slate-400 grid grid-cols-2 p-1 px-2 bg-secondary">
              <button
                onClick={() => setMode('chat')}
                data-state={mode === 'chat' ? 'active' : 'inactive'}
                className="px-4 text-slate-700 hover:bg-slate-400/30 data-[state=active]:bg-white data-[state=active]:text-black">
                Chat
              </button>

              <button
                onClick={() => setMode('pro')}
                data-state={mode === 'pro' ? 'active' : 'inactive'}
                className="px-4 text-slate-700 hover:bg-slate-400/30 data-[state=active]:bg-white data-[state=active]:text-black">
                Pro
              </button>

            </div>


            <div className="flex items-center gap-1">
              Last 4 minutes ago
              <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
            </div>
          </div>
          {/*<TabsList>*/}
          {/*  <TabsTrigger value="channel">Channel</TabsTrigger>*/}
          {/*  <TabsTrigger value="knownledge">Knowledge</TabsTrigger>*/}
          {/*  <TabsTrigger value="memory">Memory</TabsTrigger>*/}
          {/*</TabsList>*/}
        </header>

        <TabsContent value="channel">
          <Channel />
        </TabsContent>
        <TabsContent value="knownledge">Change your password here.</TabsContent>

      </main>
    </Tabs>


)
}
