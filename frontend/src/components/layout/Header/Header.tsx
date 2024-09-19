import { useState } from 'react';
import logo from '../../../assets/images/oipl_icon.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
        console.log("State Toggled", isSearchOpen)
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <header className="w-full flex justify-between items-center py-6 bg-black text-white z-10 px-12">
            <div className="logo">
                <img src={logo} alt="Orflax Logo" className="h-12" />
            </div>
            <div className="flex items-center space-x-6 flex-grow">
                <div className="flex-grow flex justify-end items-center space-x-6">
                    {isSearchOpen ? (
                        <motion.div
                            initial={{ width: "0%", opacity: 0 }}
                            animate={{ width: "90%", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{ 
                                duration: 0.7, 
                                ease: "easeInOut"
                            }}
                            className="flex items-center bg-white text-black rounded px-2"
                        >
                            <input
                                type="text"
                                placeholder="Search..."
                                className="flex-grow p-2 bg-transparent border-none outline-none"
                            />
                            <FaTimes size={30} className="cursor-pointer" onClick={toggleSearch} />
                        </motion.div>
                    ) : (
                        <FaSearch size={30} className="text-white cursor-pointer" onClick={toggleSearch} />
                    )}
                </div>
                <div className="h-6 border-l border-white"></div>
                <FaBars size={30} className="text-white" />
            </div>
        </header>
    );
};

export default Header;