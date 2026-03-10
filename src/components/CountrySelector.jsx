import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, X } from 'lucide-react';
import { countries } from '../data/countries';

export default function CountrySelector({ selectedCountry, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);
    const searchInputRef = useRef(null);

    const normalizeText = (text) =>
        text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

    const filteredCountries = countries.filter(c => {
        const search = normalizeText(searchQuery);
        if (!search) return true;

        const normalizedName = normalizeText(c.name);
        const dialCodeDigits = c.dialCode.replace(/\D/g, '');
        const searchDigits = searchQuery.replace(/\D/g, '');

        // Match if:
        // 1. Any word in the country name starts with the search query
        // 2. The dialing code includes the numeric part of the search
        const nameWords = normalizedName.split(/\s+/);
        const matchesName = nameWords.some(word => word.startsWith(search)) || normalizedName.startsWith(search);
        const matchesDial = searchDigits && dialCodeDigits.includes(searchDigits);

        return matchesName || matchesDial;
    }).sort((a, b) => {
        const search = normalizeText(searchQuery);
        if (!search) return 0;

        const aNorm = normalizeText(a.name);
        const bNorm = normalizeText(b.name);

        const aStarts = aNorm.startsWith(search);
        const bStarts = bNorm.startsWith(search);

        // Prioritize exact prefix matches
        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return a.name.localeCompare(b.name, 'fr');
    });

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
    };

    return (
        <div className="relative shrink-0" ref={dropdownRef}>
            {/* Trigger Button */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-full items-center justify-center gap-2 rounded-l-xl border border-r-0 border-[var(--border-subtle)] bg-[var(--input-bg)] px-3 font-mono text-[14px] text-[var(--text-primary)] transition-all hover:bg-[var(--surface)] active:scale-95"
            >
                {selectedCountry ? (
                    <div className="flex items-center gap-2">
                        <img
                            src={selectedCountry.flag}
                            alt={selectedCountry.name}
                            className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm"
                        />
                        <span>{selectedCountry.dialCode}</span>
                    </div>
                ) : (
                    <span>+</span>
                )}
                <ChevronDown
                    size={14}
                    className={`text-[var(--text-muted)] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full z-[100] mt-2 w-72 origin-top-left overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-[0_20px_50px_rgba(0,0,0,0.1)] backdrop-blur-2xl"
                        onKeyDown={handleKeyDown}
                    >
                        {/* Search Header */}
                        <div className="sticky top-0 z-10 border-b border-[var(--border-subtle)] bg-[var(--bg-card)] p-3 backdrop-blur-md">
                            <div className="relative">
                                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Rechercher un pays..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    onClick={(e) => e.stopPropagation()}
                                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--input-bg)] py-2 pl-9 pr-8 font-sans text-xs text-[var(--text-primary)] placeholder-[var(--text-muted)] transition focus:border-[var(--accent)] focus:bg-[var(--surface)] focus:outline-none"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 hover:bg-white/10"
                                    >
                                        <X size={12} className="text-[var(--text-muted)]" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Countries List */}
                        <div className="max-h-64 overflow-y-auto overflow-x-hidden p-1 custom-scrollbar">
                            {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                    <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => {
                                            onSelect(country);
                                            setIsOpen(false);
                                            setSearchQuery('');
                                        }}
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all hover:bg-[var(--surface)] ${selectedCountry?.code === country.code ? 'bg-[var(--accent)] text-white' : ''
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={country.flag}
                                                alt={country.name}
                                                className="h-3.5 w-5 rounded-[2px] object-cover shadow-sm"
                                            />
                                            <span className={`truncate text-xs font-medium ${selectedCountry?.code === country.code ? 'text-white' : 'text-[var(--text-primary)]'}`}>{country.name}</span>
                                        </div>
                                        <span className={`font-mono text-[11px] ${selectedCountry?.code === country.code ? 'text-white/80' : 'text-[var(--text-muted)]'}`}>{country.dialCode}</span>
                                    </button>
                                ))
                            ) : (
                                <div className="p-4 text-center text-xs text-[#8b9bc0]">
                                    Aucun pays trouvé
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
