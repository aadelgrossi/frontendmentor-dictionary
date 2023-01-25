import { FormEventHandler, useEffect, useState } from 'react';

import Header from './components/Header';
import SearchError from './components/SearchError';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import useDictionarySearch, {
  DictionarySearchError,
} from './services/useDictionarySearch';
import useUserPreferenceStore from './store';

const App = () => {
  const font = useUserPreferenceStore((state) => state.font);

  const [inputValue, setInputValue] = useState('keyboard');
  const [word, setWord] = useState(inputValue);

  const { data, error, isError } = useDictionarySearch(word);

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setWord(inputValue);
  };

  useEffect(() => {
    setInputValue(word);
  }, [word]);

  return (
    <div
      className="flex min-h-screen pb-12 flex-col items-center
      bg-white text-text-200
      dark:bg-black dark:text-gray-300"
    >
      <div className="max-w-3xl px-6 mt-10 w-full">
        <Header />
        <div className={`font-${font}`}>
          <SearchInput
            onSubmit={onSubmit}
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

          {isError && <SearchError error={error.response?.data} />}
        </div>
      </div>
    </div>
  );
};

export default App;
