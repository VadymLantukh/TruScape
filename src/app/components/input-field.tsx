'use client';

import { forwardRef, InputHTMLAttributes } from 'react';

export interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, id, ...rest }, ref) => {
    return (
      <div className="flex flex-col">
        {label && (
          <label htmlFor={id} className="mb-2 text-base color-gray-900">
            {label}
          </label>
        )}
        <input
          {...rest}
          ref={ref}
          id={id}
          className="p-3 h-11 text-sm rounded border border-x-gray-300 shadow"
        />
      </div>
    );
  },
);

InputField.displayName = 'InputField';

export default InputField;
