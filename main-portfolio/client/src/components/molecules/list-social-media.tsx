import Image from "next/image";
import Link from "next/link";

interface SocialMediaListProps {
  dataMediaSocial: GenType.Icon[];
}

export default function SocialMediaList({ dataMediaSocial }: SocialMediaListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6 my-4 md:my-8">
      {dataMediaSocial.map((sosmed) => (
        <Link 
          href={sosmed.link as string} 
          target="_blank" 
          key={sosmed.id} 
          aria-label={sosmed.name} 
          className="group relative w-14 h-14 md:w-16 md:h-16"
        >
          <Image
            alt={sosmed.alt}
            width={64}
            height={64}
            src={sosmed.src}
            className="contrast-50 group-hover:contrast-100 group-hover:scale-110 transition-transform duration-200"
          />
        </Link>
      ))}
    </div>
  );
}
