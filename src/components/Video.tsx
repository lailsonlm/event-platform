import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";
interface VideoParams {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoParams) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    },
    fetchPolicy: 'no-cache'
  })

  if(!data || !data.lesson) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center">
         <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] px-4 aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-8 xl:gap-16 flex-col md:flex-row">
          <div className="flex-1">
            <h1 className="text-lg md:text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed text-justify sm:text-left">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img 
                  className="h-16 w-16 rounded-full border-2 border-orange-800"
                  src={data.lesson.teacher.avatarURL} 
                  alt="Avatar usuário Github" 
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-lg md:text-2xl block">{data.lesson.teacher.name}</strong>
                  <strong className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</strong>
                </div>
              </div>
            )}
          </div>

          <div className="flex w-full sm:w-fit flex-col sm:flex-row md:flex-col gap-4">
            <a href="" className="p-4 text-sm bg-orange-800 text-gray-900 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-orange-900 hover:text-white transition-colors">
              <DiscordLogo size={24} /> 
              Comunidade do Discord
            </a>

            <a href="" className="p-4 text-sm border-indigo-700 border text-indigo-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-indigo-700 hover:text-white transition-colors">
              <Lightning size={24} /> 
              Acesse o desafio
            </a>
          </div>
        </div>
        <div className="gap-8 max-w-[600px] lg:max-w-[1100px] w-full mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 mx-auto">
          <a href="" className="bg-gray-700 overflow-hidden rounded flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-orange-800 h-full p-4 md:p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-4 md:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="bg-gray-700 overflow-hidden rounded flex items-stretch gap-4 md:gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-orange-800 h-full p-4 md:p-6 flex items-center">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-lg md:text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
              Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-4 md:p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}