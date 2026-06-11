"use client";

import { usePathname } from "next/navigation";

import { navItems } from "../../components/LinksItem";
import NavItem from "./NavItem";
import NavDropdown from "../../components/NavDropdown";

import { servicesData } from "@/ui/components/servicesData";
import { blogs } from "@/ui/web/blogs/blogsData";

const DesktopNav = () => {
  const pathname = usePathname();

  // SERVICES → dropdown format
  const servicesDropdown = servicesData.map((service) => ({
    label: service.title,
    href: `/services/${service.slug}`,
  }));

  // BLOGS → dropdown format
  const blogDropdown = blogs.map((blog) => ({
    label: blog.title,
    href: `/blogs/${blog.slug}`,
  }));

  return (
    <ul className="hidden md:flex space-x-10 items-center">
      {navItems.map((item) => {
        // SERVICES
        if (item.label === "Services") {
          return (
            <NavDropdown
              key={item.label}
              item={item}
              options={servicesDropdown}
              viewAllLabel="View All Services"
              viewAllHref="/all-services"
              activeMatch={["/services", "/all-services"]}
            />
          );
        }

        // BLOGS
        if (item.label === "Blogs") {
          return (
            <NavDropdown
              key={item.label}
              item={item}
              options={blogDropdown}
              viewAllLabel="View All Blogs"
              viewAllHref="/blogs"
              activeMatch={["/blogs"]}
            />
          );
        }

        // NORMAL LINKS
        return (
          <li key={item.label}>
            <NavItem
              label={item.label}
              href={item.href}
              className={
                pathname === item.href
                  ? "text-[rgb(var(--color-primary))]"
                  : "text-link"
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default DesktopNav;
