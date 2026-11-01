// Cabeçalho com borda ao rolar + revelação suave dos blocos (respeita prefers-reduced-motion)
const hdr = document.querySelector('.hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
addEventListener('scroll', onScroll, { passive: true });

const items = document.querySelectorAll('.rv');
if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
  items.forEach((el) => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
}
