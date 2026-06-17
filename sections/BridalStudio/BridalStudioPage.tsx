"use client";

import React, { useState } from 'react';
import styles from './BridalStudioPage.module.css';
import {BRIDAL_STYLES, PACKAGES_BY_STYLE,TIMELINE_DATA} from '@/data/bridal';
import Image from 'next/image';
export default function BridalStudioPage() {
  const [activeStyle, setActiveStyle] = useState('royal');
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState('5l');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', amount: '' });
const [isAskingForEmail, setIsAskingForEmail] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [email, setEmail] = useState('');

  const handleInitialClick = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAskingForEmail(true);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsConfirmed(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log("Form Submitted:", formData);
    setIsSuccess(true);
  };
  // Dynamic Content Generators based on Client Inputs
  const currentPackage = PACKAGES_BY_STYLE[activeStyle] || PACKAGES_BY_STYLE.royal;
const [selectedBudget1, setSelectedBudget1] = useState('2l');
  const [isLocked, setIsLocked] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const handleLockPath = () => {
    // 1. Logic to "save" the selection
    console.log("Configuration Locked for Budget:", selectedBudget);
    
    // 2. Lock the UI and open contact modal
    setIsLocked(true);
    setShowContactModal(true);
  };
  return (
    <div className={styles.bridalStudioCanvas} style={{ '--studio-accent': BRIDAL_STYLES.find(s => s.id === activeStyle)?.colorTheme } as React.CSSProperties}>
      
      {/* SCREEN 1: CINEMATIC HERO */}
      <section className={styles.heroSection}>
        <div className={styles.videoBackgroundSimulation}>
          <div className={styles.driftingFlowerPetalsOverlay} />
          <div className={styles.darkAestheticMutingShield} />
        </div>
        <div className={styles.heroContentFrame}>
          <span className={styles.heroSubText}>FROM YES TO FOREVER</span>
          <h1 className={styles.heroMainTitle}>THE BRIDAL HOUSE</h1>
          <p className={styles.heroEditorialLine}>Every grand love story deserves extraordinary high jewelry craftsmanship.</p>
          <button className={styles.heroCtaGoldButton} onClick={() => document.getElementById('personalityStyle')?.scrollIntoView({ behavior: 'smooth' })}>
            BEGIN YOUR EXPERIENCE
          </button>
        </div>
        <div className={styles.scrollIndicatorPulse}>↓</div>
      </section>

      {/* SCREEN 2: CHOOSE YOUR WEDDING STYLE (DYNAMIC THEME SWITCHER) */}
      <section id="personalityStyle" className={styles.styleSwitcherSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>PERSONALITY MATRICES</span>
          <h2>Which Bride Are You?</h2>
          <p>Select your aesthetic identity to recalibrate the digital studio's presentation metrics.</p>
        </div>

        <div className={styles.styleSelectorGrid}>
          {BRIDAL_STYLES.map((style) => (
            <button
              key={style.id}
              className={`${styles.styleSelectorCard} ${activeStyle === style.id ? styles.styleCardActive : ''}`}
              onClick={() => setActiveStyle(style.id)}
            >
              <h3>{style.label}</h3>
              <p>{style.subtitle}</p>
              <div className={styles.activeBorderAccentLine} />
            </button>
          ))}
        </div>
      </section>

      {/* SCREEN 3: BRIDAL MOOD BOARD (EDITORIAL MASONRY CANVAS) */}
      <section className={styles.moodBoardSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>VISUAL INSPIRATION</span>
          <h2>The {activeStyle.toUpperCase()} Aesthetic Mood Board</h2>
        </div>

        <div className={styles.moodMasonryLayout}>
         <div className={styles.masonryItem}>
    <img src="https://w0.peakpx.com/wallpaper/709/299/HD-wallpaper-tamanna-bhatia-indian-actress-tamannaah-saree-indian-dress-bollywood-indian-star-indian-saree-hoot.jpg" alt="Bride Close-Up" className={styles.moodImage} />
    <div className={styles.productDetails}>
      <h3>The Bride Close-Up</h3>
      <p className={styles.price}>$250.00</p>
      <p>Exquisite bridal portrait details.</p>
     
    </div>
  </div>

  {/* Block 2: Heirloom Neckpiece */}
  <div className={styles.masonryItem}>
    <img src="https://www.kalyanjewellers.net/blog/wp-content/uploads/2024/03/heirloom-jewellery-symbol-of-tradition-and-love.jpg" alt="Heirloom Neckpiece" className={styles.moodImage} />
    <div className={styles.productDetails}>
      <h3>The Heirloom Neckpiece</h3>
      <p className={styles.price}>$1,200.00</p>
      <p>Handcrafted heritage jewelry.</p>
      
    </div>
  </div>

  {/* Block 3: Sacred Ceremony Details */}
  <div className={styles.masonryItem}>
    <img src="https://thumbs.dreamstime.com/b/indian-traditional-wedding-authentic-vedic-ritual-called-vivaha-yajna-red-sari-women-foot-mehendi-close-up-garlands-172999539.jpg" alt="Sacred Ceremony" className={styles.moodImage} />
    <div className={styles.productDetails}>
      <h3>Sacred Ceremony Details</h3>
      <p className={styles.price}>$150.00</p>
      <p>Floral and decor arrangements.</p>
     
    </div>
  </div>
        </div>
      </section>

      {/* SCREEN 4: COMPLETE WEDDING LOOKS */}
      <section className={styles.completeLookSection}>
        <div className={styles.completeLookGridContainer}>
          <div className={styles.lookVisualShowcaseSide}>
            <div className={styles.lookCouturePlateBackground}>
              <img 
                src="https://sparkleandglow.co.in/cdn/shop/files/659107826_1374948061324287_5023204381110443327_n.jpg?v=1775448365&width=1080" 
                alt="The Complete Ensemble Suite" 
                className={styles.fullEnsembleImage} 
              />
            </div>
          </div>
          
          <div className={styles.lookManifestDetailsSide}>
            <span className={styles.goldLabel}>INTEGRATED CURATION</span>
            <h2 className={styles.lookTitleHeading}>
              The Complete {activeStyle.charAt(0).toUpperCase() + activeStyle.slice(1)} Ensemble Suite
            </h2>
            <div className={styles.packageCardBody}>
              <p className={styles.packageSubtitleText}>Eliminate disconnected individual pieces. Invest in a harmonized layout framework:</p>
              <ul className={styles.packageElementsChecklist}>
                {currentPackage.elements.map((el, i) => (
                  <li key={i}><span>✨</span> {el}</li>
                ))}
              </ul>
              <div className={styles.packagePriceRow}>
                <div>
                  <span className={styles.priceLabel}>TOTAL VALUATION</span>
                  <p className={styles.priceValueString}>{currentPackage.price}</p>
                </div>
                <button 
                  className={styles.packageAcquireButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  ACQUIRE ENTIRE PACKAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            {isSuccess ? (
              <div className={styles.successMessage}>
                <h3>Thank You!</h3>
                <p>Your request has been received. We will contact you shortly.</p>
                <button onClick={() => { setIsModalOpen(false); setIsSuccess(false); }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Acquire {activeStyle} Package</h3>
                <input required placeholder="Name" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                <input required type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                <input required type="number" placeholder="Preferred Amount" onChange={(e) => setFormData({...formData, amount: e.target.value})} />
                <button type="submit">Submit Request</button>
                <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* SCREEN 5: WEDDING TIMELINE INTERACTIVE MODULE */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>CHRONOLOGICAL CURATION</span>
          <h2>The Ceremonial Jewelry Timeline</h2>
        </div>

        <div className={styles.timelineNavigationTrack}>
          {TIMELINE_DATA.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.timelineNodeButton} ${activeTimelineIdx === idx ? styles.activeTimelineNode : ''}`}
              onClick={() => setActiveTimelineIdx(idx)}
            >
              <span className={styles.nodeStepIndicator}>STAGE 0{idx + 1}</span>
              <span className={styles.nodeStageLabel}>{item.stage}</span>
            </button>
          ))}
        </div>

        <div className={styles.timelineDynamicDisplayCard}>
          <div className={styles.timelineDisplayVisualStage}>
            <img 
      src={TIMELINE_DATA[activeTimelineIdx].img} 
      alt={TIMELINE_DATA[activeTimelineIdx].stage}
      className={styles.timelineStageImage} // Add object-fit: cover in CSS
    />
          </div>
          <div className={styles.timelineDisplayContentStage}>
            <span className={styles.goldLabel}>DESIGN ORIENTATION</span>
            <h3>{TIMELINE_DATA[activeTimelineIdx].tone}</h3>
            <div className={styles.specificationsTable}>
              <div className={styles.specRow}><strong>Recommended Configuration:</strong> <span>{TIMELINE_DATA[activeTimelineIdx].recommendation}</span></div>
              <div className={styles.specRow} style={{ borderBottom: 'none' }}><strong>Alloy & Palette Baseline:</strong> <span>{TIMELINE_DATA[activeTimelineIdx].aesthetic}</span></div>
            </div>
           
          </div>
        </div>
      </section>

          

      {/* SCREEN 8: BRIDAL ASSISTANT DESIGN PLANNER */}
   <section className={styles.plannerSection}>
        <div className={styles.plannerCardInnerFrame}>
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: '3rem' }}>
            <span className={styles.goldLabel}>AI ALIGNMENT PLANNING</span>
            <h2>The Bridal Strategic Planner</h2>
            <p>Define your core initialization metrics to generate personalized recommendations.</p>
          </div>

          <div className={styles.plannerInteractiveControls}>
            <div className={styles.plannerBudgetSelectorBlock}>
              <span className={styles.plannerControlLabel}>TARGET ASSIGNMENT BUDGET MATRIX:</span>
              <div className={styles.budgetTabsTrack}>
                {[
                  { id: '2l', label: '₹2,00,000+' },
                  { id: '5l', label: '₹5,00,000+' },
                  { id: '10l', label: '₹10,00,000+' },
                  { id: 'custom', label: 'Couture Commission' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.budgetTabButton} ${selectedBudget === tab.id ? styles.activeBudgetTab : ''}`}
                    onClick={() => !isLocked && setSelectedBudget(tab.id)}
                    disabled={isLocked}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.plannerDynamicOutputShield}>
              <h4>Curated Path Recommendation Profile</h4>
              <p>Based on your selection parameters, we suggest prioritizing an optimized <strong>Central Statement Choker</strong> with detachable layout elements, allowing transition scalability from primary wedding ceremonies to reception spaces.</p>
              
              <div className={styles.plannerDynamicActionRow}>
                <span>Estimated Matrix Matching: <strong>94% Confidence</strong></span>
                {!isLocked ? (
                  <button className={styles.plannerInternalCta} onClick={handleLockPath}>
                    LOCK CONFIGURATION PATH
                  </button>
                ) : (
                  <button className={styles.plannerLockedButton} disabled>
                    PATH LOCKED ✓
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT MODAL */}
      {showContactModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h3>Configuration Secured</h3>
            <p>Provide your details to receive the curated profile and expert consultation.</p>
            <form onSubmit={(e) => { e.preventDefault(); setShowContactModal(false); }}>
              <input required placeholder="Your Name" />
              <input required type="tel" placeholder="Phone Number" />
              <button type="submit">Unlock Full Profile</button>
            </form>
          </div>
        </div>
      )}

      {/* SCREEN 9: PRIVATE BRIDAL BOOK A STYLIST FORM */}
      <section className={styles.bookingSection}>
      <div className={styles.bookingCardLayoutContainer}>
        {/* Left Promo Panel remains unchanged */}
        <div className={styles.bookingLeftPromoPanel}>
          <h3>Schedule a Private Bridal Vault Session</h3>
          <p>Gain uninterrupted entry into our physical premium high-jewelry vault chambers accompanied by a dedicated senior gemological styling advisor.</p>
        </div>

        <div className={styles.bookingRightFormPanel}>
          {isConfirmed ? (
            <div className={styles.successMessage}>
              <h3>Appointment Reserved</h3>
              <p>Your private session has been confirmed. A concierge will reach out to your provided email shortly.</p>
              <button onClick={() => { setIsConfirmed(false); setIsAskingForEmail(false); }}>Close</button>
            </div>
          ) : isAskingForEmail ? (
            <form onSubmit={handleConfirm} className={styles.bookingFormElement}>
              <div className={styles.formFieldGroup}>
                <label>ENTER EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required 
                  className={styles.luxuryFormInput} 
                  placeholder="bride@example.com"
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
              <button type="submit" className={styles.submitReservationLuxuryButton}>CONFIRM APPOINTMENT</button>
            </form>
          ) : (
            <form onSubmit={handleInitialClick} className={styles.bookingFormElement}>
              <div className={styles.formFieldGroup}>
                <label>PREFERRED CALENDAR DATE</label>
                <input type="date" className={styles.luxuryFormInput} defaultValue="2026-06-15" />
              </div>
              <div className={styles.formFieldGroup}>
                <label>PREFERRED INTERVIEW TIME WINDOW</label>
                <select className={styles.luxuryFormInput}>
                  <option>Morning Session (11:00 AM — 01:30 PM)</option>
                  <option>Afternoon Vault (02:00 PM — 04:30 PM)</option>
                  <option>Sunset Confidential (05:00 PM — 07:30 PM)</option>
                </select>
              </div>
              <div className={styles.formFieldGroup}>
                <label>DESIGNATION STORE SALON RESIDENCY</label>
                <select className={styles.luxuryFormInput}>
                  <option>Mumbai Flagship Mansion (Colaba)</option>
                  <option>Delhi Luxury Atelier (Chanakyapuri)</option>
                  <option>Bangalore Heritage Studio (Lavelle Road)</option>
                </select>
              </div>
              <button type="submit" className={styles.submitReservationLuxuryButton}>RESERVE ATELIER APPOINTMENT</button>
            </form>
          )}
        </div>
      </div>
    </section>

      {/* SCREEN 10: REAL BRIDES MAGAZINE GALLERY */}
      <section className={styles.realBridesSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>THE JOURNAL VENUE</span>
          <h2>Real House Brides Journal</h2>
        </div>

        <div className={styles.realBridesMagazineGrid}>
          {[
            { name: 'Priya & Arjun', venue: 'The Udaipur Palace Nuptials', quote: 'The heavy uncut Polki suite anchored my entire style narrative. It felt like stepping directly into historic legend.',image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlhcmWbG9CHB2IT-zSzX5mVD0kWaxYOhipA&s" },
            { name: 'Sneha & Rahul', venue: 'The Taj Mahal Palace Gala', quote: 'Our dedicated stylist matched the diamond reflections perfectly against my reception outfit tone. Unforgettable care.', image:"https://rachnaniranjan.com/wp-content/uploads/2025/07/Gujarati-Wedding-at-Mayfield-Estate-Pune-Wedding-Pre-Wedding-Photographer-14.webp" },
            { name: 'Ananya & Kabir', venue: 'The Alila Fort Legacy Event', quote: 'From the initial structural planning stages down to final handoff, the entire execution lifecycle was immaculate.',image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4PPo2zmKoN0hsN-emWyMmcuUp2e9iX_hWJA&s" }
          ].map((bride, idx) => (
            <div key={idx} className={styles.magazineBrideCard}>
              <div className={styles.magazineBrideImageStage}>
                <img 
      src={bride.image} 
      alt={bride.name} 
      className={styles.bridePortrait} 
    />
    <span className={styles.magazinePhotoCreditIndicator}>
      PORTRAIT ARCHIVE // 0{idx+1}
    </span>
                
              </div>
              <div className={styles.magazineBrideContentMeta}>
                <h4>{bride.name}</h4>
                <span className={styles.brideVenueSublabel}>{bride.venue}</span>
                <p>"{bride.quote}"</p>
              
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 11: BRIDAL CORE SERVICES MATRICES */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>THE HOUSE GUARANTEES</span>
          <h2>Dedicated Bridal Support Services</h2>
        </div>

        <div className={styles.servicesQuadMatrixGrid}>
          {[
            { label: 'Complimentary Wedding Day Fitting', description: 'Our senior master setting team visits your preparation venue to assist in checking lock securities.' },
            { label: 'Lifetime Value Transition Guarantee', description: 'Trade or rescale your pieces inside a guaranteed value tracking system as your family heritage progresses.' },
            { label: 'Laser Inscribed GIA Provenance Certifications', description: 'Every primary diamond carries permanent micro-inscriptions mapping its gemological ledger lineage.' },
            { label: 'On-Call Concierge Registry Tracking', description: 'Enlist automated support workflows to manage your bridal gift registries and bespoke styling parameters.' }
          ].map((svc, i) => (
            <div key={i} className={styles.serviceLuxuryFeatureCard}>
              <div className={styles.serviceFeatureIndicatorStar}>✦</div>
              <h3>{svc.label}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 12: LOVE STORIES CONFIDENTIAL ACCOUNTABILITY MODULE */}
      <section className={styles.loveStoriesMinimalSection}>
        <div className={styles.minimalStoriesTrack}>
          <div className={styles.minimalTestimonialCard}>
            <div className={styles.starCluster}>★★★★★</div>
            <p>"The continuous alignment advice shifted my outlook from standard jewelry purchasing to authentic heritage collection building. We are eternally grateful."</p>
            <cite>— Divya & Vikram (Amantya Registry)</cite>
          </div>
        </div>
      </section>

      {/* SCREEN 13: FINAL LUXURY CALL TO ACTION EXECUTOR */}
      <section className={styles.finalCtaSectionSection}>
        <div className={styles.finalCtaPolishedShieldBacking}>
          <span className={styles.goldLabel}>YOUR ETERNAL CHAPTER ARRESTED</span>
          <h2>Begin Your Forever</h2>
          <p>Let us align your vision with timeless high jewelry statements. Connect with our atelier artisans today.</p>
         
        </div>
      </section>

    </div>
  );
}