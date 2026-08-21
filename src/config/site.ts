/**
 * LITTLE ADVENTURE TOWN: business configuration
 *
 * All business-variable content lives in this file. When prices change,
 * Christmas hours go up, or a phone number arrives, edit here and commit.
 * Do not hunt through components or pages.
 *
 * Anything still unknown is set to TO_CONFIRM. The site renders those
 * values as visible "To confirm" markers so nothing fictional can ship.
 */

export const TO_CONFIRM = "TO CONFIRM";

export function isToConfirm(value: string | null | undefined): boolean {
  return !value || value === TO_CONFIRM || value.startsWith("TO CONFIRM");
}

export function displayOrConfirm(value: string): string {
  return isToConfirm(value) ? "To confirm" : value;
}

/** Canonical origin for sitemap, Open Graph and JSON-LD. Change when the domain is confirmed. */
export const siteUrl = "https://littleadventuretown.netlify.app";

export const site = {
  name: "Little Adventure Town",
  legalName: "Little Adventure Town Ltd",
  companyNumber: "17122545",
  tagline: "A handmade indoor adventure town for babies, toddlers and pre-schoolers, on Newgate Street.",
  description:
    "Little Adventure Town is an indoor adventure play café on Newgate Street in Bishop Auckland. Handmade rooms, a café, and small booked sittings. Not your typical soft play frame.",
  url: siteUrl,
  locale: "en_GB",
  language: "en-GB",
  themeColor: "#D9EEF7",

  /** Domain name is not confirmed. `url` above is the current canonical (Netlify). */
  domain: TO_CONFIRM,

  social: {
    instagramHandle: "@littleadventuretown",
    instagramUrl: "https://www.instagram.com/littleadventuretown/",
    facebookName: "Little Adventure Town - Bishop Auckland",
    facebookUrl: "https://www.facebook.com/profile.php?id=61575438853386",
  },

  contact: {
    phone: TO_CONFIRM,
    email: "info@littleadventuretown.com",
    contactNote: "Drop us a message on Facebook, or use the form on this page. We'll get back to you.",
  },

  address: {
    line1: "50-52 Newgate Street",
    locality: "Bishop Auckland",
    region: "County Durham",
    postcode: "DL14 7EQ",
    country: "United Kingdom",
    countryCode: "GB",
    plusCode: TO_CONFIRM,
  },

  geo: {
    latitude: 54.662365,
    longitude: -1.675545,
  },

  maps: {
    google:
      "https://www.google.com/maps/search/?api=1&query=50-52%20Newgate%20Street%20Bishop%20Auckland%20DL14%207EQ",
    apple:
      "https://maps.apple.com/?q=50-52%20Newgate%20Street%20Bishop%20Auckland%20DL14%207EQ",
    openStreetMap:
      "https://www.openstreetmap.org/?mlat=54.662365&mlon=-1.675545#map=18/54.662365/-1.675545",
    embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=-1.679545%2C54.660365%2C-1.671545%2C54.664365&layer=mapnik&marker=54.662365%2C-1.675545",
  },

  opening: {
    date: "Saturday 29 August",
    status: "Opening Saturday 29 August",
  },

  hours: {
    /** Human-readable session days. Closed Monday unless this changes. */
    days: "Tuesday to Sunday",
    closed: "Closed Monday",
    cafeHours: TO_CONFIRM,
    note: "Play is booked, so grab a sitting before you come.",
    schema: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const,
        opens: "09:30",
        closes: "14:45",
      },
    ],
  },

  play: {
    pricePerChild: "£5.95",
    priceValue: "5.95",
    currency: "GBP",
    priceRange: "£",
    durationMinutes: 90,
    durationLabel: "90 minutes",
    maxChildren: 20,
    bookingEssential: true,
    walkIn: false,
    sessions: [
      { start: "09:30", end: "11:00", label: "09:30 to 11:00" },
      { start: "11:30", end: "13:00", label: "11:30 to 13:00" },
      { start: "13:15", end: "14:45", label: "13:15 to 14:45" },
    ],
    adultsFree: "Adults go free",
    adultsPerChild: TO_CONFIRM,
    underOnesFree: TO_CONFIRM,
    venueCapacityIncludingAdults: TO_CONFIRM,
    vatRegistered: TO_CONFIRM,
    offer: {
      active: true,
      label: "September deal",
      period: "the whole of September",
      summary: "£5.95 a child for the whole of September",
    },
  },

  cafe: {
    walkInNote:
      "No need to pick your food now. The café is walk-in when you get here, so you can choose what you fancy on the day.",
  },

  booking: {
    provider: "Bookwhen",
    payments: "Stripe",
    pageUrl: "https://bookwhen.com/littleadventuretown",
    iframeSrc: "https://bookwhen.com/littleadventuretown/iframe",
  },

  policies: {
    cancellation: TO_CONFIRM,
    socksRequired: true,
    supervisionRequired: true,
    ownFood: TO_CONFIRM,
    allergen: TO_CONFIRM,
    buggies: TO_CONFIRM,
  },

  classes: [
    {
      id: "baby-sensory",
      name: "Baby sensory, music and movement",
      cadence: "Weekly",
      ages: "Babies",
      price: TO_CONFIRM,
      time: TO_CONFIRM,
      bookableAtLaunch: false,
      summary:
        "A gentle weekly session of sensory play, music and movement for babies, in a room built for small numbers rather than a busy open play floor.",
    },
    {
      id: "toddler-sensory",
      name: "Toddler sensory, music and movement",
      cadence: "Weekly",
      ages: "Toddlers",
      price: TO_CONFIRM,
      time: TO_CONFIRM,
      bookableAtLaunch: false,
      summary:
        "Songs, movement and sensory play for toddlers. The same handmade rooms, at a pace that isn’t a free-for-all.",
    },
    {
      id: "send-evenings",
      name: "Ages 5+ evening SEND sessions",
      cadence: "Weekly",
      ages: "Ages 5+",
      price: TO_CONFIRM,
      time: TO_CONFIRM,
      bookableAtLaunch: false,
      summary:
        "Dedicated evening sessions for children aged 5 and over, with the sensory room available and the day-time crowds gone. Built as a core part of how we run, not an add-on.",
    },
    {
      id: "party-night",
      name: "Party night",
      cadence: "Last Friday of every month",
      ages: "Families",
      price: TO_CONFIRM,
      time: TO_CONFIRM,
      bookableAtLaunch: false,
      summary:
        "A monthly evening for families to have the town after hours. Dates will go up on Bookwhen as soon as they are set.",
    },
  ],

  parties: {
    durationLabel: "2 hours",
    exclusiveUse: true,
    includedChildren: 20,
    extraChildPrice: "£10",
    maxChildren: 30,
    weekdayPrice: "£220",
    weekendPrice: "£240",
    deposit: "£100",
    balanceDue: "3 days before the party",
    mascotExtra: "£30",
    themes: [
      "Pirates",
      "Princess",
      "Knights",
      "Dinosaur",
      "Mermaid",
      "Under the sea",
      "Farm",
      "Mickey and Minnie",
    ],
    sandwichBox: "Ham, cheese or tuna, crisps, yogurt, a fruit pot, chocolate and a drink.",
    hotMeal: "Chicken nuggets, sausages or fish fingers, fries, beans or peas, and a drink.",
    extrasNote:
      "A bouncy castle, Miss Rachel or princess performers, and mascots can be arranged. We’ll price those with you.",
    otherThemesNote: "Fancy something else? We’ll talk it through and cost it properly.",
    enquiryNote:
      "Tell us the age of the birthday child, roughly how many children, and a preferred date. We’ll come back with what’s possible.",
  },

  parking: {
    line1: "Tenters Street",
    locality: "Bishop Auckland",
    postcode: "DL14 7AD",
    maps: "https://www.google.com/maps/search/?api=1&query=Tenters%20Street%20Bishop%20Auckland%20DL14%207AD",
  },
  whatToBring: [
    "Shoes off, socks on for everyone going on the play floor, grown-ups too.",
    "A spare layer. The rooms are indoors but children run hot.",
    "Any sensory aids or comfort items your child usually uses.",
  ],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/book", label: "Book" },
  { href: "/whats-inside", label: "What’s inside" },
  { href: "/parties", label: "Parties" },
  { href: "/visit", label: "Visit us" },
] as const;

