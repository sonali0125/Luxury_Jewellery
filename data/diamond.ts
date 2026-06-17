export interface DiamondProduct {
  id: string;
  name: string;
  price: string;
  img: string;
  rating: number;
  shape: string;
  referenceIndex: string;    // New field
  gemstoneCarats: string;    // New field
  matrixComposition: string; // New field (e.g., 18K Gold, Platinum)
  provenanceOrigin: string;  // New field (e.g., South Africa, India)
}

export const CATEGORIES = [
  { 
    title: 'Engagement Collection', 
    subtitle: 'The ultimate vow of absolute devotion.', 
    img: 'https://t4.ftcdn.net/jpg/16/60/59/93/360_F_1660599395_88hyhiD43CYWy2GuJQSnzt28dSaIWZru.jpg' 
  },
  { 
    title: 'Bridal Selection', 
    subtitle: 'Timeless configurations for eternal alignment.', 
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4353YiasbEN1vQSUW3LMyWw1KqrLJSdf5Ig&s' 
  },
  { 
    title: 'Everyday Luxury', 
    subtitle: 'Casual elegance calibrated for daily life.', 
    img: 'https://brizoxjewels.com/cdn/shop/articles/il_794xN.7748626832_nupr.jpg?v=1778235547&width=1100' 
  },
  { 
    title: 'Anniversary Lineage', 
    subtitle: 'Celebrating dynamic decades of shared brilliance.', 
    img: 'https://www.giva.co/cdn/shop/files/Openfile_customisedcopy_5_5-min.jpg?v=1737983736&width=533' 
  },
];

