/**
 * Creative Graphic Designer Portfolio - Interactive Engine
 * Strictly specialized in Graphic Design, Branding, Print & Social Assets.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Portfolio Case Study Database (Graphic Design Specialized) ---
  const projectDatabase = {
    'aurora-coffee': {
      title: 'Aurora Artisan Coffee Co.',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop',
      description: 'A comprehensive brand identity overhaul and retail packaging design for an artisanal specialty roastery. Created an iconic geometric emblem paired with warm, organic typography and matte paper coffee pouches.',
      process: 'Conducted brand positioning audits of competing specialty roasters, sketched 40+ monogram concepts, vectorized the final selected icon in Adobe Illustrator, and simulated realistic foil print treatments.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      result: 'Helped the client secure placement in 65+ retail cafes and generated a 140% increase in direct-to-consumer e-commerce packaging sales in the first quarter.'
    },
    'metropolis-poster': {
      title: 'Metropolis Jazz & Sound Festival',
      category: 'Posters',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
      description: 'Official screen-printed promotional poster series for an international metropolitan music festival. Designed with high-contrast Swiss typography, distorted musical rhythm glyphs, and a bold chromatic palette.',
      process: 'Developed an asymmetric 12-column typographical layout system in InDesign, manipulated custom soundwave graphics in Illustrator, and prepared color separations for 4-color silk-screen printing.',
      tools: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
      result: 'The limited edition 500-print run sold out within 48 hours and the visual poster was featured on leading design blogs and international exhibitions.'
    },
    'solaris-social': {
      title: 'Solaris Apparel Campaign Kit',
      category: 'Social Media',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      description: 'High-converting social media visual kit for a contemporary fashion label. Included 35+ Instagram feed templates, story carousels, seasonal sale banners, and Pinterest aesthetic graphics.',
      process: 'Defined color contrast benchmarks for mobile screens, retouched lifestyle editorial photography in Photoshop, and built easily editable branded Canva and PSD master templates for the internal marketing team.',
      tools: ['Adobe Photoshop', 'Canva'],
      result: 'Achieved a 210% increase in social media click-through rate during the autumn product launch and cut the client\'s post creation time in half.'
    },
    'botanica-skincare': {
      title: 'Botanica Luxury Skincare Line',
      category: 'Packaging',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      description: 'Eco-conscious luxury skincare label and outer box packaging system. Features tactile blind embossing, minimalist serif typography, and custom botanical line illustrations.',
      process: 'Calculated exact factory dieline dimensions, selected FSC-certified recycled paper stocks, and applied typography hierarchies that comply with cosmetic industry labeling regulations.',
      tools: ['Adobe Illustrator', 'Adobe Photoshop'],
      result: 'Selected for national distribution in 40+ upscale department stores and recognized by multiple packaging design showcases for sustainable luxury.'
    },
    'altitude-print': {
      title: 'Altitude Magazine & Editorial Brochure',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop',
      description: 'A 64-page premium editorial brochure and annual print catalog for an outdoor lifestyle brand. Structured with generous whitespace, sharp editorial columns, and stunning photography curation.',
      process: 'Formulated master pages, character/paragraph styles, and baseline grids in InDesign. Managed CMYK color conversions and performed full prepress preflight to guarantee flawless print fidelity.',
      tools: ['Adobe InDesign', 'Adobe Photoshop'],
      result: 'Produced 15,000 pristine print copies with zero registration or color balance errors, receiving outstanding praise from stakeholders and subscribers.'
    },
    'apex-thumbnail': {
      title: 'Apex Tech YouTube Thumbnail Series',
      category: 'Thumbnails',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      description: 'High-CTR YouTube thumbnail package designed for a major consumer technology channel. Engineered with expressive subject cutouts, dynamic rim lighting, and bold, readable typography.',
      process: 'Conducted eye-tracking and A/B test analysis on competing thumbnails, retouched hardware photos, created custom expressive highlights in Photoshop, and optimized text readability at 100px mobile sizes.',
      tools: ['Adobe Photoshop'],
      result: 'Drove the channel\'s average click-through rate from 4.1% up to 11.4%, contributing to over 3.2 million views across the video series.'
    },
    'vanguard-identity': {
      title: 'Vanguard Legal Business Stationery',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop',
      description: 'Authoritative corporate identity and luxury print collateral suite for a premier legal advisory firm. Included hot-foil stamped business cards, letterheads, presentation folders, and envelopes.',
      process: 'Crafted a balanced monogram mark, selected heavy 600gsm cotton cardstock with edge-gilding, and established strict corporate typography and color usage guidelines.',
      tools: ['Adobe Illustrator', 'Adobe InDesign'],
      result: 'Elevated client retention and established an immediate sense of institutional prestige for high-net-worth clientele.'
    },
    'summit-flyer': {
      title: 'Global Design Summit Event Flyer & Banner',
      category: 'Print Design',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
      description: 'Double-sided marketing flyer and venue roll-up banner design for an annual creative leadership conference. Highlights speaker lineups, schedules, and ticketing details with maximum legibility.',
      process: 'Structured information density using hierarchical scale and color coding, mapped out vector sponsor badge grids, and prepared print-ready PDF/X-1a files.',
      tools: ['Adobe InDesign', 'Adobe Illustrator'],
      result: 'The physical flyers distributed across regional design agencies helped sell out all 850 conference passes two weeks prior to the event date.'
    }
  };

  // --- 2. Sticky Header & Mobile Navigation Drawer ---
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // --- 3. Scrollspy: Active Navigation Highlighting ---
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (activeLink) activeLink.classList.add('active');
      }
    });
  });

  // --- 4. Portfolio Category Filtering ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.classList.remove('hide');
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 40);
        } else {
          card.classList.add('hide');
        }
      });
    });
  });

  // --- 5. Project Case Study Modal ---
  const modalBackdrop = document.getElementById('projectModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalProcess = document.getElementById('modalProcess');
  const modalTools = document.getElementById('modalTools');
  const modalResult = document.getElementById('modalResult');

  function openProjectModal(projectId) {
    const data = projectDatabase[projectId];
    if (!data) return;

    modalHeroImg.src = data.image;
    modalHeroImg.alt = data.title;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalDesc.textContent = data.description;
    modalProcess.textContent = data.process;
    modalResult.textContent = data.result;

    // Render Tools Used Badges
    modalTools.innerHTML = '';
    data.tools.forEach(tool => {
      const tag = document.createElement('span');
      tag.className = 'modal-tool-tag';
      tag.textContent = tool;
      modalTools.appendChild(tag);
    });

    modalBackdrop.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modalBackdrop.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.getAttribute('data-project');
      if (projectId) {
        openProjectModal(projectId);
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 6. Project Inquiry Form Submission ---
  const inquiryForm = document.getElementById('projectInquiryForm');
  const formFeedback = document.getElementById('formFeedbackMsg');

  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const submitBtn = inquiryForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = `<span>Sending Inquiry...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        inquiryForm.reset();

        if (formFeedback) {
          formFeedback.style.display = 'block';
          formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 7000);
        }
      }, 1000);
    });
  }

  // --- 7. Back to Top Button ---
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
