import { Counter } from "../components/Counter";

// src/pages/Home.jsx
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
        Welcome to GadgetHub
      </h2>
      <p className="text-lg text-gray-500">
        Temukan gadget impianmu dengan harga terbaik di sini.
      </p>
      <Counter/>
    </div>
  );
}