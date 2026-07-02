"use client";

import { motion } from "framer-motion";

export default function About() {

 const services = [
  "Verified Databases",
  "Lead Generation",
  "LinkedIn Research",
  "Email Discovery",
  "Company Profiling",
  "Market Research",
];

  return (

<section
  id = "about"
  className="relative overflow-hidden pt-20 pb-10"
  style={{
    backgroundColor: "#FFF9F5",
    backgroundImage: `
      linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)
    `,
    backgroundSize: "40px 40px",
  }}
>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.08),transparent_60%)]" />
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="grid lg:grid-cols-2 gap-20 items-center">

{/* LEFT */}

<motion.div

initial={{opacity:0,x:-40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.7}}

>

{/* Label */}

<span className="inline-flex items-center rounded-full bg-orange-100 text-orange-600 px-5 py-2 text-sm font-semibold tracking-[0.25em] uppercase">

ABOUT JUPITODATA

</span>

{/* Heading */}

<h2 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
  Your Custom
  <span className="block text-orange-500">
    B2B Research
  </span>
  Partner
</h2>

{/* Description */}

<p className="mt-8 text-lg leading-9 text-slate-600">
JupitoData helps businesses connect with verified companies and decision-makers through accurate business research, validated contact data and custom intelligence solutions built for sales, marketing and recruitment teams.
</p>

<p className="mt-6 text-lg leading-9 text-slate-600">
Every database is researched, verified and tailored to your business goals, ensuring higher response rates and better outreach performance.
</p>

{/* Service Pills */}

<div className="grid grid-cols-2 gap-4 mt-10">

{services.map((item,index)=>(

<motion.div

key={index}

initial={{opacity:0,y:20}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{delay:index*.08}}

className="flex items-center gap-3 rounded-full border border-orange-200 bg-orange-50 px-5 py-4"

>

<div className="w-3 h-3 rounded-full bg-orange-500"/>

<span className="font-medium text-slate-700">

{item}

</span>

</motion.div>

))}

</div>

</motion.div>

{/* RIGHT */}

<motion.div

initial={{opacity:0,x:40}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.8}}

className="relative flex justify-center"

>

<div className="relative w-full max-w-lg h-[520px]">
                {/* Center Circle */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="w-44 h-44 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_20px_60px_rgba(249,115,22,0.35)] flex flex-col items-center justify-center"
                >

                  <div className="text-5xl mb-2">
                     <img
                     src="/images/j.png"
                     alt="JupitoData"
                     className="h-14 w-auto"
                     />
                  </div>

                  <h3 className="text-white text-2xl font-bold text-center">
                  JupitoData
                  </h3>

                  <p className="text-orange-100 text-sm text-center">
                  Verified B2B Data
                  </p>

                </motion.div>

              </div>

              {/* Top Left */}

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 left-6 rounded-2xl bg-white border border-orange-100 shadow-xl px-5 py-4"
              >

                <div className="text-2xl mb-2">📧</div>

                <h4 className="font-semibold text-slate-900">
                  Email Discovery
                </h4>

                <p className="text-sm text-slate-500">
                  Verified Business Emails
                </p>

              </motion.div>

              {/* Top Right */}

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-12 right-4 rounded-2xl bg-white border border-orange-100 shadow-xl px-5 py-4"
              >

                <div className="text-2xl mb-2">🏢</div>

                <h4 className="font-semibold text-slate-900">
                  Company Profiles
                </h4>

                <p className="text-sm text-slate-500">
                  Verified Organizations
                </p>

              </motion.div>

              {/* Bottom Left */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-8 left-2 rounded-2xl bg-white border border-orange-100 shadow-xl px-5 py-4"
              >

                <div className="text-2xl mb-2">👤</div>

                <h4 className="font-semibold text-slate-900">
                  Decision Makers
                </h4>

                <p className="text-sm text-slate-500">
                  C-Level Contacts
                </p>

              </motion.div>

              {/* Bottom Right */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute bottom-10 right-6 rounded-2xl bg-white border border-orange-100 shadow-xl px-5 py-4"
              >

                <div className="text-2xl mb-2">📊</div>

                <h4 className="font-semibold text-slate-900">
                  Market Research
                </h4>

                <p className="text-sm text-slate-500">
                  Industry Insights
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}