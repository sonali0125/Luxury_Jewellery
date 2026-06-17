"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DigiGold.module.css';
import { GOLD_TIERS } from '@/data/digigold';

export default function DigiGoldPage() {
  const [selectedTier, setSelectedTier] = useState<string>("tier-24k");
  const [weight, setWeight] = useState<number>(10);
  const [livePricePerGram, setLivePricePerGram] = useState<number>(74.25);
  const [isFluctuating, setIsFluctuating] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false); // NEW STATE

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFluctuating(true);
      setLivePricePerGram(prev => {
        const microShift = (Math.random() - 0.5) * 0.12;
        return parseFloat((prev + microShift).toFixed(2));
      });
      setTimeout(() => setIsFluctuating(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAuthorizeAllocation = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true); // Switch to success UI
    }, 2000);
  };

  const activeTierObj = GOLD_TIERS.find(t => t.id === selectedTier);
  const premiumAdjustment = activeTierObj ? (livePricePerGram * (activeTierObj.premiumPct / 100)) : 0;
  const finalPricePerGram = livePricePerGram + premiumAdjustment;
  const totalInvestment = parseFloat((weight * finalPricePerGram).toFixed(2));

  return (
    <main className={styles.goldCanvas}>
      <div className={styles.liquidGoldOrb} />
      <div className={styles.metallicDustOverlay} />

      <div className={styles.navBar}>
        <Link href="/" className={styles.directoryLink}>
          <span className={styles.arrowBack}>←</span> Portfolio Dashboard
        </Link>
        <div className={styles.liveTickerContainer}>
          <span className={styles.tickerPulseDot} />
          <span className={styles.tickerLabel}>Live Zurich Feed: </span>
          <span className={`${styles.tickerValue} ${isFluctuating ? styles.pulsePriceText : ''}`}>
            ${livePricePerGram.toFixed(2)}/g
          </span>
        </div>
      </div>

      <div className={styles.masterContentLayout}>
        <div className={styles.controlModule}>
          <span className={styles.goldSubcap}>Fractional Vaulting Engine</span>
          <h1 className={styles.mainTitle}>Accumulate Digital Gold</h1>
          <p className={styles.narrativeIntro}>
            Instantly acquire certified, liquid physically backed institutional gold bars. Allocate weight parameters below in real-time.
          </p>

          <div className={styles.rangeScaleContainer}>
            <div className={styles.rangeHeaderRow}>
              <span className={styles.scaleMinMax}>1g</span>
              <div className={styles.centralDisplayBadge}>
                <span className={styles.weightNumber}>{weight}</span>
                <span className={styles.weightUnit}>Grams Selected</span>
              </div>
              <span className={styles.scaleMinMax}>250g</span>
            </div>
            <input type="range" min="1" max="250" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className={styles.fluidKineticSlider} />
            <div className={styles.presetRow}>
              {[5, 10, 50, 100].map((presetAmt) => (
                <button key={presetAmt} type="button" className={`${styles.presetPill} ${weight === presetAmt ? styles.activePresetPill : ''}`} onClick={() => setWeight(presetAmt)}>+{presetAmt}g</button>
              ))}
            </div>
          </div>

          <div className={styles.tierGridContainer}>
            <h4 className={styles.sectionLabel}>Select Minting Standard</h4>
            <div className={styles.tierSelectorGrid}>
              {GOLD_TIERS.map((tier) => (
                <div key={tier.id} className={`${styles.tierCard} ${selectedTier === tier.id ? styles.tierCardActive : ''}`} onClick={() => setSelectedTier(tier.id)}>
                  <span className={styles.tierPurityBadge}>{tier.purity}</span>
                  <h5 className={styles.tierTitle}>{tier.title}</h5>
                  <p className={styles.tierDesc}>{tier.description}</p>
                  <div className={styles.tierActiveIndicatorBorder} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.receiptMirrorSection}>
          <div className={styles.prismMirrorGlass}>
            <div className={styles.glassReflectionGlare} />
            
            {showSuccess ? (
              <div className={styles.successModal}>
                <h2 className={styles.modalTitle}>Vault Allocation Confirmed</h2>
                <p className={styles.modalNarrative}>
                  {weight}g of {activeTierObj?.title} has been secured. <br/>
                  <strong>Reference:</strong> #{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
                <button className={styles.executeTransactionBtn} onClick={() => setShowSuccess(false)}>Return to Dashboard</button>
              </div>
            ) : (
              <>
                <div className={styles.mirrorHeader}>
                  <span className={styles.mirrorLabel}>Secure Purchase Matrix</span>
                  <div className={styles.vaultIdBadge}>VAULT-SECURE // 256</div>
                </div>

                <div className={styles.weightVisualizationBox}>
                  <div className={styles.geometricGoldBarStack}>
                    {Array.from({ length: Math.min(Math.ceil(weight / 20), 5) }).map((_, idx) => (
                      <div key={idx} className={styles.renderedGoldInvenBar} style={{ transform: `scale(${1 - idx * 0.05}) translateY(${idx * -6}px)`, opacity: 1 - idx * 0.15 }} />
                    ))}
                  </div>
                  <span className={styles.visWeightSub}>Physical Cuboid Volume Representation</span>
                </div>

                <div className={styles.calculationLedgerStack}>
                  <div className={styles.ledgerRow}><span className={styles.ledgerLabel}>Base Valuation</span><span className={styles.ledgerValue}>${(weight * livePricePerGram).toLocaleString(undefined, {minimumFractionDigits: 2})}</span></div>
                  <div className={styles.ledgerRow}><span className={styles.ledgerLabel}>Atelier Premium</span><span className={styles.ledgerValue}>{premiumAdjustment > 0 ? `+$${(weight * premiumAdjustment).toFixed(2)}` : 'Waived'}</span></div>
                  <div className={styles.ledgerDottedDivider} />
                  <div className={styles.totalValuationRow}>
                    <span className={styles.totalLabel}>Total Cost</span>
                    <h2 className={styles.totalPriceAmount}>${totalInvestment.toLocaleString()}</h2>
                  </div>
                </div>

                <button className={`${styles.executeTransactionBtn} ${isProcessing ? styles.processingBtn : ''}`} onClick={handleAuthorizeAllocation} disabled={isProcessing}>
                  {isProcessing ? "Vaulting Assets..." : "Authorize Vault Allocation"}
                  {!isProcessing && <span className={styles.btnArrow}>→</span>}
                </button>
              </>
            )}
            
            <p className={styles.legalDisclaimerHint}>Prices lock instantly upon clicking. Bullion purchases are backed by audited physical certificates.</p>
          </div>
        </div>
      </div>
    </main>
  );
}