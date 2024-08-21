"use client"
import React from "react";
import {Input} from "@/components/ui/input";
import AvatarGroup from "@/components/avatar-group/avatar-group";
import {Label} from "@/components/ui/label";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex min-h-screen max-h-screen p-12 flex-col items-center justify-center">
      <div className="h-fit gap-4 flex flex-col w-full max-w-[640px]">
        <div className="font-semibold text-2xl">Concave</div>


        <div className="relative">
          <Label>Your Teams:</Label>
          <AvatarGroup/>
          <div className="font-mono absolute right-[180px]  italic text-yellow-600 top-[35px]">
            {"<- see your teammate!"}
          </div>
        </div>


        <div className="flex flex-col relative">
          <Label className="mb-1">In process:</Label>
          <div
            onClick={() => {
              router.push("/playbook/pytest_174")
            }}

            className="cursor-pointer flex items-center gap-3 py-1 px-2 bg-secondary w-fit rounded-xl relative">
            <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
            Prepare PR to fix pytest/pytest#5257

          </div>

          <div className="font-mono absolute right-[0px]  italic text-yellow-600 top-[20px]">
            {"<- click to see demo playbook!"}
          </div>

        </div>


        <div>
          <Input
            className="bg-foreground focus-visible:border-background text-background"
            placeholder="What's problem need to resolve?"/>
        </div>

        <div className="h-32"/>
      </div>


    </main>
  );
}
