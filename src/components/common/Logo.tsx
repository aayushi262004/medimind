import type { FC } from 'react';

const Logo: FC = () => (
  <div className="flex items-center gap-2">
    <img src="/react.svg" alt="MediMind Logo" className="h-8 w-8" />
    <span className="text-xl font-bold text-blue-600">MediMind</span>
  </div>
);

export default Logo;
