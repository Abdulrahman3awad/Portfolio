import { useEffect, useRef, useState } from 'react'

/**
 * Fades + lifts its children into view the first time they scroll into the viewport.
 *
 * Uses IntersectionObserver, with a scroll/resize fallback so content is never
 * left invisible (e.g. when the page is loaded in a background tab, where
 * IntersectionObserver callbacks can be throttled).
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const show = () => setVisible(true)
    // Reveal as soon as the element reaches the fold — also covers elements
    // already scrolled past (e.g. when jumping via an anchor link).
    const isInView = () => {
      const rect = node.getBoundingClientRect()
      return rect.top < window.innerHeight - 60
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(node)

    // Fallback: direct geometry check on scroll / resize.
    let ticking = false
    const check = () => {
      if (ticking) return
      ticking = true
      setTimeout(() => {
        ticking = false
        if (isInView()) {
          show()
          window.removeEventListener('scroll', check)
          window.removeEventListener('resize', check)
          observer.disconnect()
        }
      }, 80)
    }

    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    check()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
