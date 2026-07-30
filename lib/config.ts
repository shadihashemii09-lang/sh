export const siteConfig = {
  name: "بوکلی",
  description: "پلتفرم رزرو آنلاین نوبت حرفه‌ای",
  url: process.env.NEXTAUTH_URL || "http://localhost:3000",
  ogImage: "/images/og-image.png",
  links: {
    github: "https://github.com/bookly",
    twitter: "https://twitter.com/bookly",
    linkedin: "https://linkedin.com/company/bookly",
  },
  navigation: [
    { name: "خانه", href: "/" },
    { name: "درباره ما", href: "/about" },
    { name: "قیمت‌گذاری", href: "/pricing" },
    { name: "تماس با ما", href: "/contact" },
  ],
  footer: {
    company: "بوکلی",
    copyright: "© 2026 بوکلی. تمامی حقوق محفوظ است.",
    links: [
      { name: "درباره ما", href: "/about" },
      { name: "شرایط استفاده", href: "/terms" },
      { name: "حریم خصوصی", href: "/privacy" },
      { name: "سوالات متداول", href: "/faq" },
    ],
  },
  categories: [
    {
      slug: "beauty-salon",
      name: "سالون زیبایی",
      icon: "💄",
      description: "رزرو نوبت برای سرویس‌های سالون و زیبایی",
      image: "/images/categories/beauty.jpg",
    },
    {
      slug: "doctor-clinic",
      name: "پزشک و مطب",
      icon: "🩺",
      description: "رزرو نوبت برای ویزیت پزشکی و کلینیک",
      image: "/images/categories/doctor.jpg",
    },
  ],
};