import { AdministrationCategoryEnums } from "@/@types/enums";

export const icons: GenType.Icon[] = [
  {
    id: "wh_management",
    alt: "Manajemen Inventaris",
    name: "Manajemen Inventaris",
    src: "/images/Icons/wh_inventory-management.png",
  },
  {
    id: "wh_erp-ussage",
    alt: "Penggunaan ERP",
    name: "Penggunaan ERP",
    src: "/images/Icons/wh_erp-ussage.png",
  },
  {
    id: "wh_inventory-control",
    alt: "Keakuratan Data",
    name: "Keakuratan Data",
    src: "/images/Icons/wh_inventory-control.png",
  },
  {
    id: "general_problem-solving",
    alt: "Problem Solving",
    name: "Problem Solving",
    src: "/images/Icons/general_problem-solving.png",
  },
  {
    id: "general_communcation",
    alt: "Komunikasi",
    name: "Komunikasi",
    src: "/images/Icons/general_communcation.png",
  },
  {
    id: "general_time-management",
    alt: "Manajemen Waktu",
    name: "Manajemen Waktu",
    src: "/images/Icons/general_time-management.png",
  },
  {
    id: "general_document-draft",
    alt: "Pengarsipan Dokumen",
    name: "Pengarsipan Dokumen",
    src: "/images/Icons/general_document-draft.png",
  },
  {
    id: "wh_excel",
    alt: "Excel",
    name: "Excel",
    src: "/images/Icons/wh_excel.png",
  },
];

export const certificates:GenType.CardImage[] = [
  {
    id: "es_excel-antierror",
    name: "Excel Anti Eror",
    imageSrc: "/images/Certificates/es_excel-anti-error.jpg",
    imageAlt: "Excel Anti Eror",
    imageCapt: "Excel Anti Eror - Jobstreet",
    desc: {
      id: "Ini adalah sertifikat Excel yang saya dapat dari Jobstreet setelah mengikuti pelatihan Excel dalam mengatasi beberapa macam eror dalam operasi Excel. Seperti apa yang menyebabkan error #DIV/0!, #REF!, #N/A, penggunaan rumus IFERROR, dsb",
      en: "This is my Excel certificate that I achieve from Jobstreet after following an Excel exercise in solving few errors in Excel operation",
    },
    ctaLink:"https://drive.google.com/open?id=1-AVwI0Twnh7mdWPzuuOR6ac-XpGSLNCu&usp=drive_fs",
    ctaText: {
      en: "View Certificate",
      id: "Lihat Sertifikat",
    },
  },
  {
    id: "es_data-analyst",
    name: "Analisis Data Excel",
    imageSrc: "/images/Certificates/es_Analisis-Data.jpg",
    imageAlt: "Analisis Data Excel",
    imageCapt: "Analisis Data Excel - Jobstreet",
    desc: {
      id: "Mempelajari cara menggunakan Excel sebagai analisis data, di antaranya juga penggunaan Pivot Table, visualisasi data, dsb..",
      en: "Using how to use Excel for data analyst. Also learning Pivot Table, data visualization, etc.",
    },
    ctaLink:"https://drive.google.com/open?id=1-2KJX1WnCvQLSWVFPcnzwrW-BpiqFLub&usp=drive_fs",
    ctaText: {
      en: "View Certificate",
      id: "Lihat Sertifikat",
    },
  },
  {
    id: "es_vlookup",
    name: "Vlook Up, Hlook Up, Index-Match",
    imageSrc: "/images/Certificates/es_vlookup.jpg",
    imageAlt: "Vlook Up, Hlook Up, Index-Match",
    imageCapt: "Vlook Up, Hlook Up, Index-Match - MySkill x Lion Parcel",
    desc: {
      id: "Mempelajari cara penggunaan rumus vlook up, hlook up, dan index-match untuk keperluan pekerjaan.",
      en: "Using how to use a vlook up, vlook up, and index-match formula for job.",
    },
    ctaLink:"https://drive.google.com/open?id=1-HQ7fQssI9bSXYuePlof2QtOKTTmvY89&usp=drive_fs",
    ctaText: {
      en: "View Certificate",
      id: "Lihat Sertifikat",
    },
  },
  {
    id: "es_basic-formula",
    name: "Microsoft Excel Basic Formula",
    imageSrc: "/images/Certificates/es_Basic-Formula.jpg",
    imageAlt: "Microsoft Excel Basic Formula",
    imageCapt: "Microsoft Excel Basic Formula - MySkill",
    desc: {
      id: "Mempelajari tentang Formatting 101, Basic Formula, dan Basic Filtering and Sorting.",
      en: "Learning about Formatting 101, Basic Formula, dan Basic Filtering and Sorting.",
    },
    ctaLink:"https://drive.google.com/open?id=1-pM6oWH4t0YpsD4jzzLY73RJXNdjIjmH&usp=drive_fs",
    ctaText: {
      en: "View Certificate",
      id: "Lihat Sertifikat",
    },
  },
]

