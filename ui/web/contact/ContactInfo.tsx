import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "@/ui/components/Button";


const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:items-start gap-6">
{/* LOGO IMAGE */}
<div className="relative w-32 h-32 rounded-xl overflow-hidden">
  <Image
    src="/img/logooo.png"
    alt="Super Clean Logo"
    fill
    className="object-cover"
    priority
  />
</div>

      {/* DESCRIPTION */}
      <p className="text-muted text-center md:text-left max-w-sm">
Need a reliable plumber? Contact us anytime for fast, professional plumbing and heating services you can count on.

      </p>

      {/* CONTACT DETAILS */}
      <div className="space-y-3 w-full">
        <div className="flex items-center gap-3">
          <Phone
            size={18}
            className="text-[rgb(var(--color-primary))]"
          />
          <a
            href="tel:+557483483934"
            className="text-main text-dark hover:text-[rgb(var(--color-primary))] transition-colors"
          >
            +(557) 483 483 934
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail
            size={18}
            className="text-[rgb(var(--color-primary))]"
          />
          <a
            href="mailto:support@pipewiseplumbing.com"
            className="text-main text-dark hover:text-[rgb(var(--color-primary))] transition-colors"
          >
            support@pipewiseplumbing.com
          </a>
        </div>
      </div>

      {/* CALL NOW BUTTON */}
        <a href="tel:+557483483934">
          <Button
            variant="secondary"
            className="w-full sm:w-auto py-3 px-6 flex items-center justify-center gap-2"
          >
            Call Now
          </Button>
        </a>
    </div>
  );
};

export default ContactInfo;
