'use client'

import { useState } from 'react'
import { ArrowUpRight, Check, Menu, MoveUpRight, X } from 'lucide-react'

const navItems = [
  ['About', '#about'], ['Facilities', '#facilities'], ['Programs', '#programs'], ['Membership', '#membership'], ['Contact', '#contact'],
]

const facilities = [
  ['01', 'Strength training', 'Build power with purpose.', 'repmax-training.png'],
  ['02', 'Free weights', 'Own every rep.', 'repmax-hero.png'],
  ['03', 'Cardio training', 'Condition your engine.', 'repmax-interior.png'],
  ['04', 'Functional training', 'Move better. Feel stronger.', 'repmax-training.png'],
]

const programs = [
  ['01', 'Strength & muscle building', 'Build strength and work towards your physique goals.'],
  ['02', 'Weight management', 'Develop sustainable fitness habits and improve conditioning.'],
  ['03', 'Personal training', 'Get individualised guidance and structured workouts.'],
  ['04', 'General fitness', 'Improve endurance, mobility and overall fitness.'],
]

const gallery = [
  ['repmax-interior.png', 'Inside the studio'], ['repmax-training.png', 'Strength training'], ['repmax-hero.png', 'The daily grind'], ['repmax-training.png', 'Own your workout'],
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>
}

function Button({ children, href = '#membership', secondary = false, onClick }: { children: React.ReactNode; href?: string; secondary?: boolean; onClick?: () => void }) {
  return <a onClick={onClick} href={href} className={`button ${secondary ? 'button-secondary' : ''}`}>{children}<ArrowUpRight size={16} /></a>
}

