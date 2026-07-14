export default function AboutClinic() {
  return (
    <section
      id="about-clinic"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-10 text-center lg:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            About Our Clinic
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            Trusted Healthcare in Greater Noida
          </h2>
        </div>

        {/* Video and content */}
<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
  
  {/* Clinic video — left side on desktop, first on mobile */}
  <div className="overflow-hidden rounded-3xl bg-green-50 shadow-xl">
    <video
      className="aspect-video w-full object-cover"
      controls
      playsInline
      preload="metadata"
      aria-label="Video of Amrit Multispeciality Clinic in Greater Noida"
    >
      <source src="/amritclinicvideo.mp4" type="video/mp4" />
      Your browser does not support the video element.
    </video>
  </div>

  {/* About content — right side on desktop, second on mobile */}
  <div>
    <p className="text-base leading-8 text-gray-600 sm:text-lg">
      Amrit Multispeciality Clinic is a trusted healthcare centre in Greater
      Noida, providing comprehensive OPD, diagnostic, and specialist medical
      services. Led by experienced doctors, we focus on ethical treatment,
      accurate diagnosis, and compassionate patient care for individuals and
      families.
    </p>

    <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
      Our services include General Medicine, Orthopaedics, Surgery
      Consultation, Physiotherapy, and advanced diagnostic facilities such as
      Pathology, Microbiology, Ultrasound, X-ray, and ECG—all conveniently
      available under one roof.
    </p>
  </div>
</div>

        {/* Health checkup CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-green-900 px-5 py-8 text-center shadow-lg sm:px-8 sm:py-10 lg:mt-16 lg:flex lg:items-center lg:justify-between lg:px-12 lg:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-200">
              Your Health Matters
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Get a Health Checkup Now
            </h3>

            <p className="mx-auto mt-2 max-w-2xl text-green-100 lg:mx-0">
              Enquire about diagnostic tests and health checkups at Amrit
              Multispeciality Clinic.
            </p>
          </div>

          <div className="mt-6 flex justify-center lg:mt-0 lg:ml-8">
            <a
              href="https://wa.me/918368289803?text=Hello%2C%20I%20want%20to%20enquire%20about%20diagnostic%20tests%20at%20AMRIT%20Multispeciality%20Clinic."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a lab test on WhatsApp"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-3.5 font-bold text-green-900 shadow-md transition hover:-translate-y-0.5 hover:bg-green-50 hover:shadow-lg"
            >
              {/* WhatsApp icon */}
              <svg
                viewBox="0 0 32 32"
                className="h-6 w-6 fill-current"
                aria-hidden="true"
              >
                <path d="M16.003 3C8.832 3 3 8.832 3 16c0 2.293.598 4.532 1.733 6.503L3 29l6.665-1.748A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.168 29 16S23.17 3 16.003 3Zm0 23.818a10.77 10.77 0 0 1-5.49-1.502l-.394-.234-3.954 1.037 1.055-3.852-.257-.396A10.77 10.77 0 0 1 5.182 16c0-5.966 4.854-10.818 10.821-10.818S26.818 10.034 26.818 16s-4.85 10.818-10.815 10.818Zm5.934-8.1c-.325-.163-1.925-.95-2.224-1.058-.298-.109-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.275-.19.217-.38.244-.705.081-.325-.162-1.373-.506-2.615-1.614-.967-.86-1.62-1.923-1.81-2.248-.19-.325-.02-.501.143-.663.146-.145.325-.38.488-.57.163-.19.217-.325.325-.542.109-.217.054-.407-.027-.57-.081-.162-.732-1.763-1.003-2.414-.264-.635-.532-.549-.732-.559l-.623-.011c-.217 0-.57.081-.868.407-.298.325-1.139 1.112-1.139 2.712 0 1.6 1.166 3.146 1.329 3.363.163.217 2.294 3.502 5.558 4.91.776.335 1.382.535 1.854.685.779.247 1.488.212 2.049.129.625-.093 1.925-.787 2.197-1.546.271-.759.271-1.41.19-1.546-.081-.136-.298-.217-.623-.38Z" />
              </svg>

              <span>Book a Lab Test</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}