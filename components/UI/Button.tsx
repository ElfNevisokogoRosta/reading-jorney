import { cn } from '@/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { ButtonHTMLAttributes, forwardRef } from 'react';

const buttonsVariants = cva('', {
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BaseButtonProps = VariantProps<typeof buttonsVariants> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({ variant, className, ...rest }, ref) => {
    return (
      <button
        className={cn(buttonsVariants({ variant, className }))}
        {...rest}
        ref={ref}
      />
    );
  },
);

BaseButton.displayName = 'BaseButton';
export default BaseButton;
