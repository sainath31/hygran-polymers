import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 to `end` when it scrolls into view.
function CountUp({ end, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(end * eased))
          if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [end, duration])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

export default CountUp
