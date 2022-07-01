/* eslint-disable @typescript-eslint/no-empty-function */
import clsx from 'clsx';
import React, { ComponentPropsWithoutRef, PropsWithoutRef, RefAttributes } from 'react';
import { useMemo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { useI18n } from '../../i18n/useI18n';
import { translateErrorMessage } from '../../services/yup/useYup';

const variantClassNames = {
  outline: 'border-b border-dark-10 focus-within:border-dark-30 ',
  transparent: '',
  normal: 'border border-dark-10 focus-within:border-dark-30 rounded-md',
};

const sizeClassNames = {
  medium: 'py-0',
  small: '!py-0',
};

const variantInputClassNames = {
  outline:
    'peer h-10 w-full text-white placeholder-transparent focus:placeholder-dark-10 focus:outline-none bg-transparent !border-0 outline-none !shadow-none !ring-transparent',
  transparent:
    'peer h-10 w-full text-white placeholder-transparent focus:placeholder-dark-10 focus:outline-none bg-transparent !border-0 outline-none !shadow-none !ring-transparent',
  normal:
    'peer h-10 w-full text-white focus:outline-none bg-transparent !border-0 outline-none !shadow-none !ring-transparent',
};

const sizeInputClassNames = {
  medium: '',
  small: '!h-8',
};

const variantLabelClassNames = {
  outline: '',
  transparent: '',
  normal: '',
};

export type InputSize = keyof typeof sizeClassNames;

//@ts-ignore
export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label?: string;
  placeholder?: string;
  name?: string;
  variant?: keyof typeof variantClassNames;
  size?: InputSize;
  className?: string;
  type?: string;
  error?: unknown;
  register?: UseFormRegisterReturn;
  prefixIcon?: string;
  suffixIcon?: string;
  prefixIconClassName?: string;
  suffixIconClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  helperText?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  inputRef?: React.LegacyRef<HTMLInputElement>;
}

export const Input: React.FC<PropsWithoutRef<InputProps> & RefAttributes<HTMLInputElement>> = ({
  label,
  name = 'input',
  placeholder,
  prefixIcon,
  suffixIcon,
  prefixIconClassName = '',
  suffixIconClassName = '',
  labelClassName = '',
  disabled,
  className,
  inputClassName,
  type = 'text',
  variant = 'normal',
  size = 'medium',
  error,
  register = {},
  inputRef,
  onClick,
  helperText,
  required,
  ...props
}) => {
  const { t, format } = useI18n();

  const isError = useMemo(() => {
    return !!error;
  }, [error]);

  return (
    <div className={clsx('relative block')}>
      {label && (
        <label
          htmlFor={name}
          className={clsx(
            'block pb-2 text-white',
            variantLabelClassNames[variant],
            isError ? ' !text-error' : '',
            labelClassName,
          )}
        >
          {label}
          {required && <span> *</span>}
        </label>
      )}

      <div
        className={clsx(
          'flex w-full items-center gap-2 px-2',
          variantClassNames[variant],
          sizeClassNames[size],
          disabled ? 'opacity-30' : '',
          isError ? '!border-error ' : '',
          className,
        )}
      >
        {prefixIcon && (
          <div>
            <i
              className={clsx(
                'icon bg-dark-100 block h-5 w-5',
                `icon-${prefixIcon}`,
                prefixIconClassName,
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              onClick={onClick}
            />
          </div>
        )}
        <div className="flex-grow">
          <input
            id={name}
            //@ts-ignore
            name={name}
            type={type}
            className={clsx(
              'px-0',
              variantInputClassNames[variant],
              sizeInputClassNames[size],
              'placeholder-white placeholder-opacity-60',
              disabled ? 'cursor-not-allowed' : '',
              inputClassName,
            )}
            disabled={disabled}
            placeholder={placeholder || ''}
            //@ts-ignore
            ref={inputRef}
            {...register}
            {...props}
          />
        </div>
        {suffixIcon && (
          <div>
            <i
              className={clsx(
                'icon block h-5 w-5 bg-white',
                `icon-${suffixIcon}`,
                suffixIconClassName,
                disabled ? 'cursor-not-allowed' : 'cursor-pointer',
              )}
              onClick={onClick}
            />
          </div>
        )}
      </div>
      {(!!error || helperText) && (
        <p className={clsx('mt-1 text-sm', isError ? '!border-error !text-error' : 'text-white text-opacity-80')}>
          {translateErrorMessage(error as { message: string; type: string } | undefined, t, format) || helperText}
        </p>
      )}
    </div>
  );
};
