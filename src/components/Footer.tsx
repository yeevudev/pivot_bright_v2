import { Link } from "react-router-dom";
import logoTransparent from "@/assets/logo-transparent.png";

const mainLinks = [
  { label: "Services", href: "#services", external: false },
  { label: "How We Work", href: "#engagement", external: false },
  { label: "About", href: "#about", external: false },
  { label: "Contact", href: "#contact", external: false },
];

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground/[0.03] border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex items-center mb-4">
              <img
                src={logoTransparent}
                alt="PivotPoint Pricing & Legal Ops"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Strategic legal operations consulting—helping law firms and in-house teams win on pricing, realization, and value delivery.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground font-semibold text-sm mb-4">Legal</h4>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-muted-foreground text-sm">
            © 2026 PivotPoint Pricing & Legal Ops. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Memberships: Legal Value Network · True Value Partnership Institute · LMA · Buying Legal Council
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
