/* eslint-disable */
import React from 'react';

const About = (props) => {
  console.log(props);
  return (
    <div className='container'>
      hello from about page
      <p>This project is [MIT]</p>
      <a href="https://github.com/Mujeeb4582/Math_Megicians/blob/React-Setup/Licence">licensed</a>
      <br />
      <p>APLIKASI INI DIBUAT UNTUK TUGAS AKHIR IMK. 
        APLIKASI YANG DAPAT MENINGKATKAN PRODUKTIFITAS PENGGUNANYA DENGAN MENGUNAKAN BEBERAPA
      </p> 
        FITUR SEPERTI :
        <ul>
          <li>MEMBUAT To Do List</li>
          <li>Mengatur KEUANGAN</li>
        </ul> 
        <p>
        MEMBUAT To Do List 
        Mengatur KEUANGANYA
        SEHINGGA DAPAT MEMBANTU PENGGUNA AGAR HIDUP LEBIH TERATUR DAN DAPAT MEMBANTU MEMPERKIRAKAN PENGELUARAN KEUANGANYA. 
        DENGAN AKTIVITAS TERATUR, PENGELUARAN TERKONTROL MAKA HIDUP LEBIH BERKUALITAS.
        </p>
        <br />
        <div>
          <span>Nama Kelompok 3</span>
          <ul>
            <li>Muhammad Furqon Fadlilah   (1207050072)  </li>
            <li>Muhammad Ghiyats Naufal    (1207050073)  </li>
            <li>Muhammad Khalif Gibran     (1207050077)  </li>
            <li>Munazir Dzuana Setiawan    (1207050085)  </li>
          </ul>  
        </div>
    </div>
  );
};
export default About;
