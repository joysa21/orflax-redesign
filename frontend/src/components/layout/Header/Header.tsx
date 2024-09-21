import { useState } from 'react';
import logo from '../../../assets/images/oipl_icon.png';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import QuickSearch from '../../ui/QuickSearch/QuickSearch';
import Menu from '../../ui/Menu/Menu'; // Import the Menu component
import styles from './Header.module.scss';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isQuickSearchVisible, setIsQuickSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setTimeout(() => setIsQuickSearchVisible(true), 500); // Delay to match the search bar animation
        } else {
            setIsQuickSearchVisible(false);
        }
    };

    return (
        <header className={`w-full flex flex-col items-center py-8 bg-primaryBlack text-secondaryGray z-10 px-6 relative ${styles.header}`}>
            <div className="w-full flex justify-between items-center">
                <div className="logo">
                    <img src={logo} alt="Orflax Logo" className="h-10" />
                </div>
                <div className="flex items-center space-x-6 flex-grow ">
                    <div className="flex-grow flex justify-end items-center space-x-6 ">
                        {isSearchOpen ? (
                            <motion.div
                                initial={{ width: "0%", opacity: 0 }}
                                animate={{ width: "95%", opacity: 1 }}
                                exit={{ width: 0, opacity: 0 }}
                                transition={{ 
                                    duration: 0.7, 
                                    ease: "easeInOut"
                                }}
                                className="flex items-center bg-secondaryGray text-primaryBlack rounded-lg px-2 w-full"
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="flex-grow p-2 bg-transparent border-none outline-none"
                                />
                                <FaTimes size={24} className="cursor-pointer" onClick={toggleSearch} />
                            </motion.div>
                        ) : (
                            <FaSearch size={24} className="text-secondaryGray cursor-pointer" onClick={toggleSearch} />
                        )}
                    </div>
                    <div className="h-6 border-l border-white"></div>
                    <Menu /> {/* Replace the old menu button with the Menu component */}
                </div>
            </div>
            {isSearchOpen && <QuickSearch isVisible={isQuickSearchVisible} />}
        </header>
    );
};

export default Header;