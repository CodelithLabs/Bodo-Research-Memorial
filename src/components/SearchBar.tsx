'use client';

import { Search, X } from 'lucide-react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = 'Search leaders, martyrs, movements...' }: SearchBarProps) {
    return (
        <div className={styles.searchContainer}>
            <Search size={20} className={styles.searchIcon} />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={styles.searchInput}
                aria-label="Search leaders"
            />
            {value && (
                <button
                    onClick={() => onChange('')}
                    className={styles.clearButton}
                    aria-label="Clear search"
                >
                    <X size={18} />
                </button>
            )}
        </div>
    );
}
