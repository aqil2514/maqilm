---
title: "Atasi Props Dilling dengan React Context"
description: "Hindari Props Drilling dengan Penggunaan React Context."
author: "Muhamad Aqil Maulana"
pubDate: "2026-03-07"
heroImage: "https://res.cloudinary.com/dwcr3rpgi/image/upload/v1741292492/blogs/Atasi_Props-Dilling_dengan_React_Context_-_Hero_Image_vxqgio.png"
captHeroImage: "React Context Props Drilling (Sumber : Dokumentasi Pribadi)"
tags: ["Front End", "React Js", "React Context"]
slug: "atasi-props-driliing-dengan-react-context"
category: "React Js"
---

### React Js

Seperti yang kita tahu, _React_ sangat _powerful_ dengan _state_ manajemennya. Kehadirannya seakan-akan menjadi _lifehack_ dan mengubah beberapa kode yang rumit menjadi sangat sederhana.

Namun, berkat ke-_powerful_-nya React dalam mengatasi _state_, tidak jarang juga kesalahan-kesalahan yang terlihat minor membuat kode kita menjadi tidak rapih dan sulit untuk dikembangkan di kemudian hari.

Salah satu di antaranya adalah masalah "_Props Drilling_".

#### Apa itu Props Drilling?

> Prop drilling, also known as "threading props" or "component chaining," refers to the process of passing data from a parent component down to nested child components through props. ~ [Joan Ayebola - Free Code Camp](https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/)

