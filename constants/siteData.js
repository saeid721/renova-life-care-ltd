/**
 * Site-wide content constants for Renova Life Care Ltd.
 * Edit this file to update all page content from a single location.
 */

export const siteConfig = {
  name: "Renova Life Care Ltd.",
  slogan: "Caring Today, Healthy Tomorrow.",
  tagline: "Bangladesh's Most Trusted Health Services Provider",
  description:
    "Renova Life Care Ltd. delivers world-class healthcare services across Bangladesh. From general checkups to specialized treatments, our expert doctors are here for you.",
  phone: "+880 1700-000000",
  phoneAlt: "+880 1711-000000",
  email: "info@renovalifecare.com",
  emergencyEmail: "emergency@renovalifecare.com",
  address: {
    street: "House #12,",
    area: "Gulshan 2",
    city: "Dhaka-1212",
    country: "Bangladesh",
  },
  hours: {
    weekday: "Saturday – Thursday: 8:00 AM – 10:00 PM",
    weekend: "Friday: 10:00 AM – 6:00 PM",
    emergency: "Emergency: 24/7",
  },
  established: "2010",
};

export const stats = [
  { value: "15,000+", label: "Happy Patients", icon: "users" },
  { value: "120+", label: "Expert Doctors", icon: "stethoscope" },
  { value: "35+", label: "Departments", icon: "building" },
  { value: "14", label: "Years Experience", icon: "award" },
];

