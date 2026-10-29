import type { SVGProps } from 'react'

export type DoodleName = 'mask' | 'scissors' | 'clipper' | 'spray' | 'crown' | 'bolt' | 'eyes' | 'burst' | 'razor'

interface DoodleProps extends SVGProps<SVGSVGElement> {
  name: DoodleName
  /** cor de preenchimento de formas principais */
  fillColor?: string
}

const burst = (() => {
  const pts: string[] = []
  for (let i = 0; i < 24; i++) {
    const r = i % 2 ? 38 : 56
    const a = (i / 24) * Math.PI * 2
    pts.push(`${60 + r * Math.cos(a)},${60 + r * Math.sin(a)}`)
  }
  return pts.join(' ')
})()

/** Traços de caneta grossa, inspirados nos desenhos da parede. Usam currentColor. */
export function Doodle({ name, fillColor = 'transparent', ...props }: DoodleProps) {
  const common = { viewBox: '0 0 120 120', fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true, ...props }
  switch (name) {
    case 'mask':
      return (
        <svg {...common}>
          <path d="M28 44 L20 12 L42 30 L52 4 L62 28 L74 6 L82 30 L102 14 L92 44" />
          <path d="M26 50 Q60 34 94 50 L96 82 Q92 112 60 114 Q28 112 24 82 Z" fill={fillColor} />
          <path d="M24 58 Q60 46 96 58 L94 76 Q60 86 26 76 Z" fill="currentColor" stroke="none" />
          <path d="M34 66 L50 70 M86 66 L70 70" stroke="#0A0A0A" strokeWidth="5" />
          <path d="M40 96 H80 M46 92 V102 M54 92 V102 M62 92 V102 M70 92 V102" strokeWidth="3" />
        </svg>
      )
    case 'scissors':
      return (
        <svg {...common}>
          <circle cx="26" cy="30" r="13" fill={fillColor} />
          <circle cx="26" cy="90" r="13" fill={fillColor} />
          <path d="M37 38 L108 84 M37 82 L108 36" />
        </svg>
      )
    case 'clipper':
      return (
        <svg {...common}>
          <rect x="38" y="30" width="44" height="84" rx="14" fill={fillColor} />
          <path d="M42 30 V8 M52 30 V8 M62 30 V8 M72 30 V8 M82 30 V8 M38 30 H82" />
          <path d="M48 60 H72 M48 74 H72" />
        </svg>
      )
    case 'spray':
      return (
        <svg {...common}>
          <rect x="36" y="44" width="40" height="70" rx="8" fill={fillColor} />
          <path d="M44 44 V30 H68 V44 M52 30 V20 H60 V30" />
          <path d="M42 70 H70" />
          <circle cx="92" cy="16" r="2" /><circle cx="102" cy="26" r="2" /><circle cx="90" cy="30" r="2" /><circle cx="104" cy="12" r="2" />
        </svg>
      )
    case 'crown':
      return (
        <svg {...common}>
          <path d="M14 92 L8 38 L36 62 L60 22 L84 62 L112 38 L106 92 Z" fill={fillColor} />
          <path d="M14 104 H106" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M70 4 L24 68 H56 L46 116 L98 48 H64 Z" fill={fillColor} />
        </svg>
      )
    case 'eyes':
      return (
        <svg {...common}>
          <ellipse cx="34" cy="60" rx="24" ry="30" fill={fillColor} />
          <ellipse cx="86" cy="60" rx="24" ry="30" fill={fillColor} />
          <circle cx="40" cy="66" r="8" fill="currentColor" />
          <circle cx="80" cy="66" r="8" fill="currentColor" />
        </svg>
      )
    case 'burst':
      return (
        <svg {...common}>
          <polygon points={burst} fill={fillColor} />
        </svg>
      )
    case 'razor':
      return (
        <svg {...common}>
          <path d="M16 78 L74 20 L100 46 L42 104 Z" fill={fillColor} />
          <path d="M28 66 L54 92 M76 18 L104 4" />
        </svg>
      )
  }
}
