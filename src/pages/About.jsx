// src/pages/About.jsx
export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - About */}
      <div className="bg-blue-600 py-20 px-8 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">About GadgetHub</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Kami adalah platform terpercaya yang menyediakan berbagai macam gadget 
          terkini dengan kualitas terbaik dan garansi resmi.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Sisi Kiri: Gambar Placeholder */}
          <div className="bg-gray-200 h-80 rounded-2xl flex items-center justify-center">
             <span className="text-gray-500 font-medium">[Gambar Kantor/Tim Kami]</span>
          </div>

          {/* Sisi Kanan: Penjelasan */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Visi & Misi Kami</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Didirikan pada tahun 2024, GadgetHub bertujuan untuk memudahkan akses 
              teknologi bagi seluruh masyarakat Indonesia. Kami percaya bahwa teknologi 
              harus bisa dinikmati oleh siapa saja tanpa hambatan.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Produk 100% Original</li>
              <li>Pengiriman Cepat ke Seluruh Indonesia</li>
              <li>Layanan Customer Service 24/7</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}