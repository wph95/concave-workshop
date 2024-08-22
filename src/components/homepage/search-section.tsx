import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import Terminal from "@/components/homepage/terminal";

export const SearchSection = () => {
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
          <Input value="Code related to `EncodedFile`" className=" pl-8"/>
        </div>

        <div>
          <Terminal/>

        </div>

      </div>

    </section>
  )
}
