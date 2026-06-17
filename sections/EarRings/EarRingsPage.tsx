"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { earringData } from '@/data/earrings';

export default function EarringPage() {
  const [selectedEarring, setSelectedEarring] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (earring: any) => {
    setSelectedEarring(earring);
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
        <h1>EXQUISITE EARRINGS</h1>
      </header>

      <main className="productGrid">
        {earringData.map((e) => (
          <div key={e.id} className="card">
            <div className="imageBox">
              <img src={e.img} alt={e.name} />
              <button className="quickViewBtn" onClick={() => openModal(e)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{e.name}</h4>
              <p className="priceText">{e.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(e)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Overlay */}
      {selectedEarring && (
        <div className="modalOverlay" onClick={() => setSelectedEarring(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedEarring(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedEarring.img} alt={selectedEarring.name} />
                <div className="modalDetails">
                  <h2>{selectedEarring.name}</h2>
                  <p className="modalPrice">{selectedEarring.price}</p>
                  <p>Hand-crafted for those who appreciate the fine art of detail and luxury.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedEarring.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: ER-0${selectedEarring.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedEarring.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}