import { useEffect, useRef, useState } from 'react'

const AUTOPLAY_MS = 5200

// Auto-playing crossfade carousel with ken-burns zoom, timed progress
// bars, arrow/dot navigation and touch swipe.
function Carousel({ items }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)

  const go = (i) => setIndex(((i % items.length) + items.length) % items.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      AUTOPLAY_MS
    )
    return () => clearInterval(timer)
  }, [paused, items.length, index])

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

  const current = items[index]

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Industries we serve"
    >
      <div className="carousel-viewport">
        {items.map((item, i) => (
          <div
            className={`carousel-slide${i === index ? ' active' : ''}`}
            key={item.label}
            aria-hidden={i !== index}
          >
            <img src={item.img} alt={item.label} />
          </div>
        ))}

        <div className="carousel-caption" key={current.label}>
          <span className="carousel-count">
            {String(index + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </span>
          <h3>{current.label}</h3>
          <p>{current.text}</p>
        </div>

        <button
          type="button"
          className="carousel-arrow prev"
          aria-label="Previous slide"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-arrow next"
          aria-label="Next slide"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>

      <div className="carousel-progress">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.label}
            className={i === index ? 'active' : ''}
            onClick={() => go(i)}
            aria-label={`Go to slide: ${item.label}`}
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
    </div>
  )
}

export default Carousel
