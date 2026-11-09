// Interactivity (header, review arrows, language switch) always runs.
// Motion (Lenis + GSAP) is calm and slow, and skipped entirely for reduced motion.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isRTL = () => root.dir === 'rtl';
const $ = <T extends Element = HTMLElement>(s: string, scope: ParentNode = document) => scope.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, scope: ParentNode = document) =>
  Array.from(scope.querySelectorAll<T>(s));

export function initSite() {
  initHeader();
  initLangSwitch();
  initReviewArrows();
  if (reduceMotion || !root.classList.contains('js-motion')) return;
  try {
    initLenis();
    initHero();
    initReveal();
    initDrift();
    initSignatures();
    initRitual();
    root.classList.add('motion-ready');
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
  } catch (err) {
    console.error('[motion] disabled:', err);
    root.classList.remove('js-motion');
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.set('[data-hero-line],[data-hero-fade],[data-hero-img]', { clearProps: 'all' });
  }
}

function initHeader() {
  const header = $('[data-header]');
  if (!header) return;
  let lastY = window.scrollY;
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 40);
    if (y > lastY + 6 && y > 320) header.classList.add('is-hidden');
    else if (y < lastY - 6) header.classList.remove('is-hidden');
    if (Math.abs(y - lastY) > 6) lastY = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  header.addEventListener('focusin', () => header.classList.remove('is-hidden'));
  onScroll();
}

function initLangSwitch() {
  $$<HTMLAnchorElement>('[data-lang-switch]').forEach((a) => {
    a.addEventListener('click', (e) => {
      try {
        localStorage.setItem('site-lang', a.hreflang);
      } catch {
        /* storage unavailable */
      }
      if (reduceMotion || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      root.classList.add('is-leaving');
      setTimeout(() => (window.location.href = a.href), 300);
    });
  });
  window.addEventListener('pageshow', () => root.classList.remove('is-leaving'));
}

/* Review carousel: native scroll-snap, arrows just nudge it by one card. */
function initReviewArrows() {
  const track = $('[data-review-track]');
  if (!track) return;
  const step = (dir: 1 | -1) => {
    const card = track.firstElementChild as HTMLElement | null;
    const w = card ? card.offsetWidth + 20 : 320;
    const sign = isRTL() ? -1 : 1;
    track.scrollBy({ left: dir * sign * w, behavior: reduceMotion ? 'auto' : 'smooth' });
  };
  $('[data-review-prev]')?.addEventListener('click', () => step(-1));
  $('[data-review-next]')?.addEventListener('click', () => step(1));
}

function initLenis() {
  const lenis = new Lenis({ lerp: 0.085 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$<HTMLAnchorElement>('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      const target = id && id.length > 1 ? $(id) : null;
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60, duration: 1.6 });
    }),
  );
}

function initHero() {
  const hero = $('[data-hero]');
  if (!hero) return;
  gsap
    .timeline({ delay: 0.15, defaults: { ease: 'expo.out' } })
    .to($('[data-hero-img]', hero), { scale: 1, duration: 2.6 }, 0)
    .to($$('[data-hero-line]', hero), { y: 0, duration: 1.5, stagger: 0.14 }, 0.15)
    .to($$('[data-hero-fade]', hero), { opacity: 1, y: 0, duration: 1.2, stagger: 0.1 }, 0.6);

  const scrub = { trigger: hero, start: 'top top', end: 'bottom top', scrub: true };
  gsap.to($('[data-hero-img]', hero), { yPercent: 12, ease: 'none', scrollTrigger: scrub });
  gsap.to($('[data-hero-copy]', hero), { yPercent: -10, opacity: 0.2, ease: 'none', scrollTrigger: scrub });
}

function initReveal() {
  $$('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      y: 36,
      opacity: 0,
      duration: 1.3,
      ease: 'expo.out',
      scrollTrigger: { trigger: el, start: 'top 90%' },
    });
  });
}

function initDrift() {
  $$('[data-drift]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: -6, scale: 1.12 },
      { yPercent: 6, scale: 1.12, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });
}

/* The row nearest the middle of the screen lights up as you scroll the "The" list. */
function initSignatures() {
  $$('[data-sig-row]').forEach((row) => {
    ScrollTrigger.create({
      trigger: row,
      start: 'top 58%',
      end: 'bottom 42%',
      onToggle: (self) => row.toggleAttribute('data-active', self.isActive),
    });
  });
}

function initRitual() {
  const section = $('[data-ritual]');
  if (!section) return;
  const line = $('[data-ritual-line]', section);
  gsap.fromTo(
    line,
    { scaleY: 0 },
    { scaleY: 1, ease: 'none', scrollTrigger: { trigger: section, start: 'top 65%', end: 'bottom 70%', scrub: true } },
  );
  $$('[data-ritual-step]', section).forEach((step) => {
    gsap.from(step, { opacity: 0.25, x: isRTL() ? -24 : 24, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: step, start: 'top 75%' } });
  });
}