export const footerNav = [
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/house-rules", label: "House rules" },
  { href: "/booking-terms", label: "Booking terms" },
  { href: "/privacy", label: "Privacy" },
] as const;

export type ZoneId =
  | "under-the-sea"
  | "the-beach"
  | "dinosaur"
  | "the-castle"
  | "the-farm"
  | "space";

export type Zone = {
  id: ZoneId;
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  detail: string;
  alt: string;
  /** Set to a path under /images/zones/ when photography is supplied. */
  image: string | null;
  gallery: { src: string; alt: string }[];
  placeholder: string;
  photoSize: string;
  accent: "sea" | "sand" | "volcano" | "castle" | "farm" | "space";
};

export const hero = {
  image: "/images/zones/town-hero.jpg",
  alt: "The castle, volcano and yellow submarine along the grass at Little Adventure Town in Bishop Auckland.",
};

export const zones: Zone[] = [
  {
    id: "under-the-sea",
    name: "Under the Sea",
    shortName: "Under the Sea",
    eyebrow: "First stop",
    summary: "A submarine with portholes, a painted reef, and sea creatures waiting just beyond the glass.",
    detail:
      "Climb aboard the submarine and look out through the portholes. The reef is painted by hand around you: fish, coral, and the feeling of being somewhere else entirely, still in Bishop Auckland.",
    alt: "A yellow submarine with red portholes against a painted underwater wall of fish, a turtle and bubbles.",
    image: "/images/zones/under-the-sea.jpg",
    gallery: [
      {
        src: "/images/zones/under-the-sea-porthole.jpg",
        alt: "Looking through a red porthole into the underwater play room, with a painted reef and sea creature toys.",
      },
      {
        src: "/images/zones/under-the-sea-sensory.jpg",
        alt: "The under-the-sea sensory corner, with a wall of sea creatures and a tray of blue sensory play.",
      },
      {
        src: "/images/zones/under-the-sea-felt.jpg",
        alt: "The ocean felt board, with a yellow submarine, sea creatures and a mural of fish and coral.",
      },
    ],
    placeholder: "/images/placeholders/under-the-sea.svg",
    photoSize: "768 × 1024",
    accent: "sea",
  },
  {
    id: "the-beach",
    name: "The Beach",
    shortName: "The Beach",
    eyebrow: "Along the shore",
    summary: "A large sand pit and a boat. Shoes off, socks on, hands in.",
    detail:
      "A proper sand pit, not a tray, with a boat to board. Shoes off, socks on, hands in, and a good dig about for your ninety minutes.",
    alt: "The indoor sand pit with a toy pirate ship, pirate flags and a treasure-island mural beside the high-street window.",
    image: "/images/zones/the-beach.jpg",
    gallery: [
      {
        src: "/images/zones/the-beach-window.jpg",
        alt: "The pirate sand pit by the window, with yellow chairs for grown-ups looking on.",
      },
      {
        src: "/images/zones/the-beach-chest.jpg",
        alt: "The sand pit with a toy boat and a wooden treasure chest, beside the high-street window.",
      },
    ],
    placeholder: "/images/placeholders/the-beach.svg",
    photoSize: "768 × 1024",
    accent: "sand",
  },
  {
    id: "dinosaur",
    name: "Dinosaur Volcano",
    shortName: "Dinosaur Volcano",
    eyebrow: "Through the cave",
    summary: "A painted volcano, a cave tunnel, and a dinosaur or two keeping watch.",
    detail:
      "The volcano is painted onto the room itself. Crawl the cave tunnel, come out the other side, and the town has changed around you. This is the bit children remember on the way home.",
    alt: "The painted volcano cave, with dinosaur toys on the grass through the arched entrance.",
    image: "/images/zones/dinosaur.jpg",
    gallery: [
      {
        src: "/images/zones/dinosaur-volcano.jpg",
        alt: "The painted volcano, with red lava down the sides and a cave opening at the bottom.",
      },
      {
        src: "/images/zones/dinosaur-figurines.jpg",
        alt: "Dinosaur figurines on a grass shelf, with painted dinosaurs on the wall behind.",
      },
      {
        src: "/images/zones/dinosaur-stegosaurus.jpg",
        alt: "A close look at the textured stegosaurus sensory board, with a beanbag on the grass.",
      },
      {
        src: "/images/zones/dinosaur-puzzle.jpg",
        alt: "A dinosaur puzzle on the painted volcano wall, with a beanbag on the grass.",
      },
    ],
    placeholder: "/images/placeholders/dinosaur.svg",
    photoSize: "1024 × 768",
    accent: "volcano",
  },
  {
    id: "the-castle",
    name: "The Castle",
    shortName: "The Castle",
    eyebrow: "Over the drawbridge",
    summary: "Turrets, arched doorways, and a tea party table ready for whoever is ruling today.",
    detail:
      "Arched doorways, turrets, and a table set for a tea party. Dressing up happens here: knights, crowns, and the serious business of pouring nothing into tiny cups.",
    alt: "The castle play zone, with painted stone walls, a crown banner, shields and a tea party table on the grass.",
    image: "/images/zones/the-castle.jpg",
    gallery: [
      {
        src: "/images/zones/the-castle-table.jpg",
        alt: "The castle wall with a tea party table set on the grass in front of the arched doorway.",
      },
      {
        src: "/images/zones/the-castle-tea.jpg",
        alt: "A wooden toy castle and a tea party table on the grass, with purple flowers on the wall.",
      },
      {
        src: "/images/zones/the-castle-dressing.jpg",
        alt: "The castle dressing-up corner, with princess dresses, knight helmets and a little vanity.",
      },
    ],
    placeholder: "/images/placeholders/the-castle.svg",
    photoSize: "768 × 1024",
    accent: "castle",
  },
  {
    id: "the-farm",
    name: "The Farm Barn",
    shortName: "The Farm Barn",
    eyebrow: "Down the lane",
    summary: "A red barn with white trim. The kind of farm a three-year-old would draw, then walk into.",
    detail:
      "A red barn with white trim, built out by hand. Role play, animals, and the everyday work of a very small farm shop.",
    alt: "The red barn with white trim, sunflowers, a picket fence and toy tractors on the grass.",
    image: "/images/zones/the-farm.jpg",
    gallery: [
      {
        src: "/images/zones/the-farm-sunflowers.jpg",
        alt: "The red barn with sunflowers, a white picket fence and the castle next door.",
      },
      {
        src: "/images/zones/the-farm-barn.jpg",
        alt: "The red barn beside the sand pit, with sunflowers and a white picket fence.",
      },
    ],
    placeholder: "/images/placeholders/the-farm.svg",
    photoSize: "768 × 1024",
    accent: "farm",
  },
  {
    id: "space",
    name: "Sensory Space",
    shortName: "Sensory Space",
    eyebrow: "Among the stars",
    summary: "A darker room of fibre optics, projected stars, a light-up rocket and tactile wall panels.",
    detail:
      "The sensory room is a core part of the town, not a cupboard off to the side. Fibre optics, projected stars, a light-up rocket and tactile wall panels. Used in ordinary sittings, not tucked out of the way.",
    alt: "The space sensory room, with a solar system wall, glowing planet lights, a wooden rocket and fibre optic lights.",
    image: "/images/zones/space.jpg",
    gallery: [
      {
        src: "/images/zones/space-bubble.jpg",
        alt: "The space sensory room, with a blue bubble tube, a wooden rocket, fibre optic lights and star projections.",
      },
      {
        src: "/images/zones/space-wall.jpg",
        alt: "The space wall, with pink constellation lights, star stickers and tactile circular panels.",
      },
      {
        src: "/images/zones/space-rocket.jpg",
        alt: "A wooden rocket on the space wall, with gears, a bead maze and fibre optic lights on the floor.",
      },
      {
        src: "/images/zones/space-solar.jpg",
        alt: "The solar system wall in the space sensory room, with hanging stars, planet lights and moon cushions.",
      },
    ],
    placeholder: "/images/placeholders/space.svg",
    photoSize: "768 × 1024",
    accent: "space",
  },
];

