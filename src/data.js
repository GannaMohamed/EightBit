export const navdata = [
  { name: "Home", url: "#home" },
  { name: "About Us", url: "#about" },
  { name: "Portfolio", url: "#portfolio" },
  { name: "Services", url: "#services" },
  { name: "Contact", url: "#contact" },
];

export const servicesdata = [
  {
    index: "01",
    head: "Brand Identity",
    body: "Brand Identity service at 8 Bit focuses on creating a unique and cohesive visual identity for your business, from logo design to color schemes and typography, ensuring that your brand stands out and resonates with your target audience across all platforms.",
  },
  {
    index: "02",
    head: "Website Design",
    body: "Our Website Design service at 8 Bit delivers custom, user-friendly websites that combine creativity with functionality. We ensure seamless navigation, responsive design, and a visually appealing experience that reflects your brand's identity and meets your business needs.",
  },
  {
    index: "03",
    head: "Mobile App Desgin",
    body: "Our Mobile App Design service at 8 Bit creates intuitive and visually striking mobile applications. We focus on user experience and performance, ensuring that your app not only looks great but also delivers seamless functionality across all devices.",
  },
];

// Function to dynamically import all SVG files and map them to an object
const importAll = (r) => {
  let svgs = {};
  r.keys().forEach((item) => {
    svgs[item.replace("./", "").replace(".svg", "")] = r(item); // Remove './' and '.svg' for cleaner names
  });
  return svgs;
};
const svgIcons = importAll(require.context("./Assets/Media", false, /\.svg$/));
export const mediaData = [
  {
    name: "gmail",
    url: svgIcons["bxl_gmail"],
    link: "https://mail.google.com", // Link for Gmail
  },
  {
    name: "facebook",
    url: svgIcons["ri_facebook-fill"],
    link: "https://www.facebook.com", // Link for Facebook
  },
  {
    name: "instagram",
    url: svgIcons["ri_instagram-fill"],
    link: "https://www.instagram.com", // Link for Instagram
  },
  {
    name: "x",
    url: svgIcons["mage_x"],
    link: "https://example.com/x", // Replace with actual link
  },
  {
    name: "linkedin",
    url: svgIcons["ri_linkedin-fill"],
    link: "https://www.linkedin.com", // Link for LinkedIn
  },
];

export const footerContent = [
  {
    heading: "About Us",
    items: ["Who We Are?", "Our Mission", "Why Choose Us?"],
  },
  {
    heading: "Services",
    items: ["Brand Identity", "Website Design", "Mobile App Design"],
  },
  {
    heading: "Legal Information",
    items: ["Privacy Policy", "Terms of Service", "Legal & Compliance"],
  },
];
