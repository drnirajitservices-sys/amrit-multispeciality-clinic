"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Pooja Verma",
    location: "Birondi",
    image: "/amritreview1.png",
    review:
      "I consulted Dr. Niraj Mishra for my blood pressure and diabetes management. He explained everything very clearly and suggested simple lifestyle changes along with medication. The clinic is clean and well-organized. I am very satisfied with the treatment.",
  },
  {
    name: "Rohit Sharma",
    location: "Greater Noida West",
    image: "/amritreview2.png",
    review:
      "Very professional and ethical approach. I got my blood tests and ECG done here. Reports were timely and properly explained. Dr. Niraj listens patiently and gives proper attention to every patient.",
  },
  {
    name: "Anil Kumar",
    location: "Pari Chowk",
    image: "/amritreview3.png",
    review:
      "I visited Amrit Multispeciality Clinic for severe joint pain. The diagnosis was accurate and the treatment was very effective. The staff is polite and supportive. Highly recommended for general medicine and orthopaedic care.",
  },
];

export default function Reviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextReview = () => {
    setCurrentReview((previous) => (previous + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReview(
      (previous) => (previous - 1 + reviews.length) % reviews.length
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.targetTouches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = event.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }

    const swipeDistance = touchStartX.current - touchEndX.current;
    const minimumSwipeDistance = 50;

    if (swipeDistance > minimumSwipeDistance) {
      nextReview();
    } else if (swipeDistance < -minimumSwipeDistance) {
      previousReview();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="reviews"
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Patient Reviews
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
            What Our Patients Say
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Read about the experiences of patients who visited Amrit
            Multispeciality Clinic for medical consultations, diagnostic tests,
            and specialist care.
          </p>
        </div>

        {/* Mobile and tablet carousel */}
        <div className="lg:hidden">
          <div
            className="touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <ReviewCard review={reviews[currentReview]} />
          </div>

          {/* Carousel navigation */}
          <div className="mt-6 flex items-center justify-center gap-5">
            {/* Previous arrow */}
            <button
              type="button"
              onClick={previousReview}
              aria-label="Show previous patient review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-green-200 bg-white text-xl font-bold text-green-800 shadow-sm transition hover:bg-green-50 hover:shadow-md"
            >
              ‹
            </button>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {reviews.map((review, index) => (
                <button
                  key={review.name}
                  type="button"
                  onClick={() => setCurrentReview(index)}
                  aria-label={`Show review ${index + 1}`}
                  aria-current={currentReview === index ? "true" : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? "w-8 bg-green-700"
                      : "w-2.5 bg-green-200 hover:bg-green-300"
                  }`}
                />
              ))}
            </div>

            {/* Next arrow */}
            <button
              type="button"
              onClick={nextReview}
              aria-label="Show next patient review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-green-200 bg-white text-xl font-bold text-green-800 shadow-sm transition hover:bg-green-50 hover:shadow-md"
            >
              ›
            </button>
          </div>
        </div>

        {/* Desktop review grid */}
        <div className="hidden grid-cols-3 gap-8 lg:grid">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Review = {
  name: string;
  location: string;
  image: string;
  review: string;
};

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full min-h-[390px] flex-col rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl sm:p-7 lg:min-h-0">
      {/* Patient details */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-green-100 bg-green-50 sm:h-20 sm:w-20">
          <Image
            src={review.image}
            alt={`${review.name}, patient review for Amrit Multispeciality Clinic`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </div>

        <div>
          <h3 className="text-lg font-bold text-green-950 sm:text-xl">
            {review.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-gray-500">
            {review.location}
          </p>
        </div>
      </div>

      {/* Five-star rating */}
      <div
        className="mt-5 flex gap-1 text-xl text-yellow-500"
        aria-label="5 out of 5 stars"
      >
        <span aria-hidden="true">★</span>
        <span aria-hidden="true">★</span>
        <span aria-hidden="true">★</span>
        <span aria-hidden="true">★</span>
        <span aria-hidden="true">★</span>
      </div>

      {/* Review text */}
      <blockquote className="mt-5 flex-1">
        <p className="text-base leading-7 text-gray-600">
          &ldquo;{review.review}&rdquo;
        </p>
      </blockquote>
    </article>
  );
}