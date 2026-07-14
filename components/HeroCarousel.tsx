"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const AUTO_SLIDE_INTERVAL = 6000;
const CLICK_PAUSE_DURATION = 7000;

const slides = [
  {
    id: 1,
    type: "clinic",
    eyebrow: "Expert Healthcare in Greater Noida",
    title: "AMRIT MULTISPECIALITY CLINIC",
    description:
      "Amrit Multispeciality Clinic offers comprehensive healthcare services, including General Medicine, Orthopaedics, Surgery Consultation, Physiotherapy, and advanced diagnostic facilities such as Pathology, Microbiology, Ultrasound, X-ray, and ECG—all under one roof.",
    image: "/amritclinicpic.png",
    imageAlt:
      "Exterior of AMRIT Multispeciality Clinic in PI-1, Greater Noida",
  },
  {
    id: 2,
    type: "doctor",
    eyebrow: "Senior Consultant, General Medicine",
    title: "DR. NIRAJ KUMAR MISHRA",
    description:
      "Dr. Niraj is an experienced physician with over 16 years of expertise in General Medicine. He earned his MD from Command Hospital, Indian Armed Forces, Western Command, Chandimandir (Pt. B.D. Sharma Medical University, Rohtak), and his MBBS from JIPMER, Pondicherry.",
    specialisation:
      "Diabetes, Gastroenterology, Pulmonology, Nephrology, Cardiology, and Neurology.",
    image: "/nirajsircoat.jpeg",
    secondaryImage: "/nirajsiruni.jpeg",
    imageAlt:
      "Dr. Niraj Kumar Mishra, Senior Consultant in General Medicine",
    secondaryImageAlt:
      "Dr. Niraj Kumar Mishra during his service with the armed forces",
    profileLink: "/doctors/dr-niraj-kumar-mishra",
  },

  {
  id: 3,
  type: "doctor",
  eyebrow: "Orthopaedic & Joint Replacement Specialist",
  title: "DR. SHUBHAM ANANT",
  description:
    "MBBS, MS Orthopaedics (M.J.P. Rohilkhand University), with a Fellowship in Robotic Knee Joint Replacement. Former Senior Resident at the Sports Injury Centre, Central Institute of Orthopaedics.13+ years experience.",
  specialisation:
    "Arthroscopy, Arthroplasty, Sports Injury, Orthopaedics, Joint Care, and Robotic Knee Joint Replacement.",
  image: "/anantsir.jpeg",
  imageAlt:
    "Dr. Shubham Anant, Orthopaedic and Joint Replacement Specialist in Greater Noida",
  profileLink: "/doctors/dr-shubham-anant",
},

{
  id: 4,
  type: "doctor",
  eyebrow: "General & Laparoscopic Surgeon",
  title: "DR. GAURAV SHARMA",
  description:
    "M.B.B.S., M.S. General Surgery, FIAGES, FMAS. Senior Medical Officer — United Nations Mission in the Democratic Republic of the Congo.",
  image: "/gauravsir.jpeg",
  imageAlt:
    "Dr. Gaurav Sharma, General and Laparoscopic Surgeon in Greater Noida",
  profileLink: "/doctors/dr-gaurav-sharma",
},

{
  id: 5,
  type: "diagnostics",
  eyebrow: "Diagnostics & Testing",
  title: "GET YOURSELF CHECKED",
  subtitle: "Essential Diagnostics & Health Checkups Under One Roof",
  description:
    "Access convenient diagnostic testing at AMRIT Multispeciality Clinic, including Ultrasound, X-ray, ECG, Pathology, Microbiology, and Blood Tests.",
  diagnostics: [
    "Ultrasound",
    "X-ray",
    "ECG",
    "Pathology",
    "Microbiology",
    "Blood Tests",
  ],
},

];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartX = useRef<number | null>(null);
const touchEndX = useRef<number | null>(null);

const MIN_SWIPE_DISTANCE = 50;

  const nextSlide = useCallback(() => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  }, []);

  const previousSlide = () => {
    setCurrentSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  const pauseForSevenSeconds = () => {
    setIsPaused(true);

    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, CLICK_PAUSE_DURATION);
  };

const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
  touchStartX.current = event.touches[0].clientX;
  touchEndX.current = null;
};

const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
  touchEndX.current = event.touches[0].clientX;
};

