import logo from './logo.svg';
import './App.css';
import Wrapper from './Wrapper';
import ThemeSwitcher from './ThemeToggle';
import { ThemeProvider, useTheme } from './ThemeToggle/ThemeContex';



function App() {
  const { theme } = useTheme();
  const appCalc = `App-header ${theme === 'light' ? 'app__light' : ''}`;
  return (
    <div className='App'>
      <header className={appCalc}>
        <p className='name'>
          Calculator
        </p>
        <Wrapper />
        <ThemeSwitcher />
      </header>
    </div >
  );
}

export default App;
