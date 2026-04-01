import { Outlet } from 'react-router-dom';
import Navbar from "./Navbar"
export default function RootLayout() {
  return (
    <div>
      <Navbar />
      {/* Outlet acts as the placeholder for the current route's component */}
      <Outlet /> 
    </div>
  );
}