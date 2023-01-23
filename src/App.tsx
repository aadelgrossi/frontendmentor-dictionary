import moon from './assets/icon-moon.svg';
import logo from './assets/logo.svg';
import SearchInput from './components/SearchInput';

const App = () => {
  return (
    <div className="bg-white flex flex-col items-center mx-6">
      <div className="max-w-3xl mt-10 w-full">
        <header className="flex flex-row items-center justify-between mb-14">
          <img src={logo} alt="logo" />
          <img src={moon} alt="theme" />
        </header>
        <SearchInput />
      </div>
    </div>
  );
};

export default App;
