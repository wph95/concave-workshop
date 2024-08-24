import CodeBlock from "@/components/ui/code-block";

export interface PatchAttachment {
  type: "patch",
  patch: {
    offset: number
    lines: number[]
    diff: string,
  }
}

export const PatchAttachment: React.FC<PatchAttachment> = ({patch}) => {

  return (
    <div className="border ">
      <div className="px-2 font-semibold bg-slate-300">
        src/_pytest/capture.py
      </div>
      <div className="p-4 py-1">
        <CodeBlock
          lines={patch.lines}
          offset={patch.offset}
          code={patch.diff}
          language="py"/>

      </div>


    </div>
  )

}
