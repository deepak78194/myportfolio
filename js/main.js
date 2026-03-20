/* =========================================
   main.js — Theme toggle, typing effect,
   scroll animations, nav interactions
   ========================================= */

(function () {
  'use strict';

  // ——— DOM references ———
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const navLinkItems = document.querySelectorAll('.nav-link');
  const typingText = document.getElementById('typingText');

  // ——— Theme Toggle ———
  function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Update meta theme-color for mobile browsers
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute('content', theme === 'dark' ? '#0d1117' : '#ffffff');
    }
  }

  // Initialize theme
  applyTheme(getPreferredTheme());

  themeToggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ——— Mobile Navigation ———
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  navLinkItems.forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // ——— Active Nav Link Highlighting ———
  var sections = document.querySelectorAll('.section, .hero');

  var navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinkItems.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
  );

  sections.forEach(function (section) {
    navObserver.observe(section);
  });

  // ——— Scroll Reveal Animation ———
  var revealElements = document.querySelectorAll('.reveal');

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // ——— Typing Effect ———
  var words = ['Microservices', 'Spring Boot', 'AWS', 'REST APIs', 'Agentic AI'];
  var wordIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var typeSpeed = 100;

  function typeLoop() {
    var currentWord = words[wordIndex];

    if (isDeleting) {
      charIndex--;
      typeSpeed = 50;
    } else {
      charIndex++;
      typeSpeed = 120;
    }

    typingText.textContent = currentWord.substring(0, charIndex);

    // Finished typing the word
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 1800; // Pause at full word
      isDeleting = true;
    }

    // Finished deleting the word
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 400; // Brief pause before typing next
    }

    setTimeout(typeLoop, typeSpeed);
  }

  typeLoop();

  // ——— Navbar background on scroll ———
  var navbar = document.getElementById('navbar');

  window.addEventListener(
    'scroll',
    function () {
      if (window.scrollY > 50) {
        navbar.style.boxShadow = 'var(--shadow-sm)';
      } else {
        navbar.style.boxShadow = 'none';
      }
    },
    { passive: true }
  );
})();