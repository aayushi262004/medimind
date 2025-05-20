import type { FC, ReactNode } from 'react';
import Header from './Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="bg-blue-50 min-h-screen">
      <Header />
      <main className="px-8 py-6">{children}</main>
    </div>
  );
};

export default MainLayout;
