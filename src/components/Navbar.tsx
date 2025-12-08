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

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getThemeIcon = () => {
    if (!mounted) return <Moon className="h-5 w-5" />;
    if (theme === 'light') return <Sun className="h-5 w-5" />;
    if (theme === 'dark') return <Moon className="h-5 w-5" />;
    return <Monitor className="h-5 w-5" />;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <nav className="container-custom flex items-center justify-between p-4 lg:px-8" aria-label="Global">

        {/* Left Side: Logo/Name */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 text-lg font-bold text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Raghav Gaur | Portfolio
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="flex items-center">
              <Link
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${location.pathname === item.href
                  ? 'text-zinc-900 dark:text-white font-semibold'
                  : 'text-zinc-500 dark:text-zinc-400'
                  }`}
              >
                {item.name}
              </Link>
              {/* Add separator pipe for all items, including the last one before the theme toggle */}
              <span className="ml-6 text-zinc-300 dark:text-zinc-700 select-none">|</span>
            </div>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="group flex items-center justify-center rounded-full p-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white focus:outline-none"
            aria-label="Toggle theme"
          >
            <span className="group-hover:rotate-12 transition-transform duration-300">
              {getThemeIcon()}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10 dark:sm:ring-white/10 transition-colors duration-300">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 text-lg font-bold text-zinc-900 dark:text-white">
                Raghav Gaur
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-zinc-700 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-200 dark:divide-zinc-800">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-zinc-100 dark:hover:bg-zinc-900 ${location.pathname === item.href
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-zinc-900 dark:text-white'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    onClick={() => {
                      toggleTheme();
                    }}
                    className="flex w-full items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900"
                  >
                    {getThemeIcon()}
                    <span>Switch Theme ({theme})</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
