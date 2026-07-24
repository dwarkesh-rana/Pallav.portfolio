'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RESUME_DATA } from '@/constants/resumeData'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
    { id: 'home', label: 'Vitals' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Use ScrollSpy to track active viewport section
    const activeSection = useScrollSpy(
        NAV_ITEMS.map((item) => `#${item.id}`),
        { rootMargin: '-30% 0px -40% 0px' }
    )

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on click/navigation
    const handleNavClick = (id: string) => {
        setMobileMenuOpen(false)
        const element = document.getElementById(id)
        if (element) {
            const offset = 80 // height of header
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = element.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full transition-all duration-300 border-b',
                scrolled
                    ? 'bg-bg-primary/80 backdrop-blur-md border-border-primary/80 py-4 shadow-sm'
                    : 'bg-transparent border-transparent py-6'
            )}
        >
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo Name Sign-off */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col"
                    >
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick('home')
                            }}
                            className="font-serif text-lg font-bold tracking-tight text-text-primary md:text-xl"
                        >
                            {RESUME_DATA.name.toUpperCase()}
                        </a>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-text-secondary/70">
                            Administrative & Legal support
                        </span>
                    </motion.div>

                    {/* Desktop Navigation Anchors */}
                    <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
                        {NAV_ITEMS.map((item, index) => {
                            const isActive = activeSection === item.id || (activeSection === '' && item.id === 'home')
                            return (
                                <motion.button
                                    key={item.id}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => handleNavClick(item.id)}
                                    className={cn(
                                        'relative px-3 py-2 text-sm font-medium transition-colors rounded-xs duration-200 cursor-pointer',
                                        isActive ? 'text-accent-primary' : 'text-text-secondary hover:text-text-primary'
                                    )}
                                >
                                    {item.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavBackground"
                                            className="absolute inset-0 bg-accent-primary/5 border-b border-accent-primary/40 -z-10"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.button>
                            )
                        })}
                    </nav>

                    {/* CTA Connect Trigger */}
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:block"
                    >
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                handleNavClick('contact')
                            }}
                            className="inline-flex items-center gap-1 px-4 py-2 border border-accent-primary text-xs font-semibold uppercase tracking-wider text-accent-primary hover:bg-accent-primary hover:text-bg-primary rounded-lg transition-all duration-300 shadow-xs"
                        >
                            Connect
                            <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                    </motion.div>

                    {/* Mobile Menu Button Links */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 text-text-primary hover:bg-bg-secondary rounded-lg transition-colors cursor-pointer"
                            aria-label="Toggle navigation menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border-primary bg-bg-primary overflow-hidden shadow-lg"
                    >
                        <nav className="flex flex-col px-6 py-4 space-y-1">
                            {NAV_ITEMS.map((item) => {
                                const isActive = activeSection === item.id || (activeSection === '' && item.id === 'home')
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => handleNavClick(item.id)}
                                        className={cn(
                                            'flex items-center justify-between py-3 px-4 text-sm font-semibold rounded-lg text-left transition-colors cursor-pointer',
                                            isActive
                                                ? 'bg-accent-primary/10 text-accent-primary'
                                                : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
                                        )}
                                    >
                                        {item.label}
                                        {isActive && (
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary" />
                                        )}
                                    </button>
                                );
                            })}
                            <div className="pt-4 pb-2 px-4 border-t border-border-primary/50">
                                <a
                                    href="#contact"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        handleNavClick('contact')
                                    }}
                                    className="flex items-center justify-center gap-1.5 py-3 w-full bg-accent-primary text-bg-primary text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm hover:bg-accent-hover transition-colors"
                                >
                                    Direct Inquiry
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
