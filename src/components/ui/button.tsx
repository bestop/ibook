import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#58cc02] text-white rounded-2xl font-bold shadow-[0_4px_0_0_#58a700] hover:bg-[#6fe113] active:translate-y-[4px] active:shadow-[0_0_0_0_#58a700]",
        destructive:
          "bg-[#ff4b4b] text-white rounded-2xl font-bold shadow-[0_4px_0_0_#d63131] hover:bg-[#ff6060] active:translate-y-[4px] active:shadow-[0_0_0_0_#d63131] focus-visible:ring-[#ff4b4b]/20",
        outline:
          "border-2 border-[#e5e5e5] bg-white text-[#1cb0f6] rounded-2xl font-bold shadow-[0_4px_0_0_#e5e5e5] hover:bg-[#f7f7f7] hover:border-[#c9e9ff] active:translate-y-[4px] active:shadow-[0_0_0_0_#e5e5e5]",
        secondary:
          "bg-[#f7f7f7] text-[#3c3c3c] rounded-2xl font-bold shadow-[0_4px_0_0_#e5e5e5] hover:bg-[#f2f2f2] active:translate-y-[4px] active:shadow-[0_0_0_0_#e5e5e5]",
        ghost:
          "hover:bg-[#f7f7f7] hover:text-[#3c3c3c] rounded-2xl",
        link: "text-[#1cb0f6] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
