'use client';

import { Filter, X } from 'lucide-react';
import { Region, Era } from '@/types';
import styles from './FilterBar.module.css';

interface FilterBarProps {
    region: Region | '';
    era: Era | '';
    isMartyr: boolean | null;
    onRegionChange: (region: Region | '') => void;
    onEraChange: (era: Era | '') => void;
    onMartyrChange: (isMartyr: boolean | null) => void;
    onClear: () => void;
    hasFilters: boolean;
}

const regions: { value: Region | ''; label: string }[] = [
    { value: '', label: 'All Regions' },
    { value: 'BTC', label: 'Bodoland Territorial Area' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Other', label: 'Other' },
];

const eras: { value: Era | ''; label: string }[] = [
    { value: '', label: 'All Eras' },
    { value: '1950s', label: '1950s' },
    { value: '1960s', label: '1960s' },
    { value: '1970s', label: '1970s' },
    { value: '1980s', label: '1980s' },
    { value: '1990s', label: '1990s' },
    { value: '2000s', label: '2000s' },
];

export default function FilterBar({
    region,
    era,
    isMartyr,
    onRegionChange,
    onEraChange,
    onMartyrChange,
    onClear,
    hasFilters,
}: FilterBarProps) {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.filterHeader}>
                <Filter size={20} />
                <span>Filters</span>
                {hasFilters && (
                    <button onClick={onClear} className={styles.clearButton}>
                        <X size={16} />
                        Clear All
                    </button>
                )}
            </div>

            <div className={styles.filters}>
                <div className={styles.filterGroup}>
                    <label htmlFor="region-filter" className={styles.label}>Region</label>
                    <select
                        id="region-filter"
                        value={region}
                        onChange={(e) => onRegionChange(e.target.value as Region | '')}
                        className={styles.select}
                    >
                        {regions.map((r) => (
                            <option key={r.value} value={r.value}>
                                {r.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label htmlFor="era-filter" className={styles.label}>Era</label>
                    <select
                        id="era-filter"
                        value={era}
                        onChange={(e) => onEraChange(e.target.value as Era | '')}
                        className={styles.select}
                    >
                        {eras.map((e) => (
                            <option key={e.value} value={e.value}>
                                {e.label}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label className={styles.label}>Status</label>
                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={isMartyr === true}
                                onChange={(e) => onMartyrChange(e.target.checked ? true : null)}
                            />
                            <span>Martyrs Only</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}