const handleTouchEnd = () => {
  if (touchStartX.current === null || touchEndX.current === null) {
    touchStartX.current = null;
    touchEndX.current = null;
    return;
  }

  const swipeDistance = touchStartX.current - touchEndX.current;

  if (Math.abs(swipeDistance) >= MIN_SWIPE_DISTANCE) {
    if (swipeDistance > 0) {
      // Swipe left → next slide
      nextSlide();
    } else {
      // Swipe right → previous slide
      previousSlide();
    }

    pauseForSevenSeconds();
  }

  touchStartX.current = null;
  touchEndX.current = null;
};

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const slide = slides[currentSlide];

  return (
    <section
  className="relative overflow-hidden touch-pan-y bg-gradient-to-br from-white via-green-50/40 to-white"
  aria-label="Clinic highlights"
  onClick={pauseForSevenSeconds}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
      <div
  className={`mx-auto min-h-[600px] max-w-7xl items-center px-4 py-8 sm:px-6 md:py-12 lg:px-8 lg:py-16 ${
    slide.type === "diagnostics"
      ? "flex justify-center"
      : "grid gap-8 lg:grid-cols-2 lg:gap-14"
  }`}
>
        {/* IMAGE SECTION */}
        {slide.type !== "diagnostics" && slide.image && (
        <div className="relative order-1 mx-auto w-full max-w-[560px] lg:order-2">

          {slide.type === "clinic" ? (
            /* Clinic image */
            <div className="relative h-[340px] w-full overflow-hidden rounded-3xl bg-green-50 shadow-xl sm:h-[440px] lg:h-[560px]">
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={currentSlide === 0}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          ) : (
            /* Doctor image composition */
            <div className="relative mx-auto w-full pb-4 sm:pb-6">

              {/* Primary white-coat photo */}
              <div className="relative h-[350px] w-full overflow-hidden rounded-3xl bg-green-50 shadow-xl sm:h-[480px] lg:h-[560px]">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={currentSlide === 1}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>

              {/* Secondary uniform photo */}
              {slide.secondaryImage && (
                <div
                  className="
                    absolute
                    bottom-0
                    left-3
                    h-[125px]
                    w-[100px]
                    overflow-hidden
                    rounded-2xl
                    border-4
                    border-white
                    bg-white
                    shadow-xl

                    sm:bottom-0
                    sm:left-5
                    sm:h-[165px]
                    sm:w-[130px]

                    lg:-left-8
                    lg:bottom-8
                    lg:h-[190px]
                    lg:w-[150px]
                  "
                >
                  <Image
                    src={slide.secondaryImage}
                    alt={slide.secondaryImageAlt ?? ""}
                    fill
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 130px, 150px"
                    className="object-cover object-top"
                  />
                </div>
              )}
            </div>
          )}
        </div>
        )}

        {/* CONTENT SECTION */}
        <div
  className={
    slide.type === "diagnostics"
      ? "w-full max-w-5xl text-center"
      : "order-2 text-center lg:order-1 lg:text-left"
  }
>

          {/* Eyebrow / designation */}
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-green-700 sm:text-base">
            {slide.eyebrow}
          </p>

          {/* Main title */}
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-green-900 sm:text-4xl lg:text-5xl xl:text-6xl">
            {slide.title}
          </h1>

          {/* Main description */}
          <p
  className={`mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8 ${
    slide.type === "diagnostics"
      ? "mx-auto"
      : "mx-auto lg:mx-0"
  }`}
>
  {slide.description}
</p>

          {/* CLINIC-SPECIFIC CONTACT INFORMATION */}
          {slide.type === "clinic" && (
            <div className="mt-7 space-y-3 rounded-2xl border border-green-100 bg-white/80 p-4 text-left shadow-sm backdrop-blur-sm sm:p-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 text-lg" aria-hidden="true">
                  📍
                </span>

                <p className="text-sm leading-6 text-gray-700 sm:text-base">
                  <span className="font-semibold text-green-900">
                    Address:
                  </span>{" "}
                  AMRIT COMPLEX, PI-1, B-003, BIRONDI, GR. NOIDA (U.P.) 201310
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">
                  📞
                </span>

                <p className="text-sm text-gray-700 sm:text-base">
                  <span className="font-semibold text-green-900">
                    Phone:
                  </span>{" "}
                  <a
                    href="tel:+917982932584"
                    className="font-medium text-green-700 transition hover:text-green-900 hover:underline"
                  >
                    +91 79829 32584
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="text-lg" aria-hidden="true">
                  ✉️
                </span>

                <p className="min-w-0 text-sm text-gray-700 sm:text-base">
                  <span className="font-semibold text-green-900">
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:drnirajinfo@gmail.com"
                    className="break-all font-medium text-green-700 transition hover:text-green-900 hover:underline"
                  >
                    drnirajinfo@gmail.com
                  </a>
                </p>
              </div>
            </div>
          )}

         {/* DIAGNOSTICS-SPECIFIC CONTENT */}
{slide.type === "diagnostics" && (
  <>
    {/* Subtitle */}
    {slide.subtitle && (
      <h2 className="mx-auto mt-5 max-w-4xl text-xl font-bold leading-snug text-green-800 sm:text-2xl lg:text-3xl">
        {slide.subtitle}
      </h2>
    )}

    {/* Description */}
    <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
      {slide.description}
    </p>

    {/* Diagnostic tests */}
    {slide.diagnostics && (
      <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-4">
        {slide.diagnostics.map((test) => (
          <span
            key={test}
            className="rounded-2xl border border-green-200 bg-white px-5 py-3 text-sm font-semibold text-green-800 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:px-6 sm:py-4 sm:text-base"
          >
            {test}
          </span>
        ))}
      </div>
    )}

    {/* WhatsApp button */}
    <div className="mt-8 flex justify-center">
      <a
        href="https://wa.me/918368289803?text=Hello%2C%20I%20want%20to%20enquire%20about%20diagnostic%20tests%20at%20AMRIT%20Multispeciality%20Clinic."
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        aria-label="Book diagnostic tests on WhatsApp"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M16.003 3C8.832 3 3 8.832 3 16c0 2.293.598 4.532 1.733 6.503L3 29l6.665-1.748A12.94 12.94 0 0 0 16.003 29C23.17 29 29 23.168 29 16S23.17 3 16.003 3Zm0 23.818a10.77 10.77 0 0 1-5.49-1.502l-.394-.234-3.954 1.037 1.055-3.852-.257-.396A10.77 10.77 0 0 1 5.182 16c0-5.966 4.854-10.818 10.821-10.818S26.818 10.034 26.818 16s-4.85 10.818-10.815 10.818Zm5.934-8.1c-.325-.163-1.925-.95-2.224-1.058-.298-.109-.515-.163-.732.163-.217.325-.84 1.058-1.03 1.275-.19.217-.38.244-.705.081-.325-.162-1.373-.506-2.615-1.614-.967-.86-1.62-1.923-1.81-2.248-.19-.325-.02-.501.143-.663.146-.145.325-.38.488-.57.163-.19.217-.325.325-.542.109-.217.054-.407-.027-.57-.081-.162-.732-1.763-1.003-2.414-.264-.635-.532-.549-.732-.559l-.623-.011c-.217 0-.57.081-.868.407-.298.325-1.139 1.112-1.139 2.712 0 1.6 1.166 3.146 1.329 3.363.163.217 2.294 3.502 5.558 4.91.776.335 1.382.535 1.854.685.779.247 1.488.212 2.049.129.625-.093 1.925-.787 2.197-1.546.271-.759.271-1.41.19-1.546-.081-.136-.298-.217-.623-.38Z" />
        </svg>

        <span>Book Tests</span>
      </a>
    </div>
  </>
)}

          {/* DOCTOR-SPECIFIC CONTENT */}
          {slide.type === "doctor" && (
            <>
              {/* Specialisations */}
              {slide.specialisation && (
                <div className="mt-6 rounded-2xl border border-green-100 bg-green-50/70 p-4 text-left sm:p-5">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wide text-green-800">
                    Areas of Specialisation
                  </p>

                  <p className="text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                    {slide.specialisation}
                  </p>
                </div>
              )}

              {/* Doctor profile link */}
              {slide.profileLink && (
                <div className="mt-7 flex justify-center lg:justify-start">
                  <Link
                    href={slide.profileLink}
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center justify-center rounded-full bg-green-700 px-7 py-3.5 font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg"
                  >
                    View Doctor Profile
                    <span className="ml-2" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              )}
            </>
          )}

          {/* Slide indicators */}
          <div className="mt-8 flex justify-center gap-2 lg:justify-start">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setCurrentSlide(index);
                  pauseForSevenSeconds();
                }}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-green-700"
                    : "w-2.5 bg-green-200 hover:bg-green-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentSlide === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {/* PREVIOUS BUTTON */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previousSlide();
          pauseForSevenSeconds();
        }}
        className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-green-800 shadow-md transition hover:bg-white sm:flex"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* NEXT BUTTON */}
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          nextSlide();
          pauseForSevenSeconds();
        }}
        className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-green-800 shadow-md transition hover:bg-white sm:flex"
        aria-label="Next slide"
      >
        ›
      </button>
    </section>
  );
}