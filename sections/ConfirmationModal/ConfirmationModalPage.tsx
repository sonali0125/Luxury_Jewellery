"use client";
import { motion } from 'framer-motion';
import styles from './ConfirmationModal.module.css';

const TypewriterText = ({ text }: { text: string }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    {text.split("").map((char, i) => (
      <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
        {char}
      </motion.span>
    ))}
  </motion.div>
);

export default function ConfirmationModal({ type, onClose }: { type: string, onClose: () => void }) {
  const message = type === 'tier-instore' 
    ? "We look forward to your visit for the in-store private visit."
    : "Let's start the journey of the virtual appointment scheduled. Have a great day!";

  return (
    <div className={styles.overlay} onClick={onClose}>
      <motion.div className={styles.modal} initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        {/* Bouncing Tick Animation */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2">
            <path d="M5 12l5 5L20 7" />
          </svg>
        </motion.div>
        
        <div className={styles.message}>
          <TypewriterText text={message} />
        </div>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
}