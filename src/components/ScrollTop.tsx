import { useState, useEffect } from 'react'

type ScrollTopProps = {
  targetElement?: HTMLElement | null
  className?: string
}

export default function ScrollTop({ targetElement, className }: ScrollTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = targetElement || document.documentElement

    const handleScroll = () => {
      const scrollTop = element.scrollTop || document.documentElement.scrollTop
      setIsVisible(scrollTop > 300) // Hiển thị khi scroll xuống hơn 300px
    }

    element.addEventListener('scroll', handleScroll)

    return () => {
      element.removeEventListener('scroll', handleScroll)
    }
  }, [targetElement])

  const scrollToTop = () => {
    const element = targetElement || document.documentElement
    element.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-24 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-white border border-gray-600 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200 ${className || ''}`}
      aria-label="Scroll to top"
    >
      {/* Upward caret/chevron icon */}
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5852 9.04198L8.00017 2.65788L1.41513 9.04198L0.53894 8.19253L8.00018 0.958984L15.4614 8.19253L14.5852 9.04198Z" fill="#777777" />
      </svg>
    </button>
  )
}
