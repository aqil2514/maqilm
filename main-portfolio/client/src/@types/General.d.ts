/**
 * Namespace untuk tipe-tipe umum
 */
namespace GenType {
  /**
   * Interface dasar yang berisi informasi umum.
   */
  export interface BasicInfo {
    /** ID unik dari entitas */
    id: string;
    /** Nama entitas */
    name: string;
  }

  /**
   * Interface untuk kartu informasi dasar.
   * Berisi deskripsi dan opsi call-to-action (CTA).
   */
  export interface CardBasic extends BasicInfo {
    /** Deskripsi kartu dalam berbagai bahasa */
    desc: {
      /** ID deskripsi */
      id: string;
      /** Deskripsi dalam bahasa Inggris */
      en: string;
    };
    /** Teks tombol CTA (jika ada) */
    ctaText?: {
      id: string;
      en: string;
    };
    /** Link yang dituju oleh tombol CTA (jika ada) */
    ctaLink?: string;
    /** Teks repository (jika ada) */
    repoText?: {
      id: string;
      en: string;
    };
    /** Link ke repository (jika ada) */
    repoLink?: string;
    /** Kelompok kategori yang dimiliki kartu (jika ada) */
    group?: string[];
    /** Link Download jika ada */
    downloadLink?: string;
    /** Teks download jika ada */
    downloadText?: {
      id: string;
      en: string;
    };
  }

  /**
   * Interface untuk kartu dengan gambar.
   * Memperluas dari `CardBasic`.
   */
  export interface CardImage extends CardBasic {
    /** Sumber gambar yang ditampilkan pada kartu */
    imageSrc: string;
    /** Alt text untuk gambar, jika gambar tidak ditampilkan */
    imageAlt: string;
    /** Caption gambar */
    imageCapt: string;
    /** Alamat URL artikel */
    slug?: string;
    /** Video demo (opsional) */
    demoVideo?: string;

    /** Fitur utama dari project */
    features?: {
      id: string; // Deskripsi fitur dalam bahasa Indonesia
      en: string; // Deskripsi fitur dalam bahasa Inggris
    }[];

    /** Link demo spesifik fitur (jika ada) */
    demoFeatures?: {
      title: string; // Nama fitur
      demoUrl: string; // URL demo fitur (bisa YouTube/GIF/halaman khusus)
    }[];
  }

  /**
   * Tipe yang mewakili bidang pekerjaan.
   */
  export type FieldId =
    | "fullstack-developer"
    | "writer"
    // | "excel-specialist"
    | "staff-administration"
    | "unselected";

  export interface Professions {
    fieldid: FieldId;
    idLabel: string;
    enLabel: string;
  }

  /**
   * Interface umum untuk ikon.
   * Menyimpan informasi dasar tentang ikon seperti sumber dan alt text.
   */
  export interface Icon extends BasicInfo {
    /** Link tujuan jika ikon digunakan sebagai tautan navigasi (opsional) */
    link?: string;
    /** Alternatif teks jika gambar tidak aktif */
    alt: string;
    /** Sumber ikon, bisa berupa URL atau path file */
    src: string;
  }

  export interface IconSkill<T = string> extends BasicInfo {
    alt: string;
    category: T;
    src: string;
  }

  /**
   * Tipe yang mewakili pilihan bahasa yang didukung.
   */
  export type Language = "id" | "en";

  /**
   * Interface umum untuk daftar elemen.
   * @template T - Tipe dari ID atau value yang digunakan dalam list.
   */
  export interface List<T = string> {
    /** ID atau value dari item list */
    id: T;
    /** Label yang ditampilkan untuk item list */
    label: string;
  }

  export interface NavigationLink {
    url: string;
    key: keyof IntlMessages["Navigation"];
  }

  /**
   * Represents a work experience record.
   */
  export interface WorkExperience {
    /**
     * The name of the company where the work experience took place.
     */
    companyName: string;

    /**
     * Picture. Use path of picture location
     */

    companyLogo: string;

    /**
     * The position or job title held during the work experience.
     */
    position: string;

    /**
     * The duration of the work experience, including start and end dates.
     */
    duration: {
      /**
       * The start date of the work experience (ISO format: YYYY-MM-DD).
       */
      startDate: string;

      /**
       * The end date of the work experience (ISO format: YYYY-MM-DD) or "Present" if currently active.
       */
      endDate: string | "Present";
    };

    /**
     * A brief description of the job or role (optional).
     */
    description?: string;

    /**
     * A list of key responsibilities during the work experience (optional).
     */
    responsibilities?: string[];

    /**
     * A list of notable achievements during the work experience (optional).
     */
    achievements?: string[];

    /**
     * The location of the company (e.g., "Jakarta, Indonesia" or "Remote") (optional).
     */
    location?: string;

    /**
     * A list of tools or technologies used during the work experience (optional).
     */
    technologies?: string[];

    /**
     * A list of useful skill in this position
     */

    skills?: string[];

    /**
     * A list of references related to the work experience, including name and contact information (optional).
     */
    references?: {
      /**
       * The name of the reference.
       */
      name: string;

      /**
       * The contact information of the reference (e.g., email or phone number).
       */
      contact: string;
    }[];
  }
}
