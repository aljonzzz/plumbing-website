import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const FooterContact: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-main text-white">Contact</h3>

      <div className="space-y-3 text-sm text-gray-300">
        <div className="flex items-center gap-2">
          <Phone
            size={16}
            className="text-gray-300"
          />
          <span>+(557) 483 483 934</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail
            size={16}
            className="text-gray-300"
          />
          <span>support@pipewiseplumbing.com</span>
        </div>

        <div className="flex items-center gap-2">
          <MapPin
            size={16}
            className="text-gray-300"
          />
          <span>Texas City, USA</span>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
