
import { useTheme } from './ThemeProvider';

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold text-neutral dark:text-white">
        Luis Abrantes
      </h2>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default Header;