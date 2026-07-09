import type { ReactNode } from "react"

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode
  className?: string
  as?: "div" | "li" | "span"
}) {
  const Tag = as
  return <Tag className={className}>{children}</Tag>
}
