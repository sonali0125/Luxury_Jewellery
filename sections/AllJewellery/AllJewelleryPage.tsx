"use client";

import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import './AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { productData } from '@/data/product';

export default function AllJewelleryPage() {
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [acquisitionStep, setAcquisitionStep] = useState<'view' | 'form' | 'success'>('view');
  const [formData, setFormData] = useState({ username: '', email: '' });

  // Reset modal state when opening a new product
  const openModal = (product: any) => {
    setSelectedProduct(product);
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
        <h1>ALL JEWELLERY</h1>
        <p>Timeless masterpieces crafted for every occasion</p>
      </header>

      <main className="productGrid">
        {productData.map((p) => (
          <div key={p.id} className="card">
            <div className="imageBox">
              <img src={p.img} alt={p.name} />
              <div className="hoverOverlay">
                <button className="quickViewBtn" onClick={() => openModal(p)}>Quick View</button>
              </div>
            </div>
            <div className="cardInfo">
              <h4>{p.name}</h4>
              <p className="subText">18K Gold</p>
              <div className="rating">★★★★★</div>
              <p className="priceText">{p.price}</p>
              <button className="viewDetailsBtn" onClick={() => openModal(p)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="modalOverlay" onClick={() => setSelectedProduct(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedProduct(null)}><X size={24} /></button>
            
            {/* View State */}
            {acquisitionStep === 'view' && (
              <div className="modalGrid">
                <img src={selectedProduct.img} alt={selectedProduct.name} />
                <div className="modalDetails">
                  <h2>{selectedProduct.name}</h2>
                  <p className="modalPrice">{selectedProduct.price}</p>
                  <div className="specs">
                    <p><strong>Reference:</strong> NA-0{selectedProduct.id}</p>
                    <p><strong>Composition:</strong> 18K White Gold / Platinum</p>
                  </div>
                  <button className="bookBtn" onClick={() => setAcquisitionStep('form')}>Initiate Private Acquisition</button>
                </div>
              </div>
            )}

            {/* Form State */}
            {acquisitionStep === 'form' && (
              <div className="acquisitionFormContainer">
                <h3>Secure Acquisition: {selectedProduct.name}</h3>
                <form onSubmit={handleAcquisitionSubmit}>
                  <input required placeholder="Username" onChange={(e) => setFormData({...formData, username: e.target.value})} />
                  <input required type="email" placeholder="Email Address" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                  <input disabled value={`Reference: NA-0${selectedProduct.id}`} />
                  <button type="submit" className="bookBtn">Confirm Acquisition</button>
                </form>
              </div>
            )}

            {/* Success State */}
            {acquisitionStep === 'success' && (
              <div className="successContainer">
                <div className="checkmark-bounce">✓</div>
                <h3>Acquisition Initiated</h3>
                <p>Thank you, {formData.username}. Reference <strong>NA-0{selectedProduct.id}</strong> is being processed. A private advisor will contact you at {formData.email} shortly.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}