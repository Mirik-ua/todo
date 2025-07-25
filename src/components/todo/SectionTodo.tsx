import { SectionType } from '@/types/todo'
import { BlankTodo } from './BlankTodo'

export function SectionTodo({ section }: { section: SectionType }) {
  return (
    <div>
      <div className="border-b-1 border-gray-200 pb-4">
        <h3 className={'font-bold break-words'}>{section.name}</h3>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        {section.todos.length
          ? section.todos.map((i) => {
              return (
                <div
                  key={i.id}
                  className="rounded-lg px-4 py-3 bg-muted text-foreground border border-muted-foreground/10 transition-colors hover:bg-muted/80"
                >
                  {i.name}
                </div>
              )
            })
          : null}
        <BlankTodo sectionId={section.id} sectionName={section.name} />
      </div>
    </div>
  )
}
