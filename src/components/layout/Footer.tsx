'use client'

import { motion } from 'framer-motion'
import { ArrowUp, FileText, Heart } from 'lucide-react'
import { RESUME_DATA } from '@/constants/resumeData'

export default function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const handleNavClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            const offset = 80
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
        <footer className="bg-bg-primary border-t border-border-primary/60 py-12">
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-border-primary/50">
                    {/* Brand Signature */}
                    <div className="text-left">
                        <span className="font-serif text-base font-extrabold tracking-tight text-text-primary">
                            {RESUME_DATA.name.toUpperCase()}
                        </span>
                        <p className="text-xs text-text-muted mt-1 leading-relaxed">
                            Office Assistant & Legal Document Writer
                        </p>
                    </div>

                    {/* Quick link index mirrors */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm justify-start">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, 'home')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            Vitals
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => handleNavClick(e, 'about')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            onClick={(e) => handleNavClick(e, 'experience')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            Experience
                        </a>
                        <a
                            href="#skills"
                            onClick={(e) => handleNavClick(e, 'skills')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            Skills
                        </a>
                        <a
                            href="#expertise"
                            onClick={(e) => handleNavClick(e, 'expertise')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            Expertise
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleNavClick(e, 'contact')}
                            className="text-text-secondary hover:text-accent-primary transition-colors font-medium"
                        >
                            Contact
                        </a>
                    </nav>

                    {/* Direct File Locks Download Link */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="/resume_pallav_premium.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-primary hover:border-accent-primary/50 text-text-muted hover:text-text-primary text-xs font-semibold uppercase tracking-wider rounded-md bg-bg-secondary/40 transition-colors"
                        >
                            <FileText className="w-3.5 h-3.5 text-accent-primary" />
                            Premium PDF
                        </a>
                        <a
                            href="/resume_pallav_ats.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-border-primary hover:border-accent-primary/50 text-text-muted hover:text-text-primary text-xs font-semibold uppercase tracking-wider rounded-md bg-bg-secondary/40 transition-colors"
                        >
                            <FileText className="w-3.5 h-3.5 text-text-muted" />
                            ATS PDF
                        </a>
                    </div>
                </div>

                {/* Bottom layer text */}
                <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-xs text-text-muted text-left">
                        <span>&copy; {new Date().getFullYear()} {RESUME_DATA.name}. All rights reserved under local jurisdiction.</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-[10px] text-text-muted inline-flex items-center gap-1">
                            Crafted for clean administration
                            <Heart className="w-3 h-3 text-accent-primary fill-accent-primary" />
                        </span>
                        <button
                            onClick={handleScrollToTop}
                            className="p-2 border border-border-primary hover:border-accent-primary/50 text-text-muted hover:text-text-primary rounded-md bg-bg-secondary/20 hover:bg-bg-secondary transition-all cursor-pointer"
                            aria-label="Scroll back to top of page"
                        >
                            <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
