import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const G = '#01793A'

const FEATURES = [
  { icon: '💪', title: 'High Bond Strength', desc: 'Excellent adhesion for reliable tile fixing.' },
  { icon: '💧', title: 'Water Resistant', desc: 'Withstands moisture and damp conditions.' },
  { icon: '🛡️', title: 'Slip Resistant', desc: 'Keeps tiles securely in place.' },
  { icon: '⏳', title: 'Long-Lasting Durability', desc: 'Provides a stronger bond for years to come.' },
  { icon: '🔧', title: 'Easy to Use', desc: 'Smooth application with better workability.' },
  { icon: '🌱', title: 'Eco Friendly', desc: 'Designed with quality and sustainability in mind.' },
]

const TILES = ['Ceramic Tiles', 'Vitrified Tiles', 'Porcelain Tiles', 'Natural Stone', 'Mosaic Tiles', 'Large Format Tiles']
const USAGE = ['Interior & Exterior', 'Wall & Floor', 'Wet Areas & Dry Areas']

const WA_LINK = 'https://wa.me/919821837212?text=Hi%2C%20I%20am%20interested%20in%20Mighty%20Fix%20Premium%20Tile%20Adhesive.%20Please%20notify%20me%20at%20launch.'

function useReveal() {
  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' } }
      )
    })
  }, [])
}

