import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const selectedMemberType = watch("memberType");

    useEffect(() => {
        if (selectedMemberType === "premium") {
            console.log("Ini ada, Calon member Premium");
        }
    }, [selectedMemberType]);

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        setSubmitStatus("Registrasi Berhasil! Cek data di console.");
    }

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Daftar Member</h2>

            {/* Tampilkan pesan sukses jika state submitStatus terisi */}
            {submitStatus && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center font-medium">
                    {submitStatus}
                </div>
            )}

            {/* Form dimulai. handleSubmit dari RHF membungkus onSubmit kita */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                {/* --- INPUT TEXT --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input
                        type="text"
                        // Daftarkan ke RHF dengan aturan validasi
                        {...register("fullName", { required: "Nama wajib diisi!" })}
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                        placeholder="Masukkan nama lengkap"
                    />
                    {/* Tampilkan error jika ada */}
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                {/* --- INPUT PASSWORD + USESTATE --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <div className="relative">
                        <input
                            // Tipe input dinamis berdasarkan state showPassword
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password wajib diisi!",
                                minLength: { value: 6, message: "Minimal 6 karakter" }
                            })}
                            className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Minimal 6 karakter"
                        />
                        {/* Tombol Toggle Password menggunakan useState */}
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2 text-sm text-blue-600 font-medium hover:text-blue-800"
                        >
                            {showPassword ? "Sembunyikan" : "Tampilkan"}
                        </button>
                    </div>
                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
                </div>

                {/* --- RADIO BUTTONS --- */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tipe Membership</label>
                    <div className="flex space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="regular"
                                {...register("memberType", { required: "Pilih tipe member!" })}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-700 text-sm">Regular</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="premium"
                                {...register("memberType")}
                                className="w-4 h-4 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-gray-700 text-sm">Premium (Berbayar)</span>
                        </label>
                    </div>
                    {errors.memberType && <p className="text-red-500 text-xs mt-1">{errors.memberType.message}</p>}
                </div>

                {/* --- CHECKBOX --- */}
                <div className="pt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                            type="checkbox"
                            {...register("agreeTerms", { required: "Anda harus menyetujui S&K" })}
                            className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-600 text-sm">
                            Saya setuju dengan <span className="text-blue-600 underline">Syarat & Ketentuan</span>
                        </span>
                    </label>
                    {errors.agreeTerms && <p className="text-red-500 text-xs mt-1">{errors.agreeTerms.message}</p>}
                </div>

                {/* --- SUBMIT BUTTON --- */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Daftar Sekarang
                </button>

            </form>
        </div>
    );
}