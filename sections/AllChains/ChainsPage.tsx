"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { chainData } from '@/data/chains';

export default function ChainsPage() {
  const [selectedChain, setSelectedChain] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (chain: any) => {
    setSelectedChain(chain);
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
        <h1>EXQUISITE CHAINS</h1>
      </header>

      <main className="productGrid">
        {chainData.map((c) => (
          <div key={c.id} className="card">
            <div className="imageBox">
              <img src={c.img} alt={c.name} />
              <button className="quickViewBtn" onClick={() => openModal(c)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{c.name}</h4>
              <p className="priceText">{c.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(c)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedChain && (
        <div className="modalOverlay" onClick={() => setSelectedChain(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedChain(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedChain.img} alt={selectedChain.name} />
                <div className="modalDetails">
                  <h2>{selectedChain.name}</h2>
                  <p className="modalPrice">{selectedChain.price}</p>
                  <p>Meticulously crafted for grace and durability, our chains are the perfect foundation for any look.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedChain.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: CH-0${selectedChain.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedChain.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}