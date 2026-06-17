"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { pendantSetData } from '@/data/pendantSets';

export default function PendantSetPage() {
  const [selectedSet, setSelectedSet] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (set: any) => {
    setSelectedSet(set);
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
        <h1>PENDANT & EARRING SETS</h1>
      </header>

      <main className="productGrid">
        {pendantSetData.map((item) => (
          <div key={item.id} className="card">
            <div className="imageBox">
              <img src={item.img} alt={item.name} />
              <button className="quickViewBtn" onClick={() => openModal(item)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{item.name}</h4>
              <p className="priceText">{item.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(item)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedSet && (
        <div className="modalOverlay" onClick={() => setSelectedSet(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedSet(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedSet.img} alt={selectedSet.name} />
                <div className="modalDetails">
                  <h2>{selectedSet.name}</h2>
                  <p className="modalPrice">{selectedSet.price}</p>
                  <p>A perfectly coordinated set designed to add harmonious luxury to your ensemble.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedSet.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: PS-0${selectedSet.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedSet.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
