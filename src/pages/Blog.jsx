import { useState, useEffect } from "react";
import axios from "axios";

export default function Blog() {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // Mengubah URL ke Backend kita
        const response = await axios.get("http://localhost:5001/api/posts");
        
        // Menyimpan data dari backend
        setPosts(response.data.data);
      } catch (err) {
        setError("Gagal mengambil data berita. Pastikan backend server menyala.");
        console.error("Axios Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); 

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-bold text-blue-600 animate-pulse">Loading Berita Terkini...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="bg-red-100 text-red-700 p-4 rounded-lg font-medium">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">Tech Blog & News</h2>
      <p className="text-gray-500 text-center mb-10">Baca berita terbaru seputar dunia gadget.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize line-clamp-2">
              {post.title}
            </h3>
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