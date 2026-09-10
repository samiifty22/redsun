/* ============================================================================
   EDIT ALL WEBSITE CONTENT HERE
   ----------------------------------------------------------------------------
   This one file holds every piece of text, every stat, every team member,
   partner, phone number and photo used on the site. Change a value below,
   save, and the page updates automatically (the dev server hot-reloads).

   • Text  — edit the string between the quotes.
   • Lists — add/remove items inside the [ ... ] blocks, keep the commas.
   • Photos — drop a new image file into  public/images/  and point the
     `image` / `src` field at  "/images/your-file.jpg".

   Copy here was pulled from the 2026 Company Profile deck.
   ========================================================================== */

export const nav = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Compliance", href: "#compliance" },
  { label: "Leadership", href: "#leadership" },
  { label: "Affiliates", href: "#partners" },
  { label: "Contact", href: "/contact" }, // dedicated form page
];

export const hero = {
  // small label above the headline — leave "" to hide it
  eyebrow: "",
  title: "RedSun",
  accent: "Agrochem (BD) Ltd",
  // big headline, one array item per visual line
  headline: ["Building supply", "chains that build", "Bangladesh."],
  tagline: "Building supply chains that build Bangladesh",
  body: "One of Bangladesh's largest gypsum suppliers and the local partner bringing international manufacturers and investment into the country.",
  cta: "Get in touch",
  pills: ["Gypsum supply", "Agro export", "Investment bridge"],
  meta: "Established 2017 · Dhaka, Bangladesh · Dubai — DIFC",
  // Hero photos — [0] & [1] are the two big angular-cut stacked images on
  // desktop; the first few also appear as the small circle stack under the CTA.
  images: [
    {
      src: "/images/heroimage.jpeg",
      alt: "Construction cranes over a Dhaka skyline",
      tag: "Materials for national projects",
      note: "building Bangladesh",
    },
    {
      src: "/images/GyPsum.jpeg",
      alt: "Gypsum stockpile inside a RedSun warehouse",
      tag: "Gypsum · recovered & processed",
      note: "our yard",
    },
    { src: "/images/team/sakib-mahmud-zakaria.jpg", alt: "Sakib Mahmud Zakaria" },
    {
      src: "/images/china-bangladesh.jpeg",
      alt: "RedSun at the China–Bangladesh investment conference",
      tag: "Investment bridge",
      note: "with our partners",
    },
  ],
};

export const whoWeAre = {
  eyebrow: "Rise to Enlighten",
  lead: "A Bangladeshi group with national reach and global partners.",
  body: "RedSun Agrochem (BD) Ltd was incorporated in 2017 and has grown into a diversified trading and industrial-supply group. Our core business is gypsum — imported, recovered, processed and distributed at scale to the country's leading cement manufacturers and to agriculture through our sister concern, Bioscience.",
  closing:
    "Around that foundation we export Bangladeshi agro-products, supply materials to national infrastructure projects, and act as the local partner for global manufacturers entering Bangladesh. Our international arm operates from the Dubai International Financial Centre.",
  pillars: [
    {
      no: "01",
      title: "Agriculture, Gypsum & Minerals",
      text: "Import, power-sector recovery, processing and nationwide supply to cement and agriculture.",
    },
    {
      no: "02",
      title: "Export & Trade",
      text: "Bangladeshi rice, master oil and agro-commodities exported to the Middle East and beyond, earning foreign exchange.",
    },
    {
      no: "03",
      title: "Investment Bridge",
      text: "Local partner bringing foreign manufacturers, capital and technology into Bangladesh.",
    },
  ],
  stats: [
    { label: "License", value: 38, suffix: "", unit: "Products" },
    { label: "Dealer points across BD", value: 370, suffix: "+", unit: "" },
    {
      label: "Cement raw material supplied",
      value: 255000,
      suffix: "",
      unit: "MT · 2025",
    },
    { label: "Total revenue 2025", value: 6.5, suffix: "M", unit: "USD" },
  ],
};



export const compliance = {
  eyebrow: "Rise to Enlighten",
  label: "Compliance & Credentials",
  title: ["Registered, licensed", "and fully compliant."],
  milestones: [
    {
      year: "2017",
      title: "Founded in 2017",
      text: "RedSun Agrochem (BD) Ltd. is launched massively to set a major footprint in the agriculture industry of Bangladesh.",
    },
    {
      year: "2021",
      title: "Expanded into Government Supply contracts",
      text: "Secured government supply contracts, broadening the group beyond private-sector distribution.",
    },
    {
      year: "2022",
      title: "Awarded the contract to handle the waste management of BCPCL",
      text: "Becoming one of the largest gypsum suppliers of the country.",
    },
    {
      year: "2024",
      title:
        "Expanded to energy and railway engine spare-parts supply to the Bangladesh Govt.",
      text: "Started the procurement of coal with Xinhe.",
    },
  ],
  licensed: {
    title: "Fully Licensed",
    items: ["Trade Licence", "IRC", "ERC", "TIN", "BIN"],
  },
};

