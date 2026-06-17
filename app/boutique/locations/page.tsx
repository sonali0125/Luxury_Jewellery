"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BoutiqueLocations.module.css';
import { BOUTIQUE_STORES } from '@/data/boutique';

// --- Appointment Modal Component ---
const AppointmentModal = ({ storeName, onClose }: { storeName: string, onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <form className={styles.formGroup} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            <h3 style={{color: '#D4AF37', marginBottom: '10px'}}>Secure Showroom: {storeName}</h3>
            <input type="text" className={styles.luxuryInput} placeholder="Full Name" required />
            <input type="email" className={styles.luxuryInput} placeholder="Email Address" required />
            <input type="date" className={styles.luxuryInput} required />
            <button type="submit" className={styles.submitBtn}>Confirm Appointment</button>
          </form>
        ) : (
          <motion.div className={styles.successState}>
            <motion.svg viewBox="0 0 24 24" className={styles.tickIcon} initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}>
              <path d="M5 12l5 5L20 7" fill="none" stroke="#D4AF37" strokeWidth="2" />
            </motion.svg>
            <p>Appointment Secured</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default function BoutiqueLocationsPage() {
  const [activeStoreIdx, setActiveStoreIdx] = useState<number>(0);
  const [bookingStore, setBookingStore] = useState<string | null>(null);
  const currentStore = BOUTIQUE_STORES[activeStoreIdx];

  return (
    <main className={styles.canvasRoom}>
      {/* Editorial Navigation Backdoor Link */}
      <div className={styles.navigationHeader}>
        <Link href="/" className={styles.backToAtelierLink}>
          <span className={styles.backArrow}>←</span> Return to Collective Directory
        </Link>
      </div>

      <div className={styles.horizonSplitLayout}>
        {/* LEFT COMPONENT COLUMN */}
        <div className={styles.visualShowcaseColumn}>
          <div className={styles.imageFilmstripContainer}>
            {BOUTIQUE_STORES.map((store, idx) => (
              <div key={store.id} className={`${styles.imageSlideNode} ${activeStoreIdx === idx ? styles.slideNodeActive : ''}`}>
                <img src={store.imageSrc} alt={store.quarter} className={styles.flagshipImage} />
                <div className={styles.lightMistOverlay} />
              </div>
            ))}
          </div>
          <div className={styles.hudCoordinateBanner}>
            <div className={styles.blinkingBeaconNode} />
            <span className={styles.hudCoordinates}>{currentStore.coordinates}</span>
          </div>
        </div>

        {/* RIGHT COMPONENT COLUMN */}
        <div className={styles.directoryControlColumn}>
          <div className={styles.textHeaderBlock}>
            <span className={styles.editorialBadge}>Global Flagships</span>
            <h1 className={styles.mainTitle}>Physical Sanctuaries</h1>
            <p className={styles.introParagraph}>
              Immersive, quiet spaces designed by architectural masters to frame light, structure, and high luxury.
            </p>
          </div>

          <div className={styles.storeCardDeck}>
            {BOUTIQUE_STORES.map((store, idx) => (
              <div
                key={store.id}
                className={`${styles.storeDeckCard} ${activeStoreIdx === idx ? styles.cardActiveState : ''}`}
                onClick={() => setActiveStoreIdx(idx)}
              >
                <div className={styles.fineGoldUnderlineTracer} />
                <div className={styles.cardHeaderRow}>
                  <span className={styles.cityIdentity}>{store.city}</span>
                  <span className={styles.serialIndex}>// 0{idx + 1}</span>
                </div>
                <div className={styles.collapsibleDetailsDrawer}>
                  <h3 className={styles.quarterSubtitle}>{store.quarter}</h3>
                  <p className={styles.detailLine}>{store.address}</p>
                  <button className={styles.appointmentActionBtn} onClick={(e) => { e.stopPropagation(); setBookingStore(store.quarter); }}>
                    Secure Private Showroom View <span className={styles.btnArrow}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Integration */}
      <AnimatePresence>
        {bookingStore && <AppointmentModal storeName={bookingStore} onClose={() => setBookingStore(null)} />}
      </AnimatePresence>
    </main>
  );
}