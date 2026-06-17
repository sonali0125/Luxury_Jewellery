"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/sections/AllJewellery/AllJewellery.css';  
import NavbarPage from '@/sections/LuxuryNavbar';
import { nosePinData } from '@/data/nosepins';

export default function NosePinPage() {
  const [selectedPin, setSelectedPin] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (pin: any) => {
    setSelectedPin(pin);
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
        <h1>EXQUISITE NOSE PINS</h1>
      </header>

      <main className="productGrid">
        {nosePinData.map((p) => (
          <div key={p.id} className="card">
            <div className="imageBox">
              <img src={p.img} alt={p.name} />
              <button className="quickViewBtn" onClick={() => openModal(p)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{p.name}</h4>
              <p className="priceText">{p.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(p)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedPin && (
        <div className="modalOverlay" onClick={() => setSelectedPin(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedPin(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedPin.img} alt={selectedPin.name} />
                <div className="modalDetails">
                  <h2>{selectedPin.name}</h2>
                  <p className="modalPrice">{selectedPin.price}</p>
                  <p>Designed for grace and elegance, a delicate addition to your collection.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedPin.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: NP-0${selectedPin.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedPin.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
