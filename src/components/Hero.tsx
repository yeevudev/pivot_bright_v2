import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import sandiego from "@/assets/sandiego.png";

const whoWeServe = [
  "Corporate legal ops & in-house counsel seeking predictable costs, outcome-based partnerships, and cleaner variance.",
  "Mid-size law firm partners & pricing leaders who need to win AFAs, protect realization, and rein in discounting.",
  "Practice leaders & COOs building pricing governance, budgeting discipline, and faster matter scoping.",
  "GC/CFO stakeholders who want fewer surprises and clear value reporting.",
];

const differentiators = [
  { label: "Pricing & value specialists", detail: "deep focus on AFAs, realization, and partner enablement (not generic ops)." },
  { label: "Fractional executive leadership", detail: "Head of Pricing/Legal Ops impact without adding FTE headcount." },
  { label: "Outcome-first approach", detail: "we track realization, discount rate, budget variance, cycle time." },
  { label: "Playbooks + operationalization", detail: "guardrails, approvals, and dashboards embedded in tools you already use." },
  { label: "Both sides of the table", detail: "experience with law firms and corporate legal departments, so incentives stay aligned." },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* San Diego skyline photo */}
      <img
        src={sandiego}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Light navy overlay — lets the skyline breathe */}
      <div className="absolute inset-0 bg-primary/50" aria-hidden />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/70 to-transparent" aria-hidden />

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Glass card — badge + headline + subheading + CTAs */}
          <div
            className="bg-primary/60 backdrop-blur-md rounded-3xl border border-primary-foreground/15 px-8 py-12 mb-8 animate-fade-up shadow-2xl shadow-black/30"
            style={{ animationDelay: "0.05s" }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
                Strategic Legal Operations Consulting
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-primary-foreground mb-6 text-balance leading-[1.05]">
              Transform Your Legal
              <span className="block mt-1">
                <span className="text-secondary drop-shadow-sm">Pricing</span>{" "}
                <span className="text-primary-foreground/90">Strategy</span>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 font-body leading-relaxed">
              We help law firms and legal departments optimize pricing, streamline operations, and unlock sustainable partnerships through data-driven alternative fee strategies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" className="shadow-lg shadow-black/30" asChild>
                <a href="mailto:rfbrackett@pivotpointpricing.com">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#services">Learn More</a>
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div
            className="mt-4 flex items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.42s" }}
          >
            <div className="flex-1 h-px bg-primary-foreground/20" />
            <span className="text-primary-foreground/50 text-xs uppercase tracking-widest font-medium">
              Who We Serve & What Sets Us Apart
            </span>
            <div className="flex-1 h-px bg-primary-foreground/20" />
          </div>

          {/* Two-column info cards */}
          <div
            className="mt-8 grid md:grid-cols-2 gap-5 text-left animate-fade-up"
            style={{ animationDelay: "0.48s" }}
          >
            {/* Who We Serve */}
            <div className="bg-primary/65 rounded-2xl p-6 border border-primary-foreground/20 backdrop-blur-md hover:bg-primary/70 transition-colors">
              <h3 className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-secondary" />
                Who We Serve
              </h3>
              <ul className="space-y-3">
                {whoWeServe.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/70 mt-1.5 flex-shrink-0" />
                    <span className="text-primary-foreground/75 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What Sets Us Apart */}
            <div className="bg-primary/65 rounded-2xl p-6 border border-primary-foreground/20 backdrop-blur-md hover:bg-primary/70 transition-colors">
              <h3 className="text-secondary font-semibold text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-4 h-px bg-secondary" />
                What Sets Us Apart
              </h3>
              <ul className="space-y-3">
                {differentiators.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/70 mt-1.5 flex-shrink-0" />
                    <span className="text-primary-foreground/75 text-sm leading-relaxed">
                      <strong className="text-primary-foreground font-semibold">{item.label}</strong>
                      {" — "}
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="mt-12 flex justify-center animate-fade-up" style={{ animationDelay: "0.55s" }}>
            <a
              href="#services"
              className="flex flex-col items-center gap-1 text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors group"
              aria-label="Scroll to services"
            >
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade to page background */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
