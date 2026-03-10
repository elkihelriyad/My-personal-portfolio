import React from 'react'

const colorMap = {
    blue: {
        container: 'bg-[#3b82f6]/10 border-[#3b82f6]/20 shadow-[0_0_15px_rgba(59,130,246,0.15)] group-hover:bg-[#3b82f6]/15 group-hover:border-[#3b82f6]/30',
        icon: 'text-[#60a5fa]',
    },
    purple: {
        container: 'bg-[#a855f7]/10 border-[#a855f7]/20 shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:bg-[#a855f7]/15 group-hover:border-[#a855f7]/30',
        icon: 'text-[#c084fc]',
    },
    cyan: {
        container: 'bg-[#06b6d4]/10 border-[#06b6d4]/20 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:bg-[#06b6d4]/15 group-hover:border-[#06b6d4]/30',
        icon: 'text-[#22d3ee]',
    },
    pink: {
        container: 'bg-[#ec4899]/10 border-[#ec4899]/20 shadow-[0_0_15px_rgba(236,72,153,0.15)] group-hover:bg-[#ec4899]/15 group-hover:border-[#ec4899]/30',
        icon: 'text-[#f472b6]',
    },
    emerald: {
        container: 'bg-[#10b981]/10 border-[#10b981]/20 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:bg-[#10b981]/15 group-hover:border-[#10b981]/30',
        icon: 'text-[#34d399]',
    },
    rose: {
        container: 'bg-[#f43f5e]/10 border-[#f43f5e]/20 shadow-[0_0_15px_rgba(244,63,94,0.15)] group-hover:bg-[#f43f5e]/15 group-hover:border-[#f43f5e]/30',
        icon: 'text-[#fb7185]',
    },
    amber: {
        container: 'bg-[#f59e0b]/10 border-[#f59e0b]/20 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:bg-[#f59e0b]/15 group-hover:border-[#f59e0b]/30',
        icon: 'text-[#fbbf24]',
    },
    default: {
        container: 'bg-[var(--input-bg)] border-[var(--border-subtle)] shadow-[0_0_15px_rgba(0,0,0,0.05)] group-hover:bg-[var(--surface)] group-hover:border-[var(--accent)]',
        icon: 'text-[var(--text-muted)] group-hover:text-[var(--accent)]',
    }
}

export default function IconContainer({ children, color = 'default', className = '' }) {
    const theme = colorMap[color] || colorMap.default

    return (
        <div
            className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl border backdrop-blur-md transition-all duration-300 group-hover:scale-[1.05] ${theme.container} ${theme.icon} ${className}`}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, {
                        size: child.props.size || 20,
                        strokeWidth: child.props.strokeWidth || 1.5,
                        className: child.props.className ? child.props.className.replace(/text-\[[^\]]+\]/, '') : '' // Remove hardcoded text colors on the icon if any
                    })
                }
                return child
            })}
        </div>
    )
}
