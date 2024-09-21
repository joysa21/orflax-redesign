import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaBars, FaArrowRight } from 'react-icons/fa';
import { MenuItem } from '../../../types/ui';
import styles from './Menu.module.scss';
import { useNavigate } from 'react-router-dom';

const menuItems: MenuItem[] = [
    { name: 'Who we are', subItems: [
        { name: 'Our legacy', link: '/who-we-are/our-legacy' },
        { name: 'Our story', link: '/who-we-are/our-story' },
        { name: 'Our vision', link: '/who-we-are/our-vision' },
        { name: 'Our leadership', link: '/who-we-are/our-leadership' },
        { name: 'Company resource center', link: '/who-we-are/company-resource-center' }
    ]},
    { name: 'What we do', subItems: [
        { name: 'Our legacy', link: '/what-we-do/our-legacy' },
        { name: 'Our vision', link: '/what-we-do/our-vision' },
        { name: 'Our leadership', link: '/what-we-do/our-leadership' }
    ]},
    { name: 'Investors', subItems: [
        { name: 'Lorem Ipsum', link: '/investors/lorem-ipsum' }
    ]},
    { name: 'News and Media', subItems: [] },
    { name: 'Sustainability', subItems: [] },
    { name: 'Community', subItems: [] },
    { name: 'People', subItems: [] },
    { name: 'Innovation', subItems: [] },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(menuItems[0]);
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            setSelectedItem(menuItems[0]);
        }
    }, [isOpen]);

    const handleItemClick = (item: MenuItem) => {
        setSelectedItem(item);
    };

    const handleSubItemClick = (link: string) => {
        navigate(link); // Use navigate instead of history.push
    };

    return (
        <div>
            <button onClick={toggleMenu} className="text-secondaryGray">
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            {isOpen && (
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: '100vh' }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute left-0 w-full bg-primaryBlack opacity-95 text-secondaryGray z-50"
                >
                    <div className="flex mx-4 h-full">
                        <div className="w-1/3 p-4">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`py-4 px-2 title cursor-pointer border-b border-gray-600 ${styles.title} ${selectedItem === item ? 'bg-highlightYellow text-primaryBlack' : ''}`}
                                    onClick={() => handleItemClick(item)}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg">{item.name}</span>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: selectedItem === item ? 1 : 0, scale: selectedItem === item ? 1 : 0 }}
                                            whileHover={{ opacity: 1, scale: 1.5 }}
                                            transition={{ duration: 0.3 }}
                                            className={styles.arrow}
                                        >
                                            <FaArrowRight />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="w-2/3 p-4">
                            {selectedItem && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="flex flex-wrap gap-6">
                                        {selectedItem.subItems.map((subItem, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => handleSubItemClick(subItem.link)}
                                                className={`cursor-pointer  p-4 bg-secondaryGray text-primaryBlack text-xl font-bold rounded-lg shadow-lg ${styles.card} h-52 w-52`}
                                            >
                                                {subItem.name}
                                            </motion.div>
                                            
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default Menu;

