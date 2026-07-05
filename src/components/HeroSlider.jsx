import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const AUTOPLAY_MS = 6400

// Full-bleed hero slider: crossfading ken-burns backgrounds with
// re-animating headline content per slide, timed progress bars and
// touch swipe.
function HeroSlider({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)

  const go = (i) =>
    setIndex(((i % slides.length) + slides.length) % slides.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS
    )
    return () => clearInterval(timer)
  }, [paused, slides.length, index])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
    setPaused(true)
  }

  const onTouchEnd = (e) => {
    const start = touchX.current
    touchX.current = null
    setPaused(false)
    if (start === null) return
    const delta = e.changedTouches[0].clientX - start
    if (Math.abs(delta) > 50) go(index + (delta < 0 ? 1 : -1))
  }

  const slide = slides[index]

  return (
    <section
      className="hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Highlights"
    >
      {slides.map((s, i) => (
        <div
          key={s.titleAccent}
          className={`hero-bg${i === index ? ' active' : ''}`}
          style={{ backgroundImage: `url(${s.img})` }}
          aria-hidden={i !== index}
        />
      ))}

      <div className="hero-dots" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <div className="hero-content" key={slide.titleAccent}>
          <span className="hero-kicker">{slide.kicker}</span>
          <h1>
            {slide.titleHead}{' '}
            <span className="accent-text">{slide.titleAccent}</span>
          </h1>
          <p>{slide.text}</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Technical Team
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-progress">
        {slides.map((s, i) => (
          <button
            type="button"
            key={s.titleAccent}
            className={i === index ? 'active' : ''}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              style={
                i === index
                  ? {
                      animationDuration: `${AUTOPLAY_MS}ms`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }
                  : undefined
              }
            />
          </button>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
