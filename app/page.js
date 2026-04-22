"use client"; 
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Snowflake,
  Clock3,
  HardHat,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ChevronDown,
  Building2,
  ThermometerSun,
  Droplets,
  ClipboardCheck,
} from "lucide-react";

const faqs = [
  {
    q: "What is an Arctic Haven pod?",
    a: "An Arctic Haven pod is a climate-controlled jobsite cooling unit designed to give construction crews a dependable place to cool down, hydrate, regroup, and take safer breaks during extreme heat conditions.",
  },
  {
    q: "Who is it built for?",
    a: "It is built for general contractors, subcontractors, builders, and project teams that want to improve worker comfort, demonstrate heat-safety leadership, and bring a more professional break solution to active jobsites.",
  },
  {
    q: "How does the pilot program work?",
    a: "We place an Arctic Haven unit on a qualifying jobsite for a defined pilot period, align on logistics and usage expectations, and gather real-world feedback from your team so you can evaluate the impact before scaling.",
  },
  {
    q: "What can crews use the pod for?",
    a: "Crews can use the pod for cooling breaks, hydration, lunch breaks, short recovery periods, supervisor check-ins, and a more organized reset point during hot Texas workdays.",
  },
  {
    q: "Can the unit be placed on active construction sites?",
    a: "Yes. Arctic Haven is designed around practical jobsite deployment. Placement, access, and power requirements are reviewed with your team before installation to help ensure a smooth setup.",
  },
  {
    q: "How do we get started?",
    a: "Use the contact form below to request a conversation. We will reach out to discuss your site, crew size, timing, and whether a pilot program is the right fit.",
  },
];

function SectionTitle({ eyebrow, title, copy }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
      <p className="mt-4 text-base md:text-lg leading-7 text-slate-600">{copy}</p>
    </div>
  );
}

function StatCard({ icon: Icon, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-teal-300">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-slate-600 leading-7">{copy}</p>
    </motion.div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-base md:text-lg font-medium text-slate-900">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-slate-600 leading-7">{a}</div>}
    </div>
  );
}

