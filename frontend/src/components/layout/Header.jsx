import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, LogIn, UserPlus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';
import UserMenu from './UserMenu';
import LanguageSwitcher from '../common/LanguageSwitcher';
import { toast } from 'sonner';

const Header = () => {
  const { t } = useTranslation(['header', 'theme']);
  const { isDark, toggleTheme } = useTheme();
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleThemeToggle = () => {
    toggleTheme();
    // Show toast notification
    setTimeout(() => {
      if (!isDark) {
        toast.success(t('theme:dark'), {
          description: t('theme:switchedToDark'),
          duration: 2000,
        });
      } else {
        toast.success(t('theme:light'), {
          description: t('theme:switchedToLight'),
          duration: 2000,
        });
      }
    }, 100);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('header:home'), href: '/' },
    { name: t('header:services'), href: '/services' },
    { name: t('header:buildSite'), href: '/your-site' },
    { name: t('header:portfolio'), href: '/portfolio' },
    { name: t('header:about'), href: '/about' },
    { name: t('header:contact'), href: '/contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center transform transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Kawesh</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Dark Mode Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              aria-label={isDark ? t('header:switchToLight') : t('header:switchToDark')}
              title={isDark ? t('header:switchToLight') : t('header:switchToDark')}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600 transition-transform duration-300" />
              )}
            </button>


            {/* Authentication Buttons / User Menu */}
            {!loading && (
              <>
                {isAuthenticated ? (
                  // User Menu for logged in users
                  <div className="hidden md:block">
                    <UserMenu />
                  </div>
                ) : (
                  // Login/Register buttons for guests
                  <>
                    <Button
                      onClick={() => navigate('/customer/login')}
                      variant="ghost"
                      className="hidden md:inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>{t('header:login')}</span>
                    </Button>
                    <Button
                      onClick={() => navigate('/customer/register')}
                      className="hidden md:inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>{t('header:register')}</span>
                    </Button>
                  </>
                )}
              </>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200 dark:border-gray-700">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Language Switcher */}
            <div className="py-2">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile Authentication Buttons */}
            <div className="pt-3 space-y-2 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <UserMenu />
              ) : (
                <>
                  <Button
                    onClick={() => {
                      navigate('/customer/login');
                      setIsMobileMenuOpen(false);
                    }}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>{t('header:login')}</span>
                  </Button>
                  <Button
                    onClick={() => {
                      navigate('/customer/register');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <UserPlus className="w-4 h-4" />
                    <span>{t('header:register')}</span>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
