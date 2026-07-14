export default function ContactDetails() {
  return (
    <aside className="rounded-3xl bg-green-900 p-5 text-white shadow-lg sm:p-7 lg:p-8">
      <div className="mb-7">
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.14em] text-green-200">
          Get in Touch
        </p>

        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Contact Details
        </h2>

        <p className="mt-3 leading-7 text-green-100">
          Contact AMRIT Multispeciality Clinic for appointments and healthcare
          enquiries.
        </p>
      </div>

      <div className="space-y-6">
        {/* Address */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            📍
          </span>

          <div>
            <h3 className="font-semibold text-white">Address</h3>

            <address className="mt-1 not-italic leading-7 text-green-100">
              AMRIT COMPLEX, PI-1, B-003, BIRONDI, GREATER NOIDA (U.P.) 201310
            </address>
          </div>
        </div>

        {/* Clinic Phone */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            📞
          </span>

          <div>
            <h3 className="font-semibold text-white">Clinic Phone</h3>

            <a
              href="tel:+917982932584"
              className="mt-1 inline-block text-green-100 transition hover:text-white hover:underline"
            >
              +91 79829 32584
            </a>
          </div>
        </div>

        {/* Appointments and WhatsApp */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            💬
          </span>

          <div>
            <h3 className="font-semibold text-white">
              Appointments &amp; WhatsApp
            </h3>

            <a
              href="https://wa.me/918368289803"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-green-100 transition hover:text-white hover:underline"
            >
              +91 83682 89803
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            ✉️
          </span>

          <div className="min-w-0">
            <h3 className="font-semibold text-white">Email</h3>

            <a
              href="mailto:drnirajinfo@gmail.com"
              className="mt-1 inline-block break-all text-green-100 transition hover:text-white hover:underline"
            >
              drnirajinfo@gmail.com
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            🕐
          </span>

          <div>
            <h3 className="font-semibold text-white">Opening Hours</h3>

            <p className="mt-1 text-green-100">09:00 AM – 08:00 PM</p>
          </div>
        </div>

        {/* Days */}
        <div className="flex items-start gap-4">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-xl"
            aria-hidden="true"
          >
            📅
          </span>

          <div>
            <h3 className="font-semibold text-white">Days</h3>

            <p className="mt-1 text-green-100">
              Monday – Sunday
            </p>

            <p className="mt-1 font-semibold text-green-200">
              Thursday Closed
            </p>
          </div>
        </div>
      </div>

      {/* Book on WhatsApp button */}
<a
  href="https://wa.me/918368289803?text=Hello%20I%20want%20to%20book%20an%20appointment"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book an appointment on WhatsApp"
  className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 font-semibold text-green-900 shadow-sm transition hover:bg-green-50 hover:shadow-md"
>
  {/* WhatsApp logo */}
  <svg
    viewBox="0 0 32 32"
    className="h-6 w-6 fill-current"
    aria-hidden="true"
  >
    <path d="M16.003 3C8.832 3 3 8.832 3 16c0 2.293.598 4.532 1.733 6.503L3 29l6.665-1.748A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.168 29 16S23.17 3 16.003 3Zm0 23.818a10.77 10.77 0 0 1-5.49-1.502l-.394-.234-3.954 1.037 1.055-3.852-.257-.396A10.77 10.77 0 0 1 5.182 16c0-5.966 4.854-10.818 10.821-10.818S26.818 10.034 26.818 16s-4.85 10.818-10.815 10.818Zm5.934-8.1c-.325-.163-1.925-.95-2.224-1.058-.298-.109-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.275-.19.217-.38.244-.705.081-.325-.162-1.373-.506-2.615-1.614-.967-.86-1.62-1.923-1.81-2.248-.19-.325-.02-.501.143-.663.146-.145.325-.38.488-.57.163-.19.217-.325.325-.542.109-.217.054-.407-.027-.57-.081-.162-.732-1.763-1.003-2.414-.264-.635-.532-.549-.732-.559l-.623-.011c-.217 0-.57.081-.868.407-.298.325-1.139 1.112-1.139 2.712 0 1.6 1.166 3.146 1.329 3.363.163.217 2.294 3.502 5.558 4.91.776.335 1.382.535 1.854.685.779.247 1.488.212 2.049.129.625-.093 1.925-.787 2.197-1.546.271-.759.271-1.41.19-1.546-.081-.136-.298-.217-.623-.38Z" />
  </svg>

  <span>Book on WhatsApp</span>
</a>
    </aside>
  );
}