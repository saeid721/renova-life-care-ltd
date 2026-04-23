/**
 * Navigation Links — Centralized route definitions
 * Used by Navbar and Footer components.
 */

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/doctors" },
    { label: "Careers", href: "/careers" },
    { label: "News & Blog", href: "/blog" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
  services: [
    { label: "General Checkup", href: "/services/general-checkup" },
    { label: "Cardiology", href: "/services/cardiology" },
    { label: "Orthopedics", href: "/services/orthopedics" },
    { label: "Neurology", href: "/services/neurology" },
    { label: "Pediatrics", href: "/services/pediatrics" },
    { label: "Dental Care", href: "/services/dental-care" },
  ],
  support: [
    { label: "Book Appointment", href: "/appointment" },
    { label: "Patient Portal", href: "/patient-portal" },
    { label: "Insurance", href: "/insurance" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/renovalifecare", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com/company/renovalifecare", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/renovalifecare", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com/@renovalifecare", icon: "youtube" },
];
