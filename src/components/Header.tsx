import logo from '../assets/logo.svg';
import FontSelect from './FontSelect';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between mb-14">
      <img src={logo} alt="logo" />
      <div className="flex flew-row gap-6">
        <FontSelect />
        <ThemeToggle />
      </div>
    </header>
  );
};
export default Header;
