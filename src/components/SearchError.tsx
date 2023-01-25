import { DictionarySearchError } from '../services/useDictionarySearch';

type SearchErrorProps = {
  error?: DictionarySearchError;
};

const SearchError = (props: SearchErrorProps) => {
  if (!props.error) return null;
  const { title, message, resolution } = props.error;

  return (
    <div className="flex flex-col w-full justify-center items-center mt-32 text-center leading-7">
      <p className="text-6xl">😕</p>
      <h2 className="font-bold text-2xl md:text-3xl mt-10">{title}</h2>
      <p className="text-accent-500 text-md md:text-[18px] mt-6">{message}</p>
      <p className="text-accent-500 text-md md:text-[18px]">{resolution}</p>
    </div>
  );
};

export default SearchError;
