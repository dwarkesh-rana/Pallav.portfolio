'use client'

import { motion } from 'framer-motion'
import { RESUME_DATA } from '@/constants/resumeData'
import { MapPin, FileText, ArrowRight, CheckCircle2 } from 'lucide-react'

// Animations parameters
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
        },
    },
}

export default function Hero() {
    const handleScrollToContact = (e: React.MouseEvent) => {
        e.preventDefault()
        const contactSection = document.getElementById('contact')
        if (contactSection) {
            const offset = 80
            const bodyRect = document.body.getBoundingClientRect().top
            const elementRect = contactSection.getBoundingClientRect().top
            const elementPosition = elementRect - bodyRect
            const offsetPosition = elementPosition - offset

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            })
        }
    }

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden bg-bg-primary"
        >
            {/* Background Micro Grid Layer (Tailwind pure CSS) */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-bg-tertiary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-bg-tertiary)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

            <div className="mx-auto max-w-(--container-width-max) w-full px-6 md:px-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 items-center"
                >
                    {/* Left Column Description Stack */}
                    <div className="lg:col-span-7 flex flex-col items-start text-left">
                        {/* Availability status tag */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-primary/10 border border-accent-primary/20 text-accent-primary rounded-full text-xs font-semibold tracking-wide"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary"></span>
                            </span>
                            AVAILABLE FOR NEW ROLES
                        </motion.div>

                        {/* Client Display Name */}
                        <motion.h1
                            variants={itemVariants}
                            className="mt-5 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary leading-[1.1]"
                        >
                            Hi, I'm <span className="text-accent-primary">{RESUME_DATA.name}</span>
                        </motion.h1>

                        {/* List of Titles */}
                        <motion.p
                            variants={itemVariants}
                            className="mt-3.5 font-sans text-base sm:text-xl font-semibold tracking-wide text-text-secondary uppercase"
                        >
                            {RESUME_DATA.titles.join(' \u2022 ')}
                        </motion.p>

                        {/* Short Bio Hook */}
                        <motion.p
                            variants={itemVariants}
                            className="mt-5 max-w-xl text-sm sm:text-base text-text-secondary leading-relaxed font-sans"
                        >
                            Commerce graduate specializing in legal document Drafting, title search verifications, property registries file compilation, and professional assistant support in Bhavnagar, Gujarat.
                        </motion.p>

                        {/* Location Tag */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-5 inline-flex items-center gap-1.5 text-xs sm:text-sm text-text-muted"
                        >
                            <MapPin className="w-4 h-4 text-accent-primary" />
                            <span>{RESUME_DATA.location.city}, {RESUME_DATA.location.state}</span>
                        </motion.div>

                        {/* Action Badges Triggers */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
                        >
                            <a
                                href="#contact"
                                onClick={handleScrollToContact}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-accent-primary hover:bg-accent-hover text-bg-primary text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                            >
                                Inquire Directly
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>

                            {/* PDF Credentials split */}
                            <div className="flex gap-2 w-full sm:w-auto">
                                <a
                                    href="/resume_pallav_premium.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-3 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-lg bg-bg-secondary/30 transition-all duration-300"
                                >
                                    <FileText className="w-3.5 h-3.5 text-accent-primary" />
                                    Premium PDF
                                </a>
                                <a
                                    href="/resume_pallav_ats.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-3 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary text-[11px] sm:text-xs font-semibold uppercase tracking-wider rounded-lg bg-bg-secondary/30 transition-all duration-300"
                                >
                                    <FileText className="w-3.5 h-3.5 text-text-muted" />
                                    ATS PDF
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column Vitial Cards Board */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                        <motion.div
                            variants={itemVariants}
                            className="relative w-full max-w-sm rounded-lg border border-border-primary/80 bg-bg-secondary/40 p-6 md:p-8 shadow-sm backdrop-blur-xs overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-accent-primary" />

                            <h2 className="font-serif text-xl font-bold tracking-tight text-text-primary mb-6">
                                Client Summary Card
                            </h2>

                            <div className="space-y-4 sm:space-y-5">
                                {/* Years Experience Vitals */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-3.5 border-b border-border-primary/50 gap-0.5 sm:gap-3 text-left">
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider shrink-0">
                                        Experience
                                    </span>
                                    <span className="text-[13px] sm:text-sm font-bold text-text-primary sm:text-right">
                                        1.5+ Years under Advocate
                                    </span>
                                </div>

                                {/* Primary Work Sector */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-3.5 border-b border-border-primary/50 gap-0.5 sm:gap-3 text-left">
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider shrink-0">
                                        Specialization
                                    </span>
                                    <span className="text-[13px] sm:text-sm font-bold text-text-primary sm:text-right">
                                        Legal & Property Docs
                                    </span>
                                </div>

                                {/* Qualification Base */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start pb-3.5 border-b border-border-primary/50 gap-0.5 sm:gap-3 text-left">
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider shrink-0">
                                        Qualification
                                    </span>
                                    <span className="text-[13px] sm:text-sm font-bold text-text-primary sm:text-right">
                                        B.Com (Commerce)
                                    </span>
                                </div>

                                {/* Region */}
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-0.5 sm:gap-3 text-left">
                                    <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider shrink-0">
                                        Base location
                                    </span>
                                    <span className="text-[13px] sm:text-sm font-bold text-accent-primary sm:text-right">
                                        Bhavnagar, Gujarat
                                    </span>
                                </div>
                            </div>

                            {/* Bullet details items */}
                            <div className="mt-8 pt-6 border-t border-border-primary/60 space-y-3">
                                <div className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                                    <span>Drafted Sale Deeds, Affidavits & Agreements</span>
                                </div>
                                <div className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                                    <span>Conducted Land Ownership Title Inspections</span>
                                </div>
                                <div className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                                    <span>Tally ERP Entry & General Bookkeeping</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
