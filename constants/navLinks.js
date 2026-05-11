export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Doctors", href: "/doctors" },
  { 
    label: "Services", 
    href: "/services",
    children: [
      { label: "Radiology and Imaging", href: "/services/radiology-imaging" },
      { label: "Cardiac Imaging", href: "/services/cardiac-imaging" },
      { label: "Gastroenterology Service", href: "/services/gastroenterology" },
      { label: "Clinical Neuro Physiology", href: "/services/neuro-physiology" },
      { label: "Pulmonology Service", href: "/services/pulmonology" },
      { label: "Urology", href: "/services/urology" },
      { label: "Fibroscan", href: "/services/fibroscan" },
      { label: "Colonoscopy", href: "/services/colonoscopy" },
    ]
  },
  { label: "Packages", href: "/packages" },
  { label: "Shop", href: "/shop" },
  { 
    label: "Media", 
    href: "/media",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "News", href: "/news" },
      { label: "Photos Gallery", href: "/photos" },
      { label: "Videos Gallery", href: "/videos" },
    ]
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Careers", href: "/careers" },
    { label: "Our Team", href: "/doctors" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "Book Appointment", href: "/appointment" },
    { label: "Patient Portal", href: "/patient-portal" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Complain & Advise", href: "/complain" },
  ],
};

export const loginLinks = [
  { label: "Sign Up", href: "/signup" },
  { label: "Signin", href: "/signin" },
];


export const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/renovalifecare", icon: "facebook" },
  { label: "LinkedIn", href: "https://linkedin.com/company/renovalifecare", icon: "linkedin" },
  { label: "Instagram", href: "https://instagram.com/renovalifecare", icon: "instagram" },
  { label: "YouTube", href: "https://youtube.com/@renovalifecare", icon: "youtube" },
];