import logo from '../assets/logo.svg';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between mb-14">
      <img src={logo} alt="logo" />
      <ThemeToggle />
    </header>
  );
};
export default Header;
