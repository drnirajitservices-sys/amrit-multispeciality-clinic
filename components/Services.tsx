const services = [
  "General Healthcare Services",
  "Modern Diagnostic Facilities",
  "Diabetic Care",
  "Respiratory & Chest Care",
  "BP & Heart Diseases",
  "Joint Care",
  "Infectious Diseases Treatment",
  "Liver & Kidney Diseases",
  "Arthritis",
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-green-50/60 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Our Services
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            Comprehensive Healthcare Services
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Medical care, specialist consultations, and diagnostic facilities
            conveniently available at Amrit Multispeciality Clinic in Greater
            Noida.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => (
            <div
              key={service}
              className="flex min-h-[130px] items-center justify-center rounded-2xl border border-green-100 bg-white px-6 py-7 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold leading-snug text-green-900 sm:text-xl">
                {service}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}