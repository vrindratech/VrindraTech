"use client";

import Image from "next/image";

const processItems = [
  {
    title: "Why Agile",
    heading: "Why Agile works for modern software teams",
    points: [
      "Faster feedback with short delivery cycles.",
      "Continuous improvement through regular reviews.",
      "Flexible planning so priorities can shift with market needs.",
    ],
    image: "/images/Agile.png",
    imageSide: "left",
  },
  {
    title: "Why Trust Us",
    heading: "Why businesses choose us for dependable delivery",
    points: [
      "Transparent communication and clear milestones.",
      "Dedicated teams aligned to your product vision.",
      "Proven delivery track record across industries.",
    ],
    image: "/images/Trust.png",
    imageSide: "right",
  },
  
];

export default function Process() {
  return (
    <section className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
            Our Process
          </span>
          <h2 className="mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl">
            How we help your business move faster and stay supported
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Every stage includes clear outcomes, trust-building support, growth-focused services, and reliable maintenance.
          </p>
        </div>

        <div className="space-y-20">
          {processItems.map((item, index) => {
            const isImageLeft = item.imageSide === "left";
            return (
              <div
                key={item.title}
                className={`grid gap-8 items-center lg:grid-cols-[1fr_1fr] ${
                  isImageLeft ? "lg:grid-flow-row" : "lg:grid-flow-row-dense"
                }`}
              >
                <div className={isImageLeft ? "lg:order-first" : "lg:order-last"}>
                  <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-lg">
                    <div className="relative h-[32rem] md:h-[36rem] lg:h-[40rem]">
                      <Image src={item.image} alt={item.title} fill className="object-contain object-center" />
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
                    {item.title}
                  </div>
                  <div className="space-y-6 rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-lg">
                    <h3 className="text-3xl font-bold text-slate-900">{item.heading}</h3>
                    <div className="space-y-4">
                      {item.points.map((point) => (
                        <div key={point} className="flex gap-4">
                          <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-700 text-sm font-bold text-white">
                            ✓
                          </span>
                          <p className="text-base leading-7 text-slate-700">{point}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
