(() => {
  'use strict';
  const WHATSAPP = '5511999118644';
  const contexts = {
    header: 'Olá! Quero conhecer o plano BROKUP de R$ 990/mês.',
    menu: 'Olá! Quero saber mais sobre a BROKUP.',
    hero: 'Olá! Conheci a BROKUP e gostaria de começar com o plano de R$ 990/mês.',
    processo: 'Olá! Gostaria de entender como funciona o onboarding e o serviço BROKUP.',
    plano: 'Olá! Tenho interesse em contratar o plano BROKUP de R$ 990/mês. Quais são os próximos passos?',
    final: 'Olá! Quero conversar sobre o marketing digital da minha corretora com a BROKUP.',
    rodape: 'Olá! Gostaria de conhecer a BROKUP.',
    flutuante: 'Olá! Vim pelo site da BROKUP e gostaria de saber mais.'
  };
  // Sem carregamento de rastreadores externos por padrão. Se GA4/GTM for configurado,
  // os cliques entram no dataLayer com identificação do CTA e parâmetros UTM, se existirem.
  const params = new URLSearchParams(window.location.search);
  const utm = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].reduce((acc, key) => {
    if (params.has(key)) acc[key] = String(params.get(key)).slice(0, 120);
    return acc;
  }, {});
  document.querySelectorAll('.js-whatsapp').forEach(link => {
    const origin = link.dataset.cta || 'site';
    link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(contexts[origin] || contexts.flutuante)}`;
    link.addEventListener('click', () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'whatsapp_click', cta_location: origin, ...utm });
    });
  });
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (toggle && menu) {
    const close = () => { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menu'); };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      menu.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
    window.matchMedia('(min-width: 801px)').addEventListener('change', e => { if (e.matches) close(); });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
