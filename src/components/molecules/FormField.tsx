import { useId } from 'react'
import { Input, type InputProps } from '../atoms/Input'

export interface FormFieldProps extends InputProps {
  label: string
  hint?: string
  error?: string
}

/** Molécula: label + input + mensaje, con los ids de accesibilidad ya conectados. */
export function FormField({ label, hint, error, id, ...inputProps }: FormFieldProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const msgId = `${inputId}-msg`
  const message = error ?? hint

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={inputId} className="text-sm font-medium">
        {label}
      </label>
      <Input id={inputId} invalid={!!error} aria-describedby={message ? msgId : undefined} {...inputProps} />
      {message && (
        <p id={msgId} className={error ? 'text-xs text-red-600' : 'text-xs text-slate-500'}>
          {message}
        </p>
      )}
    </div>
  )
}
