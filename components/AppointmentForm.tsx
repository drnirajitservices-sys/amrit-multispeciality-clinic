"use client";

import { FormEvent, useState } from "react";

const MAX_WORDS = 100;

export default function AppointmentForm() {
  const [problemDescription, setProblemDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const wordCount = problemDescription
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const handleProblemChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);

    if (words.length <= MAX_WORDS) {
      setProblemDescription(value);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  setIsSubmitting(true);
  setMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  const appointmentData = {
    name: formData.get("name"),
    age: formData.get("age"),
    gender: formData.get("gender"),
    mobile: formData.get("mobile"),
    city: formData.get("city"),
    email: formData.get("email"),
    doctor: formData.get("doctor"),
    problemDescription: formData.get("problemDescription"),
  };

  try {
    const response = await fetch("/api/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to submit appointment request."
      );
    }

    setMessage(data.message);

    form.reset();
    setProblemDescription("");
  } catch (error) {
    setMessage(
      error instanceof Error
        ? error.message
        : "Unable to submit appointment request. Please try again or call +91 83682 89803."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  const inputClasses =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100";

  const labelClasses = "text-sm font-semibold text-gray-700";

  return (
    <div
      id="appointment"
      className="scroll-mt-28 rounded-3xl border border-green-100 bg-white p-5 shadow-lg sm:p-7 lg:p-8"
    >
      <div className="mb-7">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-green-700">
          Request an Appointment
        </p>

        <h2 className="text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
          Book Your Appointment
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          Fill in your details below and our team will contact you shortly to
          confirm your appointment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name <span className="text-red-600">*</span>
          </label>

          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className={inputClasses}
          />
        </div>

        {/* Age and Gender */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="age" className={labelClasses}>
              Age <span className="text-red-600">*</span>
            </label>

            <input
              id="age"
              name="age"
              type="number"
              required
              min="1"
              max="120"
              inputMode="numeric"
              placeholder="Enter age"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="gender" className={labelClasses}>
              Gender <span className="text-red-600">*</span>
            </label>

            <select
              id="gender"
              name="gender"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </div>
        </div>

        {/* Mobile */}
        <div>
          <label htmlFor="mobile" className={labelClasses}>
            Mobile Number <span className="text-red-600">*</span>
          </label>

          <input
            id="mobile"
            name="mobile"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            placeholder="Enter your mobile number"
            className={inputClasses}
          />
        </div>

        {/* City and Email */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className={labelClasses}>
              City
            </label>

            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Enter your city"
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClasses}>
              Email ID
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              className={inputClasses}
            />
          </div>
        </div>

        {/* Doctor */}
        <div>
          <label htmlFor="doctor" className={labelClasses}>
            Choose Doctor <span className="text-red-600">*</span>
          </label>

          <select
            id="doctor"
            name="doctor"
            required
            defaultValue=""
            className={inputClasses}
          >
            <option value="" disabled>
              Select a doctor
            </option>

            <option value="Dr. Niraj Kumar Mishra — General Medicine">
              Dr. Niraj Kumar Mishra — General Medicine
            </option>

            <option value="Dr. Shubham Anant — Orthopaedics">
              Dr. Shubham Anant — Orthopaedics
            </option>

            <option value="Dr. Gaurav Sharma — General & Laparoscopic Surgery Consultation">
              Dr. Gaurav Sharma — General &amp; Laparoscopic Surgery Consultation
            </option>
          </select>
        </div>

        {/* Problem Description */}
        <div>
          <div className="flex items-center justify-between gap-3">
            <label htmlFor="problemDescription" className={labelClasses}>
              Problem Description
            </label>

            <span
              className={`text-xs font-medium ${
                wordCount >= MAX_WORDS ? "text-red-600" : "text-gray-500"
              }`}
            >
              {wordCount}/{MAX_WORDS} words
            </span>
          </div>

          <textarea
            id="problemDescription"
            name="problemDescription"
            rows={5}
            value={problemDescription}
            onChange={handleProblemChange}
            placeholder="Briefly describe the health concern or reason for consultation"
            className={`${inputClasses} resize-y`}
          />

          <p className="mt-2 text-xs text-gray-500">
            Maximum 100 words.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-green-700 px-6 py-4 font-semibold text-white shadow-md transition hover:bg-green-800 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Request Appointment"}
        </button>

        {/* Success message */}
        {message && (
          <div
            role="status"
            className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-900"
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}