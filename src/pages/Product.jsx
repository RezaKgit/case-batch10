import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Memanggil API endpoint products dari Backend Express
        const response = await axios.get("http://localhost:5001/api/products");
        
        // Ingat, backend kita mengirim format seperti ini ya temen" : { success, message, data }
        // Jadi kita ambil response.data.data
        setProducts(response.data.data);
      } catch (err) {
        setError("Gagal mengambil data produk dari server.");
        console.error("Axios Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-xl font-bold text-blue-600 animate-pulse">Loading Produk...</p>
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
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition overflow-hidden">
            {/* Menggunakan image_url sesuai kolom database */}
            <img 
              src={product.image_url} 
              alt={product.name}
              className="h-48 w-full object-cover" 
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
              <p className="text-blue-500 font-medium mt-2">{product.price}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
                Beli Sekarang
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}