---
title: "Belajar React : Hooks - useState"
description: "Belajar react hooks. Apa itu useState? Bagaimana cara menggunakannya?"
author: "Muhamad Aqil Maulana"
pubDate: "2025-03-25"
heroImage: "https://res.cloudinary.com/dwcr3rpgi/image/upload/v1742800930/blogs/React_Tutorial_-_Hooks___useState_a3uuly.png"
captHeroImage: "React Hooks | useState (Sumber : Dokumentasi Pribadi)"
tags: ["Front End", "React Js", "React Hooks"]
slug: "belajar-react-hooks-usestate"
category: ["React Js", "Belajar"]
---
# Pengenalan `useState` dalam React

_Hooks_ adalah sebutan untuk suatu fungsi React yang memungkinkan pengguna dapat mengakses fitur bawaan React. Dengan _Hooks_, _Developer_ dapat mengubah state, manipulasi DOM, dan lain sebagainya. Ini semua pun jadi dapat dengan mudah.

Di antara _hooks_ tersebut, salah satunya adalah `useState`, dan kita akan mempelajarinya kali ini.

## Apa itu `useState`?

> `useState` is a React Hook that lets you add a state variable to your component. [React Documentation](https://react.dev/reference/react/useState)

Seperti yang tertulis dari situs dokumentasinya, `useState` adalah salah satu React Hook yang memungkinkan komponen untuk memiliki state sendiri. Dengan ini, kita bisa menyimpan dan memperbarui data seperti input pengguna, status tombol, dan lain sebagainya.

Dengan `useState`, seorang _developer_ dapat mengelola dan memperbarui state di dalam komponen. Hal ini sangat berguna untuk mengelola data yang berubah-ubah, seperti input pengguna, status tombol, data yang diambil dari API, atau lain sebagainya.

## Deklarasi `useState`

```jsx
const [state, setState] = useState(initialState)
```

Di sini, ada 3 variabel dasar yang akan kita bahas, yaitu `state`, `setState`, dan `useState(initialState)`.

### `state`

`State` adalah variabel atau data yang disimpan saat ini. Bisa dibilang ini adalah nilai terbaru dari data atau variabel yang disimpan. Karena `state` adalah sebuah variabel, maka ini dapat ditampilkan dalam komponen JSX.

Contoh:

```jsx
const [age, setAge] = useState(28);
return (
    <div>
        <p>Umur saya adalah {age} tahun</p>
    </div>
);
```

Kode JSX di atas akan merender sebuah elemen paragraf HTML dengan teks "Umur saya adalah 28 tahun". "28" didapat dari variabel `age` dan berperan sebagai `state`.

### `setState`

`setState` adalah sebuah fungsi yang digunakan untuk memperbarui nilai dari `state`. Ini bisa disatukan dengan interaksi pengguna, seperti klik tombol.

Contoh penggunaan:

```jsx
const [age, setAge] = useState(28);

const tambahUmur = () => {
    setAge(prev => prev + 1);
};

const kurangiUmur = () => {
    setAge(prev => prev - 1);
};

return (
    <div>
        <button onClick={tambahUmur}>Tambah Umur</button>
        <button onClick={kurangiUmur}>Kurangi Umur</button>
        <p>Umur saya adalah {age} tahun</p>
    </div>
);
```

Ketika pengguna berinteraksi dengan tombol, nilai `state` akan berubah secara real-time.

## Contoh Penggunaan React

### Penanganan Input Form

```jsx
import React, { useState } from 'react';

export function App(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [value, setValue] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(`Halo ${name}! Alamat Email ${email}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nama:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
        </div>
        <button type="submit">Kirim</button>
      </form>
      {value}
    </>
  );
}
```

Hasil dari kode tersebut:

![Hasil Kode UseState Penanganan Input Form](https://res.cloudinary.com/dwcr3rpgi/image/upload/v1742875942/blogs/UseState_Example_Result_-_Input_Form_e9ut0y.gif)

### Ubah Tampilan UI Berdasarkan State Tertentu

```jsx
import React, { useState } from 'react';

export function App(props) {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: isDark ? "black" : "white" }}>
      <p style={{ color: "cyan" }}>
        Ubah Background ke warna {isDark ? "putih" : "gelap"}
      </p>
      <button onClick={() => setIsDark(!isDark)}>
        Ubah ke {isDark ? "putih" : "gelap"}
      </button>
    </div>
  );
}
```

Hasil dari kode tersebut:

![Hasil Kode UseState Ubah Tampilan UI Berdasarkan State Tertentu](https://res.cloudinary.com/dwcr3rpgi/image/upload/v1742876743/blogs/Example_2_bjexhf.gif)

## Perbedaan `useState` dengan State di Class Component

Jika Anda familiar dengan state di class component, berikut adalah perbedaannya:

### Class Component
```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Tambah</button>
      </div>
    );
  }
}
```

### Functional Component dengan `useState`
```jsx
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
};
```

Dari contoh di atas, kita bisa melihat bahwa `useState` jauh lebih ringkas dibandingkan dengan class component.

## Penggunaan UseState pada Array dan Object
Jika kita memperhatikan contoh-contoh sebelumnya, tipe data yang digunakan hanyalah sebatas string, number, dan boolean. Padahal, `useState` bisa lebih dari sekedar itu.

Ini adalah contoh useState dalam Array of Object.
```jsx
const [user, setUser] = useState({ name: "", age: 0 });

const handleChange = (event) => {
  setUser(prevState => ({
    ...prevState,
    [event.target.name]: event.target.value
  }));
};

return(
    <>
        <input name="name" onChange={handleChange} />
        <input name="age" onChange={handleChange} />
    </>
)

```
### Penjelasan
- `setUser` menggunakan fungsi callback agar dapat memperbarui state tanpa menghapus properti lain di dalam objek.
- `...prevState` digunakan untuk mempertahankan data lama yang tidak diubah.

## Menggunakan useState untuk penambahan array
```jsx
const [items, setItems] = useState([]);

const addItem = () => {
  setItems([...items, { id: items.length, value: Math.random() }]);
};

```
### Penjelasan
- setItems([...items, newItem]) digunakan untuk menambahkan item baru ke dalam array tanpa mengubah array lama.

## Perbedaan useState dengan useReducer
Untuk state yang lebih kompleks (misalnya, banyak perubahan yang saling terkait), useReducer bisa menjadi alternatif yang lebih baik dibandingkan useState.

Contoh sederhana:
```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });

<button onClick={() => dispatch({ type: "increment" })}>Tambah</button>
```

Jika state-mu memiliki banyak perubahan yang saling bergantung, useReducer bisa jadi pilihan yang lebih baik daripada useState. Kita akan bahas ini lain kali.

## Penjelasan tentang Pembaruan State yang Asinkron
Banyak pemula tidak menyadari bahwa pembaruan state di React bersifat asinkron. Ini bisa menyebabkan masalah jika mencoba langsung mengakses state setelah setState.

Contoh kesalahan umum:
```jsx
const [count, setCount] = useState(0);

const handleClick = () => {
  setCount(count + 1); // Tidak langsung berubah!
  setCount(prev => prev + 1);// Berubah
  console.log(count);

};

```

Sampai sini dulu pembahasan kita tentang useState. Selebihnya, kita akan bahas di lain waktu. Terimakasih bagi teman-teman yang telah membaca. Semoga bermanfaat ^_^.