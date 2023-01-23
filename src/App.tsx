import moon from './assets/icon-moon.svg';
import logo from './assets/logo.svg';

const App = () => {
  return (
    <div className="bg-white flex flex-col items-center">
      <div className="max-w-3xl mt-10 w-full">
        <header className="flex flex-row items-center justify-between">
          <img src={logo} alt="logo" />
          <img src={moon} alt="theme" />
        </header>
      </div>
    </div>
  );
};

export default App;
