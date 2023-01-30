import logo from '../assets/logo.svg';
import FontSelect from './FontSelect';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <nav className="flex flex-row items-center justify-between mb-[51.5px]">
      <img src={logo} alt="logo" />
      <div className="flex flew-row gap-[26px]">
        <FontSelect />
        <div className="border-r border-gray-400" />
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Header;
