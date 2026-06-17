"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { chainData } from '@/data/necklaceset';

export default function ChainsPage() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (item: any) => {
    setSelectedItem(item);
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
        <h1>EXCLUSIVE CHAINS & SETS</h1>
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

      {selectedItem && (
        <div className="modalOverlay" onClick={() => setSelectedItem(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedItem(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedItem.img} alt={selectedItem.name} />
                <div className="modalDetails">
                  <h2>{selectedItem.name}</h2>
                  <p className="modalPrice">{selectedItem.price}</p>
                  <p>Meticulously crafted for elegance and poise, this piece defines luxury.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedItem.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: CS-0${selectedItem.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedItem.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}