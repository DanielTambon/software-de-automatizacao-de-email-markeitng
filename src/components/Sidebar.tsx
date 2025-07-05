
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BarChart3, Mail, Users, PieChart, Calendar } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: BarChart3, label: 'Dashboard', active: location.pathname === '/' },
    { path: '/contacts', icon: Users, label: 'Contatos', active: location.pathname === '/contacts' },
    { path: '/campaigns', icon: Mail, label: 'Campanhas', active: location.pathname === '/campaigns' },
    { path: '/reports', icon: PieChart, label: 'Relatórios', active: location.pathname === '/reports' },
  ];

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-xl z-50">
      <div className="p-6 border-b border-blue-700">
        <h1 className="text-2xl font-bold text-white">Level Marketing</h1>
        <p className="text-blue-200 text-sm mt-1">Email Marketing Pro</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-4 text-blue-100 hover:bg-blue-700 hover:text-white transition-all duration-200 ${
                item.active ? 'bg-blue-700 text-white border-r-4 border-green-400' : ''
              }`}
            >
              <Icon size={20} className="mr-3" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-blue-700">
        <div className="text-center text-blue-200 text-sm">
          <p>© 2024 Level Marketing</p>
          <p className="mt-1">Versão 1.0</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
