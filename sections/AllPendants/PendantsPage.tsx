"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { pendantData } from '@/data/pendants';

export default function PendantsPage() {
  const [selectedPendant, setSelectedPendant] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (pendant: any) => {
    setSelectedPendant(pendant);
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
        <h1>EXQUISITE PENDANTS</h1>
      </header>

      <main className="productGrid">
        {pendantData.map((p) => (
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
      {selectedPendant && (
        <div className="modalOverlay" onClick={() => setSelectedPendant(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedPendant(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedPendant.img} alt={selectedPendant.name} />
                <div className="modalDetails">
                  <h2>{selectedPendant.name}</h2>
                  <p className="modalPrice">{selectedPendant.price}</p>
                  <p>Designed for grace, these pendants add a refined touch to any necklace collection.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedPendant.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: PN-0${selectedPendant.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedPendant.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}