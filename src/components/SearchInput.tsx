import search from '../assets/icon-search.svg';

const SearchInput = () => {
  return (
    <div className="relative">
      <input
        className="w-full rounded-xl h-16
        py-5 px-4
        bg-accent-200
        font-bold text-md md:text-lg
        focus:outline-none focus:ring-1 focus:ring-primary"
        placeholder="Search for any word..."
      />
      <img alt="search-icon" className="absolute top-6 right-5" src={search} />
    </div>
  );
};

export default SearchInput;
