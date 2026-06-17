"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { braceletData } from '@/data/bracelets';

export default function BraceletsPage() {
  const [selectedBracelet, setSelectedBracelet] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (bracelet: any) => {
    setSelectedBracelet(bracelet);
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
        <h1>EXQUISITE BRACELETS</h1>
      </header>

      <main className="productGrid">
        {braceletData.map((b) => (
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
      {selectedBracelet && (
        <div className="modalOverlay" onClick={() => setSelectedBracelet(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedBracelet(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedBracelet.img} alt={selectedBracelet.name} />
                <div className="modalDetails">
                  <h2>{selectedBracelet.name}</h2>
                  <p className="modalPrice">{selectedBracelet.price}</p>
                  <p>Meticulously designed for your wrist, blending artisanal craftsmanship with modern luxury.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedBracelet.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: BR-0${selectedBracelet.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedBracelet.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
