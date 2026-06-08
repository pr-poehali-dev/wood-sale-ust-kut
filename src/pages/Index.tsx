import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const WOOD_IMAGE = "https://cdn.poehali.dev/projects/13ec3cbd-7dc8-4d97-816c-fcf70f7de9c3/files/d119a609-2e1c-49d6-b435-2fc2f088206c.jpg";

const products = [
  {
    icon: '🪵',
    name: 'Лиственница',
    type: 'Кругляк / Лом',
    desc: 'Твёрдая порода, горит долго и жарко. Идеальна для отопления дома.',
    badge: 'Популярное',
    badgeColor: 'from-orange-500 to-red-500',
  },
  {
    icon: '🌲',
    name: 'Сосна',
    type: 'Стандарт',
    desc: 'Хорошая теплоотдача, быстро разгорается. Отличный выбор для дачи.',
    badge: null,
    badgeColor: '',
  },
  {
    icon: '💰',
    name: 'Сосна',
    type: 'Бюджетный вариант',
    desc: 'Экономичное решение для большого объёма. Цена — минимальная.',
    badge: 'Выгодно',
    badgeColor: 'from-amber-500 to-yellow-400',
  },
  {
    icon: '🪚',
    name: 'Горбыль',
    type: 'Обрезной',
    desc: 'Отходы пиления, отлично подходят для розжига и бани.',
    badge: null,
    badgeColor: '',
  },
];

const deliveryFeatures = [
  { icon: 'Truck', text: 'Самосвал HOWO с нарощенными стойками' },
  { icon: 'Package', text: 'Большой объём за один рейс' },
  { icon: 'MapPin', text: 'Доставка по Усть-Куту и окрестностям' },
  { icon: 'Clock', text: 'Оперативные сроки — звоните, договоримся' },
];

