import { Page } from "@/context/activePage";

export interface NavLinkProps {
  title: string;
  href: string;
  page: Page;
}

export const navLinks: NavLinkProps[] = [
  {
    title: "Home",
    href: "/",
    page: Page.HOME,
  },
  {
    title: "Contact",
    href: "/contact",
    page: Page.CONTACT,
  },
  {
    title: "Experience",
    href: "/experience",
    page: Page.EXPERIENCE,
  },
];