export const BEST_SELLERS: DiamondProduct[] = [
  { id: 'b1', name: 'The Imperial Solitaire Ring', price: '₹89,999', img: 'https://srianujewellers.com/cdn/shop/files/2_db680319-cd04-4397-b2a4-d09ea7bf66d6.jpg?v=1747647172&width=1080', rating: 5, shape:"round",referenceIndex: 'REF-001', gemstoneCarats: '1.25 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'South Africa' },
  { id: 'b2', name: 'Celestial Cascade Necklace', price: '₹1,49,999', img: 'https://aashirwadjewellers.com/wp-content/uploads/2024/04/celestial-cascade-diamond-necklace-01.webp', rating: 5,shape:"round", referenceIndex: 'REF-002', gemstoneCarats: '3.50 ct', matrixComposition: '18K Yellow Gold', provenanceOrigin: 'Botswana' },
  { id: 'b3', name: 'Aura Radiant Cushion Studs', price: '₹59,999', img: 'https://divineaurajewels.in/wp-content/uploads/2026/02/O1CN01ZpBY1T1YyDOpK45SF_2214739943127-0-cib-1.jpg', rating: 5,shape:"round", referenceIndex: 'REF-003', gemstoneCarats: '0.85 ct', matrixComposition: 'Platinum', provenanceOrigin: 'Canada' },
  { id: 'b4', name: 'Eternal Halo Engagement Ring', price: '₹1,25,000', img: 'https://diamondsbyuk.co.uk/cdn/shop/articles/image-fb586712802e-qwm8nuqe_cbb289d4-f85b-4c52-8eb8-fd19e69621e6.webp?v=1772087168&width=1200', rating: 5,shape:"round", referenceIndex: 'REF-004', gemstoneCarats: '1.50 ct', matrixComposition: '18K Rose Gold', provenanceOrigin: 'Australia' },
  { id: 'b5', name: 'Midnight Star Diamond Pendant', price: '₹45,500', img: 'https://cdn.caratlane.com/media/catalog/product/J/P/JP03079-YGS300_1_lar.jpg', rating: 4, shape:"round",referenceIndex: 'REF-005', gemstoneCarats: '0.50 ct', matrixComposition: '14K White Gold', provenanceOrigin: 'Russia' },
  { id: 'b6', name: 'Velvet Rose Gold Bangle', price: '₹95,000', img: 'https://textile-export.b-cdn.net/images/800/20250123/17376331191035245561-ad-diamond-silver-and-rose-gold-bangles-5-(3).jpeg', rating: 5, shape:"round",referenceIndex: 'REF-006', gemstoneCarats: '2.10 ct', matrixComposition: '18K Rose Gold', provenanceOrigin: 'India' },
  { id: 'b7', name: 'White Gold Diamond Wedding Band', price: '₹72,000', img: 'https://robinsonsjewelers.com/cdn/shop/files/royal-14k-white-gold-diamond-wedding-band-with-bezel-set-princess-cut-diamonds-0-50-carat-total-diamond-weight-wc8749d-1.jpg?v=1717603841&width=1024', rating: 5,shape:"round", referenceIndex: 'REF-007', gemstoneCarats: '1.10 ct', matrixComposition: 'Platinum', provenanceOrigin: 'Namibia' },
  { id: 'b8', name: 'Luminous Teardrop Earrings', price: '₹68,900', img: 'https://cassandralynne.com/cdn/shop/files/dainty-teardrop-pearl-drop-cz-earrings-earrings-cassandra-lynne-7893549.jpg?v=1762120165', rating: 5,shape:"round", referenceIndex: 'REF-008', gemstoneCarats: '0.90 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Brazil' },
  { id: 'b9', name: 'Classic Diamond Earrings', price: '₹35,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7qY99RobZFbDOFC78Xvd1UUHd5WwMJBFtQ&s', rating: 4,shape:"round", referenceIndex: 'REF-009', gemstoneCarats: '0.40 ct', matrixComposition: '14K Yellow Gold', provenanceOrigin: 'Canada' },
  { id: 'b10', name: 'Infinity Twist Diamond Ring', price: '₹82,500', img: 'https://cdn.caratlane.com/media/catalog/product/J/R/JR05456-TTS300_1_lar.jpg', rating: 5,shape:"round", referenceIndex: 'REF-010', gemstoneCarats: '1.15 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'South Africa' },
  { id: 'b11', name: 'Grand Marquise Statement Ring', price: '₹2,10,000', img: 'https://maioradiamonds.in/cdn/shop/files/MD-R00438_4_1800x.jpg?v=1759126109', rating: 5,shape:"round", referenceIndex: 'REF-011', gemstoneCarats: '2.25 ct', matrixComposition: 'Platinum', provenanceOrigin: 'Botswana' },
  { id: 'b12', name: 'Minimalist Diamond Choker', price: '₹1,15,000', img: 'https://www.allthingsaboutwedding.com/cdn/shop/files/SimpleGreenAmericanDiamondChokerNecklaceSet-TheJewelbox-1.jpg?v=1729317134', rating: 5,shape:"round", referenceIndex: 'REF-012', gemstoneCarats: '1.75 ct', matrixComposition: '18K Rose Gold', provenanceOrigin: 'India' },
  { id: 'b13', name: 'Teardrop Necklace Studds', price: '₹1,85,000', img: 'https://rubans.in/cdn/shop/files/rubans-rhodium-plated-aaa-cubic-zirconia-studded-teardrop-halo-design-luxe-statement-necklace-set-in-silver-tone-for-women-jewellery-set-1203270391.jpg?v=1764214735&width=610', rating: 5,shape:"round", referenceIndex: 'REF-013', gemstoneCarats: '2.00 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Sri Lanka' },
  { id: 'b14', name: 'Modern Geometric Studs', price: '₹42,000', img: 'https://i.pinimg.com/736x/42/a5/dc/42a5dc4cd0d46821303e6fcb403c74c5.jpg', rating: 4, shape:"round", referenceIndex: 'REF-014', gemstoneCarats: '0.60 ct', matrixComposition: '14K Yellow Gold', provenanceOrigin: 'Russia' },
  { id: 'b15', name: 'Bridal Trinity Diamond Set', price: '₹2,50,000', img: 'https://5.imimg.com/data5/SELLER/Default/2024/2/390209925/HD/UQ/AF/4606023/bridal-diamond-necklace-set-500x500.jpg', rating: 5, shape:"round",referenceIndex: 'REF-015', gemstoneCarats: '2.75 ct', matrixComposition: 'Platinum', provenanceOrigin: 'Australia' },
  { id: 'b16', name: 'Art Deco Wedding Band', price: '₹65,000', img: 'https://i.pinimg.com/236x/8f/d4/9f/8fd49fcd98a4ced97926f34ab1048d3e.jpg', rating: 5, shape:"round",referenceIndex: 'REF-016', gemstoneCarats: '0.95 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Canada' },
  { id: 'b17', name: 'Floating Diamond Tennis Bracelet', price: '₹3,20,000', img: 'https://rwfine.com/cdn/shop/files/HeartHaloTennisBracelet-RG.jpg?v=1757527356&width=1200', rating: 5, shape:"round",referenceIndex: 'REF-017', gemstoneCarats: '4.50 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Botswana' },
  { id: 'b18', name: 'Delicate Pear Drop Pendant', price: '₹55,000', img: 'https://m.media-amazon.com/images/I/61ry9aTbJYL._SY500_.jpg', rating: 4,shape:"round", referenceIndex: 'REF-018', gemstoneCarats: '0.70 ct', matrixComposition: '14K Rose Gold', provenanceOrigin: 'South Africa' },
  { id: 'b19', name: 'Emerald Cut Clarity Band', price: '₹98,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc25MBUxudqB9rAZrFLREf7XGYGuYm-5k3wA&s', rating: 5,shape:"round", referenceIndex: 'REF-019', gemstoneCarats: '1.40 ct', matrixComposition: 'Platinum', provenanceOrigin: 'Namibia' },
  { id: 'b20', name: 'Solitaire Heart Pendant', price: '₹48,000', img: 'https://www.candere.com/media/jewellery/images/C022789_1.jpeg', rating: 5, shape:"round",referenceIndex: 'REF-020', gemstoneCarats: '0.55 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Australia' },
  { id: 'b21', name: 'Exquisite Cluster Studs', price: '₹75,000', img: 'https://www.efifdiamonds.com/cdn/shop/products/Elegant-Oval-Cluster-Stud-efifdiamonds-1664618981.jpg?v=1721824975', rating: 5,shape:"round", referenceIndex: 'REF-021', gemstoneCarats: '1.05 ct', matrixComposition: '18K Yellow Gold', provenanceOrigin: 'India' },
  { id: 'b22', name: 'Halo Drop Dangle Earrings', price: '₹92,000', img: 'https://purejewels.co.in/admin/upload/design/PLDE-5026/classic-drop-dangle-halo-earrings-in-lab-grown-diamond-pure-jewels-Y1.webp', rating: 5,shape:"round", referenceIndex: 'REF-022', gemstoneCarats: '1.30 ct', matrixComposition: '18K White Gold', provenanceOrigin: 'Brazil' },
  { id: 'b23', name: 'Signature Gold & Diamond Ring', price: '₹1,35,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoF4aBtl-8f3Cp3iYjnY8ScSxm2n53smiSTQ&s', rating: 5, shape:"round",referenceIndex: 'REF-023', gemstoneCarats: '1.60 ct', matrixComposition: '18K Yellow Gold', provenanceOrigin: 'Botswana' },
  { id: 'b24', name: 'Radiant Circle Pendant', price: '₹62,000', img: 'https://cdn.eternz.com/thumbnails/products/MZRJPSC386D852_1_47572623_thumbnail_1024.jpg', rating: 4, shape:"round",referenceIndex: 'REF-024', gemstoneCarats: '0.80 ct', matrixComposition: '14K White Gold', provenanceOrigin: 'Russia' },
  { id: 'b25', name: 'Cushion Cut Royal Ring', price: '₹1,55,000', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIng5Z4XV1Ag-NIq_swJgo4jWh6K-bqCBeQ&s', rating: 5, shape:"round",referenceIndex: 'REF-025', gemstoneCarats: '1.90 ct', matrixComposition: 'Platinum', provenanceOrigin: 'South Africa' },
];

export const SHAPES = [
  { id: 'round', label: 'Round Brilliant', glyph: '💎' },
  { id: 'oval', label: 'Oval Elegance', glyph: '🥚' },
  { id: 'princess', label: 'Princess Cut', glyph: '🟩' },
  { id: 'emerald', label: 'Step Emerald', glyph: '▮' },
  { id: 'pear', label: 'Classic Pear', glyph: '💧' },
  { id: 'cushion', label: 'Vintage Cushion', glyph: '🪞' },
];

export const SHAPE_PRODUCTS: Record<string, DiamondProduct[]> = {
  round: [{ 
    id: 's1', 
    name: 'Sovereign 2.5ct Round Brilliant', 
    price: '₹4,50,000', 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XhneZD_ryN1JTEXAL3Q51YvFa4KWT-iaqA&s",
    shape: 'round', 
    rating: 5,
    referenceIndex: 'REF-001',
    gemstoneCarats: '2.50 ct',
    matrixComposition: 'Platinum 950',
    provenanceOrigin: 'South Africa'
  }],
  oval: [{ 
    id: 's2', 
    name: 'Exquisite Elongated Oval Solitaire', 
    price: '₹3,80,000', 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Xi-QXx28KPal8XGg2Kdh8_TG626gRoTQyA&s", 
    shape: 'oval', 
    rating: 5,
    referenceIndex: 'REF-002',
    gemstoneCarats: '2.00 ct',
    matrixComposition: '18K White Gold',
    provenanceOrigin: 'India'
  }],
  princess: [{ 
    id: 's3', 
    name: 'Architectural Princess Cut Eternity Band', 
    price: '₹2,90,000', 
    img: "https://www.kingofjewelry.com/cdn/shop/products/princess_cut_eternity_diamond_wedding_anniversary_push_gift_band_profile_view_2_4a2069b8-02d9-4e71-9e0f-2647439dc85c_1080x.jpg?v=1714585253", 
    shape: 'princess', 
    rating: 5,
    referenceIndex: 'REF-003',
    gemstoneCarats: '1.80 ct',
    matrixComposition: '18K Yellow Gold',
    provenanceOrigin: 'Botswana'
  }],
  emerald: [{ 
    id: 's4', 
    name: 'High-Clarity Emerald Cut Statement Ring', 
    price: '₹6,20,000', 
    img: "https://cdn.shopify.com/s/files/1/0039/6994/1568/files/IMG_8701_2.jpg?v=1675680509", 
    shape: 'emerald', 
    rating: 5,
    referenceIndex: 'REF-004',
    gemstoneCarats: '3.00 ct',
    matrixComposition: 'Platinum 950',
    provenanceOrigin: 'Canada'
  }],
  pear: [{ 
    id: 's5', 
    name: 'Majestic Teardrop Pear Silhouette Drop Pendant', 
    price: '₹1,85,000', 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJIa6l6UsssfUFw_zwu3I0UGe7DCtykyyIA&s", 
    shape: 'pear', 
    rating: 5,
    referenceIndex: 'REF-005',
    gemstoneCarats: '1.20 ct',
    matrixComposition: '18K Rose Gold',
    provenanceOrigin: 'Australia'
  }],
  cushion: [{ 
    id: 's6', 
    name: 'Legacy Pillow Cushion Micro-Pave Ring', 
    price: '₹5,10,000', 
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjqJoXJiA1rsCQzpolRe3N_Xsv91_hlN0PmQ&s", 
    shape: 'cushion', 
    rating: 5,
    referenceIndex: 'REF-006',
    gemstoneCarats: '2.20 ct',
    matrixComposition: '18K Yellow Gold',
    provenanceOrigin: 'Russia'
  }],
};