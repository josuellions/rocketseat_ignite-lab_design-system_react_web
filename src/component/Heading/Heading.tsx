import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface HeadingProps{
  size?: 'sm' | 'md' | 'lg',
  children: ReactNode //string,
  asChild?: boolean,
  className?: string
}

export function Heading({size = 'md', children, asChild, className}: HeadingProps) {
  const CompTag = asChild ? Slot : 'h2';

  return (
    <CompTag 
      className={clsx(
        'text-gray-100 text-bold font-sans',
        {
          'text-lg': size === 'sm',
          'text-xl': size === 'md',
          'text-2xl': size === 'lg',
        },
        className
      )
      }
    >
      {children}
    </CompTag>
  )
}