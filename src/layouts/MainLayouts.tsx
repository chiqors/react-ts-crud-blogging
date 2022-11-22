import { Outlet } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';

export const MainLayouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
