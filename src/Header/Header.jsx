import React from 'react';
import styles from './Header.module.css'
import { useDarkMode } from '../context/DarkModeContext';
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function Header({ filter, filters, onFilterChange }) {
    const { darkMode, toggleDarkMode } = useDarkMode();
    return (
        <header className={styles.header}>
            <button className={styles.toggle} onClick={toggleDarkMode}>
                {!darkMode && <FaMoon />}
                {darkMode && <IoSunny />}
            </button>
            <ul className={styles.filters}>
                {
                    filters.map((value, index) => (
                        <li key={index}>
                            <button className={`${styles.filter} ${filter === value && styles.seleted} `} onClick={() => onFilterChange(value)}>{value}</button>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}