export const faqs = [
  {
    id: "booking",
    question: "Do I need to book?",
    answer:
      "Yes please. Book a sitting before you come. There's no walk-in play, which is how we keep it from turning into a crush.",
  },
  {
    id: "price",
    question: "How much is a play session?",
    answer: site.play.offer.active
      ? `For ${site.play.offer.period} a 90-minute session is ${site.play.pricePerChild} a child. Adults go free.`
      : `${site.play.pricePerChild} per child for a 90-minute session. Adults go free.`,
  },
  {
    id: "socks",
    question: "Do we need to wear socks?",
    answer:
      "Yes. Shoes off, socks on for everyone on the play floor, grown-ups too.",
  },
  {
    id: "adults",
    question: "Are adults free?",
    answer: "Yes, grown-ups go free. You just need to stay with your child the whole sitting.",
  },
  {
    id: "food",
    question: "Can we bring our own food?",
    answer:
      `${site.cafe.walkInNote} Whether you can bring your own food, and the allergen policy, is still to confirm. If your child has an allergy, tell us when you book or use the contact form so we can plan.`,
  },
  {
    id: "cancellations",
    question: "What is the cancellation policy?",
    answer:
      "To confirm before opening. The wording will live on the booking terms page and in Bookwhen at checkout. We will not invent a policy here in the meantime.",
  },
  {
    id: "buggies",
    question: "Can we bring a buggy?",
    answer:
      "Buggy storage on arrival is still to confirm. We are on a town-centre high street, so if you can travel light, do. We will spell out where buggies live as soon as the fit-out is finished.",
  },
  {
    id: "send",
    question: "Is it suitable for SEND children?",
    answer:
      "We're SEND friendly, with sensory play, and sittings are kept small. Sensory Space is part of an ordinary sitting, not a cupboard off to the side. If you need a quieter time, ask when you book or drop us a message and we'll be honest about what we can do.",
  },
  {
    id: "ages",
    question: "What ages is it for?",
    answer:
      "Play sessions are for babies, toddlers and pre-school children. If you're not sure whether a sitting will suit your child, get in touch and we'll tell you honestly.",
  },
] as const;

