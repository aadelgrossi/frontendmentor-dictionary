import { useState } from 'react';

import moon from './assets/icon-moon.svg';
import logo from './assets/logo.svg';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import useDictionarySearch from './services/useDictionarySearch';

const App = () => {
  const [word, setWord] = useState('keyboard');

  const { data } = useDictionarySearch(word);

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
        <SearchInput value={word} onChange={(e) => setWord(e.target.value)} />

        {data?.map((result) => {
          return <SearchResult key={result.word} result={result} />;
        })}
      </div>
    </div>
  );
};

export default App;
