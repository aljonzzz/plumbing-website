import { navItems } from "../../components/LinksItem";
import NavItem from "../navbar/NavItem";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="font-semibold mb-4 text-main text-white">
        Quick Links
      </h3>

      <ul className="space-y-2 text-sm">
        {navItems.map((item) => (
          <li key={item.href}>
            <NavItem
              label={item.label}
              href={item.href}
              className="text-footer-link"
              weight="font-normal"
              underline={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
