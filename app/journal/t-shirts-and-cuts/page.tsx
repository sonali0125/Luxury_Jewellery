"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from './LuxoraJournal.module.css'; 
import {EDITORS_PICKS, MAGAZINE_LAYOUTS, CATEGORIES, EDUCATION_ACCORDION,TRENDING_ARTICLES,
    VIDEO_STORIES,EXPERT_TIPS} from '@/data/blog';

export default function LuxoraJournalPortal() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeEduTab, setActiveEduTab] = useState("cut");
  const [modalData, setModalData] = useState<{ title: string; content: string } | null>(null);
  
  const trendingSliderRef = useRef<HTMLDivElement>(null);
  const editorsPicksRef = useRef<HTMLDivElement>(null); // Added Ref
const getModalContent = (id: string | number) => {
  const contentMap: { [key: string]: string } = {
    // Replace '1', '2', '3' with the actual IDs from your EDITORS_PICKS data
    "1": "A celebration of modern luxury where timeless craftsmanship meets bold innovation. The 2026 high jewelry landscape embraces regal silhouettes, rare gemstones, sculptural designs, and sustainable artistry, creating pieces that embody power, elegance, and individuality. Every creation reflects a new era of sophistication—where heritage shines through contemporary brilliance.",
    "2": "Explore the timeless elegance of history’s most extraordinary royal wedding jewelry suites, where exceptional craftsmanship, rare gemstones, and regal symbolism come together. A curated look into iconic heirlooms that continue to inspire luxury, heritage, and enduring style.",
    "3": "Discover how precision, symmetry, and light performance transform a gemstone into a masterpiece. Explore the science behind ideal cuts that maximize brilliance, fire, and timeless beauty."
  };
  return contentMap[id] || "Content coming soon.";
};
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slideTrending = (direction: 'left' | 'right') => {
    if (trendingSliderRef.current) {
      const { scrollLeft, clientWidth } = trendingSliderRef.current;
      const offset = direction === 'left' ? -clientWidth * 0.5 : clientWidth * 0.5;
      trendingSliderRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.journalMainContainer}>
      {/* Scroll Progress Bar Indicator */}
      <div className={styles.scrollProgressBarIndicator} style={{ width: `${scrollProgress}%` }} />

      {/* Modal System */}
     {modalData && (
  <div className={styles.modalOverlay} onClick={() => setModalData(null)}>
    <div className={styles.modalContentBox} onClick={(e) => e.stopPropagation()}>
      <h2>{modalData.title}</h2>
      <p>{modalData.content}</p>
      <button className={styles.closeModalBtn} onClick={() => setModalData(null)}>
        Close Ledger
      </button>
    </div>
  </div>
)}

     
      {/* --- Section 1: Cinematic Hero --- */}
      <header className={styles.cinematicHeroCanvas}>
        <div className={styles.heroParallaxBackgroundTrack}>
          <div className={styles.darkLuxeMaskOverlay} />
        </div>
        <div className={styles.heroEditorialContentBox}>
          <span className={styles.heroSuperLabel}>LUXORA JOURNAL // VOL. VIII</span>
          <h1 className={styles.heroMainMagazineTitle}>The Stories Behind<br />Every Masterpiece</h1>
          {/* Scroll Navigation */}
          <button type="button" className={styles.heroExploreButtonLink} onClick={() => editorsPicksRef.current?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Stories <span className={styles.buttonArrowVector}>→</span>
          </button>
        </div>
      </header>

      {/* --- Section 2: Featured Story --- */}
      <section className={styles.featuredStoryEditorialSection}>
        <div className={styles.featuredStorySplitLayoutGrid}>
          <div className={styles.featuredStoryImageCanvasFrame}>
            <img src="https://i.ebayimg.com/images/g/kfkAAOSwjL5jGdsI/s-l1200.jpg" alt="Diamonds" className={styles.featuredZoomAssetImage} />
            <div className={styles.goldShimmerOverlayTrack} />
          </div>
          <div className={styles.featuredContentTextWrapperBox}>
            <span className={styles.sectionContextLabelCaps}>Featured Archival Narrative</span>
            <h2 className={styles.featuredHeadingTitle}>The Journey of<br />Handcrafted Diamonds</h2>
            <p className={styles.featuredEditorialParagraphDesc}>Delve into the precise microscopic world of heritage jewel configuration houses...</p>
            {/* Modal Trigger */}
           <span 
  className={styles.luxuryUnderlineLinkButton} 
  onClick={() => setModalData({
    title: "Diamonds as Symbols of Love", 
    content: `A tremendous change in the perception of the public was witnessed in the 20th century and diamonds became the symbolic meaning to love and engagements. This change was mainly brought about by De Beers' excellent promotional strategy. This required that they hire a new advertising agency as they did in 1938 when they hired N. W. Ayer & Son. The strategy that the agency aimed at was to make people associate diamonds with romance and feel emotions connected with it.

It was created in 1947 by Frances Gerety and the campaigning base was the iconic then famous saying, "A Diamond is Forever." This phrase very much went viral, which associated diamonds with love, with no end in sight. These marketing strategies consisted of celebrity endorsement, educational advertisement, and cultural marketing strategies.`
  })}
>
  Read Full Story <span className={styles.animArrow}>→</span>
</span>
          </div>
        </div>
      </section>

      {/* --- Section 3: Editor's Picks (Targeted) --- */}
      <section ref={editorsPicksRef} className={styles.editorsPicksSectionDeck}>
        <span className={styles.sectionContextLabelCapsCenter}>Curated Excellence</span>
        <h2 className={styles.sectionMiddleTitleCenter}>Editor’s Main Picks</h2>
        <div className={styles.editorsPicksThreeColumnGridGrid}>
          {EDITORS_PICKS.map((pick) => (
            <div key={pick.id} className={styles.editorialMagazineCardAsset}>
              <div className={styles.cardImageCanvasMaskArea}>
                <img src={pick.img} alt={pick.title} className={styles.cardHoverZoomImage} />
                <span className={styles.cardFloatingCategoryBadgeTag}>{pick.category}</span>
              </div>
              <div className={styles.cardContentMetadataStackText}>
                <span className={styles.cardReadTimeTextLabel}>{pick.readTime}</span>
                <h3 className={styles.cardHeadingTitleTextTitle}>{pick.title}</h3>
                {/* Modal Trigger */}
                <span 
  className={styles.luxuryUnderlineLinkButtonInline} 
  onClick={() => setModalData({
    title: pick.title, 
    content: getModalContent(pick.id)
  })}
>
  Explore Architecture
</span>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* --- Section 4: Luxury Magazine Layout --- */}
<section className={styles.asymmetricalMagazineAlternatingSection}>
  {MAGAZINE_LAYOUTS.map((layout, index) => (
    <div 
      key={layout.id} 
      className={`${styles.alternatingRowFlexContainer} ${index % 2 === 1 ? styles.rowReverseDirectionModifier : ""}`}
    >
      <div className={styles.alternatingImageFrameBlock}>
        <img src={layout.img} alt={layout.title} className={styles.alternatingAssetImageElement} />
      </div>
      <div className={styles.alternatingTextNarrativePanel}>
        <span className={styles.sectionContextLabelCaps}>{layout.subtitle}</span>
        <h3 className={styles.alternatingLayoutMainHeading}>{layout.title}</h3>
        <p className={styles.alternatingLayoutSupportingParagraphParagraph}>
          Investigating standard fine element profiles built explicitly to lock absolute stability metrics without undermining design intent metrics.
        </p>
        {/* Added onClick trigger here */}
        <span 
          className={styles.luxuryUnderlineLinkButton} 
          onClick={() => setModalData({ title: layout.title, content: layout.content })}
          style={{ cursor: 'pointer' }}
        >
          Read Monograph →
        </span>
      </div>
    </div>
  ))}
</section>

      {/* --- Section 5: Categories Matrix --- */}
      <section className={styles.categoriesMatrixSectionSection}>
        <span className={styles.sectionContextLabelCapsCenter}>Taxonomy Matrix</span>
        <h2 className={styles.sectionMiddleTitleCenter}>Browse by Archival Discipline</h2>
        
        <div className={styles.categoriesFlexRowGridWrap}>
          {CATEGORIES.map((cat) => (
            <div key={cat.name} className={styles.categoryInteractivePillCard}>
              <span className={styles.categoryIconBadgeEmblem}>{cat.icon}</span>
              <div className={styles.categoryMetaBlockText}>
                <h4>{cat.name}</h4>
                <span>{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 6: Jewellery Education Accordion --- */}
      <section className={styles.jewelleryEducationAccordionSection}>
        <div className={styles.accordionDoubleColumnSplitLayoutGrid}>
          <div>
            <span className={styles.sectionContextLabelCaps}>Gemological Core Standards</span>
            <h2 className={styles.accordionSectionHeadingTitle}>Jewellery Education:<br />Mastering the 4Cs Index</h2>
            <p className={styles.accordionSectionSupportingParagraph}>
              Equip your portfolio screening workflows with absolute data clarity. Our interactive scientific index simplifies the metallurgical factors that determine diamond valuation paths.
            </p>
          </div>
          
          <div className={styles.accordionContainerStackDeck}>
            {EDUCATION_ACCORDION.map((item) => (
              <div 
                key={item.id} 
                className={`${styles.accordionNodeElementWrapper} ${activeEduTab === item.id ? styles.accordionNodeActiveState : ""}`}
              >
                <button 
                  type="button" 
                  className={styles.accordionHeaderInteractiveTriggerButton}
                  onClick={() => setActiveEduTab(activeEduTab === item.id ? "" : item.id)}
                >
                  <span>{item.title}</span>
                  <span className={styles.accordionStatePlusMinusIndicator}>{activeEduTab === item.id ? "−" : "+"}</span>
                </button>
                <div className={styles.accordionBodyContentResizableArea}>
                  <p className={styles.accordionBodyContentParagraphText}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 7: Trending Articles Horizontal Slider --- */}
      <section className={styles.trendingSliderCarouselsSection}>
  <div className={styles.carouselHeaderRowFlexDeck}>
    <div>
      <span className={styles.sectionContextLabelCaps}>Real-Time Tracking</span>
      <h2 className={styles.carouselSectionHeadingTitleText}>Trending Collections</h2>
    </div>
    <div className={styles.carouselSliderNavigationControlPillBox}>
      <button type="button" onClick={() => slideTrending('left')} className={styles.sliderArrowNavBtn}>←</button>
      <button type="button" onClick={() => slideTrending('right')} className={styles.sliderArrowNavBtn}>→</button>
    </div>
  </div>

  <div ref={trendingSliderRef} className={styles.horizontalOverflowSliderViewportTrack}>
    {TRENDING_ARTICLES.map((article) => (
      <div key={article.id} className={styles.sliderArticleInlineCardAsset}>
        <div className={styles.sliderCardImageFrameCrop}>
          <img src={article.img} alt={article.title} className={styles.sliderAssetImage} />
          <span className={styles.sliderFloatingBadgeCategory}>{article.category}</span>
        </div>
        <div className={styles.sliderCardTextMetaPayload}>
          <span className={styles.sliderCardReadTimeLabel}>{article.readTime}</span>
          <h4>{article.title}</h4>
          {/* Modal Trigger */}
          <span 
            className={styles.luxuryUnderlineLinkButtonInline} 
            onClick={() => setModalData({ title: article.title, content: article.content })}
            style={{ cursor: 'pointer' }}
          >
            Read Article →
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* --- Section 8: Video Stories --- */}
      <section className={styles.videoStoriesSectionDeckSection}>
        <span className={styles.sectionContextLabelCapsCenter}>Cinematic Monographs</span>
        <h2 className={styles.sectionMiddleTitleCenter}>Video Stories from the Vault</h2>
        
        <div className={styles.videoStoriesThreeColumnResponsiveGrid}>
          {VIDEO_STORIES.map((vid) => (
            <div key={vid.id} className={styles.videoThumbnailInteractiveCardAsset}>
              <div className={styles.videoImageThumbnailCanvasFrame}>
                <img src={vid.img} alt={vid.title} className={styles.videoThumbnailImageElement} />
                <div className={styles.darkVideoOverlayMask} />
                <button type="button" className={styles.centerPlayButtonIconEmblem} aria-label="Play Video Track">
                  <div className={styles.playButtonTriangleVector} />
                </button>
                <span className={styles.videoFloatingLengthTimestampLabel}>{vid.length}</span>
              </div>
              <h3 className={styles.videoCardHeadingTitleTextTitle}>{vid.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 9: Expert Tips Timeline --- */}
      <section className={styles.expertTipsTimelineLayoutSection}>
        <span className={styles.sectionContextLabelCapsCenter}>Preservation Protocol</span>
        <h2 className={styles.sectionMiddleTitleCenter}>Expert Archival Tips</h2>
        
        <div className={styles.verticalTimelineLinearTrackContainer}>
          <div className={styles.verticalTimelineCenterSpineLineWire} />
          {EXPERT_TIPS.map((tip, idx) => (
            <div key={tip.step} className={`${styles.timelineNodeRowElementFlex} ${idx % 2 === 1 ? styles.timelineRowFlexReverseModifier : ""}`}>
              <div className={styles.timelineEmptySpaceEqualizerPanel} />
              <div className={styles.timelineCenterNodeBeadDotTrack}>
                <div className={styles.timelineBeadCircleCoreDotNode} />
              </div>
              <div className={styles.timelineContentDetailTextBoxCard}>
                <span className={styles.timelineIndexStepLabel}>{tip.step}</span>
                <h4>{tip.title}</h4>
                <p>{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 10: Glassmorphism Newsletter --- */}
      {/* --- Section 10: Glassmorphism Newsletter --- */}
<section className={styles.newsletterSubscriptionGlassmorphicSection}>
  <div className={styles.newsletterGlassmorphicContainerCardPanel}>
    <span className={styles.newsletterSystemTagCaps}>LUXORA CIRCULAR</span>
    <h2>Stay Inspired</h2>
    <p>Get exclusive high-jewelry insights, structural monographs, and priority collection notifications directly weekly.</p>
    
    <form 
      className={styles.newsletterSubscriptionInlineFormLayout} 
      onSubmit={(e) => {
        e.preventDefault();
        // Triggering the success modal
        setModalData({
          title: "Subscription Confirmed",
          content: "Thank you for joining the Luxora Circular. You will now receive private ledger access and exclusive high-jewelry insights directly to your inbox."
        });
      }}
    >
      <input 
        type="email" 
        placeholder="Enter email for private ledger access..." 
        className={styles.newsletterPremiumUnderlinedInputField} 
        required
      />
      <button type="submit" className={styles.newsletterGoldSolidActionButtonSubmit}>Subscribe</button>
    </form>
  </div>
</section>

      {/* --- Footer Component --- */}
      <footer className={styles.editorialFooterComponentDeck}>
        <div className={styles.footerInnerSplitLayoutGridGrid}>
          <div className={styles.footerBrandIdentColumn}>
            <h3>LUXORA JOURNAL</h3>
            <p>The definitive world journal documenting elite jewelry craftsmanship, metallurgical metrics, and asset narratives.</p>
          </div>
          <div className={styles.footerLinksNavigationColumnDeck}>
            <div className={styles.footerLinksColumnListGroup}>
              <h5>Collections</h5>
              <span>Heritage Gold</span>
              <span>D-Flawless Crystals</span>
              <span>Bridal Architecture</span>
            </div>
            <div className={styles.footerLinksColumnListGroup}>
              <h5>Journal</h5>
              <span>Archival Essays</span>
              <span>Latest Articles</span>
              <span>Expert Manuals</span>
            </div>
            <div className={styles.footerLinksColumnListGroup}>
              <h5>Atelier Portal</h5>
              <span>About House</span>
              <span>Store Flagships</span>
              <span>Secure Inquiries</span>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyrightRowFlexDeck}>
          <span>© 2026 LUXORA JOURNAL. ALL ARCHIVAL RIGHTS RESERVED.</span>
          <div className={styles.footerSocialIconsRowFlexTrack}>
            <span>Instagram</span>
            <span>Facebook</span>
            <span>YouTube</span>
          </div>
        </div>
      </footer>
    </div>
  );
}