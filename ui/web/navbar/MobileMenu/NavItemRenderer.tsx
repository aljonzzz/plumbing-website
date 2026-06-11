"use client";

import React from "react";
import { useRouter } from "next/navigation";
import MobileDropdown from "../../../components/MobileDropdown";
import NavItem from "../NavItem";

type Props = {
  item: any;
  iconMap: any;
  open: any;
  toggle: (key: any) => void;
  closeMenu: () => void;
  servicesData: any[];
  blogs: any[];
};

const NavItemRenderer: React.FC<Props> = ({
  item,
  iconMap,
  open,
  toggle,
  closeMenu,
  servicesData,
  blogs,
}) => {
  const router = useRouter();
  const Icon = iconMap[item.icon];

  // SERVICES
  if (item.label === "Services") {
    return (
      <MobileDropdown
        label="Services"
        Icon={Icon}
        isOpen={open.services}
        onToggle={() => toggle("services")}
      >
        {servicesData.map((service) => (
          <button
            key={service.slug}
            onClick={() => {
              router.push(`/services/${service.slug}`);
              closeMenu();
            }}
            className="text-left text-sm text-link"
          >
            • {service.title}
          </button>
        ))}

        <button
          onClick={() => {
            router.push("/all-services");
            closeMenu();
          }}
          className="text-left text-sm font-semibold text-link"
        >
          View All Services
        </button>
      </MobileDropdown>
    );
  }

  // BLOGS
  if (item.label === "Blogs") {
    return (
      <MobileDropdown
        label="Blogs"
        Icon={Icon}
        isOpen={open.blogs}
        onToggle={() => toggle("blogs")}
      >
        {blogs.map((blog) => (
          <button
            key={blog.slug}
            onClick={() => {
              router.push(`/blogs/${blog.slug}`);
              closeMenu();
            }}
            className="text-left text-sm text-link"
          >
            • {blog.title}
          </button>
        ))}

        <button
          onClick={() => {
            router.push("/blogs");
            closeMenu();
          }}
          className="text-left text-sm font-semibold text-link"
        >
          View All Blogs
        </button>
      </MobileDropdown>
    );
  }

  // NORMAL ITEM
  return (
    <li className="flex items-center gap-3">
      <Icon className="text-link" />
      <NavItem
        label={item.label}
        href={item.href}
        onClick={closeMenu}
        className="text-link"
      />
    </li>
  );
};

export default NavItemRenderer;
