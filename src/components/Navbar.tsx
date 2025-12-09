import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    if (!mounted) return <Monitor className="h-5 w-5" />;
    if (theme === 'light') return <Sun className="h-5 w-5" />;
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  const getThemeName = () => {
    if (!mounted) return 'System';
    return theme === 'system' ? 'System' : theme.charAt(0).toUpperCase() + theme.slice(1);
  };

  return (
    <>
      {/* Glassmorphism Navbar with Theme Support */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 dark:border-white/10 transition-colors duration-300">
        <div className="absolute inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300" />

        <nav className="relative mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Raghav Gaur
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-zinc-700 dark:text-white hover:text-zinc-900 dark:hover:text-blue-400"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Links + Theme */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            {navigation.map((item, i) => (
              <div key={item.name} className="flex items-center">
                <Link
                  to={item.href}
                  className={`text-sm font-medium transition-all hover:text-blue-600 dark:hover:text-blue-300 ${location.pathname === item.href
                    ? 'text-zinc-900 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-white/70'
                    }`}
                >
                  {item.name}
                </Link>
                {i < navigation.length - 1 && (
                  <span className="mx-4 text-zinc-300 dark:text-white/20 select-none">|</span>
                )}
              </div>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-white/80 dark:hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              <span className="block hover:rotate-12 transition-transform duration-300">
                {getThemeIcon()}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white dark:bg-black border-l border-zinc-200 dark:border-white/10 shadow-2xl transition-colors duration-300">
            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
              <Link
                to="/"
                className="text-xl font-bold text-zinc-900 dark:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Raghav Gaur
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full rounded-lg px-5 py-4 text-lg font-medium transition-all ${location.pathname === item.href
                    ? 'bg-zinc-100 text-zinc-900 dark:bg-white/10 dark:text-white'
                    : 'text-zinc-600 hover:bg-zinc-50 dark:text-white/80 dark:hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={toggleTheme}
                  className="flex w-full items-center gap-4 rounded-lg px-5 py-4 text-lg font-medium text-zinc-600 hover:bg-zinc-50 dark:text-white/90 dark:hover:bg-white/10 transition-all"
                >
                  {getThemeIcon()}
                  <span>Theme: {getThemeName()}</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
