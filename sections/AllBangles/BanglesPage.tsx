"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { bangleData } from '@/data/bangles';

export default function BanglesPage() {
  const [selectedBangle, setSelectedBangle] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (bangle: any) => {
    setSelectedBangle(bangle);
    setAcquisitionStep('view');
    setFormData({ username: '', email: '' });
  };

  const handleAcquisitionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAcquisitionStep('success');
  };

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>BANGLE COLLECTION</h1>
      </header>

      <main className="productGrid">
        {bangleData.map((b) => (
          <div key={b.id} className="card">
            <div className="imageBox">
              <img src={b.img} alt={b.name} />
              <button className="quickViewBtn" onClick={() => openModal(b)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{b.name}</h4>
              <p className="priceText">{b.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(b)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedBangle && (
        <div className="modalOverlay" onClick={() => setSelectedBangle(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedBangle(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedBangle.img} alt={selectedBangle.name} />
                <div className="modalDetails">
                  <h2>{selectedBangle.name}</h2>
                  <p className="modalPrice">{selectedBangle.price}</p>
                  <p>Meticulously crafted gold and stone-studded bangles, perfect for grand celebrations.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedBangle.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: BN-0${selectedBangle.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedBangle.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}