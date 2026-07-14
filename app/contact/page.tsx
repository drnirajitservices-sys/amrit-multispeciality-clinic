import type { Metadata } from "next";
import AppointmentForm from "@/components/AppointmentForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact & Book Appointment | AMRIT Multispeciality Clinic",

  description:
    "Contact AMRIT Multispeciality Clinic in Greater Noida and request an appointment with specialists in General Medicine, Orthopaedics, and General and Laparoscopic Surgery Consultation.",

  keywords: [
    "book doctor appointment Greater Noida",
    "doctor appointment Greater Noida",
    "AMRIT Multispeciality Clinic contact",
    "clinic in Greater Noida",
    "general medicine doctor Greater Noida",
    "orthopaedic doctor Greater Noida",
  ],
};

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-green-50/60 via-white to-white">
      {/* Page heading */}
      <section className="border-b border-green-100 px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-green-700">
            Contact AMRIT Multispeciality Clinic
          </p>

          <h1 className="text-3xl font-extrabold tracking-tight text-green-900 sm:text-4xl lg:text-5xl">
            Book an Appointment
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Request an appointment with one of our doctors or get in touch with
            us for healthcare enquiries.
          </p>
        </div>
      </section>

      {/* Form left, contact details right */}
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Always first on mobile */}
          <AppointmentForm />

          {/* Always second on mobile */}
          <ContactDetails />
        </div>
      </section>
    </main>
  );
}