export default function ArcticHavenLandingPage() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-teal-300 shadow-sm">
              <img src="logo.png" alt="Arctic Haven Logo" className="h-10 w-10 object-contain" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Arctic Haven</p>
              <p className="text-sm font-semibold text-slate-900">Cooling pods for active jobsites</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#pod" className="text-sm font-medium text-slate-600 hover:text-slate-900">The Pod</a>
            <a href="#why" className="text-sm font-medium text-slate-600 hover:text-slate-900">Why It Matters</a>
            <a href="#how" className="text-sm font-medium text-slate-600 hover:text-slate-900">How It Works</a>
            <a href="#pilot" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pilot Program</a>
            <a href="#faq" className="text-sm font-medium text-slate-600 hover:text-slate-900">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Request a Call
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,148,136,0.12),transparent_28%),radial-gradient(circle_at_left,rgba(30,64,175,0.10),transparent_30%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-28">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-teal-800"
              >
                <ShieldCheck className="h-4 w-4" />
                Built for Workers Safety in All Weather Conditions 
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl"
              >
                Cooling and Heating Pods Built for Texas Crews to Stay Safe, Productive, and Compliant in Extreme Weather Conditions.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
              >
                Arctic Haven helps construction companies provide crews with a more dependable place to cool down, hydrate, and reset during demanding Texas workdays. The result is a more professional site experience built around safety, readiness, and respect for the workforce.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#pilot"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Explore the Pilot Program
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Talk With Our Team
                </a>
              </motion.div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Climate-controlled", "Air-conditioned relief for hot jobsite conditions"],
                  ["Contractor-focused", "Designed for practical deployment on active sites"],
                  ["Pilot-ready", "Simple way to evaluate value before expansion"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-teal-100 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_25px_60px_rgba(15,23,42,0.18)]">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.22em] text-teal-300">Field-ready concept</p>
                  <div className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">Premium industrial design</div>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.8),rgba(15,23,42,1))] p-6">
                  <div className="rounded-[1.35rem] border border-teal-400/20 bg-slate-900 p-5">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Interior environment</p>
                          <p className="mt-1 text-lg font-semibold">Cool-down space for crews</p>
                        </div>
                        <Snowflake className="h-8 w-8 text-teal-300" />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <Droplets className="h-5 w-5 text-teal-300" />
                          <p className="mt-3 text-sm font-semibold text-white">Hydration support</p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">A more organized recovery point for water and break-time essentials.</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                          <ClipboardCheck className="h-5 w-5 text-teal-300" />
                          <p className="mt-3 text-sm font-semibold text-white">Professional site experience</p>
                          <p className="mt-2 text-sm leading-6 text-slate-300">A visible sign that worker wellbeing and operational readiness matter.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                  {[
                    ["Cooling", "Focused relief"],
                    ["Comfort", "Structured breaks"],
                    ["Professionalism", "Crew-first presence"],
                  ].map(([value, label]) => (
                    <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-4">
                      <p className="text-sm font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="pod" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="What the pod is"
              title="A purpose-built cooling environment for crews working through tough conditions."
              copy="Arctic Haven gives contractors a cleaner, more organized, and more dependable alternative to improvised break setups. It is designed to support recovery, hydration, and reset moments without losing sight of the realities of active jobsites."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <StatCard
                icon={Snowflake}
                title="Climate-controlled relief"
                copy="A cooled interior environment that gives crews a real place to escape intense heat and regroup more effectively."
              />
              <StatCard
                icon={Droplets}
                title="Hydration-centered setup"
                copy="Supports a more intentional break routine where hydration and recovery are easier to maintain throughout the day."
              />
              <StatCard
                icon={HardHat}
                title="Made for jobsite realities"
                copy="Built around the needs of contractors who want practical deployment, clear value, and a more polished field operation."
              />
              <StatCard
                icon={Building2}
                title="Professional brand signal"
                copy="Creates a visible standard of care that reflects well on builders, GCs, trade partners, and project leadership."
              />
            </div>
          </div>
        </section>

        <section id="why" className="border-y border-slate-200 bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Why it matters"
                title="Heat stress is more than a comfort issue. It is a jobsite performance issue."
                copy="When crews are pushed by extreme temperatures, every contractor feels it. Arctic Haven helps create a more intentional break system that supports safer recovery, stronger morale, and a more disciplined field environment."
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: ThermometerSun,
                  title: "Better response to heat conditions",
                  copy: "A dedicated cooling space helps teams recover in a more structured way during high-temperature workdays.",
                },
                {
                  icon: Clock3,
                  title: "More organized breaks",
                  copy: "Instead of scattered downtime, crews have a consistent place to pause, cool down, and return to work with more focus.",
                },
                {
                  icon: ShieldCheck,
                  title: "Supports safety leadership",
                  copy: "Shows field teams, clients, and partners that worker wellbeing is being addressed proactively and professionally.",
                },
                {
                  icon: CheckCircle2,
                  title: "Improves site professionalism",
                  copy: "An intentional cooling solution elevates the standard of the site and reflects strong operational discipline.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="How it works"
              title="A straightforward process built for busy contractors."
              copy="We keep the path simple so your team can evaluate the concept quickly, coordinate jobsite placement, and see how Arctic Haven fits into real field operations."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                ["01", "Intro call", "We learn about your project type, crew needs, timeline, and whether a pilot makes sense."],
                ["02", "Site review", "We align on placement, power, access, and the basic operating logistics for the unit."],
                ["03", "Deployment", "The pod is placed on site so your crew can begin using it during active operations."],
                ["04", "Evaluation", "You review adoption, team feedback, and next-step opportunities for broader rollout."],
              ].map(([step, title, copy]) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">{step}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pilot" className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
              <div className="grid gap-10 px-6 py-10 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">Pilot program</p>
                  <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">Test Arctic Haven on a real jobsite before committing to a broader rollout.</h2>
                  <p className="mt-5 max-w-2xl text-base md:text-lg leading-8 text-slate-300">
                    Our pilot program is designed for construction companies that want to evaluate the concept in a real-world environment. It gives your team the opportunity to assess fit, gather crew feedback, and determine whether Arctic Haven should become part of your standard field setup.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      "Qualifying jobsite placement",
                      "Defined pilot timeframe",
                      "Operational alignment before setup",
                      "Team feedback and next-step review",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold text-white">Who should apply</h3>
                  <div className="mt-6 space-y-4">
                    {[
                      "General contractors managing active Texas jobsites",
                      "Trade partners looking for a stronger crew-support solution",
                      "Project teams that want a more professional heat-relief setup",
                      "Builders interested in evaluating value before scaling to more sites",
                    ].map((item) => (
                      <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
                        <p className="text-slate-200 leading-7">{item}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-teal-500 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-teal-400"
                  >
                    Ask About Pilot Availability
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-slate-200 bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <SectionTitle
              eyebrow="FAQ"
              title="Answers for contractors evaluating Arctic Haven."
              copy="Here are the questions we expect from project leaders, builders, and trade partners as they explore how Arctic Haven could fit their sites."
            />

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="Start the conversation about your next jobsite."
                copy="Tell us a little about your company, your site, and what you are looking for. We will follow up to discuss fit, logistics, and pilot program availability."
              />

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-teal-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="mt-1 text-slate-600">Add your sales or office number here</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-teal-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="mt-1 text-slate-600">Add your contact email here</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-teal-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Service area</p>
                    <p className="mt-1 text-slate-600">Greater Austin and surrounding construction markets</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">First name</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="First name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Last name</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="Last name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Company</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="Company name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="Phone number" />
                </div>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="Work email" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">Project location</label>
                  <input className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500" placeholder="City / region" />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">What are you looking for?</label>
                <select className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500">
                  <option>Request pilot program information</option>
                  <option>Discuss jobsite fit</option>
                  <option>Pricing and availability</option>
                  <option>General inquiry</option>
                </select>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-medium text-slate-700">Project details</label>
                <textarea
                  rows={6}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-teal-500"
                  placeholder="Tell us about your project, crew size, timeline, and what you want to explore."
                />
              </div>

              <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800">
                Submit Inquiry
                <ArrowRight className="h-4 w-4" />
              </button>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                This demo form is ready for your preferred form handling or CRM integration.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {year} Arctic Haven. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href="#pod" className="hover:text-slate-900">The Pod</a>
            <a href="#pilot" className="hover:text-slate-900">Pilot Program</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
