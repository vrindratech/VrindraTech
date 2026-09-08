"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaPlay } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Mitesh Bourashi",
    designation: "Founder & CEO",
    company: "JupitoData",
    image: "/images/jupitoclient.png",
    logo: "/images/jupitodatalogo.png",
    rating: 5,
    video: "/Projects/client-feedbacks.mp4",
  },

  {
    id: 2,
    name: "Anil Gupta",
    designation: "Founder & Owner",
    company: "Gupta Mobiles",
    image: "/images/gmclient.png",
    logo: "/images/guptamobileslogo.png",
    rating: 5,
    review:
      "An amazing team to work with. Every detail was carefully planned and implemented. The final website exceeded our expectations in both design and speed.",
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({
  item,
}: {
  item: Testimonial;
}) {
  return (
    <article
      className="
        group
        relative
        flex
        w-full
        max-w-[460px]
        flex-shrink-0
        overflow-hidden
        rounded-[30px]
        border
        border-slate-200/80
        bg-white
        p-7
        shadow-[0_15px_50px_rgba(15,23,42,0.07)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-indigo-200
        hover:shadow-[0_25px_70px_rgba(79,70,229,0.12)]
        sm:p-8
      "
    >
      {/* =====================================================
          DECORATIVE GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-44
          w-44
          rounded-full
          bg-gradient-to-br
          from-indigo-100
          via-blue-100
          to-cyan-100
          opacity-60
          blur-3xl
        "
      />

      {item.video && (
        <div
          className="
            pointer-events-none
            absolute
            -left-20
            top-36
            h-52
            w-52
            rounded-full
            bg-orange-400/10
            blur-3xl
          "
        />
      )}

      <div className="relative z-10 flex h-full w-full flex-col">

        {/* =====================================================
            RATING + CLIENT IMAGE
        ===================================================== */}

        <div className="flex items-start justify-between">

          {/* Rating */}

          <div className="flex items-center gap-1 pt-2">
            {Array.from({ length: item.rating }).map((_, index) => (
              <FaStar
                key={index}
                className="
                  text-[17px]
                  text-yellow-400
                "
              />
            ))}
          </div>

          {/* Client Image */}

          <Image
            src={item.image}
            alt={`${item.name} - ${item.designation}`}
            width={100}
            height={100}
            className="
              h-34
              w-34
              rounded-full
              border-[4px]
              border-indigo-100
              object-cover
              shadow-md
            "
          />
        </div>

        {/* =====================================================
            VIDEO TESTIMONIAL
        ===================================================== */}

        {item.video ? (
          <div
            className="
              relative
              mt-6
              w-full
              overflow-hidden
              rounded-[24px]
              border
              border-orange-100
              bg-slate-950
              shadow-[0_18px_50px_rgba(15,23,42,0.16)]
            "
          >
            <video
              controls
              playsInline
              preload="metadata"
              className="
                block
                h-[260px]
                w-full
                object-cover
                sm:h-[290px]
              "
            >
              <source
                src={item.video}
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
           
          </div>
        ) : (

          /* ===================================================
             WRITTEN REVIEW
          =================================================== */

      <div
  className="
    relative
    mt-6
    flex
    min-h-[260px]
    flex-1
    flex-col
    justify-center
  "
>
  {/* Opening Quote */}

  <span
    className="
      mb-1
      block
      text-5xl
      font-serif
      font-black
      leading-none
      text-indigo-500
    "
    aria-hidden="true"
  >
    “
  </span>

  {/* Review Text */}

  <p
    className="
      text-[17px]
      font-medium
      leading-8
      text-slate-600
      sm:text-[18px]
    "
  >
    {item.review}
  </p>

  {/* Closing Quote */}

  <span
    className="
      mt-2
      block
      self-end
      text-5xl
      font-serif
      font-black
      leading-none
      text-indigo-500
    "
    aria-hidden="true"
  >
    ”
  </span>
</div>
        )}

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className="
            my-7
            h-px
            bg-gradient-to-r
            from-transparent
            via-slate-200
            to-transparent
          "
        />

        {/* =====================================================
            CLIENT INFORMATION
        ===================================================== */}

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-5
          "
        >
          {/* Client Details */}

          <div className="min-w-0">

            <h3
              className="
                truncate
                text-[18px]
                font-bold
                text-slate-900
              "
            >
              {item.name}
            </h3>

            <p
              className="
                mt-1
                text-[15px]
                font-medium
                text-slate-500
              "
            >
              {item.designation}
            </p>

            <p
              className="
                mt-1
                text-[15px]
                font-semibold
                text-indigo-600
              "
            >
              {item.company}
            </p>
          </div>

          {/* =================================================
              COMPANY LOGO
          ================================================= */}

          <div
            className="
              flex
              h-[76px]
              w-32
              flex-shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-slate-100
              bg-white
              p-3
              shadow-sm
              transition-all
              duration-300
              group-hover:border-indigo-100
              group-hover:shadow-md
            "
          >
            <Image
              src={item.logo}
              alt={`${item.company} logo`}
              width={140}
              height={70}
              className="
                h-14
                w-full
                object-contain
              "
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#F8FBFF]
        py-24
        sm:py-28
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-52
          -top-40
          h-[650px]
          w-[650px]
          rounded-full
          bg-blue-400/10
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-52
          top-0
          h-[650px]
          w-[650px]
          rounded-full
          bg-pink-300/15
          blur-[180px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-80
          left-1/2
          h-[750px]
          w-[850px]
          -translate-x-1/2
          rounded-full
          bg-indigo-400/10
          blur-[220px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div className="relative mx-auto max-w-[1200px]">

        {/* ===================================================
            HEADING
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="px-6 text-center"
        >
          {/* Label */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-indigo-200
              bg-indigo-50
              px-5
              py-2
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
              text-indigo-600
              sm:text-sm
            "
          >
            Client Testimonials
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              sm:text-5xl
              lg:text-6xl
            "
          >
            What Our{" "}

            <span
              className="
                bg-gradient-to-r
                from-indigo-600
                via-blue-500
                to-violet-500
                bg-clip-text
                text-transparent
              "
            >
              Clients Say
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-base
              leading-7
              text-slate-600
              sm:text-lg
              sm:leading-8
            "
          >
            We build long-term partnerships by delivering premium digital
            experiences, transparent communication and reliable technical
            expertise.
          </p>
        </motion.div>

        {/* ===================================================
            TWO TESTIMONIAL CARDS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            flex
            flex-col
            items-center
            justify-center
            gap-8
            px-6
            sm:mt-20
            lg:flex-row
            lg:items-stretch
          "
        >
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={item}
            />
          ))}
        </motion.div>

        {/* ===================================================
            TRUST LINE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-3
            px-6
          "
        >
          <div
            className="
              h-px
              w-10
              bg-slate-200
              sm:w-16
            "
          />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.16em]
              text-slate-400
              sm:text-sm
            "
          >
            Real experiences. Real results.
          </span>

          <div
            className="
              h-px
              w-10
              bg-slate-200
              sm:w-16
            "
          />
        </motion.div>
      </div>
    </section>
  );
}