const navItems = [
  { label: 'Главная', href: '#hero' },
  { label: 'Дрова', href: '#products' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ background: '#0D0703' }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
        style={{ background: scrolled ? 'rgba(13,7,3,0.96)' : 'transparent', backdropFilter: scrolled ? 'blur(16px)' : 'none', borderBottom: scrolled ? '1px solid rgba(249,115,22,0.15)' : 'none' }}>
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🔥</span>
            <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#F97316' }}>
              Дрова Усть-Кут
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link">
                {item.label}
              </button>
            ))}
          </div>

          <a href="tel:+79087743748"
            className="hidden md:flex items-center gap-2 btn-fire px-5 py-2 rounded-sm text-white text-sm">
            <span>
              <Icon name="Phone" size={15} />
            </span>
            <span>Позвонить</span>
          </a>

          {/* Mobile menu button */}
          <button className="md:hidden text-orange-400" onClick={() => setMenuOpen(v => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 pt-2 flex flex-col gap-4"
            style={{ background: 'rgba(13,7,3,0.98)', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
            {navItems.map(item => (
              <button key={item.href} onClick={() => scrollTo(item.href)} className="nav-link text-left py-2">
                {item.label}
              </button>
            ))}
            <a href="tel:+79087743748" className="btn-fire px-5 py-3 rounded-sm text-white text-center text-sm mt-2">
              <span>Позвонить</span>
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="hero" className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Decorative fire lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 right-0 h-1/3"
            style={{ background: 'linear-gradient(0deg, rgba(239,68,68,0.08) 0%, transparent 100%)' }} />
          <div className="absolute top-1/4 left-0 w-px h-64 opacity-20"
            style={{ background: 'linear-gradient(180deg, transparent, #F97316, transparent)' }} />
          <div className="absolute top-1/3 right-0 w-px h-48 opacity-10"
            style={{ background: 'linear-gradient(180deg, transparent, #F59E0B, transparent)' }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="stagger-1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs tracking-widest uppercase"
              style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)', color: '#F97316', fontFamily: 'Oswald, sans-serif' }}>
              🔥 Усть-Кут · Иркутская область
            </div>

            <h1 className="stagger-2 text-5xl md:text-7xl font-bold leading-none mb-4"
              style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700 }}>
              <span style={{ color: '#F5E6D3' }}>ПРОДАЖА</span><br />
              <span className="animate-flicker" style={{ color: '#F97316' }}>ДРОВ</span><br />
              <span style={{ color: '#F5E6D3', fontSize: '0.6em', letterSpacing: '0.15em' }}>С ДОСТАВКОЙ</span>
            </h1>

            <p className="stagger-3 text-base leading-relaxed mb-8"
              style={{ color: 'rgba(245,230,211,0.65)', maxWidth: 420 }}>
              Лиственница, сосна, горбыль — любой объём. Доставляем самосвалом HOWO с нарощенными стойками прямо к вашему дому.
            </p>

            <div className="stagger-4 flex flex-col sm:flex-row gap-4">
              <a href="tel:+79087743748"
                className="btn-fire px-8 py-4 rounded-sm text-white text-base flex items-center justify-center gap-3">
                <span><Icon name="Phone" size={18} /></span>
                <span>8-908-774-37-48</span>
              </a>
              <a href="tel:+79501341313"
                className="px-8 py-4 rounded-sm text-base flex items-center justify-center gap-3 transition-all duration-300"
                style={{ background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.3)', color: '#F97316' }}
                onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.2)'; }}
                onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.1)'; }}>
                <span><Icon name="Phone" size={18} /></span>
                <span>8-950-134-13-13</span>
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="stagger-5 relative hidden md:block">
            <div className="relative rounded-lg overflow-hidden"
              style={{ boxShadow: '0 0 80px rgba(249,115,22,0.25), 0 0 160px rgba(239,68,68,0.1)' }}>
              <img src={WOOD_IMAGE} alt="Дрова" className="w-full h-80 object-cover" />
              <div className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(13,7,3,0.3) 0%, transparent 60%, rgba(249,115,22,0.1) 100%)' }} />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20 animate-pulse-glow"
              style={{ background: 'radial-gradient(circle, #F97316, transparent)' }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow"
          style={{ color: 'rgba(249,115,22,0.5)' }}>
          <span className="text-xs tracking-widest uppercase" style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem' }}>Листать вниз</span>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-24 px-6" style={{ background: '#100804' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#F97316', fontFamily: 'Oswald, sans-serif' }}>
                Ассортимент
              </p>
              <h2 className="text-5xl font-bold" style={{ color: '#F5E6D3' }}>
                Виды дров
              </h2>
            </div>
            <p className="text-sm" style={{ color: 'rgba(245,230,211,0.5)', maxWidth: 300, lineHeight: 1.7 }}>
              Цены узнавайте по телефону — зависит от объёма и типа древесины
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <div key={i} className="wood-card rounded-lg p-6 relative overflow-hidden cursor-default">
                {p.badge && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${p.badgeColor} text-white`}
                    style={{ fontFamily: 'Oswald, sans-serif', fontSize: '0.65rem' }}>
                    {p.badge}
                  </div>
                )}
                <div className="text-4xl mb-4">{p.icon}</div>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#F97316', fontFamily: 'Oswald, sans-serif' }}>
                  {p.type}
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#F5E6D3', fontFamily: 'Oswald, sans-serif' }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,230,211,0.55)' }}>
                  {p.desc}
                </p>

                <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(249,115,22,0.15)' }}>
                  <div className="price-badge text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    Цена по звонку
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm" style={{ color: 'rgba(245,230,211,0.4)', fontStyle: 'italic' }}>
              * Есть бюджетный вариант сосны — уточняйте при заказе
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="py-24 px-6 relative overflow-hidden" style={{ background: '#0D0703' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-5"
            style={{ background: 'radial-gradient(ellipse at right, #F97316, transparent)' }} />
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="section-divider mb-16" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#F97316', fontFamily: 'Oswald, sans-serif' }}>
                Логистика
              </p>
              <h2 className="text-5xl font-bold mb-6" style={{ color: '#F5E6D3' }}>
                Доставка<br />самосвалом
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: 'rgba(245,230,211,0.6)', maxWidth: 420 }}>
                Работаем на самосвале <strong style={{ color: '#F97316' }}>HOWO с нарощенными стойками</strong> — это значит, что за один рейс привезём большой объём дров. Удобно, быстро, выгодно.
              </p>

              <div className="space-y-4">
                {deliveryFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-lg"
                    style={{ background: 'rgba(249,115,22,0.06)', border: '1px solid rgba(249,115,22,0.12)' }}>
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(249,115,22,0.15)' }}>
                      <Icon name={f.icon} fallback="Star" size={18} style={{ color: '#F97316' }} />
                    </div>
                    <span className="text-sm" style={{ color: 'rgba(245,230,211,0.8)' }}>{f.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Truck visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-full flex flex-col items-center justify-center text-center"
                  style={{
                    background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, rgba(249,115,22,0.03) 60%, transparent 100%)',
                    border: '1px solid rgba(249,115,22,0.2)',
                    boxShadow: '0 0 80px rgba(249,115,22,0.1)'
                  }}>
                  <div className="text-7xl mb-3">🚛</div>
                  <div style={{ fontFamily: 'Oswald, sans-serif', color: '#F97316', fontWeight: 700, fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    HOWO
                  </div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(245,230,211,0.4)', fontFamily: 'Oswald, sans-serif', letterSpacing: '0.1em' }}>
                    НАРОЩЕННЫЕ СТОЙКИ
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full animate-pulse"
                  style={{ background: '#F97316' }} />
                <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full animate-pulse"
                  style={{ background: '#F59E0B', animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: '#100804' }}>
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-16" />

          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: '#F97316', fontFamily: 'Oswald, sans-serif' }}>
              Связь
            </p>
            <h2 className="text-5xl font-bold" style={{ color: '#F5E6D3' }}>Контакты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {/* Phone 1 */}
            <a href="tel:+79087743748"
              className="wood-card rounded-lg p-8 flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center animate-pulse-glow"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}>
                <Icon name="Phone" size={24} style={{ color: '#F97316' }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(245,230,211,0.4)', fontFamily: 'Oswald, sans-serif' }}>
                  Телефон 1
                </div>
                <div className="text-2xl font-bold group-hover:text-orange-400 transition-colors"
                  style={{ fontFamily: 'Oswald, sans-serif', color: '#F5E6D3' }}>
                  8-908-774-37-48
                </div>
              </div>
            </a>

            {/* Phone 2 */}
            <a href="tel:+79501341313"
              className="wood-card rounded-lg p-8 flex flex-col items-center text-center gap-4 group">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}>
                <Icon name="Phone" size={24} style={{ color: '#F97316' }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(245,230,211,0.4)', fontFamily: 'Oswald, sans-serif' }}>
                  Телефон 2
                </div>
                <div className="text-2xl font-bold group-hover:text-orange-400 transition-colors"
                  style={{ fontFamily: 'Oswald, sans-serif', color: '#F5E6D3' }}>
                  8-950-134-13-13
                </div>
              </div>
            </a>

            {/* Location */}
            <div className="wood-card rounded-lg p-8 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(249,115,22,0.15)', border: '1px solid rgba(249,115,22,0.3)' }}>
                <Icon name="MapPin" size={24} style={{ color: '#F97316' }} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(245,230,211,0.4)', fontFamily: 'Oswald, sans-serif' }}>
                  Город
                </div>
                <div className="text-2xl font-bold" style={{ fontFamily: 'Oswald, sans-serif', color: '#F5E6D3' }}>
                  Усть-Кут
                </div>
                <div className="text-sm mt-1" style={{ color: 'rgba(245,230,211,0.45)' }}>Иркутская область</div>
              </div>
            </div>
          </div>

          {/* Yandex Map */}
          <div className="rounded-lg overflow-hidden" style={{ border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 0 40px rgba(249,115,22,0.08)' }}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=105.7504%2C56.7565&z=13&l=map&pt=105.7504,56.7565,pm2rdl"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen
              style={{ display: 'block', filter: 'saturate(0.7) brightness(0.85)' }}
              title="Усть-Кут на карте"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6" style={{ background: '#0A0502', borderTop: '1px solid rgba(249,115,22,0.1)' }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span style={{ fontFamily: 'Oswald, sans-serif', color: '#F97316', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Дрова Усть-Кут
            </span>
          </div>
          <p className="text-sm text-center" style={{ color: 'rgba(245,230,211,0.3)' }}>
            Продажа дров с доставкой · Усть-Кут, Иркутская область
          </p>
          <div className="flex flex-col items-end gap-1">
            <a href="tel:+79087743748" className="text-sm transition-colors hover:text-orange-400"
              style={{ color: 'rgba(245,230,211,0.5)', fontFamily: 'Oswald, sans-serif' }}>
              8-908-774-37-48
            </a>
            <a href="tel:+79501341313" className="text-sm transition-colors hover:text-orange-400"
              style={{ color: 'rgba(245,230,211,0.5)', fontFamily: 'Oswald, sans-serif' }}>
              8-950-134-13-13
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}