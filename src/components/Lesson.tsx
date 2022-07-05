import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson({ title, availableAt, type, slug }: LessonProps) {
  const { slug: currentSlug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = currentSlug === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group px-4 lg:px-0 w-full">
      <span className="text-gray-300">
        {availableDateFormatted}
      </span>

      <div className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-indigo-800 ${isActiveLesson ? 'bg-indigo-800' : ''}`}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={`text-sm font-medium flex items-center gap-2 ${isActiveLesson ? 'text-gray-100' : 'text-indigo-600'}`}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-indigo-600 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className={`text-xs rounded px-2 py-[0.125rem] text-gray-100 border font-bold ${isActiveLesson ? ' border-indigo-200' : 'border-indigo-700'}`}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={`mt-5 block  ${isActiveLesson ? 'text-white' : 'text-gray-200'}`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}