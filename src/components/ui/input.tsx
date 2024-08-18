import * as React from "react"

import {cn} from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({className, type, ...props}, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "focus-visible:border-slate-700 border-slate-400 flex h-12 w-full rounded-md border-2 border-input bg-background px-3 py-2 text placeholder:text-slate-400  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export {Input}
