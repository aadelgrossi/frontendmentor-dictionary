import clsx from 'clsx';
import {
  Dispatch,
  FormEventHandler,
  InputHTMLAttributes,
  SetStateAction,
  useState,
} from 'react';

import searchIcon from '../assets/icon-search.svg';

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  setWord: Dispatch<SetStateAction<string>>;
}

const SearchInput = (props: SearchInputProps) => {
  const [hasError, setHasError] = useState(false);
  const { setWord, ...rest } = props;

  const search: FormEventHandler = (e) => {
    e.preventDefault();
    setHasError(false);

    if (!rest.value) {
      setHasError(true);
      return;
    }

    setWord(rest.value as string);
  };

  return (
    <form onSubmit={search} className="relative flex flex-col ">
      <input
        className={clsx({
          'w-full rounded-xl h-12 md:h-16 py-5 px-4 text-text-200 dark:text-white placeholder:dark:text-white/25 bg-accent-200 dark:bg-text-200 font-bold text-[16px] md:text-[20px] focus:outline-none focus:ring-1 focus:ring-primary':
            true,
          'required:border required:border-error focus:ring-0': hasError,
        })}
        required={hasError}
        placeholder="Search for any word..."
        {...rest}
      />
      <button type="submit">
        <img
          alt="search-icon"
          className="absolute top-4 right-4 md:top-6 md:right-5"
          src={searchIcon}
        />
      </button>
      {hasError && <span className="text-error mt-2">Whoops, can&lsquo;t be empty</span>}
    </form>
  );
};

export default SearchInput;
