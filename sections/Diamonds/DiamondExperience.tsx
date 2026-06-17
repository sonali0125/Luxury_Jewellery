"use client";

import React, { useState, useRef } from 'react';
import styles from './DiamondExperience.module.css';
import {CATEGORIES,BEST_SELLERS,SHAPES,SHAPE_PRODUCTS, DiamondProduct} from '@/data/diamond';
export default function DiscoverCollection() {
  const [activeShape, setActiveShape] = useState('round');
  const [guideStep, setGuideStep] = useState(1);
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});
const [isModalOpen, setIsModalOpen] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
const [formData, setFormData] = useState({ name: '', email: '' });
// Inside your component
const [selectedProduct, setSelectedProduct] = useState<DiamondProduct | null>(null);
  const toggleWishlist = (id: string) => {
    setWishlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    // Simulate an API call/submission process
    console.log("Submitting:", formData);
    
    // Set submitted to true to show the checkmark
    setIsSubmitted(true);

    // Optional: Close the modal automatically after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };
  const [showSecureModal, setShowSecureModal] = useState(false);
const [showSuccess, setShowSuccess] = useState(false);
const [formData1, setFormData1] = useState({ name: '', email: '', phone: '' });

const handleSecureSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Simulate API call
  setShowSecureModal(false);
  setShowSuccess(true);
  setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
};
const TRENDS = [
  { title: 'The Pure Solitaire Tier', label: 'Unrivaled Singular Architecture', ethos: 'TRADITION', count: 25, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BT1YB6iLiN6P-maoDsCH5_E1QfFM8Bo41g&s' },
  { title: 'The Royal Halo Array', label: 'Concentric Light Amplification', ethos: 'OPULENCE', count: 12, img: 'https://royalasscher.com/cdn/shop/collections/2024_11_22_RoyalAsscher_sfeer35631_72b95d43-7602-4810-96c0-80cbe3b7c43d.jpg?v=1742391211' },
  { title: 'The Modernist Minimalist', label: 'Clean Asymmetrical Contours', ethos: 'CONTEMPORARY', count: 34, img: 'https://thumbs.dreamstime.com/b/diamond-luxury-diamond-print-minimalist-art-wallart-print-diamond-luxury-diamond-print-minimalist-art-modern-wall-decor-printable-273918154.jpg' },
];
// Add these to your component state
const [showConciergeModal, setShowConciergeModal] = useState(false);
const [showConciergeSuccess, setShowConciergeSuccess] = useState(false);

const handleConciergeSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // 1. Submit logic here...
  setShowConciergeSuccess(true);
  
  // 2. Hide success message and close modal after 3 seconds
  setTimeout(() => {
    setShowConciergeSuccess(false);
    setShowConciergeModal(false);
  }, 3000);
};
  return (
    <div className={styles.luxuryCanvas}>
      
      {/* SECTION 1: DISCOVER DIAMOND COLLECTIONS (IMMEDIATE CLARITY) */}
      <section className={styles.categorySection}>
  <div className={styles.centeredHeader}>
    <span className={styles.goldPreTitle}>THE AUTUMN PORTFOLIO</span>
    <h1 className={styles.mainTitle}>DISCOVER DIAMOND COLLECTIONS</h1>
    <p className={styles.subTitle}>Crafted for every milestone, calibrated for every unique story.</p>
  </div>

  <div className={styles.categoryGrid}>
    {CATEGORIES.map((cat, i) => (
      <div key={i} className={styles.categoryCard}>
        <div className={styles.categoryVisualStage}>
          <img 
            src={cat.img} 
            alt={cat.title} 
            className={styles.categoryImageGraphic} 
          />
          <div className={styles.abstractFineGridOverlay} />
        </div>
        <div className={styles.categoryContentBlock}>
          <h3>{cat.title}</h3>
          <p>{cat.subtitle}</p>
          <button 
  className={styles.editorialActionLink}
  onClick={() => {
    setFormData({ name: '', email: '' }); // Reset fields to empty strings
    setIsModalOpen(true);                // Open the modal
  }}
>
  Inquire into Craft <span>→</span>
</button>
        </div>
      </div>
    ))}
  </div>

  {/* MODAL IS NOW OUTSIDE THE MAP LOOP - No more blinking */}
  {isModalOpen && (
    <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {!isSubmitted ? (
      <form onSubmit={handleFormSubmit} className={styles.luxuryForm}>
  <h3 className={styles.formTitle}>Inquire about this piece</h3>
  <p className={styles.formSubtitle}>Please share your details, and our concierge will contact you.</p>
  
  <input 
    type="text" 
    placeholder="Full Name" 
    required 
    className={styles.luxuryInput}
    value={formData.name} 
    onChange={(e) => setFormData({...formData, name: e.target.value})} 
  />
  <input 
    type="email" 
    placeholder="Email Address" 
    required 
    className={styles.luxuryInput}
    value={formData.email} 
    onChange={(e) => setFormData({...formData, email: e.target.value})} 
  />
  
  <button type="submit" className={styles.luxurySubmitBtn}>
    Submit Inquiry
  </button>
</form>
        ) : (
          <div className={styles.successMessage}>
            <div className={styles.checkmarkIcon}>✓</div>
            <h3>Details Successfully Submitted</h3>
            <p>Our concierge will be in touch shortly.</p>
          </div>
        )}
      </div>
    </div>
  )}
</section>

      {/* SECTION 2: MOST LOVED DIAMONDS (BEST SELLERS WITH HIGH-END HOVERS) */}
      <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>HOUSE FAVORITES</span>
          <h2 className={styles.sectionTitle}>Most Loved Diamonds</h2>
        </div>
    <div className={styles.bestSellersGrid}>
       
  {BEST_SELLERS.map((product) => (
    <div key={product.id} className={styles.productPremiumCard}>
      <div className={styles.productVisualStage}>
        <button 
          className={`${styles.wishlistAnchor} ${wishlisted[product.id] ? styles.wishlistActive : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle structural wishlist allocation"
        >
          {wishlisted[product.id] ? '♥' : '♡'}
        </button>
        
        {/* Added Image Tag */}
        <img 
          src={product.img} 
          alt={product.name} 
          className={styles.productImageGraphic} 
        />
        
        <div className={styles.simulatedProductReflection} />
      </div>
      
      <div className={styles.productMetaInfo}>
        <div className={styles.starRatingRow}>{'★'.repeat(product.rating)}</div>
        <h4 className={styles.productNameHeading}>{product.name}</h4>
        <div className={styles.goldHorizontalRule} />
        <p className={styles.productPriceString}>{product.price}</p>
        <button 
  className={styles.viewDetailsLuxuryButton}
  onClick={() => setSelectedProduct(product)}
>
  VIEW DESIGN DETAILS
</button>
      </div>
    </div>
  ))}
  <div className={styles.metaColumn}>
  {selectedProduct && (
  <div className={styles.modal_editorialOverlay} onClick={() => setSelectedProduct(null)}>
    <div className={styles.modal_editorialContainer} onClick={(e) => e.stopPropagation()}>
      
      <button className={styles.modal_closeButton} onClick={() => setSelectedProduct(null)}>✕</button>
      
      {/* Part 1: Image */}
      <div className={styles.modal_visualColumn}>
        <img src={selectedProduct.img} alt={selectedProduct.name} />
      </div>

      {/* Part 2: Information */}
      <div className={styles.modal_infoColumn}>
        <h2>{selectedProduct.name}</h2>
        <p>{selectedProduct.price}</p>
        <div>{'★'.repeat(selectedProduct.rating)}</div>
        
        <div className={styles.specsGrid}>
          <p><strong>Reference:</strong> {selectedProduct.referenceIndex}</p>
          <p><strong>Carats:</strong> {selectedProduct.gemstoneCarats}</p>
          <p><strong>Composition:</strong> {selectedProduct.matrixComposition}</p>
          <p><strong>Origin:</strong> {selectedProduct.provenanceOrigin}</p>
        </div>
      </div>

    </div>
  </div>
)}
      </div>
</div>

      {/* SECTION 3: SHOP BY SHAPE (DYNAMIC ACTIVE DATA FILTERING) */}
        <section className={styles.shapeSection}>
  <div className={styles.centeredHeader}>
    <span className={styles.goldPreTitle}>GEOMETRIC CALIBRATION</span>
    <h2 className={styles.sectionTitle}>Shop By Shape Architecture</h2>
  </div>

  <div className={styles.shapeSelectorStrip}>
    {SHAPES.map((shape) => (
      <button
        key={shape.id}
        className={`${styles.shapeSelectionTab} ${activeShape === shape.id ? styles.activeShapeTab : ''}`}
        onClick={() => setActiveShape(shape.id)}
      >
        <span className={styles.shapeGlyphBox}>{shape.glyph}</span>
        <span className={styles.shapeTabTextLabel}>{shape.id}</span>
      </button>
    ))}
  </div>

  <div className={styles.shapeDynamicOutputArea}>
    {SHAPE_PRODUCTS[activeShape]?.map((prod) => (
      <div key={prod.id} className={styles.shapeShowcaseContainer}>
        {/* Visual Area - Image replaces black box */}
        <div className={styles.shapeVisualLeft}>
          <img src={prod.img} alt={prod.name} className={styles.shapeProductImage} />
          <span className={styles.blueprintTechnicalTag}>FACET DESIGN MODEL // {prod.shape.toUpperCase()}</span>
        </div>

        {/* Details Area */}
        <div className={styles.shapeDetailsRight}>
          <span className={styles.goldPreTitle}>SELECTED MATRIX CONFIGURATION</span>
          <h3>{prod.name}</h3>
          <p className={styles.shapeEditorialParagraph}>
            Meticulously optimized to amplify internal fire metrics. Our signature {prod.shape} geometry re-calculates refractive indexing values to guarantee structural visibility even under low ambient candlelight atmospheres.
          </p>
          
          {/* Specifications Grid */}
          <div className={styles.shapeSpecsGrid}>
            <div><span>REF</span><p>{prod.referenceIndex}</p></div>
            <div><span>CARATS</span><p>{prod.gemstoneCarats}</p></div>
            <div><span>COMP</span><p>{prod.matrixComposition}</p></div>
            <div><span>ORIGIN</span><p>{prod.provenanceOrigin}</p></div>
          </div>

          <div className={styles.shapePricingRow}>
            <span className={styles.shapePrice}>{prod.price}</span><br/>
            <button 
  className={styles.acquireAllocationButton}
  onClick={() => setShowSecureModal(true)}
>
  SECURE THIS GEM CUT
</button>
          </div>
        </div>
      </div>
    ))}
  </div>

{showSecureModal && (
  <div className={styles.modal_editorialOverlay}>
    <form className={styles.secureForm} onSubmit={handleSecureSubmit}>
      <h3>Secure Your Gem</h3>
      <input type="text" placeholder="Name" required onChange={(e) => setFormData1({...formData1, name: e.target.value})} />
      <input type="email" placeholder="Email" required onChange={(e) => setFormData1({...formData1, email: e.target.value})} />
      <input type="tel" placeholder="Phone" required onChange={(e) => setFormData1({...formData1, phone: e.target.value})} />
      <button type="submit">CONFIRM ALLOCATION</button>
      <button type="button" onClick={() => setShowSecureModal(false)}>CANCEL</button>
    </form>
  </div>
)}

{showSuccess && (
  <div className={styles.successOverlay}>
    <div className={styles.successAnimation}>
      <div className={styles.tickIcon}>✓</div>
      <p>Allocation Secured Successfully</p>
    </div>
  </div>
)}
</section>

      {/* SECTION 4: WHY CHOOSE OUR DIAMONDS (LUXURY HOVER VALUE PROPS) */}
      <section className={styles.valueSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>THE HOUSE SAFEGUARDS</span>
          <h2 className={styles.sectionTitle}>Why Discerning Collectors Choose Us</h2>
        </div>

        <div className={styles.valuePropMatrixGrid}>
          {[
            { title: 'Ethically Certified GIA', desc: 'Every single stone undergoes direct screening via the strict Kimberley non-conflict compliance processes.', icon: '🛡️' },
            { title: 'Lifetime Exchange Guard', desc: 'Secure asset growth over time. Lock in guaranteed raw material conversion validation variables.', icon: '🔄' },
            { title: 'Insured Armored Shipping', desc: 'Direct, hand-to-hand transit deployment managed completely via high-security partner courier networks.', icon: '📦' },
            { title: 'BIS Hallmarked Purity', desc: 'Micro-engraved structural asset validation codes verifying precisely calibrated precious metal alloys.', icon: '🏆' },
            { title: 'Micro-Magnified Handcrafting', desc: 'Stones mounted manually under 40x micro-magnification by third-generation house master setters.', icon: '✍️' },
            { title: 'Encrypted Private Settlement', desc: 'Your operational data stays confidential via banking grade transaction safeguards.', icon: '🔒' },
          ].map((item, i) => (
            <div key={i} className={styles.valueLuxuryCard}>
              <div className={styles.valueIconCircle}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: COMPLETE YOUR LOOK (INTEGRATED CURATION) */}
      <section className={styles.lookSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>SARTORIAL HARMONY</span>
          <h2 className={styles.sectionTitle}>Complete Your Presence</h2>
        </div>

        <div className={styles.lookLayoutDashboard}>
          <div className={styles.lookStagingCanvas}>
            <div className={styles.ensembleDisplay} style={{ backgroundImage: "url('https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Library-Sites-GraffSharedLibrary/default/dw637078cb/images/Making%20of%20a%20Masterpiece/A%20Graff%20craftsman%20examining%20a%20white%20diamond%20for%20the%20Oval%20Diamond%20Secret%20Watch.jpg')" }}></div>
            
          </div>
          <div className={styles.lookManifestListingSide}>
            <div className={styles.lookManifestHeader}>
              <h3>The Imperial Suite Curation</h3>
              <p>Harmonized structural components assembled to protect aesthetic calibration.</p>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>01</span>
              <div>
                <h4>Imperial Cushion Drop Necklace</h4>
                <p className={styles.goldPriceText}>₹3,40,000</p>
              </div>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>02</span>
              <div>
                <h4>Sovereign Diamond Accented Studs</h4>
                <p className={styles.goldPriceText}>₹1,20,000</p>
              </div>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>03</span>
              <div>
                <h4>Matching Micro-Pave Interlocking Ring</h4>
                <p className={styles.goldPriceText}>₹95,000</p>
              </div>
            </div>
                     </div>
        </div>
      </section>

      {/* SECTION 6: TRENDING COLLECTIONS (MASSIVE HIGH-CONTRAST CHANNELS) */}
      <section className={styles.trendingSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>CURATED MOOD BOARDS</span>
          <h2 className={styles.sectionTitle}>Trending Collections Lineage</h2>
        </div>

      <div className={styles.trendingMassiveGrid}>
  {TRENDS.map((trend, idx) => (
    <div key={idx} className={styles.massiveTrendBillboardCard}>
      <div 
        className={styles.massiveTrendVisualCanvas}
        style={{ backgroundImage: `url(${trend.img})` }}
      >
        <div className={styles.massiveTrendHeaderBadge}>
          <span className={styles.trendEthosLabel}>{trend.ethos}</span>
          {/* This now displays the specific count from your data */}
          <span className={styles.trendCount}>{trend.count} PIECES</span>
        </div>
      </div>
      
      <div className={styles.massiveTrendFooterDetails}>
        <h3>{trend.title}</h3>
        <p>{trend.label}</p>
      </div>
    </div>
  ))}
</div>
      </section>

      {/* SECTION 7: REAL TIME CUSTOMER HOUSE REVIEWS */}
      <section className={styles.reviewsSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>VERIFIED HOUSE LEDGER</span>
          <h2 className={styles.sectionTitle}>Collector Testimonials</h2>
        </div>

        <div className={styles.reviewsCarouselTrack}>
          {[
            { text: "The physical refractive performance exceeded all gemological projections. An immaculate transaction lifecycle.", author: "Ananya K. — Mumbai Registry" },
            { text: "Finding an engagement asset with such perfectly symmetric internal pavilion execution parameters is rare.", author: "Rahul M. — Delhi Commission" },
            { text: "Elegant, timeless, and packaged within a highly secure verification logistics workflow. Absolute class.", author: "Meera R. — Bangalore Lineage" },
          ].map((rev, i) => (
            <div key={i} className={styles.testimonialLuxuryCard}>
              <div className={styles.starRatingRow}>★★★★★</div>
              <blockquote className={styles.testimonialQuoteText}>"{rev.text}"</blockquote>
              <cite className={styles.testimonialAuthorString}>{rev.author}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: DIAMOND BUYING STRUCTURAL GUIDE ENGINE */}
      <section className={styles.guideSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>EDUCATIONAL SYSTEM</span>
          <h2 className={styles.sectionTitle}>The Diamond Selection Methodology</h2>
          <p className={styles.subTitle}>Demystifying high-end asset acquisition via four geometric checkpoints.</p>
        </div>

        <div className={styles.guideInteractiveFrameworkDashboard}>
          <div className={styles.guideNavigationSidebarTabs}>
            {[
              { step: 1, title: '01 // Select Base Geometry' },
              { step: 2, title: '02 // Evaluate Carat Volume' },
              { step: 3, title: '03 // Calibrate Precious Metal' },
              { step: 4, title: '04 // Cryptographic Finalization' },
            ].map((s) => (
              <button
                key={s.step}
                className={`${styles.guideSidebarTabButton} ${guideStep === s.step ? styles.activeGuideStepTab : ''}`}
                onClick={() => setGuideStep(s.step)}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className={styles.guideInformationalBodyContentWindow}>
            {guideStep === 1 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Isolate Your Visual Contour Profile</h3>
                <p>Your choice of silhouette forms the foundation of light dispersion vectors. Round cuts yield maximum raw light reflection frequency metrics, while clean square Emerald steps favor crisp geometric internal depth visibility parameters.</p>
              </div>
            )}
            {guideStep === 2 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Calibrate Carat Scale Metrics</h3>
                <p>Carat values dictate absolute material presence. Ensure weight projections are balanced alongside internal color grades (D-F color tiers are highly recommended to preserve unclouded value retention profiles over generations).</p>
              </div>
            )}
            {guideStep === 3 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Select Precious Metal Architecture</h3>
                <p>Choose between 18 Karat Sovereign Yellow Gold or high-density Platinum. Platinum preservation preserves zero color bleeding onto colorless stones, while traditional yellow alloys introduce warmth.</p>
              </div>
            )}
            {guideStep === 4 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Finalize Allocation Ledgers</h3>
                <p>Your gemstone configuration receives certified GIA laser microscopic inscriptions and is formally assigned into our permanent secure house provenance index files.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9: ULTRA-PREMIUM PRIVATE CALL TO ACTION CONCIERGE */}
      <section className={styles.callToActionFinalSection}>
        <div className={styles.ctaGlassShieldBlunderBoundary}>
          <span className={styles.goldPreTitle}>EXPERIENCE THE VAULT</span>
          <h2>Ready to Secure Your Masterwork?</h2>
          <p>Arrange an end-to-end encrypted private video configuration analysis or secure physical verification inside our secure high-jewelry salon chambers.</p>
          <button 
  className={styles.ctaMasterworkExecutionCallButton}
  onClick={() => setShowConciergeModal(true)}
>
  INITIATE CONCIERGE ASSIGNMENT
</button>
        </div>
        {showConciergeModal && (
  <div className={styles.modaleditorialOverlay1}>
    <div className={styles.secureFormContainer1}>
      {!showConciergeSuccess ? (
        <form className={styles.secureForm1} onSubmit={handleConciergeSubmit}>
          <h3>Concierge Assignment</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <button type="submit">REQUEST ANALYSIS</button>
          <button type="button" onClick={() => setShowConciergeModal(false)}>CANCEL</button>
        </form>
      ) : (
        <div className={styles.successMessage}>
          <div className={styles.tickIcon1}>✓</div>
          <p>Thank you. Our team will connect with you shortly to initiate your analysis.</p>
        </div>
      )}
    </div>
  </div>
)}
      </section>

    </div>
  );
}