export const workExperience: GenType.WorkExperience[] = [
  {
    companyName: "PT. Alumindo Alloy Abadi",
    companyLogo: "/images/WorkExperience/alumindo-alloy-abadi.webp",
    position: "Warehouse Admin",
    duration: {
      startDate: "21 Maret 2024",
      endDate: "present",
    },
    description:
      "Mengelola stok barang dan administrasi gudang secara efisien.",
    location: "Cibitung, Kabupaten Bekasi",
    responsibilities: [
      "Terima barang masuk",
      "Kontrol barang",
      "Input barang ke ERP dan Excel",
      "Transfer barang",
      "Memotong stok",
      "Membuat surat jalan",
      "Membuat laporan kas",
    ],
    technologies: ["Microsoft Excel", "ERP"],
    skills: [
      "Manajemen Inventaris",
      "VBA",
      "Microsoft Excel",
      "Administrasi Gudang",
      "Microsoft Office",
      "Analisis Data",
      "Penggunaan ERP",
    ],
  },
];

export const newIcons: Record<string, GenType.IconSkill[]> = {
  [AdministrationCategoryEnums.InventoryManagement]: [
    {
      id: "wh_management",
      alt: "Manajemen Inventaris",
      name: "Manajemen Inventaris",
      src: "/images/Icons/wh_inventory-management.png",
      category: AdministrationCategoryEnums.InventoryManagement,
    },
  ],
  [AdministrationCategoryEnums.ERPUsage]: [
    {
      id: "wh_erp-ussage",
      alt: "Penggunaan ERP",
      name: "Penggunaan ERP",
      src: "/images/Icons/wh_erp-ussage.png",
      category: AdministrationCategoryEnums.ERPUsage,
    },
  ],
  [AdministrationCategoryEnums.DataAccuracy]: [
    {
      id: "wh_inventory-control",
      alt: "Keakuratan Data",
      name: "Keakuratan Data",
      src: "/images/Icons/wh_inventory-control.png",
      category: AdministrationCategoryEnums.DataAccuracy,
    },
  ],
  [AdministrationCategoryEnums.GeneralSkills]: [
    {
      id: "general_problem-solving",
      alt: "Problem Solving",
      name: "Problem Solving",
      src: "/images/Icons/general_problem-solving.png",
      category: AdministrationCategoryEnums.GeneralSkills,
    },
    {
      id: "general_communcation",
      alt: "Komunikasi",
      name: "Komunikasi",
      src: "/images/Icons/general_communcation.png",
      category: AdministrationCategoryEnums.GeneralSkills,
    },
    {
      id: "general_time-management",
      alt: "Manajemen Waktu",
      name: "Manajemen Waktu",
      src: "/images/Icons/general_time-management.png",
      category: AdministrationCategoryEnums.GeneralSkills,
    },
  ],
  [AdministrationCategoryEnums.Documentation]: [
    {
      id: "general_document-draft",
      alt: "Pengarsipan Dokumen",
      name: "Pengarsipan Dokumen",
      src: "/images/Icons/general_document-draft.png",
      category: AdministrationCategoryEnums.Documentation,
    },
  ],
  [AdministrationCategoryEnums.SoftwareSkills]: [
    {
      id: "wh_excel",
      alt: "Excel",
      name: "Excel",
      src: "/images/Icons/wh_excel.png",
      category: AdministrationCategoryEnums.SoftwareSkills,
    },
    {
      id: "es_macro",
      alt: "Macro & Automation",
      name: "Macro & Automation",
      src: "/images/Icons/es_macro.png",
      category: AdministrationCategoryEnums.SoftwareSkills,
    },
    {
      id: "es_formula-function",
      alt: "Formula & Functions",
      name: "Formula & Functions",
      src: "/images/Icons/es_formula-function.png",
      category: AdministrationCategoryEnums.SoftwareSkills,
    },
    {
      id: "es_data-management",
      alt: "Data Management",
      name: "Data Management",
      src: "/images/Icons/es_data-management.png",
      category: AdministrationCategoryEnums.SoftwareSkills,
    },
    {
      id: "es_data-visualization",
      alt: "Data Visualization",
      name: "Data Visualization",
      src: "/images/Icons/es_data-visualization.png",
      category: AdministrationCategoryEnums.SoftwareSkills,
    },
  ],
};