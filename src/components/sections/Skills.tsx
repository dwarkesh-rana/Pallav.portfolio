'use client'

import { motion } from 'framer-motion'
import { RESUME_DATA } from '@/constants/resumeData'
import { Monitor, Scale, FileSpreadsheet, Calculator, Check, ShieldCheck } from 'lucide-react'

// Icon selector based on category type
const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
        case 'office software':
            return <Monitor className="w-5 h-5 text-accent-primary" />
        case 'legal documentation':
            return <Scale className="w-5 h-5 text-accent-primary" />
        case 'administrative skills':
            return <FileSpreadsheet className="w-5 h-5 text-accent-primary" />
        case 'accounting':
            return <Calculator className="w-5 h-5 text-accent-primary" />
        default:
            return <Scale className="w-5 h-5 text-accent-primary" />
    }
}

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-bg-secondary/20 border-y border-border-primary/50">
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    className="text-left mb-16"
                >
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-primary">
                        03 / Profile
                    </span>
                    <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                        Capabilities & Systems
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary max-w-xl font-sans">
                        A comprehensive matrix of office software, legal documentation drafting, databases entry, and accounting modules.
                    </p>
                </motion.div>

                {/* 4-Column Grid for Technical/Functional Capabilities */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {RESUME_DATA.skills.technical.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ y: -4 }}
                            className="relative flex flex-col rounded-lg border border-border-primary bg-bg-primary p-6 shadow-2xs hover:shadow-sm hover:border-accent-primary/20 transition-all duration-300"
                        >
                            {/* Card top banner with icon */}
                            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-border-primary/50">
                                <div className="p-2 bg-accent-primary/5 rounded-md">
                                    {getCategoryIcon(skillGroup.category)}
                                </div>
                                <h3 className="font-serif text-sm font-bold text-text-primary">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            {/* Items listing tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {skillGroup.items.map((item, itemIdx) => (
                                    <span
                                        key={itemIdx}
                                        className="inline-flex items-center px-2.5 py-1 text-xs text-text-secondary bg-bg-secondary/40 border border-border-primary/30 rounded-md font-sans"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Outer Split Row: Soft Strengths & Languages */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
                    {/* Left Block: Soft Strengths Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-8 rounded-lg border border-border-primary bg-bg-primary p-6 md:p-8"
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <ShieldCheck className="w-5 h-5 text-accent-primary" />
                            <h3 className="font-serif text-lg font-bold text-text-primary">
                                Operational Strengths & Principles
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {RESUME_DATA.skills.soft.map((strength, sIdx) => (
                                <div
                                    key={sIdx}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-bg-secondary/20 border border-border-primary/50 text-sm text-text-secondary hover:border-accent-primary/10 transition-colors"
                                >
                                    <span className="p-1 bg-accent-primary/10 rounded-full shrink-0">
                                        <Check className="w-3.5 h-3.5 text-accent-primary" />
                                    </span>
                                    <span className="font-medium font-sans">{strength}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Block: Languages Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-4 rounded-lg border border-border-primary bg-bg-primary p-6 md:p-8"
                    >
                        <h3 className="font-serif text-lg font-bold text-text-primary mb-6">
                            Bilingual Fluency
                        </h3>

                        <div className="space-y-4">
                            {RESUME_DATA.languages.map((lang, lIdx) => (
                                <div
                                    key={lIdx}
                                    className="flex items-center justify-between pb-3 border-b border-border-primary/50 last:border-0 last:pb-0"
                                >
                                    <span className="font-serif text-sm font-semibold text-text-primary">
                                        {lang.name}
                                    </span>
                                    <span className="font-sans text-xs text-accent-primary font-bold uppercase tracking-wider px-2 py-0.5 bg-accent-primary/5 border border-accent-primary/10 rounded-md">
                                        {lang.fluency}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
