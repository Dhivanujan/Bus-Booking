import { useEffect, useRef } from 'react'

export default function ParticleField() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const particles = []
    const count = 25

    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      el.className = 'particle'
      el.style.left = Math.random() * 100 + '%'
      el.style.top = Math.random() * 100 + '%'
      el.style.width = (Math.random() * 3 + 1) + 'px'
      el.style.height = el.style.width
      el.style.animationDuration = (Math.random() * 8 + 6) + 's'
      el.style.animationDelay = (Math.random() * 5) + 's'

      const colors = ['var(--accent-primary)', 'var(--luxury)', 'var(--accent-secondary)', 'var(--highlight)']
      el.style.background = colors[Math.floor(Math.random() * colors.length)]

      container.appendChild(el)
      particles.push(el)
    }

    return () => particles.forEach(p => p.remove())
  }, [])

  return <div className="particle-field" ref={containerRef} />
}