export const services = [
  {
    id: 1,
    title: "General Checkup",
    description: "Comprehensive health assessment for early detection and prevention of diseases.",
    icon: "stethoscope",
    color: "#428a26",
    href: "/services/general-checkup",
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Advanced heart care with modern diagnostic tools and experienced cardiologists.",
    icon: "heart",
    color: "#e53e3e",
    href: "/services/cardiology",
  },
  {
    id: 3,
    title: "Orthopedics",
    description: "Bone, joint, and muscle care from fracture treatment to complex surgeries.",
    icon: "bone",
    color: "#007ab9",
    href: "/services/orthopedics",
  },
  {
    id: 4,
    title: "Neurology",
    description: "Expert care for brain, spine, and nervous system disorders.",
    icon: "brain",
    color: "#7c3aed",
    href: "/services/neurology",
  },
  {
    id: 5,
    title: "Pediatrics",
    description: "Specialized child healthcare from newborns through adolescence.",
    icon: "baby",
    color: "#f59e0b",
    href: "/services/pediatrics",
  },
  {
    id: 6,
    title: "Dental Care",
    description: "Complete oral health services including cosmetic and restorative dentistry.",
    icon: "smile",
    color: "#05417d",
    href: "/services/dental-care",
  },
  {
    id: 7,
    title: "Dermatology",
    description: "Skin, hair, and nail treatments with advanced dermatological procedures.",
    icon: "sparkles",
    color: "#86b437",
    href: "/services/dermatology",
  },
  {
    id: 8,
    title: "Ophthalmology",
    description: "Complete eye care including vision testing, surgery, and treatment.",
    icon: "eye",
    color: "#0891b2",
    href: "/services/ophthalmology",
  },
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Fariha Rahman",
    specialty: "Cardiologist",
    qualification: "MBBS, MD (Cardiology), FCPS",
    experience: "18 Years",
    image: "/images/doctors/doctor-1.jpg",
    available: "Mon, Wed, Thu",
    rating: 4.9,
    patients: "3,200+",
  },
  {
    id: 2,
    name: "Dr. Tariq Hossain",
    specialty: "Neurologist",
    qualification: "MBBS, MD (Neurology), PhD",
    experience: "22 Years",
    image: "/images/doctors/doctor-2.jpg",
    available: "Sun, Mon, Sat",
    rating: 4.8,
    patients: "2,800+",
  },
  {
    id: 3,
    name: "Dr. Nasreen Akter",
    specialty: "Pediatrician",
    qualification: "MBBS, DCH, FCPS (Pediatrics)",
    experience: "15 Years",
    image: "/images/doctors/doctor-3.jpg",
    available: "Tue, Wed, Sat",
    rating: 4.9,
    patients: "4,100+",
  },
  {
    id: 4,
    name: "Dr. Mahmudul Islam",
    specialty: "Orthopedic Surgeon",
    qualification: "MBBS, MS (Orthopedics), FRCS",
    experience: "20 Years",
    image: "/images/doctors/doctor-4.jpg",
    available: "Mon, Thu, Sat",
    rating: 4.7,
    patients: "2,500+",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rina Begum",
    location: "Mirpur, Dhaka",
    rating: 5,
    review:
      "Renova Life Care has completely changed my view of healthcare in Bangladesh. The doctors are incredibly knowledgeable, the staff is warm, and the facilities are spotless. My mother received excellent cardiac care here.",
    service: "Cardiology",
    avatar: "/images/testimonials/patient-1.jpg",
  },
  {
    id: 2,
    name: "Rafiqul Karim",
    location: "Chittagong",
    rating: 5,
    review:
      "I traveled from Chittagong specifically for my son's treatment at Renova. Dr. Nasreen is phenomenal with children. The online appointment system is very convenient. Highly recommended!",
    service: "Pediatrics",
    avatar: "/images/testimonials/patient-2.jpg",
  },
  {
    id: 3,
    name: "Sumaiya Jahan",
    location: "Uttara, Dhaka",
    rating: 5,
    review:
      "The orthopedic department is world-class. After years of knee pain, Dr. Mahmudul's surgery has given me my life back. Professional, caring, and truly life-changing.",
    service: "Orthopedics",
    avatar: "/images/testimonials/patient-3.jpg",
  },
  {
    id: 4,
    name: "Abdullah Al-Mamun",
    location: "Sylhet",
    rating: 4,
    review:
      "Excellent neurological care from Dr. Tariq. He explained everything clearly, listened patiently, and the treatment plan has been very effective. Clean environment and punctual appointments.",
    service: "Neurology",
    avatar: "/images/testimonials/patient-4.jpg",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Basic Care",
    price: "500",
    currency: "৳",
    period: "per visit",
    description: "Perfect for routine checkups and preventive care.",
    features: [
      "General Consultation",
      "Basic Health Screening",
      "Blood Pressure Check",
      "BMI Assessment",
      "Health Advice",
      "Follow-up (1 session)",
    ],
    notIncluded: ["Lab Tests", "Specialist Referral"],
    cta: "Get Started",
    color: "default",
    popular: false,
  },
  {
    id: 2,
    name: "Family Care",
    price: "2,500",
    currency: "৳",
    period: "per month",
    description: "Comprehensive coverage for your entire family.",
    features: [
      "4 Specialist Consultations",
      "Full Body Checkup",
      "Lab Tests (Basic Panel)",
      "Dental Checkup",
      "Eye Screening",
      "Priority Appointments",
      "Emergency Hotline",
    ],
    notIncluded: [],
    cta: "Choose Plan",
    color: "primary",
    popular: true,
  },
  {
    id: 3,
    name: "Premium Health",
    price: "6,000",
    currency: "৳",
    period: "per month",
    description: "All-inclusive premium healthcare with VIP treatment.",
    features: [
      "Unlimited Consultations",
      "Advanced Lab Tests",
      "Imaging & Radiology",
      "Annual Comprehensive Screening",
      "Home Visit Service",
      "Dedicated Health Manager",
      "24/7 Emergency Support",
      "International Referrals",
    ],
    notIncluded: [],
    cta: "Go Premium",
    color: "authority",
    popular: false,
  },
];

export const shopProducts = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    price: 2800,
    oldPrice: 3500,
    rating: 4.8,
    reviews: 142,
    image: "/images/shop/bp-monitor.jpg",
    badge: "Best Seller",
    category: "Devices",
  },
  {
    id: 2,
    name: "Diabetic Care Kit",
    price: 1200,
    oldPrice: null,
    rating: 4.7,
    reviews: 89,
    image: "/images/shop/diabetic-kit.jpg",
    badge: "New",
    category: "Health Kits",
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil (90 Capsules)",
    price: 850,
    oldPrice: 1100,
    rating: 4.9,
    reviews: 234,
    image: "/images/shop/omega3.jpg",
    badge: "20% Off",
    category: "Supplements",
  },
  {
    id: 4,
    name: "Pulse Oximeter",
    price: 1500,
    oldPrice: null,
    rating: 4.6,
    reviews: 67,
    image: "/images/shop/oximeter.jpg",
    badge: null,
    category: "Devices",
  },
];

