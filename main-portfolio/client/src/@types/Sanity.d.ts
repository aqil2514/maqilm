namespace SanitySchema{
    /**
 * Interface untuk merepresentasikan data post dari Sanity CMS.
 */
export interface Post {
    /**
     * Slug untuk URL yang dihasilkan berdasarkan title.
     */
    slug: {
      current: string;
    };
  
    /**
     * Judul utama yang digunakan untuk slug.
     */
    title: string;
  
    /**
     * Judul tampilan dalam berbagai bahasa.
     */
    displayTitle: {
      en?: string;
      id?: string;
    };
  
    /**
     * Penulis dari post ini.
     */
    author?: {
      _ref: string;
      _type: "reference";
    };
  
    /**
     * Gambar utama dari post.
     */
    mainImage?: string;
  
    /**
     * Kategori yang terkait dengan post.
     */
    categories?: {
      _ref: string;
      _type: "reference";
    }[];
  
    /**
     * Tanggal publikasi post.
     */
    publishedAt?: string;
  
    /**
     * Konten dalam berbagai bahasa.
     */
    i18nBlockContent: {
      en?: Block[];
      id?: Block[];
    };
  }
  
  /**
   * Interface untuk blok konten dalam array `block`.
   */
  export interface Block {
    _type: "block";
    _key?: string;
    style?: string;
    markDefs?: any[];
    children: BlockChild[];
  }
  
  /**
   * Interface untuk elemen dalam `children` dari `block`.
   */
  export interface BlockChild {
    _key?: string;
    _type: "span";
    text: string;
    marks?: string[];
  }
  
}