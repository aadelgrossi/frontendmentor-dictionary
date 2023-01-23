import { useState } from 'react';

import moon from './assets/icon-moon.svg';
import logo from './assets/logo.svg';
import SearchInput from './components/SearchInput';
import useDictionarySearch from './services/useDictionarySearch';

const App = () => {
  const [word, setWord] = useState('hello');

  const { data } = useDictionarySearch(word);

  return (
    <div className="bg-white flex flex-col items-center mx-6">
      <div className="max-w-3xl mt-10 w-full">
        <header className="flex flex-row items-center justify-between mb-14">
          <img src={logo} alt="logo" />
          <img src={moon} alt="theme" />
        </header>
        <SearchInput value={word} onChange={(e) => setWord(e.target.value)} />

        {JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
};

export default App;