export const portfolioItems = [
  {
    id: 1,
    title: "State-of-the-Art ICU",
    category: "Facilities",
    image: "/images/portfolio/icu.jpg",
  },
  {
    id: 2,
    title: "Modern Operating Theater",
    category: "Surgery",
    image: "/images/portfolio/ot.jpg",
  },
  {
    id: 3,
    title: "Advanced Diagnostic Lab",
    category: "Diagnostics",
    image: "/images/portfolio/lab.jpg",
  },
  {
    id: 4,
    title: "Pediatric Care Ward",
    category: "Pediatrics",
    image: "/images/portfolio/pediatric.jpg",
  },
  {
    id: 5,
    title: "Rehabilitation Center",
    category: "Rehabilitation",
    image: "/images/portfolio/rehab.jpg",
  },
  {
    id: 6,
    title: "Digital Pharmacy",
    category: "Pharmacy",
    image: "/images/portfolio/pharmacy.jpg",
  },
];

export const blogs = [
  {
    id: 1,
    title: "10 Early Warning Signs of Heart Disease You Shouldn't Ignore",
    excerpt:
      "Cardiovascular disease remains the leading cause of death worldwide. Learn the warning signs that require immediate medical attention.",
    category: "Cardiology",
    date: "April 15, 2025",
    readTime: "5 min read",
    author: "Dr. Fariha Rahman",
    image: "/images/blog/heart-disease.jpg",
    href: "/blog/heart-disease-warning-signs",
  },
  {
    id: 2,
    title: "Managing Diabetes in Bangladesh: A Practical Guide",
    excerpt:
      "With rising diabetes rates in Bangladesh, here's how to manage your blood sugar through diet, exercise, and medication.",
    category: "Diabetes",
    date: "April 8, 2025",
    readTime: "7 min read",
    author: "Dr. Tariq Hossain",
    image: "/images/blog/diabetes.jpg",
    href: "/blog/managing-diabetes-bangladesh",
  },
  {
    id: 3,
    title: "Your Child's Vaccination Schedule: A Complete Guide",
    excerpt:
      "Keeping up with childhood vaccinations is crucial. Here's everything Bangladeshi parents need to know about the EPI schedule.",
    category: "Pediatrics",
    date: "March 30, 2025",
    readTime: "6 min read",
    author: "Dr. Nasreen Akter",
    image: "/images/blog/vaccination.jpg",
    href: "/blog/vaccination-schedule-guide",
  },
];

export const partners = [
  { id: 1, name: "Square Hospitals", logo: "/images/partners/square.svg" },
  { id: 2, name: "Beximco Pharma", logo: "/images/partners/beximco.svg" },
  { id: 3, name: "DGDA Bangladesh", logo: "/images/partners/dgda.svg" },
  { id: 4, name: "WHO Bangladesh", logo: "/images/partners/who.svg" },
  { id: 5, name: "BSMMU", logo: "/images/partners/bsmmu.svg" },
  { id: 6, name: "Bangladesh Medical Association", logo: "/images/partners/bma.svg" },
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Certified Expert Doctors",
    description: "All our physicians are BMDC-registered with international training and decades of experience.",
    icon: "shield-check",
  },
  {
    id: 2,
    title: "Modern Technology",
    description: "Latest diagnostic equipment including MRI, CT Scan, and digital pathology for accurate results.",
    icon: "cpu",
  },
  {
    id: 3,
    title: "Patient-First Care",
    description: "Every treatment plan is personalized. We listen, understand, and treat the whole person.",
    icon: "heart-handshake",
  },
  {
    id: 4,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with dedicated critical care units ready at all times.",
    icon: "alarm",
  },
];
