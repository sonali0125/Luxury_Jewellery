export const PRODUCTS = [
  { id: 1, name: "Diamond Symphony Ring", price: "₹59,999", type: "Diamond", img: "https://www.candere.com/media/jewellery/images/C025811YG_1.jpeg", narrative: "A perfect harmony of brilliance and elegance, the Diamond Symphony Ring is crafted to capture light from every angle. Its refined design and radiant diamonds create a timeless statement of sophistication, making it an enduring symbol of love, luxury, and exceptional craftsmanship." },
  { id: 2, name: "Heritage Gold Necklace", price: "₹84,999", type: "Gold", img: "https://manoharlaljewellers.in/cdn/shop/files/KBLS70164_1_abc60c1a-be8d-4f50-8bcf-a51a18f71031.jpg?v=1753539024",narrative: "Inspired by timeless traditions and masterful artistry, the Heritage Gold Necklace celebrates the richness of classic craftsmanship. Its elegant design blends cultural legacy with contemporary refinement, creating a statement piece that embodies grace, sophistication, and enduring beauty." },
  { id: 3, name: "Royal Bridal Set", price: "₹1,25,000", type: "Bridal", img: "https://mannatglintara.com/cdn/shop/files/04_320995fe-26a0-4951-a233-637f869e8697.jpg?v=1733394506",narrative: "Designed to embody regal elegance, the Royal Bridal Set is a harmonious blend of exquisite craftsmanship and timeless beauty. Intricate detailing, luxurious finishes, and graceful silhouettes come together to create a statement of grandeur, making every bridal moment unforgettable." },
  { id: 4, name: "Solitaire Droplet Earrings", price: "₹45,500", type: "Earrings", img: "https://jewelsgalaxy.com/cdn/shop/files/SMNJG-ERG-2642-M-F1-2x.jpg?v=1757752418&width=1024",narrative: "Gracefully suspended and brilliantly radiant, the Solitaire Droplet Earrings showcase the beauty of simplicity. Featuring a timeless solitaire design with refined elegance, they capture light with every movement, making them the perfect expression of sophistication and effortless luxury." },
];

export const CATEGORIES = [
  { name: "Diamond", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvBOWdguFqcMzdjCcIUbmCUwzC8j81j1zoA&s" },
  { name: "Gold", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwLVAIQ_jCnl_U_29zcYtomlzCW4VwVQL0iA&s" },
  { name: "Bridal", img: "https://blog.southindiajewels.com/wp-content/uploads/2020/06/south-indian-bridal-jewellery-set-online-feature-image.jpg" },
  { name: "Earrings", img: "https://www.everestgoldcovering.com/image/cache/catalog/Earrings1/erg2192-latest-ad-stone-jhumka-wedding-gold-earrings-design-1-850x1000.jpg.webp" },
  { name: "Rings", img: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?auto=format&fit=crop&w=500&q=80" },
  { name: "Necklaces", img: "https://i.pinimg.com/236x/da/fc/86/dafc868844a377176fa2776e11c0d4fa.jpg" }
]; 

export const SIMILAR_PRODUCTS = [
  // Similar to Diamond Symphony Ring (ID: 1)
  { id: 101, parentId: 1, name: "Multi-Layered Diamond Ring", price: "₹47,000", img: "https://parashabora.com/cdn/shop/files/11.jpg?v=1720182754&width=1946" },
  { id: 102, parentId: 1, name: "Gold Plated Bloosom Ring", price: "₹45,000", img: "https://cdn.eternz.com/thumbnails/products/image_0_2fd2abfa_thumbnail_1024.jpg" },
  { id: 103, parentId: 1, name: "Interwoven Diamond Ring", price: "₹65,000", img: "https://www.betterdiamonds.in/upload/product/BDDB17-RG.jpg" },

  // Similar to Heritage Gold Necklace (ID: 2)
  { id: 201, parentId: 2, name: "Heritage Gandeur Gold Set", price: "₹22,000", img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw3b0cffea/images/hi-res/51W2KM2ED1BAP3_1.jpg?sw=640&sh=640" },
  { id: 202, parentId: 2, name: "Royal Gold Heritage Set", price: "₹2,42,000", img: "https://angeljewellery.in/public/uploads/products/meta/4H77x2Zxvc8UhzcqKhcTTqkjuIMH0tkJnOH0yjaO.jpeg" },
  { id: 203, parentId: 2, name: "Luxury Gold Heritage", price: "₹1,35,000", img: "https://tallajewellers.com/wp-content/uploads/2025/05/vivid-heritage-luxurious-gold-antique-choker.jpg" },

  // Similar to Royal Bridal Set (ID: 3)
  { id: 301, parentId: 3, name: "Royal Rose Kundan Gold Set", price: "₹55,000", img: "https://www.shutterstock.com/image-photo/this-bridal-necklace-set-features-600nw-2582315429.jpg" },
  { id: 302, parentId: 3, name: "Bridal Set with Stone Work", price: "₹95,000", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtF3rApXQFwqcKA6KeqecYZhGShWUAAbqpHICTuY1Aw&s" },
  { id: 303, parentId: 3, name: "Royal Bridal Jewellery Wedding Set", price: "₹1,12,000", img: "https://i.pinimg.com/236x/d5/bd/2f/d5bd2fae899e253c74e523ab695ab4bc.jpg" },

  // Similar to Solitaire Droplet Earrings (ID: 4)
  { id: 401, parentId: 4, name: "Gold Plated Round Solitaire Ear Rings", price: "₹45,000", img: "https://cdn.eternz.com/thumbnails/products/1000189541_f0248d19_thumbnail_1024.jpg" },
  { id: 402, parentId: 4, name: "Halo Solitaire Drop Ear rings", price: "₹70,488", img: "https://www.wondrdiamonds.com/cdn/shop/files/WVA0000015-RS-C.webp?v=1752640550" },
  { id: 403, parentId: 4, name: "Diamond Drop Dangling Ear Rings", price: "₹149,350", img: "https://thealchemystudio.co.in/cdn/shop/files/mixed9.png?v=1757579581&width=2048" },
];

export const COLLECTIONS = [
  { 
    name: "Diamond Collection", 
    path: "/diamond", 
    desc: "A celebration of brilliance and timeless elegance, the **Diamond Collection** brings together exquisitely crafted pieces designed to captivate. From classic solitaires to contemporary masterpieces, each creation reflects exceptional artistry, unmatched sparkle, and enduring sophistication for every occasion." 
  },
  { 
    name: "Gold Collection", 
    path: "/gold", 
    desc: "A tribute to timeless elegance, the **Gold Collection** showcases the enduring beauty of finely crafted gold jewellery. Blending traditional artistry with contemporary design, each piece is created to radiate sophistication, versatility, and lasting value—perfect for celebrating every moment with effortless luxury." 
  }
];