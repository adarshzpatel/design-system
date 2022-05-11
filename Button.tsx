import clsx from "clsx";
import React, {
  ButtonHTMLAttributes,
  Children,
  DetailedHTMLProps,
  forwardRef,
} from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "danger";
  outline?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement,Props>(function Button({
  size='md',
  variant='primary',
  outline,
  loading,
  icon,
  children,
  className,
  ...rest
},ref) {
  return(
    <button
    ref={ref}
    className={clsx(
      {
        'bg-purple-600 hover:bg-purple-700 active:bg-purple-700 text-purple-50 ring-purple-500' : variant === 'primary',
        'bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 text-white ring-emerald-500' : variant === 'success',
        'bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-white ring-amber-500' : variant === 'warning',
        'px-2 py-0.5': size === 'sm',
        'px-3 py-1': size === 'md',
        'px-4 py-1.5': size === 'lg',
        'flex items-center space-x-1.5': icon && children
      },
      'rounded-lg font-medium font-display duration-200 ease-out disabled:opacity-50 shadow-sm focus:ring-2 focus:ring-opacity-50 active:scale-95 focus:ring-offset-1 outline-none',
      className
    )}
    disabled={loading}
    {...rest}
    >
      {icon} 
      <div>{children}</div>
    </button>
  )
})

export default Button;
