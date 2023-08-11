import { Outlet } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
export const FrontEndLayout = () => {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
};