export default function RepmaxSite() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const submitEnquiry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = `Hi REPMAX, I would like to enquire about membership.%0A%0AName: ${form.get('name')}%0APhone: ${form.get('phone')}%0AGoal: ${form.get('goal')}%0ATime: ${form.get('time')}%0AMessage: ${form.get('message')}`
    setSubmitted(true)
    window.open(`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '910000000000'}?text=${message}`, '_blank')
  }

  return <div className="site-shell">
    <header className="site-nav">
      <a className="wordmark" href="#top" aria-label="Repmax home"><strong>REPMAX</strong><span>FITNESS STUDIO</span></a>
      <nav className="desktop-nav">{navItems.map(([label, href]) => <a key={label} href={href}>{label}</a>)}<Button>JOIN NOW</Button></nav>
      <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <nav className="mobile-nav">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}<Button onClick={() => { setMenuOpen(false); setModalOpen(true) }}>JOIN NOW</Button></nav>}
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content wrap">
          <SectionLabel>REPMAX FITNESS STUDIO · SODEPUR</SectionLabel>
          <h1>BUILT BY<br /><em>DISCIPLINE.</em><br />DEFINED BY<br /><em>STRENGTH.</em></h1>
          <p className="hero-copy">Your journey to a stronger, healthier and more confident you starts here. Train harder, push limits and become your strongest self.</p>
          <div className="hero-actions"><Button onClick={() => setModalOpen(true)}>START YOUR JOURNEY</Button><Button secondary href="#facilities">EXPLORE THE GYM</Button></div>
        </div>
        <div className="scroll-cue"><span /> SCROLL TO EXPLORE</div>
      </section>

      <section className="intro wrap section" id="about">
        <div className="intro-media image-frame"><img src="/repmax-training.png" alt="Athlete completing a strength workout" /></div>
        <div className="intro-copy"><SectionLabel>01 / THE REPMAX MINDSET</SectionLabel><h2>MORE THAN A GYM.<br /><em>IT&apos;S A MINDSET.</em></h2><p>REPMAX FITNESS STUDIO SODEPUR is a place for people who want to improve their strength, fitness and lifestyle. A motivating environment, dedicated training and a community that keeps you moving forward.</p><ul>{['A motivating workout environment.', 'Dedicated fitness training.', 'A supportive fitness community.', 'Training for different fitness levels.'].map(item => <li key={item}><Check size={16} />{item}</li>)}</ul><blockquote>“Every rep brings you closer to the person you want to become.”</blockquote></div>
      </section>

      <section className="dark-section section" id="facilities"><div className="wrap"><SectionLabel>02 / THE SPACE</SectionLabel><div className="section-heading"><h2>EVERYTHING YOU NEED<br /><em>TO LEVEL UP.</em></h2><p>Proposed training categories — ready to be tailored to the studio.</p></div><div className="facility-grid">{facilities.map(([number, title, desc, image]) => <article className="facility-card" key={number}><img src={`/${image}`} alt={`${title} at Repmax Fitness Studio`} /><div className="facility-info"><span>{number}</span><div><h3>{title}</h3><p>{desc}</p></div><MoveUpRight size={20} /></div></article>)}</div></div></section>

      <section className="section wrap" id="programs"><SectionLabel>03 / FIND YOUR FLOW</SectionLabel><div className="section-heading"><h2>FIND YOUR<br /><em>TRAINING STYLE.</em></h2><p>Suggested program categories for every kind of goal.</p></div><div className="program-grid">{programs.map(([number, title, desc]) => <article className="program-card" key={number}><span>{number}</span><h3>{title}</h3><p>{desc}</p><a href="#membership">Explore <ArrowUpRight size={16} /></a></article>)}</div></section>

      <section className="statement section"><div className="statement-bg" /><div className="wrap statement-content"><SectionLabel>04 / WHY REPMAX</SectionLabel><h2>YOUR GOALS.<br /><em>YOUR GRIND.</em><br />YOUR TRANSFORMATION.</h2><div className="benefits">{['Motivating training environment', 'Supportive community', 'Fitness for every level', 'Consistency-focused training'].map((item, i) => <div key={item}><strong>0{i + 1}</strong><span>{item}</span></div>)}</div></div></section>

      <section className="section wrap gallery-section"><SectionLabel>05 / THE GALLERY</SectionLabel><div className="section-heading"><h2>INSIDE<br /><em>THE GRIND.</em></h2><p>Demo imagery — swap in the studio&apos;s own moments when ready.</p></div><div className="gallery-grid">{gallery.map(([image, label], i) => <button className={`gallery-item gallery-${i}`} key={`${image}-${i}`} aria-label={`View ${label}`}><img src={`/${image}`} alt={label} /><span>{label}<ArrowUpRight size={16} /></span></button>)}</div></section>

      <section className="join-section" id="membership"><div className="wrap join-content"><SectionLabel>06 / YOUR NEXT REP</SectionLabel><h2>READY TO MAKE<br /><em>YOUR MOVE?</em></h2><p>Your fitness journey doesn&apos;t begin someday. It begins today.</p><Button onClick={() => setModalOpen(true)}>ENQUIRE ABOUT MEMBERSHIP</Button></div></section>

      <section className="testimonial section wrap"><SectionLabel>07 / THE COMMUNITY</SectionLabel><h2>REAL PEOPLE.<br /><em>REAL COMMITMENT.</em></h2><div className="quote-card"><span>“</span><p>Demo testimonial placeholder. Replace this with a real member story when customer feedback is supplied.</p><small>— Member name / placeholder</small></div></section>

      <section className="contact-section section" id="contact"><div className="wrap contact-grid"><div><SectionLabel>08 / COME TRAIN WITH US</SectionLabel><h2>FIND YOUR<br /><em>TRAINING GROUND.</em></h2></div><div className="contact-details"><h3>REPMAX FITNESS STUDIO SODEPUR</h3><p>Crown Residency, B3 Ramkrishna Park,<br />Sodepur Road, Panihati,<br />West Bengal 700110, India.</p><div className="contact-lines"><span>Phone number — coming soon</span><span>Opening hours — coming soon</span></div><div className="contact-actions"><Button href="https://www.google.com/maps/search/?api=1&query=REPMAX+Fitness+Studio+Sodepur">GET DIRECTIONS</Button><a className="instagram" href="https://www.instagram.com/repmax_fitness_sodepur/" target="_blank" rel="noreferrer">◎ INSTAGRAM <ArrowUpRight size={16} /></a></div></div></div></section>
    </main>

    <footer><div className="wrap footer-grid"><a className="wordmark" href="#top"><strong>REPMAX</strong><span>FITNESS STUDIO</span></a><p>Train with intent.<br />Live with strength.</p><div><a href="#about">About</a><a href="#facilities">Facilities</a><a href="#programs">Programs</a><a href="#contact">Contact</a></div><a href="https://www.instagram.com/repmax_fitness_sodepur/" target="_blank" rel="noreferrer" className="footer-social">Instagram <ArrowUpRight size={16} /></a></div><div className="wrap footer-bottom"><span>© 2026 REPMAX FITNESS STUDIO SODEPUR</span><span>Made for the next version of you.</span></div></footer>

    {modalOpen && <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="enquiry-title"><div className="modal"><button className="modal-close" aria-label="Close enquiry form" onClick={() => setModalOpen(false)}><X /></button>{submitted ? <div className="success"><Check size={32} /><h2>ENQUIRY <em>READY.</em></h2><p>Your WhatsApp enquiry is ready to send. We&apos;ll be in touch soon.</p><button className="button" onClick={() => { setSubmitted(false); setModalOpen(false) }}>CLOSE</button></div> : <><SectionLabel>MEMBERSHIP ENQUIRY</SectionLabel><h2 id="enquiry-title">MAKE YOUR<br /><em>MOVE.</em></h2><form onSubmit={submitEnquiry}><label>Full name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required type="tel" name="phone" placeholder="Your phone number" /></label><label>Fitness goal<select required name="goal" defaultValue=""><option value="" disabled>Select a goal</option><option>Strength & muscle building</option><option>Weight management</option><option>General fitness</option><option>Personal training</option></select></label><label>Preferred training time<input required name="time" placeholder="e.g. Morning / Evening" /></label><label>Message<textarea name="message" placeholder="Tell us a little about your goals" rows={3} /></label><button className="button" type="submit">SEND ON WHATSAPP <ArrowUpRight size={16} /></button></form></>}</div></div>}
  </div>
}