export const leadership = {
  kicker: ["Experience behind", "the mandate."],
  intro:
    "The people who carry the mandate — from national industry relations to the Dhaka–Dubai trade desk.",
  tags: ["Quality", "Innovation", "Sustainability", "Integrity"],
  // `image` — a photo in public/images/team/. Leave it "" and the card falls
  // back to a monogram of the person's initials.
  people: [
    {
      name: "Md. Habibur Rahman",
      role: "Chairman & CEO",
      image: "/images/team/habibur-rahman.jpg",
      bio: "Agribusiness veteran with 30 years at ACI Limited. Co-pioneered bringing YAMAHA Motors to Bangladesh and launching ACI Motors in 2013. Leads key industry and government relations.",
    },
    {
      name: "Sakib Mahmud Zakaria",
      role: "Managing Director",
      image: "/images/team/sakib-mahmud-zakaria.jpg",
      bio: "Leads the company nationally & internationally. With his vision, RedSun is able to contribute this much to the economy of Bangladesh.",
    },
    {
      name: "Syed Muhibul Haque",
      role: "Executive Director",
      image: "/images/team/syed-muhibul-haque.jpg",
      bio: "Leads international partnerships, market analysis and project structuring — driving the group's cross-border trade and investment agenda between Dhaka and Dubai.",
    },
    {
      name: "Shadman Sakib Prohor",
      role: "Marketing Manager",
      image: "/images/team/shadman-sakib-prohor.jpg",
      bio: "Leads company-wide marketing and sales operations. Leveraging proven experience in car sales, he drives commercial growth and market expansion for RedSun.",
    },
    {
      name: "Md. Asadul Galib",
      role: "Admin and Tax",
      image: "/images/team/asadul-galib.jpg",
      bio: "Manages tax and administrative operations with 5 years of core experience. Ensures smooth compliance and organizational efficiency for RedSun.",
    },
    {
      name: "Syed Md Samaun Afraj Fahim",
      role: "Operation Manager",
      image: "/images/team/samaun-afraj-fahim.jpg",
      bio: "Directs day-to-day operations and logistics management, ensuring peak operational efficiency, compliance, and strategic goal execution.",
    },
    {
      name: "Azmain Abir",
      role: "Creative Head",
      image: "/images/team/azmain-abir.jpg",
      bio: "Directs overall design strategy and creative output, combining expertise in visual arts with brand design to shape powerful communication.",
    },
    {
      name: "Samiul Huq",
      role: "Technical Head",
      image: "/images/team/sami.jpg",
      bio: "",
    },
  ],
};

export const partners = {
  title: ["Our", "Affiliates"],
  intro:
    "Group companies and sister concerns we build, supply and go to market with.",
  // `logo` — a file in public/images/partners/. Leave "" to show the name only.
  list: [
    { name: "Bioscience Agrochem Ltd", logo: "/images/partners/bioscience.png" },
    { name: "WiserGates", logo: "/images/partners/wisergates.png" },
    { name: "AgriWise Global Ltd", logo: "/images/partners/agriwise.png" },
    { name: "DaakPeon", logo: "/images/partners/daakpeon.png" },
    {
      name: "All Broadcasters' Community (ABC)",
      logo: "/images/partners/abc.png",
    },
    { name: "Sky Engineering", logo: "/images/partners/sky-engineering.png" },
  ],
};

export const contact = {
  title: ["Let's", "Connect"],
  sub: "A Partner in National Growth",
  cta: "Ready to build the next chapter?",
  offices: [
    {
      label: "Registered Office",
      address:
        "PC Garden, 3rd Floor, 20–21 Garden Road, Kawran Bazar, Dhaka 1215, Bangladesh",
    },
    {
      label: "Corporate Office",
      address:
        "3rd Floor, House 87–89, Road 4, Block B, Niketan, Gulshan 1, Dhaka 1212, Bangladesh",
    },
  ],
  emails: ["redsunagro.bd@gmail.com", "sakibmahmudzakaria@gmail.com"],
};

/* ---- Contact form page ( /contact ) ---- */
export const contactForm = {
  eyebrow: "Contact",
  title: ["Tell us what you", "need supplied."],
  intro:
    "Gypsum offtake, an export enquiry, or a manufacturer looking for a local partner — send the details and the right person at RedSun will get back to you.",
  // Where submissions are delivered. FormSubmit.co needs no account: the first
  // submission triggers a one-time confirmation email to this address — click
  // the link in it once and every later message arrives in the inbox.
  // Swap for a Formspree / Web3Forms endpoint later if preferred.
  deliverTo: "redsunagro.bd@gmail.com",
  interests: [
    "Gypsum supply",
    "Agro / rice export",
    "Investment & partnership",
    "Careers",
    "Something else",
  ],
  success: {
    title: "Message sent.",
    body: "Thanks for reaching out. Someone from the RedSun team will reply to your email shortly.",
  },
};
