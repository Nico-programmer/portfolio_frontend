import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectLinksProps {
  githubUrl?: string | null
  demoUrl?: string | null
}

const ProjectLinks = ({
  githubUrl,
  demoUrl,
}: ProjectLinksProps) => {
  if (!githubUrl && !demoUrl) return null

  return (
    <div className="flex flex-wrap gap-4 pt-2">
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-5
            py-3
            text-white
            transition-all
            duration-300
            hover:border-indigo-500
            hover:bg-slate-700
          "
        >
          <FaGithub size={18} />
          <span>Ver código</span>
        </a>
      )}

      {demoUrl && (
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-5
            py-3
            font-medium
            text-white
            transition-all
            duration-300
            hover:bg-indigo-500
          "
        >
          <ExternalLink size={18} />
          <span>Ver Demo</span>
        </a>
      )}
    </div>
  )
}

export default ProjectLinks