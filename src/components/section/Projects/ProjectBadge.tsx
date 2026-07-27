interface ProjectBadgeProps {
  status: "completed" | "in_progress" | "archived"
  featured: boolean
}

const STATUS = {
  completed: {
    label: "Completado",
    className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  },
  in_progress: {
    label: "En progreso",
    className: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
  archived: {
    label: "Archivado",
    className: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  },
}

const ProjectBadge = ({ status, featured }: ProjectBadgeProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span
        className={`
          rounded-full
          border
          px-3
          py-1
          text-xs
          font-medium
          ${STATUS[status].className}
        `}
      >
        {STATUS[status].label}
      </span>

      {featured && (
        <span
          className="
            rounded-full
            border
            border-indigo-500/30
            bg-indigo-500/20
            px-3
            py-1
            text-xs
            font-medium
            text-indigo-300
          "
        >
          ⭐ Destacado
        </span>
      )}
    </div>
  )
}

export default ProjectBadge