import { useEffect, useState } from 'react';

import Header from './components/Header';
import SearchError from './components/SearchError';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import useDictionarySearch from './services/useDictionarySearch';
import useUserPreferenceStore from './store';

const App = () => {
  const font = useUserPreferenceStore((state) => state.font);

  const [inputValue, setInputValue] = useState('keyboard');
  const [word, setWord] = useState(inputValue);

  const { data, error, isError, isIdle } = useDictionarySearch(word);

  useEffect(() => {
    setInputValue(word);
  }, [word]);

  const hasError = isError && !isIdle;

  return (
    <div
      className="flex min-h-screen pb-12 flex-col items-center
      bg-white text-text-200
      dark:bg-black dark:text-gray-300"
    >
      <div className="max-w-[737px] px-6 md:px-0 mt-[58px] w-full">
        <Header />
        <div className={`font-${font}`}>
          <SearchInput
            setWord={setWord}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {data?.data.map((result, idx) => {
            return (
              <SearchResult
                setWord={setWord}
                key={`${result.word}-${idx}`}
                result={result}
              />
            );
          })}

          {hasError && <SearchError error={error.response?.data} />}
        </div>
      </div>
    </div>
  );
};

export default App;
