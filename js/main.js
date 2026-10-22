const siteConfig = window.SITE_CONFIG || {};
const REGISTRATION_URL = siteConfig.REGISTRATION_URL || 'https://forms.gle/Qhaknq3dhDyMXV2t5';
const PRICE = siteConfig.PRICE || { amount: 750, currency: 'DT', label: '750 DT' };

const projectData = [
  {
    image: 'assets/img/Image1.jpg',
    title: 'Formation Arduino & IoT',
    caption: 'atelier pratique autour de la programmation embarquée et de l’Internet des objets.'
  },
  {
    image: 'assets/img/Image2.jpg',
    title: 'Workshop Digital Marketing',
    caption: 'session de mise en pratique sur les outils et les méthodes de communication digitale.'
  },
  {
    image: 'assets/img/Image3.jpg',
    title: 'Séance de classe & formation',
    caption: 'moment d’apprentissage collaboratif, cadré autour du développement et des bons réflexes.'
  },
  {
    image: 'assets/img/Image4.jpg',
    title: 'Atelier de coaching technique',
    caption: 'formation orientée projet, accompagnement technique et échanges autour des bonnes pratiques.'
  }
];

const faqData = [
  {
    question: 'من يقدر يستفيد من PFE Pack؟',
    answer: 'كل طالب في مرحلة PFE أو اللي يبدأ مشروعه، وخصوصا اللي عنده فكرة وعايز دعم من الفكرة إلى soutenance.'
  },
  {
    question: 'إذا عندي فكرة فقط، نقدر نتواصل؟',
    answer: 'أكيد. حتى فكرة بسيطة يمكن يبدأ منها النقاش وتحديد الخطوة المناسبة قبل التطوير.'
  },
  {
    question: 'شنو التقنيات اللي نستخدمها؟',
    answer: 'حسب المشروع، ممكن نستخدم React.js، Node.js/Express.js، PostgreSQL، React Native، وAI عند الملاءمة.'
  },
  {
    question: 'هل دعم career support مجاني؟',
    answer: 'نعم، الدعم المهني مجاني، ويشمل LinkedIn، CV، portfolio، والمساعدة في البحث عن فرص العمل.'
  },
  {
    question: 'هل توجد attestation de stage؟',
    answer: 'نعم، Final Step توفر attestation de stage، حسب ترتيبات التربص المعمول بيها.'
  },
  {
    question: 'كيف نبدأ؟',
    answer: 'تقدر تملي نموذج ما قبل التسجيل أو تتواصل معنا مباشرة، ومن ثم نحدد الخطوات المناسبة.'
  }
];

function setCtaLinks() {
  const links = document.querySelectorAll('a[href=""]');
  links.forEach((link) => {
    link.href = REGISTRATION_URL;
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projectData
    .map(
      (project) => `
        <figure class="project-card" data-image="${project.image}" data-title="${project.title}" data-caption="${project.caption}">
          <img src="${project.image}" alt="${project.title}" loading="lazy" width="800" height="600" />
          <figcaption>
            <h3>${project.title}</h3>
            <p>${project.caption}</p>
          </figcaption>
        </figure>
      `
    )
    .join('');

  grid.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('click', () => {
      const image = card.dataset.image;
      const title = card.dataset.title;
      const caption = card.dataset.caption;
      openLightbox(image, title, caption);
    });
  });
}

function openLightbox(image, title, caption) {
  const existing = document.querySelector('.lightbox');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.innerHTML = `
    <div class="lightbox-panel">
      <button class="lightbox-close" aria-label="إغلاق">×</button>
      <img src="${image}" alt="${title}" />
      <div class="lightbox-copy">
        <h3>${title}</h3>
        <p>${caption}</p>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) overlay.remove();
  });

  const closeButton = overlay.querySelector('.lightbox-close');
  closeButton.addEventListener('click', () => overlay.remove());
  document.addEventListener('keydown', handleEscapeKey);

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', handleEscapeKey);
    }
  }
}

function renderFaq() {
  const faqList = document.getElementById('faqList');
  if (!faqList) return;

  faqList.innerHTML = faqData
    .map(
      (item, index) => `
        <div class="faq-item ${index === 0 ? 'open' : ''}">
          <button class="faq-question" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faq-${index}">
            <span>${item.question}</span>
            <span class="plus" aria-hidden="true">+</span>
          </button>
          <div class="faq-answer" id="faq-${index}">
            <div class="faq-answer-inner">${item.answer}</div>
          </div>
        </div>
      `
    )
    .join('');

  faqList.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
      const parent = button.parentElement;
      const isOpen = parent.classList.contains('open');

      faqList.querySelectorAll('.faq-item').forEach((item) => {
        item.classList.remove('open');
        item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initMenuToggle() {
  const nav = document.getElementById('site-nav');
  const toggle = document.querySelector('.nav-toggle');

  if (!nav || !toggle) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function updatePriceText() {
  const priceElements = document.querySelectorAll('.price-line');
  priceElements.forEach((element) => {
    element.textContent = `${PRICE.label} · تسهيلات في الخلاص ممكنة`;
  });
}

function init() {
  renderProjects();
  renderFaq();
  initMenuToggle();
  setCtaLinks();
  updatePriceText();
}

init();

// NEEDS REVIEW by native speaker
