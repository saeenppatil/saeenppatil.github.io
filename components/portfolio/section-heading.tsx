export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="max-w-3xl pb-10 md:pb-12">
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-balance text-foreground md:text-[2.35rem]">
        {title}
      </h2>
    </div>
  )
}
