import { WritingCategoryEnums } from "@/@types/enums";

export const icons: GenType.Icon[] = [
  {
    id: "wr_creative-thinking",
    alt: "Creative Thinking",
    name: "Creative Thinking",
    src: "/images/Icons/wr_creative-thinking.png",
  },
  {
    id: "wr_critical-thinking",
    alt: "Critical Thinking",
    name: "Critical Thinking",
    src: "/images/Icons/wr_critical-thinking.png",
  },
  {
    id: "wr_editing",
    alt: "Editing",
    name: "Editing",
    src: "/images/Icons/wr_editing.png",
  },
  {
    id: "wr_grammar",
    alt: "Grammar",
    name: "Grammar",
    src: "/images/Icons/wr_grammar.png",
  },
  {
    id: "wr_research",
    alt: "Research",
    name: "Research",
    src: "/images/Icons/wr_research.png",
  },
  {
    id: "wr_seo",
    alt: "SEO",
    name: "SEO",
    src: "/images/Icons/wr_seo.png",
  },
];

export const certificates: GenType.CardImage[] = [
  {
    id: "wr-cmcn",
    desc: {
      id: "Ini adalah seminar yang pernah saya ikuti pada tahun 2021. Di dalamnya, saya mempelajari bagaimana cara mencari ide, mengembangkan premis, dan lain sebagainya.",
      en: "This is a seminar I attended in 2021. In it, I learned how to find ideas, develop a premise, and so on.",
    },
    imageAlt: "Cara Menulis Cerpen dan Naskah",
    imageCapt: "Esamedia - Seminar Penulisan Cerpen dan Naskah",
    imageSrc: "/images/Certificates/wr-cmcn.webp",
    name: "Seminar Kepenulisan",
  },
  {
    id: "wr-mabp",
    desc: {
      id: "Ini adalah seminar yang pernah saya ikuti pada tahun 2021. Di dalamnya, saya mempelajari bagaimana cara penulisan dalam dunia akademik.",
      en: "This is a seminar I attended in 2021. I learned how to write in academic world.",
    },
    imageAlt: "Workshop Penulisan Akademik",
    imageCapt: "Laa Maisyir Islamic Economic Journal & HMJ Ekonomi Islam",
    imageSrc: "/images/Certificates/wr-mabp.webp",
    name: "Seminar Kepenulisan",
  },
  {
    id: "wr-lptm",
    desc: {
      id: "Ini adalah lomba mengarang puisi yang diadakan oleh SPWS Publisher pada tahun 2022. Saya mendapat kategori Karya Terbaik dalam lomba puisi ini.",
      en: "This is a poetry writing competition held by SPWS Publisher in 2022. I got the Best Work category in this poetry competition.",
    },
    imageAlt: "Lomba Penulisan Puisi tema 'Manis'",
    imageCapt: "SPWS Publisher",
    imageSrc: "/images/Certificates/wr-lptm.webp",
    name: "Lomba Penulisan Puisi",
  },
  {
    id: "wr-pbbb",
    desc: {
      id: "Ini adalah lomba menulis blog yang dilaksanakan oleh PPIM UIN Jakarta dan Convey Indonesia pada tahun 2021",
      en: "This is a blog writing competition held by PPIM UIN Jakarta and Convey Indonesia in 2022.",
    },
    imageAlt: "Kompetisi penulisan blog",
    imageCapt: "PPIM UIN Jakarta dan Convey Indonesia",
    imageSrc: "/images/Certificates/wr-pbbb.webp",
    name: "Lomba Penulisan Blog",
  },
  {
    id: "wr-plpc",
    desc: {
      id: "Ini adalah lomba menulis cerpen yang diadakan oleh Alinea Media Pustaka pada tahun 2021",
      en: "This is a Short Story writing competition held by Alinea Media Pustaka in 2021.",
    },
    imageAlt: "Kompetisi penulisan cerpen",
    imageCapt: "Alinea Media Pustaka",
    imageSrc: "/images/Certificates/wr-plpc.webp",
    name: "Lomba Penulisan Cerpen",
  },
];

export const newIcons: Record<string, GenType.IconSkill[]> = {
  [WritingCategoryEnums.Creativity]: [
    {
      id: "wr_creative-thinking",
      alt: "Creative Thinking",
      name: "Creative Thinking",
      src: "/images/Icons/wr_creative-thinking.png",
      category: WritingCategoryEnums.Creativity,
    },
  ],
  [WritingCategoryEnums.Technical]: [
    {
      id: "wr_critical-thinking",
      alt: "Critical Thinking",
      name: "Critical Thinking",
      src: "/images/Icons/wr_critical-thinking.png",
      category: WritingCategoryEnums.Technical,
    },
    {
      id: "wr_editing",
      alt: "Editing",
      name: "Editing",
      src: "/images/Icons/wr_editing.png",
      category: WritingCategoryEnums.Technical,
    },
    {
      id: "wr_grammar",
      alt: "Grammar",
      name: "Grammar",
      src: "/images/Icons/wr_grammar.png",
      category: WritingCategoryEnums.Technical,
    },
  ],
  [WritingCategoryEnums.Research]: [
    {
      id: "wr_research",
      alt: "Research",
      name: "Research",
      src: "/images/Icons/wr_research.png",
      category: WritingCategoryEnums.Research,
    },
  ],
  [WritingCategoryEnums.SEO]: [
    {
      id: "wr_seo",
      alt: "SEO",
      name: "SEO",
      src: "/images/Icons/wr_seo.png",
      category: WritingCategoryEnums.SEO,
    },
  ],
};