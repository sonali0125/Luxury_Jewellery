// data/guide.ts
export interface GuideCard {
  id: string;
  title: string;
  description: string;
  tag: string;
  image: string;
  bullets?: string[];
  content: string;
  modalContent: string;
}

export const MAIN_GUIDE_CARDS: GuideCard[] = [
  {
    id: "how-to-choose",
    tag: "Aesthetics & Form",
    title: "How to Choose",
    description: "The definitive formula for selecting foundational silhouette structures that adapt to posture and proportions.",
    image: "https://www.siriusjewels.com/uploads/blogs/copy_1WhatsApp%20Image%202022-04-13%20at%209.07.58%20PM.jpeg",
    content: "Choosing jewellery is about creating harmony between your personal style and the occasion. Focus on proportions, balance, and timeless design rather than following trends alone. Consider the metal tone that complements your skin, gemstones that reflect your personality, and silhouettes that enhance your outfit without overpowering it.\n\nThe finest jewellery is not necessarily the most elaborate—it is the piece that feels authentic, elevates your aesthetic, and remains effortlessly elegant for years to come.",
    modalContent: "Selecting the perfect piece is about balancing geometric weight. Ensure the setting supports your lifestyle intensity; minimalist bands are ideal for daily wear, while high-profile mountings act as structural anchors for gala events."
  },
  {
    id: "diamond-guide",
    tag: "Gemological Core",
    title: "Diamond Guide",
    description: "Demystifying optical engineering, internal crystal structures, and fire dispersion equations.",
    image: "https://diamondateliers.com/cdn/shop/files/Bespoke_Bridal_Jewellery.png?v=1763735191&width=1024",
    bullets: ["Cut Optimization", "Clarity Matrices", "Color Gradients", "Carat Proportions"],
    content: "Choosing the perfect diamond begins with understanding the balance of the 4Cs—Cut, Color, Clarity, and Carat Weight. While size attracts attention, an excellent cut delivers the brilliance and fire that make a diamond truly exceptional. Consider your lifestyle, setting, and personal style to select a stone that combines beauty with lasting value.\n\nA well-chosen diamond is more than a gemstone—it is a timeless expression of elegance, craftsmanship, and enduring significance.",
    modalContent: "Diamonds are valued by their light performance. An ideal cut maximizes 'scintillation'—the play of light—by ensuring facets are cut at angles that prevent light leakage through the pavilion."
  },
  {
    id: "gold-purity",
    tag: "Metallurgy Standards",
    title: "Gold Purity",
    description: "Analyzing atomic micro-alloys from pure institutional bullion down to highly durable artisan settings.",
    image: "https://d25g9z9s77rn4i.cloudfront.net/uploads/product/312/1779541061_077bc4ba41bc5d559a56.webp",
    content: "Gold purity determines the amount of pure gold present in a piece of jewellery and is commonly measured in karats (K). While 24K is the purest form, 22K, 18K, and 14K offer greater durability for everyday wear by blending gold with other metals. The right choice depends on your preference for richness, strength, and intended use.\n\nUnderstanding gold purity helps you select jewellery that balances beauty, longevity, and value, ensuring a timeless investment for every occasion.",
    modalContent: "Purity levels (24K vs 18K) determine alloy hardness. 24K is the softest form of gold, while 14K/18K are blended with copper or silver to enhance durability for active, daily-wear environments."
  },
  {
    id: "ring-size",
    tag: "Anatomical Fit",
    title: "Ring Size Guide",
    description: "An interactive, zero-error calibration suite mapped against global measuring metrics.",
    image: "https://www.larsenjewellery.com.au/wp-content/uploads/2020/07/engagement-ring-design-guide.jpg",
    content: "The perfect ring should feel secure yet comfortable, sliding on easily and requiring slight resistance when removed. Measure your finger at the end of the day when it is at its natural size, and consider that temperature and humidity can affect fit. If you're between sizes, choosing the slightly larger size often provides greater comfort.\n\nA well-fitted ring not only enhances everyday wear but also ensures lasting elegance and confidence for years to come.",
    modalContent: "Finger circumference fluctuates based on ambient temperature and hydration. Always measure when hands are at a comfortable room temperature for the most accurate sizing."
  },
  {
    id: "care-tips",
    tag: "Asset Preservation",
    title: "Care Tips",
    description: "Securing generational longevity through proper environmental shielding.",
    image: "https://www.eternz.com/blog/content/images/size/w1200/2026/05/jewelry-care-tips-the-ultimate-guide-to-keeping-your-pieces-sparkling.jpg",
    content: "Preserve the brilliance of your jewellery by storing each piece separately in a soft-lined box or pouch to prevent scratches. Keep it away from harsh chemicals, perfumes, and excessive moisture, and remove it before swimming, exercising, or household chores. Clean your jewellery gently with a soft cloth and have valuable pieces professionally inspected and polished periodically.\n\nWith proper care, your jewellery will retain its beauty, craftsmanship, and sentimental value for generations to come.",
    modalContent: "To maintain your assets, bathe settings in neutral filtered water only. Avoid synthetic fragrances and heavy chemical exposures, which can degrade soft porous gemstone surfaces over time."
  },
  {
    id: "styling-tips",
    tag: "Curation Strategy",
    title: "Styling Tips",
    description: "The geometry of personal curation. Stacking, spacing, and balancing visual weight.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl8F4uZdvt-pichyQiG274yvLYYvSwD6BryA&s",
    content: "Great jewellery styling is about balance and intention. Choose pieces that complement your outfit, face shape, and occasion rather than competing for attention. Layer delicate designs for a modern look or let a single statement piece become the focal point. Coordinating metals, gemstones, and proportions creates a refined and effortless aesthetic.\n\nThe best styling enhances your individuality, allowing your jewellery to express elegance, confidence, and timeless sophistication.",
    modalContent: "Styling is about contrast. Balance voluminous statement pieces with slender, ergonomic chains to ensure the visual narrative of your ensemble remains cohesive yet dynamic."
  }
];