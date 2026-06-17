"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { ringData } from '@/data/rings';

export default function AllRingsPage() {
  const [selectedRing, setSelectedRing] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening
  const openModal = (ring: any) => {
    setSelectedRing(ring);
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
        <h1>OUR MASTERWORK RINGS</h1>
      </header>

      <main className="productGrid">
        {ringData.map((r) => (
          <div key={r.id} className="card">
            <div className="imageBox">
              <img src={r.img} alt={r.name} />
              <button className="quickViewBtn" onClick={() => openModal(r)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{r.name}</h4>
              <p className="priceText">{r.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(r)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Popup for Ring Details */}
      {selectedRing && (
        <div className="modalOverlay" onClick={() => setSelectedRing(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedRing(null)}><X size={24} /></button>
            
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedRing.img} alt={selectedRing.name} />
                <div className="modalDetails">
                  <h2>{selectedRing.name}</h2>
                  <p className="modalPrice">{selectedRing.price}</p>
                  <p>An exquisite piece from our signature collection, handcrafted for perfection.</p>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedRing.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: RING-0${selectedRing.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. A private advisor will contact you at {formData.email} regarding your interest in {selectedRing.name} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
