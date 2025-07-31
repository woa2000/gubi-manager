// src/components/layout/Sidebar.tsx
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  User, 
  BookOpen, 
  Palette,
  Upload,
  TestTube,
  Image,
  BarChart3
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { useAuth } from '@/hooks/features/useAuth';
import Button from '@/components/ui/Button';

interface SubMenuItem {
  name: string;
  href: string;
  icon: any;
}

interface SidebarItem {
  name: string;
  href: string;
  icon: any;
  submenu?: SubMenuItem[];
}

const sidebarItems: SidebarItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Usuários', href: '/usuarios', icon: Users },
  { name: 'Relatório', href: '/relatorio', icon: BarChart3 },  
];

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, signOut } = useAuth();
  const [isClient, setIsClient] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<string | null>(null);

  // Garante que só renderize após a hidratação
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Debug
  console.log('🎯 Sidebar sendo renderizado!');

  const handleLogout = async () => {
    const result = await signOut();
    if (result.success) {
      router.push('/login');
    }
  };

  const toggleSubmenu = (itemName: string) => {
    setExpandedSubmenu(expandedSubmenu === itemName ? null : itemName);
  };

  // Durante a hidratação, mostra um placeholder simples
  if (!isClient) {
    return (
      <aside 
        className="w-64 text-white p-6 flex flex-col min-h-screen bg-gradient-to-br from-[#5A439B] via-[#7B68B0] to-[#E85A9B]"
        style={{ 
          width: '256px'
        }}
      >
        <div className="mb-8">
          <Logo variant="light" />
        </div>
        <nav className="flex-grow">
          <div className="animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="mb-4 h-10 bg-white bg-opacity-10 rounded"></div>
            ))}
          </div>
        </nav>
      </aside>
    );
  }

  return (
    <aside 
      className="w-64 text-white p-6 flex flex-col shadow-2xl min-h-screen bg-gradient-to-br from-[#5A439B] via-[#7B68B0] to-[#E85A9B]"
      style={{ 
        width: '256px'
      }}
    >
      <div className="mb-8">
        <Logo variant="light" />
      </div>
      <nav className="flex-grow">
        <ul>
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const isSubmenuExpanded = expandedSubmenu === item.name;
            const hasActiveSubmenuItem = hasSubmenu && item.submenu?.some(subItem => pathname === subItem.href);
            
            return (
              <li key={item.name} className="mb-2">
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 group
                        ${hasActiveSubmenuItem || isSubmenuExpanded
                          ? 'bg-white/20 text-white shadow-lg border border-white/30' 
                          : 'hover:bg-white/10 hover:shadow-md text-white/90 hover:text-white'
                        }
                      `}
                    >
                      <div className="flex items-center">
                        <item.icon size={20} className={`mr-3 transition-transform duration-300 ${
                          hasActiveSubmenuItem || isSubmenuExpanded ? 'scale-110' : 'group-hover:scale-105'
                        }`} />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-200 ${isSubmenuExpanded ? 'rotate-180' : ''}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isSubmenuExpanded && (
                      <ul className="ml-6 mt-2 space-y-1">
                        {item.submenu?.map((subItem) => {
                          const isSubActive = pathname === subItem.href;
                          return (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className={`flex items-center py-2 px-3 rounded-lg transition-all duration-300 group text-sm
                                  ${isSubActive 
                                    ? 'bg-white/20 text-white shadow-lg border border-white/30' 
                                    : 'hover:bg-white/10 hover:shadow-md text-white/80 hover:text-white'
                                  }
                                `}
                              >
                                <subItem.icon size={16} className={`mr-2 transition-transform duration-300 ${
                                  isSubActive ? 'scale-110' : 'group-hover:scale-105'
                                }`} />
                                <span className="font-medium">{subItem.name}</span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center py-3 px-4 rounded-lg transition-all duration-300 group
                      ${isActive 
                        ? 'bg-white/20 text-white shadow-lg border border-white/30' 
                        : 'hover:bg-white/10 hover:shadow-md text-white/90 hover:text-white'
                      }
                    `}
                  >
                    <item.icon size={20} className={`mr-3 transition-transform duration-300 ${
                      isActive ? 'scale-110' : 'group-hover:scale-105'
                    }`} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* User Info at the bottom */}
      <div className="mt-auto pt-6 border-t border-white/30 space-y-4">
        {/* User Profile */}
        <div className="flex items-center bg-white/10 rounded-lg p-3">
          <div 
            className="w-10 h-10 rounded-full mr-3 flex items-center justify-center shadow-md bg-gradient-to-br from-[#E85A9B] to-[#F472B6]"
          >
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name || 'User Avatar'} className="w-full h-full object-cover rounded-full" />
            ) : (
              <User size={20} className="text-white" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-white">{user?.name || user?.email || 'Usuário'}</p>
            <p className="text-xs text-white/80 truncate">{user?.email || 'carregando...'}</p>
          </div>
        </div>
        
        {/* Logout Button */}
        <button
          className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-4 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 font-medium hover:shadow-lg"
          onClick={handleLogout}
        >
          <LogOut size={16} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
