// src/pages/Blog.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  // 1. Siapkan 3 State penting untuk API Request
  const [posts, setPosts] = useState([]); // Menyimpan data artikel
  const [loading, setLoading] = useState(true); // Status loading
  const [error, setError] = useState(null); // Menyimpan pesan error jika gagal

  // 2. Gunakan useEffect untuk memanggil API saat halaman pertama kali dibuka
  useEffect(() => {
    // Buat fungsi async untuk memanggil Axios
    const fetchPosts = async () => {
      try {
        // Mengubah status loading menjadi true sebelum memanggil API
        setLoading(true);
        
        // Memanggil API menggunakan axios.get
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        
        // JSONPlaceholder mengembalikan 100 data, kita ambil 6 saja untuk demo
        const limitedData = response.data.slice(0, 6);
        
        // Simpan data ke dalam state posts
        setPosts(limitedData);
        
      } catch (err) {
        // Tangkap error jika API gagal dipanggil (misal: internet mati / server down)
        setError("Gagal mengambil data berita. Silakan coba lagi nanti.");
        console.error("Axios Error:", err);
      } finally {
        // Finally akan selalu dijalankan, baik sukses maupun error
        // Kita matikan status loading-nya
        setLoading(false);
      }
    };

    // Jalankan fungsinya
    fetchPosts();
  }, []); // Array kosong berarti hanya dijalankan 1x saat komponen di-mount

  // 3. Tampilan saat Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-bold text-blue-600 animate-pulse">Loading Berita Terkini...</p>
      </div>
    );
  }

  // 4. Tampilan saat Error
  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg font-medium">{error}</div>
      </div>
    );
  }

  // 5. Tampilan saat Data Sukses Diambil
  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Tech Blog & News</h2>
      <p className="text-gray-500 text-center mb-10">Baca berita terbaru seputar dunia gadget.</p>

      {/* Grid Layout Tailwind untuk Artikel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
            {/* Judul Artikel: Dibuat Kapital kapital di huruf pertama */}
            <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize line-clamp-2">
              {post.title}
            </h3>
            
            {/* Isi Artikel */}
            <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
              {post.body}
            </p>
            
            <button className="text-blue-600 font-semibold text-left hover:text-blue-800 transition">
              Baca Selengkapnya &rarr;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}