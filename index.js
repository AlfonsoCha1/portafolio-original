// Portfolio interactions: typing, button ripple, modal, tilt, scroll-follow and scrollspy
// Interacciones del portafolio: tipeo, efecto ripple, modal, tilt, seguimiento de scroll y scrollspy
(function(){
  // Typed text disabled
  // Texto tipeado desactivado
  const typedEl = document.getElementById('typed');
  if(typedEl) typedEl.textContent = '';

  // Smooth scrolling for buttons and nav
  // Scroll suave para botones y navegación
  document.querySelectorAll('[data-target]').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const sel = btn.getAttribute('data-target');
      const el = document.querySelector(sel);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Ripple effect for .btn
  // Efecto ripple para .btn
  document.addEventListener('click', function(e){
    const btn = e.target.closest('.btn');
    if(!btn) return;
    const rect = btn.getBoundingClientRect();
    const circle = document.createElement('span');
    circle.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';
    circle.style.left = (e.clientX - rect.left - size/2) + 'px';
    circle.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(circle);
    setTimeout(()=> circle.remove(), 700);
  });

  // Modal for projects
  // Modal para proyectos
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const modalThumb = document.getElementById('modalThumb');
  const modalHref = document.getElementById('modalHref');
  const modalClose = modal && modal.querySelector('.modal-close');

  const projects = {
    1:{ title:'Interfaz Dinámica', desc:'Proyecto con animaciones CSS y JS para mejorar la experiencia del usuario. Incluye microinteracciones fluidas y transiciones suaves.', color:'142, 249, 252', link:'https://github.com/AlfonsoCha1/PROYECTOS' },
    2:{ title:'Landing Optimizada', desc:'Landing page con enfoque en performance y tasas de conversión. Optimizada para móvil con CTA claros.', color:'110, 231, 183', link:'https://github.com/AlfonsoCha1/PROYECTO-INTERLIGENCIA-ARTIFICIAL' },
    3:{ title:'App de Ejemplo', desc:'Single Page Application (SPA) con gestión de estado compartido y animaciones suaves.', color:'252, 208, 142', link:'https://github.com/AlfonsoCha1/Java' },
    4:{ title:'E-commerce Store', desc:'Plataforma de tienda online con carrito de compras, sistema de pago integrado y gestión de inventario.', color:'252, 142, 142', link:'https://github.com/AlfonsoCha1/ESCUELA' },
    5:{ title:'Dashboard Analytics', desc:'Panel de análisis en tiempo real con gráficos interactivos, mapas de calor y reportes personalizados.', color:'252, 142, 239', link:'https://github.com/AlfonsoCha1/SUMA' },
    6:{ title:'Chat Application', desc:'Aplicación de mensajería instantánea con soporte para grupos, notificaciones y sincronización en vivo.', color:'204, 142, 252', link:'https://github.com/AlfonsoCha1/Smucky_By_CHAVAMON' },
    7:{ title:'Portafolio Alfonso', desc:'Portafolio personal con proyectos, certificados y contacto.', color:'142, 202, 252', link:'https://github.com/AlfonsoCha1/portafolio-alfonso' },
    8:{ title:'Task Manager', desc:'Gestor de tareas colaborativo con asignación de roles, cronograma Gantt y seguimiento de progreso.', color:'173, 255, 47', link:'#' },
    9:{ title:'Video Streaming', desc:'Plataforma de streaming de video con reproductor personalizado, recomendaciones IA y comentarios en vivo.', color:'255, 165, 0', link:'#' },
    10:{ title:'Social Network', desc:'Red social completa con perfiles, muro de actividades, notificaciones y sistema de mensajes privados.', color:'64, 224, 208', link:'#' },
    11:{ title:'Proyecto 11', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'255, 99, 132', link:'#' },
    12:{ title:'Proyecto 12', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'54, 162, 235', link:'#' },
    13:{ title:'Proyecto 13', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'255, 206, 86', link:'#' },
    14:{ title:'Proyecto 14', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'75, 192, 192', link:'#' },
    15:{ title:'Proyecto 15', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'153, 102, 255', link:'#' },
    16:{ title:'Proyecto 16', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'255, 159, 64', link:'#' },
    17:{ title:'Proyecto 17', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'99, 102, 241', link:'#' },
    18:{ title:'Proyecto 18', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'16, 185, 129', link:'#' },
    19:{ title:'Proyecto 19', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'244, 114, 182', link:'#' },
    20:{ title:'Proyecto 20', desc:'Proyecto en desarrollo. Agrega la descripción y el enlace cuando esté listo.', color:'14, 165, 233', link:'#' }
  };

  // Carousel project cards click handler
  // Click en tarjetas del carrusel de proyectos
  document.querySelectorAll('.carousel-project').forEach(card=>{
    card.addEventListener('click', function(){
      const projectId = this.getAttribute('data-project');
      if(Number(projectId) >= 8) return;
      const p = projects[projectId];
      if(!p) return;
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalThumb.style.background = `linear-gradient(135deg, rgba(${p.color}, 0.3) 0%, rgba(${p.color}, 0.7) 80%, rgba(${p.color}, 0.9) 100%)`;
      modalThumb.textContent = p.title;
      modalHref.href = p.link;
      modal.setAttribute('aria-hidden','false');
      modalClose && modalClose.focus();
    });
  });

  // (The Look Me buttons open the PDF in a new tab by default)
  // (Los botones Look Me abren el PDF en nueva pestaña por defecto)

  document.querySelectorAll('.proj-link').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('data-project');
      const p = projects[id];
      if(!p) return;
      modalTitle.textContent = p.title;
      modalDesc.textContent = p.desc;
      modalThumb.textContent = p.title;
      modalHref.href = p.link;
      modal.setAttribute('aria-hidden','false');
      modalClose && modalClose.focus();
    });
  });
  modalClose && modalClose.addEventListener('click', ()=> modal.setAttribute('aria-hidden','true'));
  modal && modal.addEventListener('click', e=>{ if(e.target===modal) modal.setAttribute('aria-hidden','true'); });


  // Tilt for project cards
  // Inclinación (tilt) para tarjetas de proyectos
  document.querySelectorAll('.project-card').forEach(card=>{
    card.addEventListener('mousemove', e=>{
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) - rect.width/2;
      const y = (e.clientY - rect.top) - rect.height/2;
      const rx = (-y / rect.height) * 6;
      const ry = (x / rect.width) * 6;
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener('mouseleave', ()=> card.style.transform = 'none');
  });

  // Escape should close project modal
  // Escape debe cerrar el modal de proyectos
  document.addEventListener('keydown', e=>{
    if(e.key === 'Escape'){
      modal && modal.setAttribute('aria-hidden','true');
    }
  });

  // Global controls to expand/collapse both lists (certificates and diplomas)
  // Controles globales para maximizar/minimizar ambos listados (certificados y diplomas)
  const expandAllBtn = document.getElementById('docs-expand-all');
  const collapseAllBtn = document.getElementById('docs-collapse-all');
  const allGrids = document.querySelectorAll('.docs-column .docs-grid');

  // Expand all: remove the 'collapsed' class from each grid
  // Expandir todas: quitar la clase 'collapsed' de cada grid
  expandAllBtn && expandAllBtn.addEventListener('click', ()=>{
    allGrids.forEach(g=> g.classList.remove('collapsed'));
  });

  // Collapse all: add the 'collapsed' class to show only 3 cards
  // Colapsar todas: añadir la clase 'collapsed' para mostrar solo 3 tarjetas
  collapseAllBtn && collapseAllBtn.addEventListener('click', ()=>{
    allGrids.forEach(g=> g.classList.add('collapsed'));
    // optional: smooth scroll to the documents section
    // opcional: desplazar suavemente hacia la sección de documentos
    const docsSection = document.querySelector('#Diplomas\\ and\\ Certificates');
    if(docsSection) docsSection.scrollIntoView({behavior:'smooth',block:'start'});
  });

  // Compatibility: if individual '.docs-toggle' buttons exist, handle them too
  // Compatibilidad: si existen botones individuales con la clase '.docs-toggle', los manejamos también
  document.querySelectorAll('.docs-toggle').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = btn.dataset.target;
      let grid = target ? document.querySelector(`.docs-column[data-which="${target}"] .docs-grid`) : (btn.closest('.docs-column') && btn.closest('.docs-column').querySelector('.docs-grid'));
      if(!grid) return;
      const isCollapsed = grid.classList.toggle('collapsed');
      btn.textContent = isCollapsed ? 'Maximizar' : 'Minimizar';
      btn.setAttribute('aria-pressed', (!isCollapsed).toString());
    });
  });

  // Scrollspy: highlight nav links (both header and sidebar)
  // Scrollspy: resaltar links de navegación (header y sidebar)
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-link, .sidebar-link');
  
  const scrollObs = new IntersectionObserver((entries)=>{
    let mostVisible = null;
    let maxRatio = 0;
    
    entries.forEach(e=>{
      if(e.isIntersecting && e.intersectionRatio > maxRatio){
        maxRatio = e.intersectionRatio;
        mostVisible = e.target;
      }
    });
    
    if(mostVisible){
      const targetId = mostVisible.id;
      navLinks.forEach(a=> {
        const linkHref = a.getAttribute('href');
        const isActive = linkHref === '#' + targetId;
        a.classList.toggle('active', isActive);
      });
    }
  }, {threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]});
  
  sections.forEach(s=> scrollObs.observe(s));

  // Floating card follows scroll (adjust top position) on larger screens
  // Tarjeta flotante sigue el scroll (ajusta top) en pantallas grandes
  const floating = document.getElementById('floatingCard');
  if(floating){
    let lastScroll = window.pageYOffset;
    window.addEventListener('scroll', ()=>{
      const y = Math.min(Math.max(window.pageYOffset + 100, 100), document.body.scrollHeight - 300);
      floating.style.top = (y) + 'px';
    }, {passive:true});
  }

  // Show floating card only in HOME
  // Mostrar tarjeta flotante solo en HOME
  const homeSection = document.getElementById('HOME');
  if(floating && homeSection){
    const homeObs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.target === homeSection){
          floating.classList.toggle('is-hidden', !e.isIntersecting);
        }
      });
    }, {threshold: 0.4});
    homeObs.observe(homeSection);
  }

  // Sidebar Menu toggle
  // Toggle del menú lateral
  const menuToggle = document.getElementById('menuToggle');
  const navToggle = document.getElementById('navToggle');
  const sidebarMenu = document.getElementById('sidebarMenu');
  const sidebarOverlay = document.getElementById('sidebarOverlay');
  const sidebarClose = document.getElementById('sidebarClose');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  // Function to toggle sidebar
  // Función para alternar el sidebar
  function toggleSidebar() {
    const isHidden = sidebarMenu.getAttribute('aria-hidden') === 'true';
    sidebarMenu.setAttribute('aria-hidden', !isHidden);
    sidebarOverlay.classList.toggle('active');
  }

  // Toggle on menu button or nav toggle click
  // Toggle al hacer clic en menú o nav toggle
  menuToggle && menuToggle.addEventListener('click', toggleSidebar);
  navToggle && navToggle.addEventListener('click', toggleSidebar);

  // Close sidebar when close button clicked
  // Cerrar sidebar al hacer clic en cerrar
  sidebarClose && sidebarClose.addEventListener('click', ()=>{
    sidebarMenu.setAttribute('aria-hidden', 'true');
    sidebarOverlay.classList.remove('active');
  });

  // Close sidebar when a link is clicked
  // Cerrar sidebar al hacer clic en un enlace
  sidebarLinks.forEach(link=>{
    link.addEventListener('click', ()=>{
      sidebarMenu.setAttribute('aria-hidden', 'true');
      sidebarOverlay.classList.remove('active');
    });
  });

  // Close sidebar when overlay is clicked
  // Cerrar sidebar al hacer clic en el overlay
  sidebarOverlay && sidebarOverlay.addEventListener('click', ()=>{
    sidebarMenu.setAttribute('aria-hidden', 'true');
    sidebarOverlay.classList.remove('active');
  });

  // Close sidebar on ESC key
  // Cerrar sidebar con tecla ESC
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape' && sidebarMenu.getAttribute('aria-hidden') === 'false'){
      sidebarMenu.setAttribute('aria-hidden', 'true');
      sidebarOverlay.classList.remove('active');
    }
  });

  // Mobile nav toggle - for old nav display
  // Toggle móvil del nav (versión antigua)
  const oldNavToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  oldNavToggle && oldNavToggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none'; else nav.style.display = 'flex';
  });

  // Optional: animate CV download button on click (small pulse)
  // Opcional: animar botón de CV al hacer clic (pulso pequeño)
  document.querySelectorAll('.cv-download, .cv-inline').forEach(el=>{
    el.addEventListener('click', ()=>{
      el.animate([{transform:'scale(1)'},{transform:'scale(0.98)'},{transform:'scale(1)'}],{duration:220});
    });
  });

  // Background switch (purple home/about, red from stack to contact)
  // Cambio de fondo (morado en home/about, rojo de stack a contact)
  const bgSections = [
    { id: 'HOME', red: false, redAnim: false, video: 'Pikachu.mp4', showVideo: true },
    { id: 'ABOUT Me', red: false, redAnim: false, video: 'Charizard.mp4', showVideo: true },
    { id: 'Stack', red: true, redAnim: true, video: null, showVideo: false },
    { id: 'EXPERIENCE', red: true, redAnim: true, video: null, showVideo: false },
    { id: 'Diplomas and Certificates', red: true, redAnim: true, video: 'Blastoise.mp4', showVideo: true },
    { id: 'PROJECTS', red: true, redAnim: false, video: 'Venasaur.mp4', showVideo: true },
    { id: 'CONTACT', red: true, redAnim: false, video: null, showVideo: false }
  ];

  let lastBgId = null;
  let lastRedAnim = null;
  let bgTimeout = null;
  const playedOnScroll = new Set();
  const videoEl = document.getElementById('pokemonVideo');
  const videoContainer = document.getElementById('pokemonVideoContainer');
  const videoOverlay = document.getElementById('videoOverlay');
  let videoPlaying = false;

  function playVideo(videoName) {
    if(videoPlaying || !videoName) return;
    videoPlaying = true;

    const newSrc = `Video_de_Pokemon/${videoName}`;
    videoEl.querySelector('source').src = newSrc;
    videoEl.muted = false;
    videoEl.volume = 1;
    videoEl.load();
    videoEl.currentTime = 0;

    videoOverlay.classList.remove('fade-out');

    videoEl.play().then(()=>{
      videoContainer.classList.add('show-video');
      videoEl.style.display = 'block';
    }).catch(()=>{
      videoContainer.classList.remove('show-video');
      videoEl.style.display = 'none';
      videoPlaying = false;
    });

    const handleVideoEnd = ()=>{
      videoOverlay.classList.add('fade-out');
      setTimeout(()=>{
        videoContainer.classList.remove('show-video');
        videoEl.style.display = 'none';
        videoPlaying = false;
      }, 500);
    };

    videoEl.removeEventListener('ended', handleVideoEnd);
    videoEl.addEventListener('ended', handleVideoEnd, { once: true });
  }

  function shouldPlayOnScroll(config){
    if(!config.showVideo || !config.video) return false;
    if(playedOnScroll.has(config.id)) return false;
    playedOnScroll.add(config.id);
    return true;
  }

  // Add listeners to section buttons with video
  // Agregar listeners a botones de secciones con video
  document.querySelectorAll('a[href="#HOME"], a[href="#ABOUT Me"], a[href="#Diplomas and Certificates"], a[href="#PROJECTS"]').forEach(btn => {
    btn.addEventListener('click', (e)=>{
      const href = btn.getAttribute('href').substring(1);
      const config = bgSections.find(s => s.id === href);
      if(config && config.showVideo && config.video) {
        e.preventDefault();
        const el = document.getElementById(href);
        el.scrollIntoView({ behavior: 'smooth' });
        setTimeout(()=> playVideo(config.video), 100);
      }
    });
  });

  const bgIO = new IntersectionObserver((entries)=>{
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if(!visible || visible.intersectionRatio < 0.25) return;

    const config = bgSections.find(s => s.id === visible.target.id);
    if(!config) return;
    if(lastBgId === config.id && lastRedAnim === config.redAnim) return;

    lastBgId = config.id;
    lastRedAnim = config.redAnim;

    clearTimeout(bgTimeout);
    bgTimeout = setTimeout(()=>{
      if(config.red) document.body.classList.add('is-red');
      else document.body.classList.remove('is-red');
      if(config.redAnim) document.body.classList.add('is-red-anim');
      else document.body.classList.remove('is-red-anim');
      
      // Videos only play on menu button click, not on scroll
      // Videos solo se reproducen al hacer clic en botones del menú, no en scroll
    }, 100);
  }, { threshold: [0.25, 0.5, 0.75], rootMargin: '0px 0px -40% 0px' });

  bgSections.forEach(s => {
    const el = document.getElementById(s.id);
    if(el) bgIO.observe(el);
  });

  // Experience scroll indicator progress
  // Progreso del indicador de Experience
  const expSection = document.getElementById('EXPERIENCE');
  const expIndicator = expSection && expSection.querySelector('.exp-scroll');
  const expTrack = expIndicator && expIndicator.querySelector('.exp-scroll-track');
  const expFill = expIndicator && expIndicator.querySelector('.exp-scroll-fill');
  const expDot = expIndicator && expIndicator.querySelector('.exp-scroll-dot');

  function updateExpIndicator(){
    if(!expSection || !expIndicator || !expTrack || !expFill || !expDot) return;
    const heading = expSection.querySelector('h2');
    const lastCard = expSection.querySelector('.experience-item:last-child');
    if(!heading || !lastCard) return;

    const sectionTop = expSection.offsetTop;
    const startY = heading.offsetTop + heading.offsetHeight + 8;
    const endY = lastCard.offsetTop + lastCard.offsetHeight - 6;
    const height = Math.max(40, endY - startY);

    expIndicator.style.top = startY + 'px';
    expIndicator.style.height = height + 'px';

    const startAbs = sectionTop + startY;
    const endAbs = sectionTop + endY;
    const scrollPos = window.scrollY + window.innerHeight * 0.35;
    const ratio = Math.min(1, Math.max(0, (scrollPos - startAbs) / Math.max(1, endAbs - startAbs)));
    const fillHeight = height * ratio;

    expFill.style.height = fillHeight + 'px';
    expDot.style.top = fillHeight + 'px';

    // Indicator color based on the most visible card
    // Color del indicador según el cuadro más visible
    const cards = expSection.querySelectorAll('.experience-item');
    let bestCard = null;
    let bestRatio = 0;
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const ratio = Math.max(0, visible) / Math.max(1, rect.height);
      if(ratio > bestRatio){
        bestRatio = ratio;
        bestCard = card;
      }
    });
    if(bestCard){
      const accent = bestCard.dataset.accent || '#38bdf8';
      const accent2 = bestCard.dataset.accent2 || accent;
      expIndicator.style.setProperty('--exp-accent', accent);
      expIndicator.style.setProperty('--exp-accent-2', accent2);
    }
  }

  updateExpIndicator();
  window.addEventListener('scroll', updateExpIndicator, { passive: true });
  window.addEventListener('resize', updateExpIndicator);

})();

