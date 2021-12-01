import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage(false);
    
    
    return [darkMode, setDarkMode]
}

export default useDarkMode;