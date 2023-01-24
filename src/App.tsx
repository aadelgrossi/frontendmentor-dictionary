import { FormEventHandler, useEffect, useState } from 'react';

import moon from './assets/icon-moon.svg';
import logo from './assets/logo.svg';
import SearchError from './components/SearchError';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import useDictionarySearch, {
  DictionarySearchError,
} from './services/useDictionarySearch';

const App = () => {
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
      className="flex flex-col items-center mx-6
      bg-white text-text-200"
    >
      <div className="max-w-3xl mt-10 w-full">
        <header className="flex flex-row items-center justify-between mb-14">
          <img src={logo} alt="logo" />
          <img src={moon} alt="theme" />
        </header>
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
  );
};

export default App;
