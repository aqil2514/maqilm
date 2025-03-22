---
title: "Proyek Excel – Optimasi Data Kedatangan Barang Material"
description: "Proyek Excel yang berkaitan dengan Data Kedatangan Barang Material."
author: "Muhamad Aqil Maulana"
pubDate: "2025-03-05"
heroImage: "https://res.cloudinary.com/dwcr3rpgi/image/upload/v1741208045/blogs/Optimasi%20Data%20Kedatangan%20Barang%20Material%20-%20Main.png"
tags: ["Microsoft Excel", "Real Project", "Warehouse Admin"]
slug: "excel-optimasi-data-kedatangan-barang-material"
category: "Microsoft Excel"
captHeroImage: "Project Pribadi : Data Kedatangan Barang Material (Sumber : Dokumentasi Pribadi)"
---

## Optimasi Data Kedatangan Barang Material

Dalam manajemen inventaris dan logistik modern, efisiensi dan akurasi dalam pemrosesan data memainkan peran penting dalam memastikan kelancaran operasional. Proyek Optimalisasi Data Kedatangan Material bertujuan untuk mendigitalkan dan mengotomatiskan pencatatan kedatangan material menggunakan Excel, sehingga meningkatkan kecepatan dan akurasi dalam entri data.

## Identitas

- Nama : Optimasi Data Kedatangan Barang Material
- Dibuat oleh : Muhamad Aqil Maulana
- Teknologi : Microsoft Excel
- Link Project : <a href="https://docs.google.com/spreadsheets/d/13s50FUiCYMHB_VMHJ1sNf2ALasjRcSQT/edit?usp=sharing&ouid=110199591112244620017&rtpof=true&sd=true" target="_blank" style="color:cyan">Optimasi Data Kedatangan Barang Material</a> (Dibuat dengan Ms. Excel. Beberapa fungsi mungkin tidak berfungsi. Silahkan download dan buka dengan Ms. Excel)
- Teknik yang Digunakan : Advanced Formula, Visual Basic, Conditional Formating

### Fitur-fitur

#### 1. Pembuatan Nomor Lot Secara Otomatis

![Fitur 1](https://cv.maqilm.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5jkamrnf%2Fproduction%2F00c83a63bbd6d353d5937ead34c26e2534e71e12-1918x1020.png&w=1080&q=75)

<figcaption>
    Excel Project Fitur #1 : Pembuatan Lot Number Otomatis (Sumber : Dokumentasi Pribadi)
  </figcaption>

```
=[@[Nomor Bon]] & "." &
SUBSTITUTE(
    UPPER(
        MID(
            [@Supplier]
        ),
{            SEARCH(
                "("
            ),
{ [@Supplier]
            ) + 1
        ),
{            SEARCH(
                ")"
            ),
{ [@Supplier]
            ) -
            SEARCH(
                "("
            ),
{ [@Supplier]
            ) - 1
        )
    )
),
{ " "
),
{ ""
) & "."
```

Menggunakan kombinasi formula Excel seperti SUBSTITUTE, UPPER, MID, dan SEARCH, sistem secara otomatis menghasilkan nomor lot yang valid. Hal ini mengurangi pekerjaan manual dan memastikan format yang seragam di seluruh entri data.

#### 2. Fitur Validasi Nomor Lot

![Fitur 2](https://cv.maqilm.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5jkamrnf%2Fproduction%2F22eca71e0bc06c60180b56aedcacf1fa0d32c009-1918x1007.png&w=1080&q=75)

<figcaption>
    Excel Project Fitur #2 : Fitur Validasi Nomor Lot (Sumber : Dokumentasi Pribadi)
  </figcaption>
Untuk menjaga akurasi data, sistem validasi memastikan bahwa nomor lot tidak melebihi batas karakter yang ditentukan.

_Conditional Formatting_ diterapkan untuk menyoroti entri yang tidak valid, sehingga pengguna dapat dengan mudah mengidentifikasi dan memperbaikinya.

#### 3. Pembuatan Nama Item Secara Otomatis

![Fitur 3](https://cv.maqilm.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5jkamrnf%2Fproduction%2F057c91394c80f0f1ecc3c1f2c6293323246fecb0-1918x1013.png&w=1080&q=75)

<figcaption>
    Excel Project Fitur #3 : Pembuatan Nama Item Secara Otomatis (Sumber : Dokumentasi Pribadi)
  </figcaption>

```
=IF(
  ISBLANK(
      [@[Part Number]]
  )
),
{ ""
),
{    VLOOKUP(
      [@[Part Number]]
  ),
{ Daftar_Barang[[Code]:[Description1]]
  ),
{ 2
  ),
{        FALSE
  )
)
```

Dengan menerapkan formula VLOOKUP, nama item diambil secara otomatis berdasarkan nomor lot atau pengenal lainnya. Hal ini menghilangkan kebutuhan pencarian manual dan memastikan konsistensi data.

#### 4. Penghitungan Otomatis Item yang Ditimbang

![Fitur 4](https://cv.maqilm.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5jkamrnf%2Fproduction%2Fc5090eff5865a51946ddcb8a91027d08d888a9f4-1918x1059.png&w=1080&q=75)

<figcaption>
    Excel Project Fitur #4 : Penghitungan Otomatis Item yang Ditimbang (Sumber : Dokumentasi Pribadi)
  </figcaption>

Fitur ini memanfaatkan formula LEN, SUBSTITUTE, dan format kustom untuk menghitung item dengan efisien, sekaligus menambahkan akhiran "Bundle" jika diperlukan. Ini memastikan operasi numerik tetap berfungsi sambil meningkatkan keterbacaan data.

#### 5. Perhitungan Kuantitas Akhir Secara Otomatis

![Fitur 5](https://cv.maqilm.site/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F5jkamrnf%2Fproduction%2F2f18c4b8f5e87fdf79f77fb097088a60fc723ed2-1918x1011.png&w=1080&q=75)

<figcaption>
    Excel Project Fitur #5 : Perhitungan Kuantitas Akhir Secara Otomatis (Sumber : Dokumentasi Pribadi)
  </figcaption>

```
=IF(ISBLANK([@[Detail QT]]);"";SUMQTY([@[Detail QT]]))
```

Fungsi kustom _User-Defined Function_ (SUMQTY) diterapkan untuk melakukan perhitungan pada sel yang tidak memiliki awalan =. Hal ini memungkinkan perhitungan kuantitas secara otomatis tanpa mengubah format entri data.

#### Hasil & Dampak
Implementasi fitur otomatisasi ini menghasilkan peningkatan efisiensi yang signifikan:

- ✅ Mengurangi waktu kerja hingga 30%, memungkinkan staf untuk lebih fokus pada tugas yang lebih krusial.
- ✅ Meningkatkan kecepatan entri data, mengurangi kebutuhan input dan pencarian manual.
- ✅ Meminimalkan kesalahan input, memastikan pemrosesan data lebih akurat dan mengurangi pekerjaan ulang.

#### Kesimpulan
Dengan memanfaatkan kemampuan formula Excel dan teknik otomatisasi, proyek ini berhasil mengoptimalkan pemrosesan data kedatangan material. Pendekatan ini meningkatkan efisiensi, akurasi, dan kemudahan penggunaan, menjadikannya aset berharga dalam manajemen inventaris dan operasi logistik.

🔗 Untuk detail lebih lanjut, silakan cek tautan proyek di atas. Masukan dan saran untuk pengembangan lebih lanjut sangat diapresiasi! 😊