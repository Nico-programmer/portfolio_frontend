import type { Biography } from "../../../types/portfolio";
import { getMediaUrl } from "../../../utils/media";

interface HeroImageProps {
  biography: Biography;
}

const HeroImage = ({ biography }: HeroImageProps) => {
  if (!biography.profile_picture) {
    return null;
  }

  return (
    <div className="relative flex justify-center">
      <div className="absolute h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl"/>

      <div className="relative overflow-hidden rounded-full border border-slate-700 bg-slate-900 p-2 shadow-2xl transition-transform duration-500 hover:scale-105">
        <img src={getMediaUrl(biography.profile_picture)} alt={biography.full_name} className="h-72 w-72 rounded-full object-cover lg:h-96 lg:w-96"/>
      </div>

    </div>
  )
}

export default HeroImage