import clsx from 'clsx';
import React from 'react';

const sizeClassNames = {
  medium: 'py-2 px-5 text-base',
};

const variantClassNames = {
  primary: 'bg-gradient-to-tr from-[#FEAC5E] via-[#C779D0] to-[#4BC0C8] font-bold text-white',
};

const iconVariantClassNames = {
  primary: 'bg-white',
};

const iconSizeClassNames = {
  medium: 'h-4 w-4',
};

export const Button: React.FC<{
  size?: keyof typeof sizeClassNames;
  variant?: keyof typeof variantClassNames;
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  children?: JSX.Element | string;
  prefixIcon?: string;
  prefixIconClassName?: string;
  suffixIcon?: string;
  suffixIconClassName?: string;
  onClick?: React.MouseEventHandler<any>;
  onClickPrefix?: React.MouseEventHandler<any>;
  onClickSuffix?: React.MouseEventHandler<any>;
}> = ({
  variant = 'primary',
  size = 'medium',
  className = '',
  prefixIconClassName = '',
  suffixIconClassName = '',
  type = 'button',
  disabled = false,
  isLoading = false,
  children,
  prefixIcon,
  onClickPrefix,
  suffixIcon,
  onClickSuffix,
  ...props
}) => (
  <button
    className={clsx(
      'flex items-center justify-center gap-2',
      'rounded-md',
      variantClassNames[variant],
      sizeClassNames[size],
      'hover:opacity-80',
      disabled ? '!opacity-30' : '',
      className,
    )}
    disabled={disabled || isLoading}
    type={type}
    {...props}
  >
    {isLoading && (
      <div>
        <i
          className={clsx('icon icon-refresh animate block', iconSizeClassNames[size], iconVariantClassNames[variant])}
        ></i>
      </div>
    )}
    {prefixIcon && (
      <div onClick={onClickPrefix}>
        <i
          className={clsx(
            'block',
            `${prefixIcon}`,
            iconVariantClassNames[variant],
            iconSizeClassNames[size],
            prefixIconClassName,
          )}
        ></i>
      </div>
    )}

    {children && <p>{children}</p>}

    {suffixIcon && (
      <div onClick={onClickSuffix}>
        <i
          className={clsx(
            'block',
            `${suffixIcon}`,
            iconVariantClassNames[variant],
            iconSizeClassNames[size],
            suffixIconClassName,
          )}
        ></i>
      </div>
    )}
  </button>
);
