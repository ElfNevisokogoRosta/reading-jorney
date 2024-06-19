import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { InputHTMLAttributes, forwardRef } from 'react';

const inputVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BaseInputProps = VariantProps<typeof inputVariants> &
  InputHTMLAttributes<HTMLInputElement> & {
    error: string | false;
    label: string;
  };

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ error, label, variant, className, ...rest }, ref) => {
    return (
      <label className="relative flex">
        <span>{label}:</span>
        <input
          className={cn(inputVariants({ variant, className }))}
          {...rest}
          ref={ref}
        />
        {error && <span className="absolute bottom-0 left-0">{error}</span>}
      </label>
    );
  },
);

BaseInput.displayName = 'BaseInput';
export default BaseInput;
