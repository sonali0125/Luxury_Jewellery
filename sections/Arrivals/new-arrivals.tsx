"use client";
import React, { useEffect,useState, useRef } from 'react';
import './Arrivals.css';
import {PRODUCTS,CATEGORIES,SIMILAR_PRODUCTS, COLLECTIONS} from '@/data/arrivals';
import styles from './SliderSection.module.css';
import { useRouter } from 'next/navigation';
export const NewArrivals: React.FC = () => {
 const sliderRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [isCinematicOpen, setIsCinematicOpen] = useState(false);
  const [activeCollection, setActiveCollection] = useState<number>(0);
const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
const router = useRouter();

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const [viewMode, setViewMode] = useState<'detail' | 'similar'>('detail');
const [isSubscribed, setIsSubscribed] = useState(false);

useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubscribed) {
      timer = setTimeout(() => {
        setIsSubscribed(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSubscribed]); // No brace or semicolon here!

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call here
    setIsSubscribed(true);
  };

  // 1. Create the reference
  const section3Ref = useRef<HTMLDivElement>(null);

  // 2. Create the scroll function
  const scrollToSection3 = () => {
    section3Ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="luxury-editorial-container">
      {/* --- HERO BANNER --- */}
      <section className="luxury-hero">
        <div className="hero-background-overlay" />
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Editorial Background" 
          className="hero-zoom-img"
        />
        <div className="hero-content">
          <span className="hero-subtitle-top">THE AUTUMN EDIT</span>
          <h1 className="hero-title">NEW ARRIVALS</h1>
          <p className="hero-tagline">Discover Our Latest Masterpieces</p>
          <div className="gold-divider-center" />
          <p className="hero-subtext">Crafted with Heritage • Designed for Today</p>
          <button 
            className="btn-luxury-primary" 
            onClick={scrollToSection3} // Add the handler here
          >
            Explore Collection
          </button>
        </div>
      </section>

      {/* --- SECTION 1: THIS WEEK'S HIGHLIGHTS --- */}
    <section className="section-padding editorial-highlight-sec">
      <div className="container grid-2-col alignment-center">
        <div className="editorial-frame-wrapper">
          <img 
            src="https://thumbs.dreamstime.com/b/exquisite-diamond-gemstone-jewelry-collection-stunning-display-highend-luxury-indulge-breathtaking-curated-399361205.jpg" 
            alt="Diamond Symphony" 
            className="editorial-main-img"
          />
          <div className="frame-border-accent" />
        </div>

        <div className="editorial-story-content">
          <span className="editorial-label">PIECE OF THE WEEK</span>
          <h2 className="serif-title">Diamond Symphony</h2>
          <p className="editorial-description">
            An architectural marvel balancing classic brilliant-cut clusters with modern geometric silhouettes. Every diamond is hand-selected to orchestrate light flawlessly.
          </p>
          <span className="editorial-badge">Limited Edition Release</span>
          
          {/* Updated Shop Now button to trigger the side panel */}
          <button 
            className="btn-editorial-link" 
            onClick={() => setIsQuickViewOpen(true)}
            type="button"
          >
            Check the details <span>→</span>
          </button>
        </div>
      </div>

      {/* Side Panel Modal */}
      {isQuickViewOpen && (
        <div className="sidePanelOverlay" onClick={() => setIsQuickViewOpen(false)}>
          <div className="sidePanelContent" onClick={(e) => e.stopPropagation()}>
            <button className="closePanelBtn" onClick={() => setIsQuickViewOpen(false)}>×</button>
            <h3>Diamond Symphony</h3>
            <p>A diamond is more than a gemstone—it is a harmony of light, precision, and timeless artistry. Formed over billions of years and perfected through expert craftsmanship, each facet works in concert to create brilliance, fire, and scintillation. Like a symphony, every element contributes to an extraordinary performance.

Diamond Symphony celebrates the union of nature and human ingenuity, where exceptional cuts, refined settings, and elegant design transform precious stones into enduring works of art. Beyond luxury, a diamond represents legacy, emotion, and individuality, making every creation a masterpiece meant to be cherished for generations.</p>
            <button className="btnLuxuryPrimary">Inquire About Piece</button>
          </div>
        </div>
      )}
    </section>

      {/* --- SECTION 2: TRENDING CATEGORIES --- */}
      <section ref={section3Ref} className="section-padding bg-cream-accent">
        <div className="container">
          <h2 className="section-title-center serif-title">Trending Now</h2>
          <div className="gold-divider-center-small" />
          <div className="category-strip-grid">
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="category-card-strip">
                <div className="category-img-container">
                  <img src={cat.img} alt={cat.name} />
                </div>
                <div className="category-strip-overlay">
                  <h3>{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MAGAZINE LAYOUT --- */}
      <section className="section-padding editorial-magazine-grid">
        <div className="container">
          {/* Row 1 */}
          <div className="magazine-row">
            <div className="magazine-img-block face-left">
              <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80" alt="Modern Luxury" />
            </div>
            <div className="magazine-text-block face-right">
              <h3 className="serif-title-sub">Modern Luxury</h3>
              <p>Modern luxury is defined not by excess, but by intention. It is the seamless fusion of exceptional craftsmanship, timeless design, and meaningful experiences that reflect individuality and sophistication. In an era where authenticity is valued as highly as rarity, true luxury lies in pieces that tell a story and endure beyond fleeting trends.

Whether expressed through fine jewellery, exquisite materials, or refined aesthetics, modern luxury celebrates quality over quantity and heritage alongside innovation. It is an evolving philosophy—one that transforms everyday elegance into a lasting legacy.</p>
              
            </div>
          </div>
          {/* Row 2 */}
          <div className="magazine-row reverse">
            <div className="magazine-text-block face-left">
              <h3 className="serif-title-sub">Timeless Craftsmanship</h3>
              <p>Timeless craftsmanship is the art of transforming exceptional materials into enduring masterpieces through skill, precision, and dedication. Rooted in generations of tradition yet refined by modern innovation, it reflects a commitment to quality that transcends changing trends.

Every carefully crafted detail tells a story of artistry and excellence, where patience and expertise create objects of lasting beauty. More than a mark of luxury, timeless craftsmanship is a legacy—preserving heritage while inspiring future generations with creations designed to endure for a lifetime.</p>
            </div>
            <div className="magazine-img-block face-right">
              <img src="https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=80" alt="Timeless Craft" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: PREMIUM PRODUCT SLIDER --- */}
      <section className="section-padding premium-slider-section">
      <div className="container">
        <div className="slider-header-flex">
          <h2 className="serif-title">The Curated Slate</h2>
          <div className="slider-controls">
            <button onClick={() => scrollSlider('left')} className="control-btn">←</button>
            <button onClick={() => scrollSlider('right')} className="control-btn">→</button>
          </div>
        </div>

        <div className="horizontal-slider-viewport" ref={sliderRef}>
          {PRODUCTS.map((prod) => (
            <div key={prod.id} className="premium-product-card">
              <div className="product-image-wrapper">
                <img src={prod.img} alt={prod.name} />
              </div>
              <div className="product-meta-data">
                <span className="product-tag-cat">{prod.type}</span>
                <h4 className="product-title-text">{prod.name}</h4>
                <p className="product-price-text">{prod.price}</p>
                <button 
                  className="btn-add-to-cart"
                  onClick={() => { setActiveProduct(prod); setIsCinematicOpen(true); }}
                >
                  Shop Piece <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
           {/* Cinematic Slide-Out */}
    {isCinematicOpen && activeProduct && (
  <div className={styles.cinematicOverlay} onClick={() => { setIsCinematicOpen(false); setViewMode('detail'); }}>
    <div className={styles.cinematicPanel} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeBtn} onClick={() => { setIsCinematicOpen(false); setViewMode('detail'); }}>Close</button>

      {/* VIEW SWITCHER */}
      {viewMode === 'detail' ? (
        <div className={styles.splitLayout}>
          <div className={styles.imageZone}>
            <img src={activeProduct.img} alt={activeProduct.name} />
          </div>
          <div className={styles.contentZone}>
            <span className={styles.collectionLabel}>Artisan Series</span>
            <h2>{activeProduct.name}</h2>
            <p className={styles.price}>{activeProduct.price}</p>
            <p className={styles.narrative}>{activeProduct.narrative}</p>
            <button className={styles.btnPrimary} onClick={() => setViewMode('similar')}>
              Show Similar Pieces
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.similarGridContainer}>
          <h3>Similar Pieces</h3>
          <div className={styles.grid}>
            {SIMILAR_PRODUCTS.filter(item => item.parentId === activeProduct.id).map((item) => (
              <div key={item.id} className={styles.gridItem}>
                <img src={item.img} alt={item.name} />
                <h4>{item.name}</h4>
                <p>{item.price}</p>
              </div>
            ))}
          </div>
          <button className={styles.btnSecondary} onClick={() => setViewMode('detail')}>
            ← Back to Details
          </button>
        </div>
      )}
    </div>
  </div>
)} 
</div>     
    </section>
      {/* --- SECTION 5: DESIGNER'S CHOICE --- */}
      <section className="designer-choice-hero-section">
        <div className="designer-hero-bg-overlay" />
        <img src="https://cdn.alromaizan.com/image/upload/v1682709583/media/blog/how-to-choose-the-perfect-gold-or-diamond-jewellery-to-complement-your-wedding-dress.jpg" alt="Designer Choice Layout" className="designer-parallax-img" />
        <div className="designer-hero-content-box">
          <span className="designer-tag">EDITOR'S CHOICE</span>
          <h2 className="serif-title large-title-mod">The Art of Modern Elegance</h2>
          <p>Selected curated profiles personally hand-signed and reviewed for structural poise by our creative director.</p>
                  </div>
      </section>

      {/* --- SECTION 6: NEW ARRIVAL COLLECTIONS --- */}
      <section className="section-padding collection-accordion-section">
      <div className="container layout-split-acc">
        <div className="accordion-sticky-meta">
          <span className="editorial-label">OUR ANTHOLOGIES</span>
          <h2 className="serif-title">New Arrival Collections</h2>
          <p>Every conceptual drop serves a distinct aesthetic space.</p>
        </div>

        <div className="accordion-interactive-stack">
          {COLLECTIONS.map((col, index) => (
            <div 
              key={index} 
              className={`accordion-bar-item ${activeCollection === index ? 'active-state' : ''}`}
              onClick={() => setActiveCollection(index)}
            >
              <div className="accordion-bar-header">
                <h3>{col.name}</h3>
                <span className="accordion-indicator-cross" />
              </div>
              <div className="accordion-bar-body-content">
                <p>{col.desc}</p>
                <button 
                  className="btn-editorial-link text-gold"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents clicking the button from toggling the accordion
                    router.push(col.path);
                  }}
                >
                  View Curated Showcase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* --- SECTION 7: WHY THESE ARE SPECIAL (TRUST) --- */}
      <section className="section-padding trust-cards-section bg-dark-theme">
        <div className="container">
          <h2 className="section-title-center serif-title color-gold">The House Standards</h2>
          <div className="gold-divider-center-small" />
          <div className="trust-grid-layout">
            {[
              { title: "Handcrafted", desc: "Forged by generations of artisanal legacy." },
              { title: "BIS Hallmarked", desc: "100% authenticated pure precious metals." },
              { title: "Certified Diamonds", desc: "GIA-graded and ethically source-verified." },
              { title: "Exclusive Designs", desc: "Limited runs with no repetitive casting." },
              { title: "Lifetime Service", desc: "Complimentary sizing, cleaning, and structural checks." }
            ].map((trustItem, idx) => (
              <div key={idx} className="trust-luxury-card">
                <div className="trust-card-icon-slot">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3>{trustItem.title}</h3>
                <p>{trustItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: CUSTOMER FAVORITES (TESTIMONIAL CAROUSEL) --- */}
      <section className="section-padding bg-cream-accent testimonial-carousel-section">
        <div className="container max-width-md alignment-center text-center">
          <span className="editorial-label">VOICES OF ELITE CLIENTS</span>
          <div className="testimonial-slider-container">
            <div className="stars-wrapper-gold">★★★★★</div>
            <blockquote className="luxury-quote-text">
              "Absolutely stunning craftsmanship. The weight of the Diamond Symphony ring feels substantial yet incredibly elegant. A true masterclass in structural layout design."
            </blockquote>
            <cite className="luxury-quote-author">— Ananya K.</cite>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: COMPLETE LOOK INSPIRATION --- */}
      <section className="section-padding lookbook-editorial-section">
        <div className="container grid-2-col alignment-center gap-large">
          <div className="lookbook-text-column">
            <span className="editorial-label">STYLING CONCEPTS</span>
            <h2 className="serif-title">Complete Look Inspiration</h2>
            <p className="editorial-description">Instead of separate pieces, our stylists compose harmonious conceptual frameworks tailored across dynamic atmospheres.</p>
            <ul className="lookbook-styling-list">
              <li><span>•</span> Wedding Ensemble</li>
              <li><span>•</span> Contemporary Office Profiles</li>
              <li><span>•</span> Avant-Garde Party Statements</li>
              <li><span>•</span> Festive Heritage Attire</li>
            </ul>
            
          </div>
          <div className="lookbook-image-column">
            <img src="https://i.pinimg.com/originals/80/34/a8/8034a8f3fe799b63a88725ce67e9a3f8.jpg" alt="Complete Luxury Look Concept" />
          </div>
        </div>
      </section>

      {/* --- SECTION 10: NEWSLETTER --- */}
     <section className="section-padding newsletter-glass-section">
  <div className="newsletter-bg-visual" />
  <div className="newsletter-glass-card">
    {!isSubscribed ? (
      <>
        <h2 className="serif-title text-center">Stay Updated</h2>
        <p className="text-center">Be the first to discover every seasonal new collection.</p>
        <form onSubmit={handleSubscribe} className="newsletter-luxury-form">
          <input type="email" placeholder="Enter your email address" className="luxury-input-field" required />
          <button type="submit" className="btn-luxury-gold-submit">Subscribe</button>
        </form>
      </>
    ) : (
      <div className="success-message-wrapper">
        <h2 className="serif-title text-center">Welcome to the Inner Circle</h2>
        <p className="text-center">You are now registered to receive early access to our atelier drops.</p>
        {/* The Reset Button */}
 <span className={styles.resetIndicator}>Returning to form...</span>
      </div>
    )}
  </div>
</section>

      {/* --- FOOTER --- */}
      <footer className="luxury-footer-base">
        <div className="container text-center">
          <p className="footer-brand-title">HAUTE JEWELLERY COMPANY</p>
          <p className="footer-copyright">© 2026 Crafted for Elite Experiences. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};