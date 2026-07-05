import { useEffect, useRef, useState } from 'react'

const AUTOPLAY_MS = 4600

// Horizontally scrolling industries filmstrip: snap-scroll cards with
// drag-to-scroll, arrow controls, a scroll progress line and gentle
// auto-advance. Scales to any number of industries.
function IndustriesShowcase({ items }) {
  const trackRef = useRef(null)
  const drag = useRef(null)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const cardStep = () => {
    const track = trackRef.current
    const card = track?.firstElementChild
    if (!track || !card) return 0
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return card.offsetWidth + gap
  }

  const scrollByCards = (n) => {
    trackRef.current?.scrollBy({ left: cardStep() * n, behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    const max = track.scrollWidth - track.clientWidth
    setProgress(max > 0 ? track.scrollLeft / max : 0)
  }

  // Gentle auto-advance; loops back to the start at the end
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      const track = trackRef.current
      if (!track) return
      const max = track.scrollWidth - track.clientWidth
      if (track.scrollLeft >= max - 8) {
        track.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        scrollByCards(1)
      }
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  // Drag-to-scroll with the mouse (touch scrolls natively)
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    const track = trackRef.current
    drag.current = { startX: e.clientX, startLeft: track.scrollLeft, moved: false }
    track.classList.add('dragging')
  }

  const onPointerMove = (e) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 4) drag.current.moved = true
    trackRef.current.scrollLeft = drag.current.startLeft - dx
  }

  const endDrag = () => {
    drag.current = null
    trackRef.current?.classList.remove('dragging')
  }

  return (
    <div
      className="inds"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="inds-controls">
        <button
          type="button"
          aria-label="Scroll industries left"
          onClick={() => scrollByCards(-2)}
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Scroll industries right"
          onClick={() => scrollByCards(2)}
        >
          ›
        </button>
      </div>

      <div
        className="inds-track"
        ref={trackRef}
        onScroll={onScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {items.map((item, i) => (
          <article className="inds-card" key={item.label}>
            <img src={item.img} alt={item.label} loading="lazy" draggable="false" />
            <span className="inds-num">{String(i + 1).padStart(2, '0')}</span>
            <div className="inds-body">
              <h3>{item.label}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="inds-progress" aria-hidden="true">
        <span style={{ width: `${Math.max(progress * 100, 8)}%` }} />
      </div>
    </div>
  )
}

export default IndustriesShowcase
