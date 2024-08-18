import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Channel from "@/components/channel/channel";

export default function  WorkshopPage() {
  return (
    <Tabs defaultValue="channel" asChild>
      <main className="flex min-h-screen max-h-screen flex-col ">
        <header className="bg-secondary w-full px-8">
          <div className="h-8"/>
          <TabsList>
            <TabsTrigger value="channel">Channel</TabsTrigger>
            <TabsTrigger value="knownledge">Knowledge</TabsTrigger>
            <TabsTrigger value="memory">Memory</TabsTrigger>
          </TabsList>
        </header>

        <TabsContent value="channel">
          <Channel />
        </TabsContent>
        <TabsContent value="knownledge">Change your password here.</TabsContent>

      </main>
    </Tabs>


)
}
