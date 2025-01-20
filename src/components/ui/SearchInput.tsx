'use client';
import React from 'react';
import { Input } from '@nextui-org/react';

interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  ariaLabel: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  placeholder,
  ariaLabel
}) => {
  return (
    <div className="w-full group flex flex-col justify-center items-center mb-8">
      <Input
        isClearable={true}
        aria-label={ariaLabel}
        className="w-full max-w-lg caret-black dark:caret-white"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        size="lg"
        startContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 dark:text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
      />
    </div>
  );
};

export default SearchInput;
