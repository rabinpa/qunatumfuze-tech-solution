'use client';

import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, type SelectHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface BaseFieldProps {
  label: string;
  error?: string;
  id: string;
}

const fieldStyles = [
  'w-full h-12 px-4 rounded-sm border border-neutral-border bg-neutral-white text-neutral-text text-body',
  'placeholder:text-neutral-secondary/60',
  'transition-all duration-200 ease-out',
  'focus:outline-none focus:border-sky-primary focus:ring-2 focus:ring-sky-primary/20',
  'disabled:opacity-50 disabled:cursor-not-allowed',
].join(' ');

const labelStyles = 'block text-sm font-medium text-neutral-text mb-2';
const errorStyles = 'mt-1.5 text-sm text-red-600';

// Text Input
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'>, BaseFieldProps {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className={labelStyles}>
          {label}
        </label>
        <input
          ref={ref}
          id={id}
          className={cn(
            fieldStyles,
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Textarea
interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'id'>, BaseFieldProps {}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className={labelStyles}>
          {label}
        </label>
        <textarea
          ref={ref}
          id={id}
          className={cn(
            fieldStyles,
            'h-32 py-3 resize-y',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
        {error && (
          <p id={`${id}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

// Select
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'>, BaseFieldProps {
  options: { value: string; label: string }[];
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, id, options, className, ...props }, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className={labelStyles}>
          {label}
        </label>
        <select
          ref={ref}
          id={id}
          className={cn(
            fieldStyles,
            'appearance-none bg-[url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E")] bg-no-repeat bg-[right_12px_center] pr-10 cursor-pointer',
            error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${id}-error`} className={errorStyles} role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

export { Input, Textarea, Select };

