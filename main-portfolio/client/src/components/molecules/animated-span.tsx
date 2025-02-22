import "@/styles/animation.css"; // Ganti dengan CSS Module jika digunakan

/**
 * Komponen `AnimatedSpan` digunakan untuk menampilkan teks dengan efek animasi
 * muncul secara bertahap. Setiap kata atau karakter akan muncul dengan delay
 * yang dapat diatur sesuai dengan properti `delay`.
 *
 * @component
 * @param {Object} props - Properti yang diterima oleh komponen `AnimatedSpan`.
 * @param {number} props.delay - Waktu tunda (delay) dalam detik sebelum animasi dimulai untuk elemen ini.
 * @param {React.ReactNode} props.children - Konten teks atau elemen yang akan diberikan efek animasi.
 *
 * @example
 * // Menggunakan AnimatedSpan dengan delay 0.5 detik untuk menampilkan teks
 * <AnimatedSpan delay={0.5}>
 *   Hello, World!
 * </AnimatedSpan>
 */
const AnimatedSpan: React.FC<{
  delay: number;
  children: React.ReactNode;
}> = ({ delay, children }) => (
  <span
    className={`fadeIn inline-block cursor-default`}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </span>
);

export default AnimatedSpan;