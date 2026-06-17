"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './BookAppointment.module.css';
import { BOOKING_TIERS, AVAILABLE_SLOTS } from '@/data/booking';

export default function BookAppointmentPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>("tier-digital");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [showDetailsForm, setShowDetailsForm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
const confirmationHeading = selectedTier === 'tier-instore' ? "Your Sanctuary Awaits" : "Your Virtual Journey Begins";
const confirmationBody = selectedTier === 'tier-instore' 
    ? "We look forward to your visit for the in-store private visit."
    : "Let's start the journey of the virtual appointment scheduled. Have a great day!";
  const getConfirmationHeading = () => 
    selectedTier === 'tier-instore' 
      ? "Your Sanctuary Awaits" 
      : "Your Virtual Journey Begins";

  const getConfirmationMessage = () => 
    selectedTier === 'tier-instore' 
      ? "We look forward to your visit for the in-store private visit."
      : "Let's start the journey of the virtual appointment scheduled. Have a great day!";

  return (
    <main className={styles.bookingCanvas}>
      {/* Background Effects */}
      <div className={styles.ambientGlowOrb1} />
      <div className={styles.ambientGlowOrb2} />
      <div className={styles.fineGrainTexture} />
      
      <div className={styles.navBar}>
        <Link href="/" className={styles.directoryLink}>
          <span className={styles.arrowBack}>←</span> Back to Main Directory
        </Link>
      </div>

      <div className={styles.contentLayout}>
        <div className={styles.editorialHeader}>
          <span className={styles.goldBadge}>Personal Stylist Desk</span>
          <h1 className={styles.mainHeading}>Book Your Private Appointment</h1>
          <p className={styles.narrativeParagraph}>
            Every piece tells a unique story. Choose how you would like to explore our collection below, and lock in a dedicated time window for one-on-one help.
          </p>
          
          {selectedTier && (
            <div className={styles.statusDisplayCard}>
              <span className={styles.statusLabel}>Your Choice:</span>
              <p className={styles.statusValue}>
                {BOOKING_TIERS.find(t => t.id === selectedTier)?.title}
              </p>
            </div>
          )}
        </div>

        <div className={styles.interactiveColumn}>
          <div className={styles.tierDeck}>
            {BOOKING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`${styles.tierCard} ${selectedTier === tier.id ? styles.tierActive : ''}`}
                onClick={() => { setSelectedTier(tier.id); setSelectedSlot(null); }}
                role="button" tabIndex={0}
              >
                <div className={styles.cardRibbonTracer} />
                <div className={styles.tierHeaderRow}>
                  <span className={styles.tierAccent}>{tier.icon} {tier.accentTitle}</span>
                  <span className={styles.tierDuration}>{tier.duration}</span>
                </div>
                <h3 className={styles.tierTitle}>{tier.title}</h3>
              </div>
            ))}
          </div>

          <div className={`${styles.calendarCurtain} ${selectedTier ? styles.curtainRevealed : ''}`}>
            <div className={styles.curtainInnerContent}>
              <div className={styles.slotsHeaderRow}>
                <h4 className={styles.slotsHeading}>Select Your Time Slot</h4>
              </div>

              <div className={styles.slotsGridMatrix}>
                {AVAILABLE_SLOTS.map((slot, idx) => (
                  <button
                    key={idx}
                    className={`${styles.slotButton} ${selectedSlot === slot.time ? styles.slotButtonActive : ''}`}
                    onClick={() => setSelectedSlot(slot.time)}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>

              <div className={`${styles.executionWrapper} ${selectedSlot ? styles.executionVisible : ''}`}>
                <button className={styles.finalSubmitBtn} onClick={() => setShowDetailsForm(true)}>
                  Confirm Appointment Time →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     <AnimatePresence mode="wait">
        {showDetailsForm && !confirmed && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay}>
            <form className={styles.detailsForm} onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }}>
              <h3 style={{ color: '#fff' }}>Enter Your Details</h3>
              <input type="text" placeholder="Full Name" required className={styles.inputField} />
              <button type="submit" className={styles.submitBtn}>Confirm Appointment</button>
            </form>
          </motion.div>
        )}

      {confirmed && (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.modalOverlay}>
    <div className={styles.successContainer}>
      <h3 className={styles.successHeading}>{confirmationHeading}</h3>
      <p className={styles.typewriter}>{confirmationBody}</p>
      
      {/* UPDATE THIS BUTTON */}
      <button 
        onClick={() => { 
          setConfirmed(false);      // Close the success message
          setShowDetailsForm(false); // Close the form
          setSelectedSlot(null);    // Reset the selection so the curtain closes
        }} 
        className={styles.closeBtn}
      >
        Close
      </button>
    </div>
  </motion.div>
)}
      </AnimatePresence>
    </main>
  );
}