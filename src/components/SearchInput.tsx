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
    <form onSubmit={search} className="relative min-h-[100px] flex flex-col gap-1">
      <input
        className={clsx({
          'w-full rounded-xl h-16 py-5 px-4 text-text-200 dark:text-white placeholder:dark:text-white/25 bg-accent-200 dark:bg-text-200 font-bold text-md md:text-lg focus:outline-none focus:ring-1 focus:ring-primary':
            true,
          'required:border required:border-error focus:ring-0': hasError,
        })}
        required={hasError}
        placeholder="Search for any word..."
        {...rest}
      />
      <button type="submit">
        <img alt="search-icon" className="absolute top-6 right-5" src={searchIcon} />
      </button>
      {hasError && <span className="text-error">Whoops, can&lsquo;t be empty</span>}
    </form>
  );
};

export default SearchInput;