Prop Drilling adalah suatu kondisi di mana proses _passing_ (penerusan) data dari komponen induk ke komponen anak melalui antar _props_. Untuk memahami lebih lanjut. Perhatikan contoh ini
![Contoh Kasus Props Drilling](https://res.cloudinary.com/dwcr3rpgi/image/upload/v1741293147/blogs/Hindari%20props%20drlling%20dengan%20penggunaan%20React%20Context%20-%20Image%201.png)

<figcaption>
    Contoh Kasus Props Drilling (Sumber : Dokumentasi Pribadi)
  </figcaption>

Seperti yang kita lihat, di sini komponen induk, `App` yang tujuannya ingin menampilkan `<div>{message}</div>`. Namun, kode ini berada pada komponen anak, yaitu `ChildComponent`. 

Komponen induk memanggil komponen perantara, `ParentComponent` sambil _passing props_ `message`. Kemudian komponen perantara memanggil lagi komponent anak, `ChildComponent` sambil _passing props_ `message` kembali.

Hal inilah yang dinamakan "Props Drilling". Ini masih kasus sederhana. Bagaimana jika kasusnya lebih kompleks? Bagaimana jika komponen yang dipanggil tersebut banyak? Bagaimana juga jika komponen tersebut dari berbagai file yang berbeda?

Tentu ini akan sangat menyebalkan, kan? Kodenya pun jagi sulit untuk di-_maintenance_.

### Mengapa Props Drilling Menjadi Masalah?

#### 1. Kode Menjadi Sulit Dibaca
Bayangkan, kita hanya ingin menampilkan satu kata saja. Namun untuk menampilkannya, kita membutuhkan tiga atau bahkan lebih banyak komponen lagi untuk menampilkannya. Untuk memperjelas, perhatikan contoh berikut:
```
function App() {
  const message = "Halo, ini pesan dari App!";

  return <ParentComponent message={message} />;
}

function ParentComponent({ message }) {
  return <ChildComponent message={message} />;
}

function ChildComponent({ message }) {
  return <div>{message}</div>;
}

```

Kita hanya ingin menampilkan pesan "Halo, ini pesan dari App" di `ChildComponent`. Namun untuk menampilkannya, pertama-tama kita harus memanggil `ParentComponent` dan _passing_ props di sana. Kemudian di `ParentComponent`, kita perlu _passing_ props lagi.

#### 2. Rentan Terhadap Perubahan
Dalam _coding_, perubahan pastinya akan sering dilakukan. Ini merupakan hal umum dan sudah sangat biasa dilakukan agar kode semakin rapih dan bersih. Namun persoalannya dalam _Props Drilling_, satu perubahan artinya harus merubah banyak komponen di dalamnya.
Perhatikan kode berikut:
```
function App() {
  const message = "Halo, ini pesan dari App!";

  return <ParentComponent message={message} />;
}

function ParentComponent({ message }) {
  return <IntermediateComponent message={message} />;
}

function IntermediateComponent({ message }) {
  return <ChildComponent message={message} />;
}

function ChildComponent({ message }) {
  return <div>{message}</div>;
}

```

Bayangkan misal ada perubahan dalam nama variable yang awalnya `message` menjadi `mainMessage`. Tentu kita juga harus mengganti nama propsnya. Mungkin tidak terlalu masalah jika menggunakan Javascript.

Namun bagaimana jika menggunakan Typescript dan terjadi perubahan tipe data yang awalnya `string` menjadi `number`? Tentu kita juga harus melakukan penyesuaian berkali-kali.

Kemudian bayangkan juga bagaimana jika setiap komponen itu berada di file yang berbeda? Bukankah ini juga menyebalkan?

#### 3. Sulit untuk Reusability (Komponen Tidak Fleksibel)
React sangat dikenal dengan adanya `Reusability Component`, artinya kita tidak perlu berulang kali membuat komponen yang sama. Cukup buat sekali dan komponen itu bisa digunakan berkali-kali di dalam atau bahkan di luar project tersebut.

Salah satu syarat komponen bisa dikatakan `Reusabilty` adalah komponen tersebut tidak terlalu bergantung kepada banyak hal. Oleh karena itu, seringkali kita dapati bahwa komponen yang paling `Reusability` adalah komponen yang paling dasar, seperti `button`, `input`, dan lain sebagainya.

Dalam kasus ini, komponen yang terus-menerus menerima props tidak bisa digunakan kembali. Bisa saja digunakan, namun penggunaannya cukup _tricky_. 

Misalnya, jika kita ingin menggunakan `ChildComponent` di tempat lain, kita harus selalu memastikan bahwa props yang dibutuhkan diteruskan melalui beberapa komponen di atasnya.

#### 4. Membingungkan Tim
Bayangkan ketika dirimu diajak bergabung ke suatu perusahaan atau komunitas developer. Kemudian kamu lihat ada masalah ini yang terjadi.

Kamu pun diharuskan untuk melihat satu persatu komponen tersebut, apa nama komponennya, fungsinya untuk apa, dan yang paling menyebalkan adalah props yang diterima apa saja.

Tentu, kamu perlu waktu ekstra untuk memahami ini.

### Solusi dengan React Context
React Context adalah fitur bawaan React yang memungkinkan kita untuk mengelola state global dan membagikan data ke komponen anak tanpa harus meneruskan props secara manual.

Dengan Context, kita bisa menghindari Props Drilling dan membuat kode lebih bersih serta lebih mudah dipelihara.

#### Apa Itu React Context?
React Context adalah mekanisme untuk membagikan data di seluruh bagian aplikasi tanpa perlu meneruskan props di setiap level komponen.

Context biasanya digunakan untuk state global seperti:
- Tema aplikasi (dark mode/light mode)
- Bahasa (localization / i18n)
- Data pengguna (user authentication, role-based access)
- State global lainnya (cart pada e-commerce, data dari API, dll.)

Context memungkinkan kita untuk menyimpan data di satu tempat (Provider) dan mengaksesnya di komponen mana saja (Consumer).

React Context bekerja dengan dua elemen utama:

1️⃣ Provider – Menyediakan data ke komponen anak.
2️⃣ Consumer – Mengakses data yang disediakan oleh Provider.

Kita bisa membuat Context menggunakan `React.createContext()`, lalu menggunakannya di dalam aplikasi.

#### Keuntungan Menggunakan React Context vs. Props Drilling
1. Dengan React Context, data bisa diakses langsung oleh komponen yang membutuhkan. Pada Props Drilling,	data harus diteruskan melalui setiap komponen perantara.
2. React Context membuat kode lebih bersih, lebih mudah dibaca, dan lebih modular. Props Drilling membuat kode menjadi panjang dan sulit dikelola.
3. React Context lebih fleksibel, bisa digunakan di mana saja. Props Drilling strukturnya hierarki komponen harus dipertahankan.
4. React Context Mudah untuk menambahkan atau menghapus komponen tanpa mengubah alur data. Pada Props Drilling, setiap perubahan struktur komponen memerlukan perubahan dalam penerusan props.

TODO : BUat implementasinya di sini
## Implementasi React Context
Dalam ini, kita akan menjadi dua cara. Kita mulai dengan cara pertama,

