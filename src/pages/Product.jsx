// src/pages/Products.jsx
export default function Products() {
  const dummyProducts = [
    { 
      id: 1, 
      name: "Laptop Pro 2026", 
      price: "Rp 15.000.000",
      // Contoh gambar lanskap
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 2, 
      name: "Smartphone Ultra", 
      price: "Rp 8.500.000",
      // Contoh gambar portrait
      imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89a11af924?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 3, 
      name: "Smartwatch Gen 5", 
      price: "Rp 3.200.000",
      // Contoh gambar kotak
      imageUrl: "https://imgs.search.brave.com/AaPxpkhzD1mK5AnD6KJFxb-BNo15G3nnqJm0Br5BZrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS51bmlxbG8uY29t/L1VRL1NUMy9qcC9p/bWFnZXNvdGhlci9t/ZWFzdXJlbWVudC8y/NHNzL2ltZy93b21l/bi93XzE1N190b3Bz/XzcxX2Zyb250Lmpw/Zz8yMDI0MDMwOA"
    },
    { 
      id: 4, 
      name: "Laptop Pro 2026", 
      price: "Rp 15.000.000",
      // Contoh gambar lanskap
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 5, 
      name: "Smartphone Ultra", 
      price: "Rp 8.500.000",
      // Contoh gambar portrait
      imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89a11af924?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 6, 
      name: "Smartwatch Gen 5", 
      price: "Rp 3.200.000",
      // Contoh gambar kotak
      imageUrl: "https://imgs.search.brave.com/AaPxpkhzD1mK5AnD6KJFxb-BNo15G3nnqJm0Br5BZrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS51bmlxbG8uY29t/L1VRL1NUMy9qcC9p/bWFnZXNvdGhlci9t/ZWFzdXJlbWVudC8y/NHNzL2ltZy93b21l/bi93XzE1N190b3Bz/XzcxX2Zyb250Lmpw/Zz8yMDI0MDMwOA"
    },{ 
      id: 7, 
      name: "Laptop Pro 2026", 
      price: "Rp 15.000.000",
      // Contoh gambar lanskap
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 8, 
      name: "Smartphone Ultra", 
      price: "Rp 8.500.000",
      // Contoh gambar portrait
      imageUrl: "https://images.unsplash.com/photo-1598327105666-5b89a11af924?q=80&w=600&auto=format&fit=crop"
    },
    { 
      id: 9, 
      name: "Smartwatch Gen 5", 
      price: "Rp 3.200.000",
      // Contoh gambar kotak
      imageUrl: "https://imgs.search.brave.com/AaPxpkhzD1mK5AnD6KJFxb-BNo15G3nnqJm0Br5BZrg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS51bmlxbG8uY29t/L1VRL1NUMy9qcC9p/bWFnZXNvdGhlci9t/ZWFzdXJlbWVudC8y/NHNzL2ltZy93b21l/bi93XzE1N190b3Bz/XzcxX2Zyb250Lmpw/Zz8yMDI0MDMwOA"
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Products</h2>
      {/* Implementasi Tailwind: CSS Grid untuk responsif desain */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        
        {dummyProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition overflow-hidden"> {/* overflow-hidden agar gambar tidak meluber */}
            
            {/* Bagian Gambar dengan object-cover */}
            <img 
              src={product.imageUrl} 
              alt={product.name}
              className="h-48 w-full object-cover" 
            />

            {/* Bagian Teks Card */}
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