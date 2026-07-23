import Image from "next/image";
import Link from "next/link";

const specialisations = [
    "Diabetes",
    "Gastroenterology",
    "Pulmonology",
    "Nephrology",
    "Cardiology",
    "Neurology",
];

const experience = [
    {
        role: "Chief Medical Officer / Commandant (Medical)",
        organisation: "Central Armed Police Force Hospital",
        location: "Government of India",
    },
    {
        role: "Senior Medical Officer",
        organisation: "United Nations Mission",
        location: "Democratic Republic of Congo",
    },
    {
        role: "Junior Resident Doctor",
        organisation: "RBTB Hospital (RBIPMT)",
        location: "Kingsway Camp, New Delhi",
    },
];

const certifications = [
    {
        title: "Certified MD in General Medicine",
        description:
            "Advanced medical specialization in General Medicine with extensive clinical expertise.",
    },
    {
        title: "Advanced Medical Procedures",
        description:
            "Expertise in paracentesis, ICD insertion, bone marrow aspiration and biopsy procedures.",
    },
    {
        title: "Critical Care & Hospital Administration",
        description:
            "Experienced in hospital management, emergency care, and critical care administration.",
    },
];

const publications = [
    {
        category: "COVID-19 Research",
        title: "COVID-19 Patient Management Research Publication",
        journal: "International Journal of Health and Clinical Research",
        url: "https://ijhcr.com/index.php/ijhcr/article/view/1212",
    },
    {
        category: "Diabetes Research",
        title: "Type 1 Diabetes Research Publication",
        journal: "International Journal of Health Sciences and Research",
        url: "https://www.academia.edu/download/64117206/1.pdf",
    },
];

const memberships = [
    {
        title: "Indian Medical Association",
        description:
            "Active member of the Indian Medical Association (IMA), contributing to professional medical excellence and healthcare advancement.",
    },
    {
        title: "Association of Physicians of India",
        description:
            "Member of the Association of Physicians of India (API), dedicated to advancing clinical medicine and physician collaboration.",
    },
];

