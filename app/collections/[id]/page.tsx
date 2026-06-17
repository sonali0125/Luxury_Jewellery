"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import styles from './CollectionPage.module.css';

interface ProductItem {
  sku: string;
  name: string;
  price: string;
  category: string; // Maps to the specific Capsule Theme
  image: string;
  materials: string[];
}

const COLLECTION_DATA = {
  heritage: {
    title: "The Heritage Collection",
    tagline: "Generations of Brilliance",
    description: "Timeless masterpieces reimagined for the modern collector, highlighting rare-cut diamonds, traditional hand-cut polki, and royal treasures secured in bespoke matrices.",
    filters: [
      { id: "all", display: "The Full Anthology" },
      { id: "royal", display: "👑 Royal Diamond Heritage" },
      { id: "kundan", display: "💎 Kundan & Polki Heritage" },
      { id: "artdeco", display: "✨ Art Deco Heritage" },
      { id: "pearl", display: "🤍 Pearl Heritage" },
      { id: "temple", display: "🏛 Temple Heritage" }
    ],
    items: [
      // 👑 Royal Diamond Heritage
      { sku: "HR-RD-01", name: "Miena Jewellery", price: "$145,000", category: "royal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqqwPQNhmDB7SBay7HlrL7dO8MZWDgNfHXw&s", materials: ["D-Flawless Diamonds", "Platinum 950", "Marquise Cuts"] },
      { sku: "HR-RD-02", name: "Emerald Jewellery", price: "$82,000", category: "royal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgUxGAr3hYRXS4SjjyvQgaDe_qmP2gsS-gQ&s", materials: ["Cushion Cut Diamond", "18K White Gold"] },
      { sku: "HR-RD-03", name: "Bridal Jewellery", price: "$210,000", category: "royal", image: "https://blingbag.co.in/cdn/shop/files/IvoryMriyaniBridalJewellerySet_1.jpg?v=1764047098&width=1080", materials: ["Golconda Diamonds", "22K Solid Gold Matrix"] },
      { sku: "HR-RD-04", name: "Bling Bag Jewellery", price: "$35,500", category: "royal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSB2cJiquX4sD6pBsQek9L-NYPy1G215H2Q&s", materials: ["Baguette Cut Diamonds", "Platinum"] },
      
      // 💎 Kundan & Polki Heritage
      { sku: "HR-KP-01", name: "India Polki Jewellery", price: "$125,000", category: "kundan", image: "https://jewelemarket.com/cdn/shop/files/12962471GR.jpg?v=1780922243", materials: ["Syndicate Polki Diamonds", "Pure Gold Foil Foil-back", "Deccan Emeralds"] },
      { sku: "HR-KP-02", name: "Handcrafted Kundan Jewellery", price: "$48,000", category: "kundan", image: "https://shining-jewel.com/cdn/shop/products/SJN_166_1.jpg?v=1744203237", materials: ["Handcrafted Jadau Polki", "Basra Pearls", "Ruby Beads"] },
      { sku: "HR-KP-03", name: "Regel Polki Kundan Jewellery", price: "$95,000", category: "kundan", image: "https://mrjewels.in/cdn/shop/files/IMG_2733.jpg?v=1772110183", materials: ["Nine Auspicious Gems", "Traditional Kundan Setting"] },
      { sku: "HR-KP-04", name: "Fursat Polki Emerald Necklace", price: "$32,000", category: "kundan", image: "https://thealchemystudio.co.in/cdn/shop/files/Artboard_1_8_f2a9bfaf-0bea-4e92-8535-7ff35d47a2f4.jpg?v=1768735064&width=2048", materials: ["Meenakari Enamel", "Uncut Polki Diamonds"] },

      // ✨ Art Deco Heritage
      { sku: "HR-AD-01", name: "caratlane Jewellery", price: "$29,000", category: "artdeco", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbb6bOaYKM5chlQeGRCaBAnKKqkZPr51imA&s", materials: ["Onyx Accents", "Brilliant Cut Diamonds", "White Gold"] },
      { sku: "HR-AD-02", name: "Joaillerie Jewellery", price: "$18,500", category: "artdeco", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQccrOxXEphFHm_4hk3uAEOujr9bKWSbdV-Jg&s", materials: ["Step-Cut Sapphires", "Baguette Diamonds"] },
      { sku: "HR-AD-03", name: "Antique Jewellery", price: "$64,000", category: "artdeco", image: "https://www.fwcj.com/wp-content/uploads/2018/05/ResizedImage600350-art-deco-jewelry-8765.jpg", materials: ["Platinum Line Work", "VVS Diamonds"] },
      { sku: "HR-AD-04", name: "Vintage Jewellery", price: "$22,000", category: "artdeco", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVETXwD63q5VlW3lGOUK7ce_IkmSxDYXHyjQ&s", materials: ["18K Yellow Gold", "Minimal Diamond Paths"] },

      // 🤍 Pearl Heritage
      { sku: "HR-PL-01", name: "Meenakari Pearl Jewellery", price: "$55,000", category: "pearl", image: "https://cdn.eternz.com/thumbnails/products/pict180101_0019280000_0f5fdaa5_thumbnail_1024.jpg", materials: ["South Sea Cultured Pearls", "Diamond Clasp Matrix"] },
      { sku: "HR-PL-02", name: "Necklace Pearl Jewellery", price: "$14,000", category: "pearl", image: "https://www.sanvijewels.com/cdn/shop/products/original3.1185698.1.jpg?v=1659690380&width=898", materials: ["Tahitian Black Pearls", "18K White Gold Frame"] },
      { sku: "HR-PL-03", name: "Indian Elegant Pearl Jewellery", price: "$19,500", category: "pearl", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9Dlsl5y8WJujWDk7Xj69F7mlhbPCZHgA6A&s", materials: ["Rare Form Baroque Pearl", "Champagne Diamonds"] },
      { sku: "HR-PL-04", name: "Pota Stone Pearl Jewellery", price: "$26,000", category: "pearl", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNeSijgxk5o6ziJU1CGIl-pXgj3KtkqAV14w&s", materials: ["Akoya Pearls", "Liquid Platinum Wire"] },

      // 🏛 Temple Heritage
      { sku: "HR-TP-01", name: "Gold Plated Birdal Temple Heritage", price: "$110,000", category: "temple", image: "https://images.jdmagicbox.com/quickquotes/images_main/mtc0otuyndm5ng-1749524396-x27ibcx3.jpg", materials: ["Antique Nakshi Work", "22K Gold", "Cabochon Rubies"] },
      { sku: "HR-TP-02", name: "Antique Gold Plated Heritage", price: "$78,000", category: "temple", image: "https://cdn.eternz.com/thumbnails/products/grafixresizeimes24_67f30e70_thumbnail_1024.png", materials: ["Bunched Seed Pearls", "Kemp Stones", "Spinel Beads"] },
      { sku: "HR-TP-03", name: "Classic Matte Gold Plated Heritage", price: "$45,000", category: "temple", image: "https://www.sasitrends.com/cdn/shop/files/1983L-exquisite-matte-gold-temple-flower-ruby-stone-designer-necklace-jewellery-set-heritage-antique-style-sasitrends.jpg?v=1741938694&width=1080", materials: ["Repoussé Gold Work", "Divine Iconography Inlay"] },
      { sku: "HR-TP-04", name: "Temple Jhumkas Earrings Heritage", price: "$31,000", category: "temple", image: "https://www.sasitrends.com/cdn/shop/files/2488A-traditional-lakshmi-temple-matte-gold-plated-jhumka-twisted-rope-design-sasitrends_8d5e0a29-3de9-4664-af36-cf8d95012f07.jpg?v=1731309491&width=1080", materials: ["22K Red Gold Base", "Uncut Emerald Drops"] }
    ] as ProductItem[]
  },
  luminary: {
    title: "The Luminary Series",
    tagline: "Celestial Architecture",
    description: "Inspired by astrological alignments, featuring flawless gemstones surrounded by cosmic radial fields of stellar dust and precious precious metals.",
    filters: [
      { id: "all", display: "The Full Cosmos" },
      { id: "celestial", display: "🌌 Celestial Lumina" },
      { id: "aurora", display: "✨ Aurora Lumina" },
      { id: "moonlight", display: "🌙 Moonlight Lumina" },
      { id: "starlight", display: "🌟 Starlight Lumina" },
      { id: "solar", display: "☀️ Solar Lumina" }
    ],
    items: [
      // 🌌 Celestial Lumina
      { sku: "LM-CL-01", name: "Celestial Sun Beam Lumia Jewellery", price: "$52,000", category: "celestial", image: "https://palmonas.com/cdn/shop/files/PM-NECKLACE-085_PMW01ER046.jpg?v=1752240688&width=720", materials: ["Deep Colombian Emerald", "18K Cosmic Gold", "Diamond Nebulae"] },
      
      // ✨ Aurora Lumina
      { sku: "LM-AL-01", name: "Lumina Collection Shines", price: "$34,000", category: "aurora", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_1iu6UBwyASZoc24J56B7_w4sFJR9fIOZBA&s", materials: ["Rare Paraiba Tourmaline", "Multi-Hue Fancy Sapphires"] },
      
      // 🌙 Moonlight Lumina
      { sku: "LM-ML-01", name: "Moonlight Necklace Lumina", price: "$28,500", category: "moonlight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXHy7r48HabuHoKI5sbSexKj5QxsGSsxfVpA&s", materials: ["Blue-Sheen Moonstone", "Liquid Platinum Wire", "Ice Diamonds"] },
      
      // 🌟 Starlight Lumina
      { sku: "LM-SL-01", name: "Daisy Blue Topaz Starlight Lumina", price: "$68,000", category: "starlight", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YApMU0eDJ-xr3DN4hoDabj09UZrQUkRKTw&s", materials: ["Supernova Cut Diamonds", "VVS Micro-Pavé Elements"] },
      
      // ☀️ Solar Lumina
      { sku: "LM-SOL-01", name: "Multi-Layer Solar Lumina", price: "$44,000", category: "solar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsVs3lJ8d7PPmVajJHrkmqmtRBV1Dc5Y1ow&s", materials: ["Heavy 22K Brushed Gold", "Fancy Vivid Yellow Diamonds"] }
    ] as ProductItem[]
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CollectionPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const collectionId = (resolvedParams.id as keyof typeof COLLECTION_DATA) || 'heritage';
  const collection = COLLECTION_DATA[collectionId] || COLLECTION_DATA.heritage;

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all' 
    ? collection.items 
    : collection.items.filter(item => item.category === activeFilter);

  return (
    <main className={styles.pageWrapper}>
      {/* Editorial Luxury Top bar */}
      <header className={styles.topHeader}>
        <div className={styles.headerContainer}>
          <span className={styles.brandLogo}>MAISON DE LUXE</span>
          <Link href="/" className={styles.backAnchor}>
            ⟶ Return to Maison
          </Link>
        </div>
      </header>

      {/* Haute-Couture Exhibition Narrative */}
      <section className={styles.heroNarrative}>
        <div className={styles.heroContainer}>
          <span className={styles.goldSubtitle}>{collection.tagline}</span>
          <h1 className={styles.mainTitle}>{collection.title}</h1>
          <p className={styles.descriptionText}>{collection.description}</p>
          <div className={styles.tickerFrame}>
            <span className={styles.pulseDot} />
            <span className={styles.tickerText}>Exclusively available at private ateliers for 2026</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Curated Exhibition Floor */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          
          {/* High-Concept Chapter Navigation Tabs */}
          <div className={styles.filterContainer}>
            <div className={styles.filterBar}>
              {collection.filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`${styles.filterPill} ${activeFilter === filter.id ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.display}
                </button>
              ))}
            </div>
          </div>

          {/* Clean, Non-Overlapping Balanced Grid Framework */}
          <div className={styles.productGrid}>
            {filteredItems.map((item) => (
              <div key={item.sku} className={styles.productCard}>
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.name} className={styles.productImage} />
                  
                  {/* Dynamic Material Drawer Revealed via subtle high-contrast overlay */}
                  <div className={styles.cardHoverOverlay}>
                    <div className={styles.hoverContentInside}>
                      <div className={styles.tagDrawer}>
                        {item.materials.map((mat, i) => (
                          <span key={i} className={styles.materialTag}>{mat}</span>
                        ))}
                      </div>
                      <button className={styles.viewActionBtn}>Request Private Viewing</button>
                    </div>
                  </div>
                </div>

                {/* Balanced Editorial Metadata Grid Underneath Image */}
                <div className={styles.productMeta}>
                  <div className={styles.skuLabel}>SKU: {item.sku}</div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <div className={styles.itemPrice}>{item.price}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}