function WaBtn({ className = '', label = 'WhatsApp Us' }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-bold rounded-full text-white transition-colors duration-200 ${className}`}
      style={{ backgroundColor: '#25D366' }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1aad54'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}>
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  )
}

function Btn({ href, outline, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const enter = () => gsap.to(el, { scale: 1.05, duration: 0.18, ease: 'power1.out' })
    const leave = () => gsap.to(el, { scale: 1, duration: 0.18, ease: 'power1.out' })
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <a ref={ref} href={href}
      className="inline-block font-bold px-6 py-3 rounded-full text-sm cursor-pointer transition-colors duration-200"
      style={outline
        ? { border: `2px solid ${G}`, color: G, backgroundColor: 'transparent' }
        : { border: `2px solid ${G}`, color: '#fff', backgroundColor: G }}
      onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#015c2c'; e.currentTarget.style.borderColor = '#015c2c'; e.currentTarget.style.color = '#fff' }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = outline ? 'transparent' : G
        e.currentTarget.style.borderColor = G
        e.currentTarget.style.color = outline ? G : '#fff'
      }}>
      {children}
    </a>
  )
}

function Card({ children, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const enter = () => { gsap.to(el, { y: -5, duration: 0.22, ease: 'power2.out' }); el.style.borderColor = G; el.style.boxShadow = `0 8px 28px rgba(1,121,58,0.11)` }
    const leave = () => { gsap.to(el, { y: 0, duration: 0.22, ease: 'power2.out' }); el.style.borderColor = '#e5e7eb'; el.style.boxShadow = 'none' }
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <div ref={ref} className={`bg-white border border-gray-200 rounded-2xl transition-colors duration-200 ${className}`}>
      {children}
    </div>
  )
}

function TilePill({ label }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const enter = () => { gsap.to(el, { scale: 1.07, duration: 0.18, ease: 'back.out(2)' }); el.style.borderColor = G; el.style.color = G; el.style.backgroundColor = `${G}0d` }
    const leave = () => { gsap.to(el, { scale: 1, duration: 0.18, ease: 'power2.out' }); el.style.borderColor = ''; el.style.color = ''; el.style.backgroundColor = '' }
    el.addEventListener('mouseenter', enter)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) }
  }, [])
  return (
    <div ref={ref} className="reveal border border-gray-200 text-gray-600 px-4 py-2 rounded-full text-sm font-medium cursor-default transition-colors duration-200">
      {label}
    </div>
  )
}

function NotifyForm() {
  const roles = ['Customer', 'Dealer', 'Distributor', 'Contractor']
  const ref = useRef(null)
  useEffect(() => {
    gsap.from(ref.current, { opacity: 0, y: 28, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: ref.current, start: 'top 88%' } })
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    gsap.fromTo(ref.current, { scale: 0.98 }, { scale: 1, duration: 0.3, ease: 'back.out(3)' })
    alert('Thank you! We will notify you at launch.')
    e.target.reset()
  }
  return (
    <form ref={ref} onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-4">
      {[['name','Your Name','text'],['email','Email Address','email'],['mobile','Mobile Number','tel']].map(([n,p,t]) => (
        <input key={n} name={n} type={t} placeholder={p} required
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 text-sm focus:outline-none transition-colors duration-200"
          onFocus={e => e.target.style.borderColor = G} onBlur={e => e.target.style.borderColor = ''} />
      ))}
      <div>
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">I am interested as:</p>
        <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-4">
          {roles.map(r => (
            <label key={r} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
              <input type="radio" name="role" value={r} defaultChecked={r === 'Customer'} className="accent-[#01793A]" />
              {r}
            </label>
          ))}
        </div>
      </div>
      <button type="submit"
        className="w-full font-black py-3.5 rounded-xl text-white text-sm tracking-widest uppercase transition-colors duration-200"
        style={{ backgroundColor: G }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#015c2c'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = G}>
        Notify Me
      </button>
    </form>
  )
}

export default function App() {
  const heroRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line', { opacity: 0, y: 36, stagger: 0.11, duration: 0.85, ease: 'power3.out', delay: 0.1 })
      gsap.from(imgRef.current, { opacity: 0, scale: 0.9, duration: 0.9, ease: 'power3.out', delay: 0.3 })
    }, heroRef)
    gsap.to(imgRef.current, { y: -10, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1 })
    return () => ctx.revert()
  }, [])

  useReveal()

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-4 sm:px-6 lg:px-16 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/JIPL_Logo.png" alt="JIPL Logo" className="h-9 sm:h-10 w-auto object-contain" />
          <span className="hidden md:block text-xs text-gray-400 border-l border-gray-200 pl-3">Premium Tile Adhesive</span>
        </div>
        <WaBtn className="text-xs sm:text-sm px-3 sm:px-5 py-2" />
      </nav>

      {/* HERO */}
      <section ref={heroRef} className="min-h-screen flex items-center px-4 sm:px-6 lg:px-16 pt-20 pb-12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 w-full">

          {/* text */}
          <div className="flex-1 space-y-5 text-center lg:text-left">
            <span className="hero-line inline-block text-xs font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border"
              style={{ color: G, borderColor: `${G}55`, backgroundColor: `${G}0d` }}>
              Coming Soon
            </span>
            <h1 className="hero-line text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.08] tracking-tight">
              Mighty Fix<br />
              <span style={{ color: G }}>Is Coming</span><br />
              Soon.
            </h1>
            <p className="hero-line text-base sm:text-lg font-semibold text-gray-400 tracking-wide">Strong Bond. Perfect Finish.</p>
            <p className="hero-line text-gray-500 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Premium tile adhesive engineered for reliable bonding, smooth application, and long-lasting durability.
            </p>
            <div className="hero-line flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
              <Btn href="#notify">Notify Me</Btn>
              <Btn href="#contact" outline>Contact Us</Btn>
            </div>
          </div>

          {/* image */}
          <div ref={imgRef} className="flex-1 flex justify-center">
            <img src="JIPL.png" alt="Mighty Fix Premium Tile Adhesive"
              className="w-48 sm:w-64 lg:w-80 xl:w-96 object-contain"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(1,121,58,0.18))' }} />
          </div>
        </div>
      </section>

      {/* PRODUCT INTRO */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="reveal bg-gray-50 rounded-3xl p-6 sm:p-10 lg:p-14 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: G }}>Product</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">Mighty Fix –<br />Premium Tile Adhesive</h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              A professional-grade tile adhesive designed for strong and durable bonding of tiles on walls and floors.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {[
              ['Product', 'Mighty Fix Premium Tile Adhesive'],
              ['Type', 'Type-1'],
              ['Net Weight', '20 kg'],
              ['Application', 'Wall & Floor Tiles'],
              ['Use', 'Interior & Exterior'],
              ['Finish', 'Strong Bond & Perfect Finish'],
            ].map(([k, v]) => (
              <div key={k} className="bg-white rounded-xl p-3 sm:p-4 border border-gray-100">
                <div className="text-gray-400 text-xs mb-1 uppercase tracking-wider">{k}</div>
                <div className="font-semibold text-gray-800 text-xs sm:text-sm">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: G }}>Benefits</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">Why Choose Mighty Fix?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map(f => (
            <Card key={f.title} className="reveal p-5 sm:p-7">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-sm sm:text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* SUITABLE FOR */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: G }}>Compatibility</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">Suitable For</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {TILES.map(t => <TilePill key={t} label={t} />)}
        </div>
        <div className="reveal flex flex-wrap justify-center gap-3">
          {USAGE.map(u => (
            <div key={u} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700">
              <span style={{ color: G }}>✓</span> {u}
            </div>
          ))}
        </div>
      </section>

      {/* COMING SOON BANNER */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 text-center" style={{ background: 'linear-gradient(160deg,#f8fffe 0%,#e8f7ef 50%,#f8fffe 100%)' }}>
        <div className="reveal max-w-xl mx-auto space-y-5">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
            style={{ color: G, backgroundColor: `${G}15` }}>🚀 Launching Soon</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">Something Strong<br />Is Coming.</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            We're getting ready to bring Mighty Fix to you.<br />
            Stay connected and be the first to know when we launch.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Btn href="#notify">Notify Me</Btn>
          </div>
        </div>
      </section>

      {/* NOTIFY FORM */}
      <section id="notify" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 max-w-lg mx-auto">
        <div className="reveal text-center mb-8">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: G }}>Stay Updated</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-2">Be the First to Know</h2>
          <p className="text-gray-500 text-sm">Get notified when Mighty Fix officially launches.</p>
        </div>
        <NotifyForm />
      </section>

      {/* DEALER CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 text-center bg-gray-50 border-y border-gray-100">
        <div className="reveal max-w-lg mx-auto space-y-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase" style={{ color: G }}>Partnership</p>
          <h2 className="text-2xl sm:text-3xl font-black">Become a Mighty Fix Partner</h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Interested in becoming a dealer or distributor?<br />
            Connect with our team and explore partnership opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <Btn href="#contact" outline>Become a Dealer</Btn>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="reveal text-center mb-10 sm:mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: G }}>Get in Touch</p>
          <h2 className="text-2xl sm:text-3xl font-black">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 text-center">
          {[
            { icon: '🏢', label: 'Manufacturer', value: 'J. Infra Projects Pvt. Ltd., India' },
            { icon: '📧', label: 'Email', value: 'jipl11961196@gmail.com' },
            { icon: '📞', label: 'Phone', value: '+91 9821837212' },
          ].map(c => (
            <Card key={c.label} className="reveal p-6 sm:p-8">
              <div className="text-3xl sm:text-4xl mb-3">{c.icon}</div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">{c.label}</div>
              <div className="font-semibold text-gray-800 text-sm">{c.value}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100 bg-gray-50 py-8 sm:py-10 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-5 md:flex-row md:justify-between text-sm text-gray-400">
          <div className="text-center md:text-left">
            <img src="/JIPL_Logo.png" alt="JIPL Logo" className="h-8 w-auto object-contain mx-auto md:mx-0 mb-1" />
            <div className="text-xs">Strong Bond. Perfect Finish. | Premium Tile Adhesive | Type-1</div>
          </div>
          <div className="flex gap-5 text-xs sm:text-sm">
            {['About', 'Products', 'Contact'].map(l => (
              <a key={l} href={l === 'Contact' ? '#contact' : '#'} className="text-gray-400 transition-colors duration-200"
                onMouseEnter={e => e.currentTarget.style.color = G}
                onMouseLeave={e => e.currentTarget.style.color = ''}>{l}</a>
            ))}
          </div>
          <div className="text-center md:text-right text-xs">
            <div>© 2026 J. Infra Projects Pvt. Ltd.</div>
            <div>All Rights Reserved.</div>
          </div>
        </div>
      </footer>

    </div>
  )
}
