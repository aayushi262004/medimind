import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Logo />
      <nav className="space-x-6 text-gray-700 font-medium">
        <Link to="/">Home</Link>
        <Link to="/diagnostics">Diagnostics</Link>
        <Link to="/operations">Hospital Operations</Link>
        <Link to="/ask">AskAI</Link>
      </nav>
    </header>
  );
};

export default Header;