export function bookwhenPageUrl(): string {
  return site.booking.pageUrl;
}

export function bookwhenIframeSrc(): string {
  if (!isToConfirm(site.booking.iframeSrc)) return site.booking.iframeSrc;
  if (!isToConfirm(site.booking.pageUrl)) {
    return `${site.booking.pageUrl.replace(/\/$/, "")}/iframe`;
  }
  return TO_CONFIRM;
}

export function formatAddress(separator = ", "): string {
  const { line1, locality, region, postcode } = site.address;
  return [line1, locality, region, postcode].join(separator);
}

export function sessionTimesLine(): string {
  return site.play.sessions.map((s) => s.label).join(", ");
}

export function childPriceLine(): string {
  return site.play.offer.active ? site.play.offer.summary : `${site.play.pricePerChild} per child`;
}

export const pages = {
  home: {
    path: "/",
    title: "Little Adventure Town | Indoor play café in Bishop Auckland",
    description:
      "Handmade indoor adventure play in Bishop Auckland, County Durham. Book a 90-minute session. Sea, sand, dinosaurs, a castle, a farm and a sensory room. September deal: £5.95 a child. Adults go free.",
  },
  book: {
    path: "/book",
    title: "Book a play session | Little Adventure Town, Bishop Auckland",
    description:
      "Book a 90-minute play session at Little Adventure Town in Bishop Auckland. Tuesday to Sunday, three sessions a day. September deal: £5.95 a child. Adults go free. Booking essential, no walk-ins.",
  },
  whatsInside: {
    path: "/whats-inside",
    title: "What’s inside | Little Adventure Town play zones, Bishop Auckland",
    description:
      "Walk the zones at Little Adventure Town in Bishop Auckland: Under the Sea, The Beach, Dinosaur Volcano, The Castle, The Farm Barn, and Sensory Space.",
  },
  parties: {
    path: "/parties",
    title: "Parties | Little Adventure Town, Bishop Auckland",
    description:
      "Birthday parties at Little Adventure Town in Bishop Auckland. Exclusive use of the town, from £220, for up to 20 children.",
  },
  visit: {
    path: "/visit",
    title: "Visit us | Little Adventure Town, Newgate Street, Bishop Auckland",
    description:
      "Find Little Adventure Town at 50-52 Newgate Street, Bishop Auckland, DL14 7EQ. Session times, what to bring, parking and a map.",
  },
  faq: {
    path: "/faq",
    title: "FAQ | Little Adventure Town, Bishop Auckland",
    description:
      "Socks, adults, food, cancellations, buggies and booking. Practical answers for Little Adventure Town in Bishop Auckland.",
  },
  contact: {
    path: "/contact",
    title: "Contact | Little Adventure Town, Bishop Auckland",
    description:
      "Contact Little Adventure Town in Bishop Auckland. Enquiries, quieter sittings, and social links.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy policy | Little Adventure Town",
    description: "How Little Adventure Town Ltd uses personal information, in plain English. UK GDPR.",
  },
  bookingTerms: {
    path: "/booking-terms",
    title: "Booking terms | Little Adventure Town",
    description: "Booking terms and conditions for Little Adventure Town play sessions, including cancellations.",
  },
  houseRules: {
    path: "/house-rules",
    title: "House rules | Little Adventure Town",
    description:
      "House rules for Little Adventure Town in Bishop Auckland: socks, supervision, food and allergen policy, buggies.",
  },
} as const;
