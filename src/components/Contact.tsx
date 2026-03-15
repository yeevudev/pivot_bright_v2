import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, Phone } from "lucide-react";
import sandiego from "@/assets/sandiego.png";

const promises = [
  "No commitment required — just a conversation",
  "30-minute focused call with Robert directly",
  "Leave with at least one concrete, actionable insight",
];

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* San Diego skyline photo */}
      <img
        src={sandiego}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Light navy overlay — lets the sunset show */}
      <div className="absolute inset-0 bg-primary/50" aria-hidden />

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/60 to-transparent" aria-hidden />

      <div className="container mx-auto px-6 py-28 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Glass card wrapping all content */}
          <div className="bg-primary/60 backdrop-blur-md rounded-3xl border border-primary-foreground/15 px-8 py-12 shadow-2xl shadow-black/30 text-center">
            <span className="text-secondary font-semibold text-xs uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-primary-foreground mt-4 mb-6 text-balance leading-tight">
              Ready to Transform
              <span className="block">Your Practice?</span>
            </h2>
            <p className="text-primary-foreground/75 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Schedule a complimentary consultation to discuss how PivotPoint can help you optimize pricing, streamline operations, and achieve sustainable growth.
            </p>

            {/* Promise list */}
            <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 pb-10 border-b border-primary-foreground/15">
              {promises.map((promise) => (
                <li key={promise} className="flex items-center gap-2.5 text-primary-foreground/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                  {promise}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="font-heading font-bold text-primary-foreground">Book a Free Consultation</p>
                <p className="text-primary-foreground/60 text-sm">30 minutes · no sales pressure · real insights</p>
              </div>
              <Button variant="hero" size="lg" className="sm:ml-auto shadow-lg shadow-black/30 gap-2 flex-shrink-0">
                <Calendar className="w-4 h-4" />
                Schedule Now
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
