import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="lg:w-[348px] bg-gray-700 p-4 xl:p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8 items-center">
        {data?.lessons.map(lesson => {
          return (
            <Lesson 
              key={lesson.id}
              title={lesson.title} 
              slug={lesson.slug} 
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType} 
            />
          )
        })}

      </div>
    </aside>
  )
}