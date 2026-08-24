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
  tagline: "A handmade indoor adventure town on Newgate Street, for children who love role play.",
  audienceNote:
    "We don't put an age limit on children, as they all develop differently. If your child still loves role play, please bring them along.",
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
    date: "Sunday 30th August",
    status: "Opening Sunday 30th August",
  },

  hours: {
    /** Human-readable session days. Closed Monday unless this changes. */
    days: "Tuesday to Sunday",
    weekdays: "Tuesday to Friday",
    weekends: "Saturday and Sunday",
    closed: "Closed Monday",
    cafeHours: TO_CONFIRM,
    note: "Booking a sitting is advisable. Walk-ins are welcome, but not guaranteed.",
    schema: [
      {
        days: ["Tuesday", "Wednesday", "Thursday", "Friday"] as const,
        opens: "09:15",
        closes: "14:30",
      },
      {
        days: ["Saturday", "Sunday"] as const,
        opens: "09:00",
        closes: "16:30",
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
    bookingEssential: false,
    walkIn: true,
    bookingNote: "Booking a sitting is advisable. Walk-ins are welcome, but not guaranteed.",
    weekdaySessions: [
      { start: "09:15", end: "10:45", label: "09:15 to 10:45" },
      { start: "11:00", end: "12:30", label: "11:00 to 12:30" },
      { start: "13:00", end: "14:30", label: "13:00 to 14:30" },
    ],
    weekendSessions: [
      { start: "09:00", end: "10:30", label: "09:00 to 10:30" },
      { start: "11:00", end: "12:30", label: "11:00 to 12:30" },
      { start: "13:00", end: "14:30", label: "13:00 to 14:30" },
      { start: "15:00", end: "16:30", label: "15:00 to 16:30" },
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
    cancellation:
      "Give us at least 24 hours' notice and we'll move you to another day or put a credit on your account. Later than that we can't refund or move you, because the space has been held. If something has genuinely gone wrong, still get in touch.",
    socksRequired: true,
    supervisionRequired: true,
    childrenPerAdult: TO_CONFIRM,
    sicknessWindowHours: "48",
    ownFood:
      "Only food and drink bought in the café can be eaten on site, except where it's needed for an allergy or a medical need.",
    allergen: "Tell us when you book, and have a word with the team when you arrive.",
    buggies: "Yes. Bring the pushchair in and park it up while you're with us.",
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
      id: "sen-evenings",
      name: "Ages 5+ evening SEN sessions",
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
  { href: "/whats-inside", label: "What’s inside" },
  { href: "/parties", label: "Parties" },
  { href: "/faq", label: "FAQs" },
  { href: "/visit", label: "Visit us" },
  { href: "/contact", label: "Contact us" },
] as const;

export const footerNav = [
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/house-rules", label: "House rules" },
  { href: "/conditions", label: "Conditions of entry" },
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
  image: "/images/zones/town-hero.webp",
  shareImage: "/images/zones/town-hero-og.jpg",
  alt: "Six handmade rooms at Little Adventure Town: the farm barn, dinosaur volcano, the beach, the castle, under the sea, and sensory space.",
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
    alt: "The yellow submarine with red portholes, painted fish on the wall, and sea creature toys inside.",
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
      {
        src: "/images/zones/under-the-sea-whale.jpg",
        alt: "A blue whale activity board on the sea wall, with gears, a xylophone and bead mazes.",
      },
    ],
    placeholder: "/images/placeholders/under-the-sea.svg",
    photoSize: "1024 × 768",
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
      {
        src: "/images/zones/the-beach-ship.jpg",
        alt: "The sand pit boat with a pirate hat on the mast, buckets in the sand and an inflatable palm tree.",
      },
      {
        src: "/images/zones/the-beach-boat.jpg",
        alt: "The wooden pirate boat in the sand pit, with Newgate Street through the window behind.",
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
    alt: "The painted volcano, with red lava down the sides and dinosaur toys on the grass through the cave.",
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
        src: "/images/zones/dinosaur-nook.jpg",
        alt: "The dinosaur corner, with a long-necked mural, figurines on the grass shelf and a beanbag.",
      },
    ],
    placeholder: "/images/placeholders/dinosaur.svg",
    photoSize: "768 × 1024",
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
      {
        src: "/images/zones/the-castle-dollhouse.jpg",
        alt: "A wooden toy palace on a pink play table, with little figures in the towers and rooms.",
      },
      {
        src: "/images/zones/the-castle-mural.jpg",
        alt: "A painted prince and princess on the castle wall, with blue flowers climbing the stone.",
      },
      {
        src: "/images/zones/the-castle-window.jpg",
        alt: "Looking through a castle arch at a tea party table on the grass, with flowers on the sill.",
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
    alt: "The red barn with white trim, sunflowers, a yellow table and toy animals on the grass.",
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
      {
        src: "/images/zones/the-farm-door.jpg",
        alt: "The red barn doorway, with toy tractors, a highland cow and the farm shop through the window.",
      },
      {
        src: "/images/zones/the-farm-shop.jpg",
        alt: "The little farm shop, with a striped awning, play fruit in baskets and a toy till.",
      },
      {
        src: "/images/zones/the-farm-shelf.jpg",
        alt: "A grass farm shelf of animals, a red barn and crocheted bees, with a sheep and hen on the floor.",
      },
      {
        src: "/images/zones/the-farm-table.jpg",
        alt: "The farm play table, with barns, tractors and animals, and a farm mural on the wall.",
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

export const faqGroups = [
  {
    id: "booking",
    title: "Booking",
    blurb: "How to get a sitting, what it costs, and what happens if plans change.",
    accent: "pink",
    items: [
      {
        id: "do-i-have-to-book",
        question: "Do I have to book, or can I just turn up?",
        answer: `Booking a sitting is advisable. Walk-ins are welcome, but not guaranteed. We only take ${site.play.maxChildren} children per session so it stays calm. If that sitting is full we won't be able to squeeze you in.`,
      },
      {
        id: "more-than-one-child",
        question: "How do I book for more than one child?",
        answer:
          "Just change the quantity when you're booking and add a place for each little one coming with you. No need to go through it all twice.",
      },
      {
        id: "how-much",
        question: "How much is it?",
        answer: `It's ${site.play.pricePerChild} per child for a ninety minute session.`,
      },
      {
        id: "grown-ups",
        question: "Do grown ups need a ticket?",
        answer: "No, grown ups come in free. You only pay for the children.",
      },
      {
        id: "babies",
        question: "What about babies who aren't walking yet?",
        answer: `It's ${site.play.pricePerChild} for every child, babies included. We've a lovely sensory area that's just right for the littlest ones, so even if they're not toddling about yet there's plenty for them to look at, touch and get stuck into.`,
      },
      {
        id: "how-far-ahead",
        question: "How far ahead can I book?",
        answer:
          "Sessions go up several weeks in advance, so you can sort a rainy Tuesday now or plan something for the school holidays. Weekends do tend to go first.",
      },
      {
        id: "if-i-cancel",
        question: "What if I need to cancel?",
        answer:
          "Life with little ones rarely goes to plan. Let us know at least 24 hours before and we'll happily move you to another day or pop a credit on your account. Any later than that and we can't refund or move you, simply because the space has been held for you and it's usually too late for anyone else to take it. If something's genuinely gone wrong, do still get in touch and we'll see what we can do.",
      },
      {
        id: "if-we-cancel",
        question: "What if you have to cancel?",
        answer: "You'll get a full refund or a move to another day, whichever suits you best.",
      },
    ],
  },
  {
    id: "your-visit",
    title: "Your visit",
    blurb: "Opening times, socks, pushchairs, and what the morning actually looks like.",
    accent: "meadow",
    items: [
      {
        id: "when-open",
        question: "When are you open?",
        answer: `${site.hours.days}. ${site.hours.closed}. Weekdays (${site.hours.weekdays}): ${site.play.weekdaySessions.map((s) => s.label).join(", ").replace(/, ([^,]*)$/, ", and $1")}. Weekends: ${site.play.weekendSessions.map((s) => s.label).join(", ").replace(/, ([^,]*)$/, ", and $1")}.`,
      },
      {
        id: "what-ages",
        question: "What ages is it for?",
        answer: site.audienceNote,
      },
      {
        id: "what-to-bring",
        question: "What should we bring?",
        answer:
          "Socks for everyone, grown ups included, and that's honestly about it. There's a café on site, so drinks and snacks are bought here, unless your child needs their own for an allergy or a medical need.",
      },
      {
        id: "do-we-need-socks",
        question: "Do we really need socks?",
        answer:
          "We really do, for everyone going into the play areas. It keeps things clean and it keeps everyone safe. Pop a spare pair in your bag if you're anything like us and forget.",
      },
      {
        id: "running-late",
        question: "What if we're running late?",
        answer:
          "Just come when you can and we'll get you straight in. We can't stretch the session at the other end though, because the next lot will be waiting, so it's worth setting off with a few minutes spare.",
      },
      {
        id: "stay-with-child",
        question: "Do I stay with my child?",
        answer:
          "Yes please. Children stay with their grown up throughout. Our team are here to help and to keep everything safe, but they can't supervise little ones for you.",
      },
      {
        id: "somewhere-to-sit",
        question: "Is there anywhere to sit?",
        answer:
          "There is, and there's a café doing hot drinks, cold drinks and something nice to go with it. Get a brew, sit yourself down and watch them wear themselves out.",
      },
      {
        id: "pushchair",
        question: "Can we bring the pushchair in?",
        answer: "Course you can. Bring it in with you and there's room to park it up while you're with us.",
      },
    ],
  },
  {
    id: "food-and-drink",
    title: "Food and drink",
    blurb: "What's on in the café, and what you can bring in.",
    accent: "gold",
    items: [
      {
        id: "whats-on-in-the-cafe",
        question: "What's on in the café?",
        answer:
          "Toasties, paninis, cakes, scones and a few sweet treats, along with hot and cold drinks. Enough to keep the grown ups going and to sort out a hungry little one halfway through.",
      },
      {
        id: "own-food",
        question: "Can we bring our own food?",
        answer: site.policies.ownFood,
      },
      {
        id: "allergies",
        question: "My child has allergies. What should I do?",
        answer: "Tell us when you book, and have a word with the team when you arrive. We'd much rather know so we can look after them properly.",
      },
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility and additional needs",
    blurb: "SEN, quieter visits, and getting around the building.",
    accent: "teal",
    items: [
      {
        id: "sen-friendly",
        question: "Are you SEN friendly?",
        answer:
          "Very much so, and it's something we care an awful lot about. We keep numbers low so it never gets overwhelming, and we've built a calm Sensory Space for when anyone needs a quieter moment. Dedicated evening sessions for children aged five and over are on the way. Keep an eye on Facebook and we'll shout as soon as dates are sorted.",
      },
      {
        id: "busy-places",
        question: "My child finds busy places difficult. Can you help?",
        answer:
          "Course we can, just tell us when you book. There's a box on the booking form for exactly this. We can let you know which sessions are usually quieter, talk you through what to expect before you come, or make any small change that would help. Nothing is too much trouble and you're never being a nuisance by asking.",
      },
      {
        id: "building-accessible",
        question: "Is the building accessible?",
        answer:
          "It is. We're all on the ground floor with no stairs to worry about, so there's nothing to lug a pushchair up or down. We don't have a disabled toilet here. The closest one is at the bus station, about a three minute walk away.",
      },
      {
        id: "baby-changing",
        question: "Do you have baby changing?",
        answer: "We do.",
      },
      {
        id: "look-round",
        question: "Can we come and have a look round before booking?",
        answer:
          'Give us a <a href="/contact">shout</a> and we\'ll sort something out. If having a proper look at the place first would make the visit easier for your child, we\'re more than happy to arrange it.',
      },
    ],
  },
  {
    id: "parties-and-classes",
    title: "Parties and classes",
    blurb: "Birthdays now, classes as soon as the dates are in.",
    accent: "coral",
    items: [
      {
        id: "birthday-parties",
        question: "Do you do birthday parties?",
        answer:
          'We do, and we\'d love to have you. Have a look at our <a href="/parties">birthday page</a> for what\'s included and how to get booked in.',
      },
      {
        id: "what-classes",
        question: "What classes do you run?",
        answer:
          "Classes are on the way. We're planning baby sensory, music and movement, toddler sensory sessions and evening SEN sessions for children aged five and over. Keep your eyes peeled on Facebook and we'll shout as soon as dates are sorted.",
      },
    ],
  },
  {
    id: "anything-else",
    title: "Anything else",
    blurb: "How to find us, and how to get hold of us.",
    accent: "navy",
    items: [
      {
        id: "get-hold",
        question: "How do I get hold of you?",
        answer: `The quickest way is a message on <a href="${site.social.facebookUrl}" target="_blank" rel="noopener noreferrer">Facebook</a>, where we're ${site.social.facebookName}. You'll find us on <a href="${site.social.instagramUrl}" target="_blank" rel="noopener noreferrer">Instagram</a> as well. If you'd rather email, we're at <a href="mailto:${site.contact.email}">${site.contact.email}</a>.`,
      },
      {
        id: "where-exactly",
        question: "Where exactly are you?",
        answer: `${site.address.line1}, ${site.address.locality}, ${site.address.postcode}, right in the town centre. You won't miss us, we're the bright one.`,
      },
    ],
  },
] as const;

export const faqs = faqGroups.flatMap((group) => group.items);

export function faqPlainAnswer(answer: string): string {
  return answer.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

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
  const weekdays = site.play.weekdaySessions.map((s) => s.label).join(" · ");
  const weekends = site.play.weekendSessions.map((s) => s.label).join(" · ");
  return `Weekdays (${site.hours.weekdays}): ${weekdays}. Weekends: ${weekends}.`;
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
      "Book a 90-minute play session at Little Adventure Town in Bishop Auckland. Tuesday to Sunday. Three sittings on weekdays, four at the weekend. September deal: £5.95 a child. Adults go free. Booking a sitting is advisable. Walk-ins are welcome, but not guaranteed.",
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
    title: "FAQs | Little Adventure Town, Bishop Auckland",
    description:
      "Booking, socks, the café, SEN, parties and how to find us. Straight answers for Little Adventure Town in Bishop Auckland.",
  },
  contact: {
    path: "/contact",
    title: "Contact | Little Adventure Town, Bishop Auckland",
    description:
      "Contact Little Adventure Town in Bishop Auckland. Enquiries, quieter sittings, and social links.",
  },
  thanks: {
    path: "/thanks",
    title: "Thanks | Little Adventure Town",
    description: "We’ve got your enquiry and we’ll get back to you as soon as we can.",
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
  conditions: {
    path: "/conditions",
    title: "Conditions of entry | Little Adventure Town",
    description:
      "Conditions of entry for Little Adventure Town in Bishop Auckland. Supervision, socks, illness, photographs and how we keep play safe.",
  },
} as const;
