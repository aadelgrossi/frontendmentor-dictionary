import { FormEventHandler, InputHTMLAttributes } from 'react';

import search from '../assets/icon-search.svg';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onSubmit?: FormEventHandler;
}

const SearchInput = (props: SearchInputProps) => {
  const { onSubmit, ...rest } = props;

  return (
    <form onSubmit={onSubmit} className="relative">
      <input
        className="w-full rounded-xl h-16
        py-5 px-4
        text-text-200 dark:text-white
        placeholder:dark:text-white/25
        bg-accent-200 dark:bg-text-200
        font-bold text-md md:text-lg
        focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Search for any word..."
        {...rest}
      />
      <button type="submit">
        <img alt="search-icon" className="absolute top-6 right-5" src={search} />
      </button>
    </form>
  );
};

export default SearchInput;
