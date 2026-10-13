import type { InputHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean
}

// En React 19 `ref` llega como prop normal, sin forwardRef.
export function Input({ invalid, className, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid || undefined}
      className={cn(
        'h-10 w-full rounded-ui border bg-white px-3 text-sm outline-none transition',
        'placeholder:text-slate-400 focus:ring-2 dark:bg-slate-900',
        invalid
          ? 'border-red-500 focus:ring-red-200'
          : 'border-slate-300 focus:border-brand-500 focus:ring-brand-50 dark:border-slate-700',
        className,
      )}
      {...props}
    />
  )
}
