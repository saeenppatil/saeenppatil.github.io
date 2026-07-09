export function TypedWordCycle({
  words,
  className,
}: {
  words: string[]
  className?: string
}) {
  return <span className={className}>{words[0] ?? ""}</span>
}
