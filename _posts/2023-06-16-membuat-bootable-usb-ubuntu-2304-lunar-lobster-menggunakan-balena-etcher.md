---
title: Membuat Bootable USB Ubuntu 23.04 Lunar Lobster Menggunakan Balena Etcher
layout: post
categories:
- ubuntu
- installation
- windows
- bootable
---

Kami akan menunjukkan kepada Anda langkah-langkah dalam membuat *bootable flashdisk* untuk sistem operasi **Ubuntu 23.04 Lunar Lobster**.
Tutorial ini terdiri dari 2 bagian, yaitu :
1. Pembuatan partisi baru di sistem operasi WIndows 11
2. Penulisan file .iso kedalam flashdisk

Catatan: Kami mengasumsikan bahwa kalian telah mengunduh file .iso-nya terlebih dahulu pada [situs resmi Ubuntu](https://ubuntu.com/download/desktop).


# Bagian 1: Pembuatan partisi baru di sistem operasi WIndows 11
Buka aplikasi *Disk Management* dengan cara mengetikkan *Create and format hard disk paritions* pada kolom pencarian.
![Disk Management](http://localhost:4000/assets/img/Screenshot%202023-05-11%20065920.png)

Pilih partisi yang ingin kalian susutkan volumenya untuk dialokasikan pada partisi yang baru.
Pada tutorial ini, kami memilih **Local Disk (D:)** untuk disusutkan.
![Local Disk (D:)](http://localhost:4000/assets/img/Screenshot%202023-05-13%20055753.png)

Klik kanan pada partisi yang telah kalian pilih. Lalu pilih menu *Shrink Volume...*
![Shrink Volume](http://localhost:4000/assets/img/Screenshot%202023-05-13%20055826.png)

Masukkan jumlah ruang yang ingin kalian susutkan yang nantinya akan kalian gunakan untuk partisi baru.
Kami ingin mengalokasikannya tepat sebesar **68GB**, maka dari itu kami membutuhkan ruang sebesar **69632MB**.
Untuk mendapatkan ukuran volume penyimpanan yang cantik dalam satuan **GB**, kalan perlu mengalikannya dengan **1,024**.
Misalnya pada kasus ini saya menginginkan volume sebesar **68GB** maka :
68.000 MB x 1,024 = 69632MB
![Jumlah ruang yang disusutkan](http://localhost:4000/assets/img/Screenshot%202023-05-13%20055853.png)

Akhirnya, sebuah volume *Unalocated* telah dibuat.
![Unalocated](http://localhost:4000/assets/img/Screenshot%202023-05-13%20055910.png)

# Bagian 2: Penulisan file .iso kedalam flashdisk
Unduh **[Balena Etcher](https://etcher.balena.io/#download-etcher)**.
Sesuaikan dengan arsitektur dan sistem operasi perangkat kalian.
Pada tutorial ini, kami menggunduh **Etcher for Windows (x86|x64) (Installer)**.

Jalankan aplikasinya dengan mengeklik dua kali.

Setujui Lisensinya dengan menekan tombol *I Agree*.
![Lisensi](http://localhost:4000/assets/img/Screenshot%202023-06-12%20110807.png)

Tunggu proses instalasinya selesai.
![Instalasi Balena Etcher](http://localhost:4000/assets/img/Screenshot%202023-06-12%20110903.png)

Kalian akan disambut dengan tampilan sebagai berikut.
![Balena Etcher](http://localhost:4000/assets/img/Screenshot%202023-06-12%20111114.png)

Jika kalian sebelumnya telah menancapkan *flashdisk* terlebih dahulu, *flashdisk* tersebut akan secara otomatis terpilih.
Kalian juga bisa merubah target penyimpanan yang nantinya ingin kalian jadikan sebagai *live USB* dengan menekan *Change*.
![Deteksi Flashdisk Otomatis](http://localhost:4000/assets/img/Screenshot%202023-06-12%20113001.png)

Pilih target penyimpanan lain yang akan digunakan sebagai *live USB* jika memang diperlukan
![Ganti Target penyimpanan](http://localhost:4000/assets/img/Screenshot%202023-06-12%20113042.png)

*Drowpdown* *Show 1 hidden* akan menampilkan *hardisk* perangkat anda.
Kami tidak menyarankan anda untuk memilihnya.
![Hardisk](http://localhost:4000/assets/img/Screenshot%202023-06-12%20120911.png)

Kembali ke menu utama, pilih *Flash from file* untuk memilih file .iso yang akan kita gunakan.
![Flash from file](http://localhost:4000/assets/img/Screenshot%202023-06-12%20120951.png)

Jelajahi direktori tempat anda menyimpan file .iso-nya.
Jika sudah ketemu, pilih lalu tekan *open*.
![Pilih File .iso](http://localhost:4000/assets/img/Screenshot%202023-06-12%20121015.png)

Jika anda sudah yakin telah memilih penyimpanan dan file .iso yang benar, langkah selanjutnya ialah menekan tombol *Flash!*.
![Flash](http://localhost:4000/assets/img/Screenshot%202023-06-12%20121217.png)

**Balena Ethcer** akan mulai melakukan proses penulisan ke sistem penyimpanan tersebut.
![Memulai Proses penulisan](http://localhost:4000/assets/img/Screenshot%202023-06-12%20121231.png)
![Memulai Proses penulisan 2](http://localhost:4000/assets/img/Screenshot%202023-06-12%20123825.png)

Tunggu Proses *flashing*-nya hingga selesai dan dilanjutkan dengan proses validasi.
![Flashing](http://localhost:4000/assets/img/Screenshot%202023-06-12%20124226.png)
![Validasi](http://localhost:4000/assets/img/Screenshot%202023-06-12%20124711.png)

Jika Proses telah selesai tekan tombol *close*
![Selesai](http://localhost:4000/assets/img/Screenshot%202023-06-12%20125049.png)
![Tutup Aplikasi](http://localhost:4000/assets/img/Screenshot%202023-06-12%20125122.png)
