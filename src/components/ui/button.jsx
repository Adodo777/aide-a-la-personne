import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg hover:from-primary/90 hover:to-primary/70",
        destructive:
          "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:from-red-700 hover:to-red-600",
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary/10 dark:hover:bg-primary/20",
        secondary:
          "bg-secondary text-secondary-foreground shadow-md hover:bg-secondary/90",
        ghost:
          "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-base",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-8 text-lg",
        icon: "h-11 w-11 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant, size, asChild = false, children, ...props }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Button, buttonVariants }
