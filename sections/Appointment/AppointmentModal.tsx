"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AppointmentModal.module.css';

export default function AppointmentModal({ storeName, onClose }: { storeName: string, onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(onClose, 3000); // Close modal after 3 seconds
  };

  return (
    <div className={styles.overlay}>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={styles.modal}>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <h3>Book Private Showroom: {storeName}</h3>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="date" required />
            <button type="submit">Confirm Appointment</button>
          </form>
        ) : (
          <motion.div className={styles.successState}>
            <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} viewBox="0 0 24 24" className={styles.tick}>
              <path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2" />
            </motion.svg>
            <p>Appointment Secured</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}