export default function DoctorsAbout() {
    return (
        <section
            id="doctors"
            className="overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
            <div className="mx-auto max-w-7xl">
                {/* Page introduction */}
                <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                        Meet Our Doctors
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                        Experienced Medical Specialists
                    </h1>

                    <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                        Meet the experienced doctors providing comprehensive and
                        specialist medical care at Amrit Multispeciality Clinic in Greater
                        Noida.
                    </p>
                </div>

                {/* Dr. Niraj main profile */}
                <article id="niraj" className="scroll-mt-28">
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Doctor photographs */}
                        <div className="relative mx-auto w-full max-w-[560px] pb-16 sm:pb-20 lg:mx-0">
                            {/* Primary photograph */}
                            <div className="relative h-[430px] overflow-hidden rounded-3xl bg-green-50 shadow-xl sm:h-[580px]">
                                <Image
                                    src="/nirajsircoat.jpeg"
                                    alt="Dr. Niraj Kumar Mishra, Senior Consultant in General Medicine"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Secondary uniform photograph */}
                            <div className="absolute bottom-0 right-3 h-40 w-32 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-2xl sm:right-6 sm:h-56 sm:w-44 lg:right-[-20px]">
                                <Image
                                    src="/nirajpolice.jpeg"
                                    alt="Dr. Niraj Kumar Mishra during his medical service"
                                    fill
                                    sizes="176px"
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Experience badge */}
                            <div className="absolute bottom-3 left-3 rounded-2xl border border-green-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:px-5 sm:py-4">
                                <p className="text-2xl font-bold text-green-800 sm:text-3xl">
                                    16+
                                </p>
                                <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                                    Years of Experience
                                </p>
                            </div>
                        </div>

                        {/* Doctor information */}
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                                Senior Consultant · General Medicine
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                                Dr. Niraj Kumar Mishra
                            </h2>

                            <p className="mt-3 text-base font-semibold leading-7 text-green-700 sm:text-lg">
                                Amrit Multispeciality Clinic &amp; Sharda Care Healthcity
                            </p>

                            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
                                <p>
                                    Dr. Niraj is an experienced physician with over 16 years of
                                    expertise in General Medicine. He earned his MD from Command
                                    Hospital, Indian Armed Forces, Western Command, Chandimandir
                                    (Pt. B.D. Sharma Medical University, Rohtak), and his MBBS
                                    from JIPMER, Pondicherry.
                                </p>

                                <p>
                                    His areas of specialisation include Diabetes,
                                    Gastroenterology, Pulmonology, Nephrology, Cardiology, and
                                    Neurology.
                                </p>

                                <p>
                                    He has managed 200-bedded speciality hospitals, served with
                                    the United Nations in Africa, and published research on Type
                                    1 Diabetes and COVID-19.
                                </p>
                            </div>

                            {/* Specialisation tags */}
                            <div className="mt-7">
                                <h3 className="mb-4 text-lg font-bold text-green-950">
                                    Areas of Specialisation
                                </h3>

                                <div className="flex flex-wrap gap-2.5">
                                    {specialisations.map((specialisation) => (
                                        <span
                                            key={specialisation}
                                            className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-800"
                                        >
                                            {specialisation}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Appointment button */}
                            <Link
                                href="/contact?doctor=niraj#appointment"
                                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-center text-base font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
                            >
                                Book Appointment with Dr. Niraj
                            </Link>
                        </div>
                    </div>

                    {/* Professional experience */}
                    <div className="mt-20 lg:mt-28">
                        <div className="mx-auto mb-10 max-w-3xl text-center">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                                Professional Journey
                            </p>

                            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                                Professional Experience
                            </h2>
                        </div>

                        <div className="mx-auto max-w-4xl">
                            <div className="relative space-y-6 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-0.5 before:bg-green-200 sm:before:left-[27px]">
                                {experience.map((item, index) => (
                                    <div
                                        key={item.role}
                                        className="relative flex items-start gap-5 sm:gap-7"
                                    >
                                        {/* Timeline number */}
                                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-green-700 text-sm font-bold text-white shadow-md sm:h-14 sm:w-14 sm:text-base">
                                            {index + 1}
                                        </div>

                                        {/* Experience card */}
                                        <div className="flex-1 rounded-2xl border border-green-100 bg-green-50/50 p-5 shadow-sm sm:p-7">
                                            <h3 className="text-lg font-bold leading-7 text-green-950 sm:text-xl">
                                                {item.role}
                                            </h3>

                                            <p className="mt-2 font-semibold text-green-700">
                                                {item.organisation}
                                            </p>

                                            <p className="mt-1 text-sm text-gray-600 sm:text-base">
                                                {item.location}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications, publications and memberships */}
                    <div className="mt-20 lg:mt-28">
                        <div className="grid gap-6 lg:grid-cols-3 lg:gap-7">
                            {/* Certifications */}
                            <InfoColumn title="Certifications">
                                {certifications.map((certification) => (
                                    <InfoCard
                                        key={certification.title}
                                        icon="✓"
                                        title={certification.title}
                                        description={certification.description}
                                    />
                                ))}
                            </InfoColumn>

                            {/* Publications */}
                            <InfoColumn title="Publications">
                                {publications.map((publication) => (
                                    <div
                                        key={publication.title}
                                        className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6"
                                    >
                                        <div className="mb-5 flex items-start justify-between gap-3">
                                            <span className="rounded-full bg-green-200 px-3 py-1 text-xs font-bold text-green-950">
                                                {publication.category}
                                            </span>

                                            <a
                                                href={publication.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="shrink-0 rounded-xl bg-white px-4 py-2 text-sm font-bold text-green-800 transition hover:bg-green-50"
                                            >
                                                Open →
                                            </a>
                                        </div>

                                        <h3 className="text-xl font-bold leading-8 text-white sm:text-2xl">
                                            {publication.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-green-100">
                                            {publication.journal}
                                        </p>
                                    </div>
                                ))}
                            </InfoColumn>

                            {/* Memberships */}
                            <InfoColumn title="Memberships">
                                {memberships.map((membership) => (
                                    <InfoCard
                                        key={membership.title}
                                        icon="+"
                                        title={membership.title}
                                        description={membership.description}
                                    />
                                ))}
                            </InfoColumn>
                        </div>
                    </div>

                    {/* Final appointment CTA */}
                    <div className="mt-20 overflow-hidden rounded-3xl bg-green-50 px-5 py-10 text-center sm:px-10 sm:py-12 lg:mt-24 lg:px-16">
                        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                            Book a Consultation
                        </p>

                        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                            Consult Dr. Niraj Kumar Mishra
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                            Book an appointment for consultation in General Medicine and
                            related medical conditions at Amrit Multispeciality Clinic.
                        </p>

                        <Link
                            href="/contact?doctor=niraj#appointment"
                            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-7 py-3 text-center font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
                        >
                            Book Appointment with Dr. Niraj
                        </Link>
                    </div>
                </article>
                        
                         {/* ================================
    DR. SHUBHAM ANANT
================================ */}

<article
    id="shubham"
    className="mt-24 scroll-mt-28 border-t border-green-100 pt-16 sm:mt-28 sm:pt-20 lg:mt-32 lg:pt-24"
>
    {/* Doctor introduction */}
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Doctor photograph */}
        <div className="relative mx-auto w-full max-w-[520px] pb-8 lg:mx-0">
            <div className="relative h-[430px] overflow-hidden rounded-3xl bg-green-50 shadow-xl sm:h-[560px]">
                <Image
                    src="/anantsir.jpeg"
                    alt="Dr. Shubham Anant, Consultant in Orthopaedics"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                />
            </div>

            {/* Experience badge */}
            <div className="absolute bottom-0 left-3 rounded-2xl border border-green-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur sm:left-6 sm:px-5 sm:py-4">
                <p className="text-2xl font-bold text-green-800 sm:text-3xl">
                    13+
                </p>

                <p className="text-xs font-semibold text-gray-600 sm:text-sm">
                    Years of Experience
                </p>
            </div>
        </div>

        {/* Doctor information */}
        <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                Consultant · Orthopaedics
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                Dr. Shubham Anant
            </h2>

            <p className="mt-3 text-xl font-bold text-green-800">
                MBBS, MS
            </p>

            <p className="mt-3 text-base font-semibold leading-7 text-green-700 sm:text-lg">
                Amrit Multispeciality Clinic &amp; Sharda Care – Healthcity
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                    Dr. Shubham Anant is a Consultant in the Department of Orthopaedics at Amrit Multispeciality Clinic and Sharda Care – Healthcity.
                    He earned his MS in Orthopaedics from M. J. P. Rohilkhand University and has done his fellowship in Robotics knee joint replacement from BLK Max Hospital, New Delhi.
He has done his Senior residency from Safdarjung Hospital(Sports Injury Centre & Central Institute of Orthopedics)
                </p>

                <p>
                    With over 13 years of experience, he specialises in joint replacements, sports injuries, arthroscopy, minimally invasive orthopaedic procedures, Orthopaedic Oncology and deformity correction.
                    He has done over 500 succesful shoulder and knee arthroscopy Surgeries and a wide range of musculoskeletal pathologies.
                </p>
            </div>

            <Link
                href="/contact?doctor=shubham#appointment"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-center text-base font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
            >
                Book Appointment with Dr. Shubham
            </Link>
        </div>
    </div>

    {/* Specialisation & Expertise */}
    <div className="mt-20 lg:mt-28">
        <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Areas of Expertise
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                Specialisation &amp; Expertise
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                Comprehensive orthopaedic care for joint conditions, sports
                injuries, spine disorders, fractures, trauma, and minimally
                invasive procedures.
            </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
                "Joint Replacement Surgery (Knee & Hip)",
                "Arthroscopy & Sports Injury Management",
                "Bone Cancer & Limb Reconstruction Surgeries",
                "Complex Fracture & Trauma Care",
                "Minimally Invasive Orthopaedic Surgery",
                "Ligament Reconstruction & Rotator Cuff Repair",
                "Osteoarthritis & Rheumatoid Arthritis Management",
            ].map((expertise) => (
                <div
                    key={expertise}
                    className="flex min-h-[100px] items-center rounded-2xl border border-green-100 bg-green-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
                >
                    <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                        ✓
                    </span>

                    <p className="font-bold leading-6 text-green-950">
                        {expertise}
                    </p>
                </div>
            ))}
        </div>
    </div>

    {/* Certifications and memberships */}
    <div className="mt-20 lg:mt-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">

            {/* Certifications & Professional Expertise */}
            <InfoColumn title="Certifications & Professional Expertise">

                <InfoCard
                    icon="✓"
                    title="Certified MS in Orthopaedics"
                    description="Advanced medical specialisation in Orthopaedics with extensive clinical expertise in musculoskeletal conditions, trauma, and surgical care."
                />

                <InfoCard
                    icon="✓"
                    title="Fellowship in Knee Joint Replacement"
                    description="Advanced fellowship training focused on knee joint replacement procedures and modern surgical techniques."
                />

                <InfoCard
                    icon="✓"
                    title="Complex Joint & Spine Procedures"
                    description="Known for successful outcomes in complex joint and spine procedures."
                />

                <InfoCard
                    icon="✓"
                    title="Excellence in Orthopaedic Care"
                    description="Recognised for excellence in orthopaedic surgery and a patient-centred approach to treatment."
                />

            </InfoColumn>

            {/* Professional memberships */}
            <InfoColumn title="Professional Memberships">

                {/*<InfoCard
                    icon="+"
                    title="Indian Orthopaedic Association"
                    description="Professional member of the Indian Orthopaedic Association, contributing to advancement and excellence in orthopaedic care."
                />*/}

                <InfoCard
                    icon="+"
                    title="Delhi Orthopaedic Association"
                    description="Associated with the professional orthopaedic community in Delhi and committed to the advancement of orthopaedic practice."
                />

                <InfoCard
                    icon="+"
                    title="AO Trauma Foundation"
                    description="Professional association with the global AO Trauma community focused on advancing fracture and trauma care."
                />

                <InfoCard
                    icon="+"
                    title="Association of Spine Surgeons of India"
                    description="Professional member of the Association of Spine Surgeons of India, focused on advancing spine care and surgical practice."
                />

            </InfoColumn>
        </div>
    </div>

    {/* Final appointment CTA */}
    <div className="mt-20 overflow-hidden rounded-3xl bg-green-50 px-5 py-10 text-center sm:px-10 sm:py-12 lg:mt-24 lg:px-16">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Book a Consultation
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
            Consult Dr. Shubham Anant
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Book an appointment for consultation regarding joint conditions,
            sports injuries, spine problems, fractures, arthritis, and other
            orthopaedic concerns at Amrit Multispeciality Clinic.
        </p>

        <Link
            href="/contact?doctor=shubham#appointment"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-7 py-3 text-center font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
        >
            Book Appointment with Dr. Shubham
        </Link>
    </div>
</article>

            {/* ================================
    DR. GAURAV SHARMA
================================ */}

<article
    id="gaurav"
    className="mt-24 scroll-mt-28 border-t border-green-100 pt-16 sm:mt-28 sm:pt-20 lg:mt-32 lg:pt-24"
>
    {/* Doctor introduction */}
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

        {/* Doctor photograph */}
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0">
            <div className="relative h-[430px] overflow-hidden rounded-3xl bg-green-50 shadow-xl sm:h-[560px]">
                <Image
                    src="/gauravsir.jpeg"
                    alt="Dr. Gaurav Sharma, General and Laparoscopic Surgeon"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                />
            </div>
        </div>

        {/* Doctor information */}
        <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                General &amp; Laparoscopic Surgeon
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl lg:text-5xl">
                Dr. Gaurav Sharma
            </h2>

            <p className="mt-3 text-xl font-bold leading-8 text-green-800">
                M.B.B.S., M.S., FIAGES, FMAS
            </p>

            <p className="mt-3 text-base font-semibold leading-7 text-green-700 sm:text-lg">
                General &amp; Laparoscopic Surgeon
            </p>

            <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 sm:text-lg">
                <p>
                    Dr. Gaurav Sharma is a highly experienced and dedicated
                    General &amp; Laparoscopic Surgeon committed to providing
                    advanced, safe, and patient-centered surgical care.
                </p>

                <p>
                    With extensive expertise in minimally invasive laparoscopic
                    procedures, he has successfully treated numerous patients
                </p>
            </div>

            {/* Appointment button */}
            <Link
                href="/contact?doctor=gaurav#appointment"
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-6 py-3 text-center text-base font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
            >
                Book Appointment with Dr. Gaurav
            </Link>
        </div>
    </div>

    {/* Specialisation & Expertise */}
    <div className="mt-20 lg:mt-28">
        <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-green-700">
                Areas of Expertise
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
                Specialisation &amp; Surgical Expertise
            </h2>

            <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                Consultation and specialist guidance for a range of general
                surgical and gastrointestinal conditions, including minimally
                invasive laparoscopic procedures.
            </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
                "Hernia Surgery",
                "Gallbladder Stone Surgery",
                "Appendix Surgery",
                "Piles Treatment",
                "Fissure Treatment",
                "Fistula Treatment",
                "Gastrointestinal Surgical Procedures",
                "General Surgical Treatments",
                "Minimally Invasive Laparoscopic Procedures",
            ].map((expertise) => (
                <div
                    key={expertise}
                    className="flex min-h-[100px] items-center rounded-2xl border border-green-100 bg-green-50/60 p-5 shadow-sm transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
                >
                    <span className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg font-bold text-white">
                        ✓
                    </span>

                    <p className="font-bold leading-6 text-green-950">
                        {expertise}
                    </p>
                </div>
            ))}
        </div>
    </div>

    {/* Certifications and memberships */}
    <div className="mt-20 lg:mt-28">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-7">

            {/* Qualifications & Fellowships */}
            <InfoColumn title="Qualifications & Fellowships">

                <InfoCard
                    icon="✓"
                    title="MBBS"
                    description="Bachelor of Medicine, Bachelor of Surgery."
                />

                <InfoCard
                    icon="✓"
                    title="MS"
                    description="Master of Surgery with advanced training in surgical diagnosis, treatment, and patient care."
                />

                <InfoCard
                    icon="✓"
                    title="FMAS"
                    description="Fellowship in Minimal Access Surgery, with specialised training in minimally invasive surgical procedures."
                />

                <InfoCard
                    icon="✓"
                    title="FIAGES"
                    description="Fellowship of the Indian Association of Gastrointestinal Endo Surgeons."
                />

            </InfoColumn>

            {/* Professional memberships */}
            <InfoColumn title="Professional Memberships">

                <InfoCard
                    icon="+"
                    title="Association of Surgeons of India (ASI)"
                    description="Life Member of the Association of Surgeons of India."
                />

                <InfoCard
                    icon="+"
                    title="Association of Minimal Access Surgeons of India (AMASI)"
                    description="Life Member of the Association of Minimal Access Surgeons of India."
                />

                <InfoCard
                    icon="+"
                    title="Indian Association of Gastrointestinal Endo Surgeons (IAGES)"
                    description="Member of the Indian Association of Gastrointestinal Endo Surgeons."
                />

            </InfoColumn>
        </div>
    </div>

    {/* Final appointment CTA */}
    <div className="mt-20 overflow-hidden rounded-3xl bg-green-50 px-5 py-10 text-center sm:px-10 sm:py-12 lg:mt-24 lg:px-16">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-green-700">
            Book a Consultation
        </p>

        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-bold tracking-tight text-green-950 sm:text-4xl">
            Consult Dr. Gaurav Sharma
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Book an appointment for specialist consultation regarding hernia,
            gallbladder stones, appendix conditions, piles, fissure, fistula,
            gastrointestinal conditions, and other general surgical concerns
            at Amrit Multispeciality Clinic.
        </p>

        <Link
            href="/contact?doctor=gaurav#appointment"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-green-700 px-7 py-3 text-center font-bold text-white shadow-lg transition hover:bg-green-800 hover:shadow-xl"
        >
            Book Appointment with Dr. Gaurav
        </Link>
    </div>
</article>

            </div>
        </section>
    );
}

type InfoColumnProps = {
    title: string;
    children: React.ReactNode;
};

function InfoColumn({ title, children }: InfoColumnProps) {
    return (
        <section className="rounded-3xl bg-green-900 p-5 shadow-xl sm:p-7">
            <h2 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
                {title}
            </h2>

            <div className="space-y-5">{children}</div>
        </section>
    );
}

type InfoCardProps = {
    icon: string;
    title: string;
    description: string;
};

function InfoCard({ icon, title, description }: InfoCardProps) {
    return (
        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-6">
            <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-300 text-xl font-bold text-green-950">
                    {icon}
                </span>

                <div>
                    <h3 className="text-lg font-bold leading-7 text-white sm:text-xl">
                        {title}
                    </h3>

                    <p className="mt-3 leading-7 text-green-100">{description}</p>
                </div>
            </div>
        </div>
    );
}