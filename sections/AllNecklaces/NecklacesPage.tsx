"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { necklaceData } from '@/data/necklaces';

export default function NecklacePage() {
  const [selectedNecklace, setSelectedNecklace] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (necklace: any) => {
    setSelectedNecklace(necklace);
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
        <h1>SIGNATURE NECKLACES</h1>
      </header>

      <main className="productGrid">
        {necklaceData.map((n) => (
          <div key={n.id} className="card">
            <div className="imageBox">
              <img src={n.img} alt={n.name} />
              <button className="quickViewBtn" onClick={() => openModal(n)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{n.name}</h4>
              <p className="priceText">{n.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(n)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedNecklace && (
        <div className="modalOverlay" onClick={() => setSelectedNecklace(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedNecklace(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedNecklace.img} alt={selectedNecklace.name} />
                <div className="modalDetails">
                  <h2>{selectedNecklace.name}</h2>
                  <p className="modalPrice">{selectedNecklace.price}</p>
                  <p>An extraordinary piece designed to be the centerpiece of your formal ensemble.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedNecklace.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: NC-0${selectedNecklace.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedNecklace.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
