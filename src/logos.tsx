/**
 * Zoo brand logos and logo components
 */

import React from 'react'

// Logo URLs
export const logos = {
  full: {
    dark: {
      svg: '/assets/logo/zoo-full-dark.svg',
      png: '/assets/logo/zoo-full-dark.png',
    },
    light: {
      svg: '/assets/logo/zoo-full-light.svg',
      png: '/assets/logo/zoo-full-light.png',
    },
  },
  mark: {
    dark: {
      svg: '/assets/logo/zoo-mark-dark.svg',
      png: '/assets/logo/zoo-mark-dark.png',
    },
    light: {
      svg: '/assets/logo/zoo-mark-light.svg',
      png: '/assets/logo/zoo-mark-light.png',
    },
  },
  horizontal: {
    dark: {
      svg: '/assets/logo/zoo-horizontal-dark.svg',
      png: '/assets/logo/zoo-horizontal-dark.png',
    },
    light: {
      svg: '/assets/logo/zoo-horizontal-light.svg',
      png: '/assets/logo/zoo-horizontal-light.png',
    },
  },
  stacked: {
    dark: {
      svg: '/assets/logo/zoo-stacked-dark.svg',
      png: '/assets/logo/zoo-stacked-dark.png',
    },
    light: {
      svg: '/assets/logo/zoo-stacked-light.svg',
      png: '/assets/logo/zoo-stacked-light.png',
    },
  },
} as const

// Logo component props
export interface ZooLogoProps {
  variant?: 'full' | 'mark' | 'horizontal' | 'stacked'
  size?: 'small' | 'medium' | 'large' | 'xl' | number
  theme?: 'light' | 'dark' | 'auto'
  className?: string
  style?: React.CSSProperties
}

// Size mappings
const sizeMap = {
  small: 24,
  medium: 32,
  large: 48,
  xl: 64,
}

// Logo React component
export function ZooLogo({
  variant = 'full',
  size = 'medium',
  theme = 'auto',
  className = '',
  style = {},
}: ZooLogoProps) {
  const height = typeof size === 'number' ? size : sizeMap[size]
  
  // Auto theme detection
  const actualTheme = theme === 'auto' 
    ? (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) 
      ? 'dark' 
      : 'light'
    : theme

  const logoSrc = logos[variant][actualTheme].svg

  return (
    <img
      src={logoSrc}
      alt="Zoo Logo"
      height={height}
      className={`zoo-logo zoo-logo--${variant} zoo-logo--${actualTheme} ${className}`}
      style={{
        height: `${height}px`,
        width: 'auto',
        ...style,
      }}
    />
  )
}

// SVG Logo component (inline)
export function ZooLogoSVG({
  size = 32,
  color = 'currentColor',
  className = '',
}: {
  size?: number
  color?: string
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 8H24V24H8V8Z"
        fill={color}
      />
      <path
        d="M12 12H20V20H12V12Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M14 4L18 8H14V4Z"
        fill={color}
      />
      <path
        d="M18 28L14 24H18V28Z"
        fill={color}
      />
      <path
        d="M4 14L8 18V14H4Z"
        fill={color}
      />
      <path
        d="M28 18L24 14V18H28Z"
        fill={color}
      />
    </svg>
  )
}

// Logo favicon component
export function ZooFavicon({ size = 16 }: { size?: number }) {
  return (
    <link
      rel="icon"
      type="image/svg+xml"
      href={`data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${size} ${size}'><rect width='${size}' height='${size}' fill='%230A0A0B'/><rect x='${size * 0.25}' y='${size * 0.25}' width='${size * 0.5}' height='${size * 0.5}' fill='white' opacity='0.2'/></svg>`}
    />
  )
}

export default logos