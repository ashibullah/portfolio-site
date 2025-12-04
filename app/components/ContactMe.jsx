'use client'
import Image from "next/image";
import { useForm } from "react-hook-form";
import contactImage from '@/public/images/ashibullah.png';

export default function ContactMe() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors , isSubmitting },
    } = useForm();

const onSubmit = async (data) => {
  try {
    const response = await fetch("/api/contactme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      reset(); // clear form
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 pb-10 px-4">

            {/* Image Section */}
            <div className="flex justify-center md:justify-start">
                <Image
                    src={contactImage}
                    width={500}
                    alt="Contact Image"
                    className="w-full max-w-sm"
                />
            </div>

            {/* Form Section */}
            <div className="md:col-span-2 mt-6 md:mt-0 p-6 bg-gray-950 rounded-2xl shadow-xl text-white">
                <h2 className="text-4xl font-semibold mb-6">Contact Me</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    {/* Name */}
                    <div>
                        <label className="block mb-1">Your Name</label>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /[^@\s]+@[^@\s]+\.[^@\s]+/,
                                    message: "Enter a valid email",
                                },
                            })}
                            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1">Message</label>
                        <textarea
                            rows="4"
                            {...register("message", { required: "Message is required" })}
                            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    {/* Submit */}
                        <button
                            type="submit"
                            className="mt-3 w-sm p-2 bg-red-600 hover:bg-red-700  rounded-xl text-white font-semibold" disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                </form>
            </div>
        </div>
    );
}
