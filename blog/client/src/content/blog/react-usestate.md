---
title: "Belajar React : Hooks - useState"
description: "Belajar react hooks. Apa itu useState? Bagaimana cara menggunakannya?"
author: "Muhamad Aqil Maulana"
pubDate: "2025-03-24"
heroImage: "https://res.cloudinary.com/dwcr3rpgi/image/upload/v1742800930/blogs/React_Tutorial_-_Hooks___useState_a3uuly.png"
captHeroImage: "React Hooks | useState (Sumber : Dokumentasi Pribadi)"
tags: ["Front End", "React Js", "React Hooks"]
slug: "belajar-react-hooks-usestate"
category: ["React Js", "Belajar"]
---

_Hooks_ adalah sebutan untuk suatu fungsi React yang memungkinkan pengguna dapat mengakses fitur bawaan React. Dengan _Hooks_, _Developer_ dapat mengubah state, manipulasi DOM, dan lain sebagainya. Ini semua pun jadi dapat dengan mudah.
Di antara dari _hooks_ tersebut, salah satunya adalah `useState` dan kita akan mempelajarinya kali ini.

## Apa itu useState?
> `useState` is a React Hook that lets you add a state variable to your component. [React Documentation](https://react.dev/reference/react/useState)

Seperti yang tertulis dari situs dokumentasinya, `useState` adalah sebuah Hook dalam React yang memungkinkan developer untuk menambahkan sebuah state ke dalam komponen. 

Dengan `useState`, seorang _developer_ dapat mengelola dan memperbarui state di dalam komponen. Hal ini sangat berguna untuk mengelola data yang berubah-ubah, seperti input pengguna, status tombol, data yang diambil dari API, atau lain sebagainya.

## Deklarasi useState
```
const [state, setState] = useState(initialState)
```

Di sini, ada 3 variabel dasar yang akan kita bahas, yaitu `state`, `setState`, dan `useState(initialState)`;

### > state
`State` adalah variabel atau data yang disimpan saat ini. Bisa dibilang ini adalah nilai terbaru dari data atau variabel yang disimpan. Dikarenakan `State` adalah sebuah variabel, jadi ini dapat ditampilkan dalam komponen JSX. 
Contoh :
```
... kode sebelumnya
const [age, setAge] = useState(28);
return(
    <div>
        <p>Umur saya adalah {age} tahun</p>
    </div>
)
... kode setelahnya
```

Kode JSX di atas akan merender sebuah elemen paragraf HTML dengan sebuah nilai "Umur saya adalah 28 tahun". "28" didapat dari variabel "age" dan berperan sebagai `state`.

### > setState
`setState` adalah sebuah fungsi yang digunakan untuk memperbarui nilai dari `state`. Ini bisa disatukan dengan interaksi pengguna, seperti klik tombol;

Kita akan gunakan contoh dari sebelumnya.
```
... kode sebelumnya
const [age, setAge] = useState(28);

const tambahUmur = () => {
    setAge(prev => prev + 1)
}

const kurangiUmur = () => {
    setAge(prev => prev - 1)
}

return(
    <div>
        <button onClick={tambahUmur}>Tambah Umur</button>
        <button onClick={kurangiUmur}>Kurangi Umur</button>
        <p>Umur saya adalah {age} tahun</p>
    </div>
)
... kode setelahnya
```

Kode ini akan menghasilkan satu elemen paragraf dan dua elemen button. Seperti yang dijelaskan sebelumnya, _state_-nya adalah `age` dan _setState_-nya adalah `setAge`.

Perhatikan juga ada dua buah _function_, yaitu `tambahUmur` yang berfungsi menambah _state_ dan `kurangiUmur` yang berfungsi mengurangi _state_. 

Elemen Paragraf yang dirender sebelumnya adalah "Umur saya adalah 28 tahun" yang mana di sini "28" adalah `state` dari `age`.

Ketika pengguna berintaksi dengan cara klik salah satu dari kedua tombol tersebut, apa yang akan terjadi?

Yap betul. `state` akan bertambah atau berkurang tergantung tombol mana yang diklik. Ini terjadi secara _Realtime_, saat itu tombol diklik, saat itu pula `state` bertambah atau berkurang.