'use client'

import { motion } from 'framer-motion'
import { RESUME_DATA } from '@/constants/resumeData'
import { Briefcase, Calendar, Building2, FileText, CheckCircle2 } from 'lucide-react'

// Simple helper to calculate duration text helper if needed, but we use resume data June 2024 – December 2025 directly.

export default function Experience() {
    return (
        <section id="experience" className="py-16 sm:py-24 bg-bg-primary">
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                {/* Header Block Title */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    className="text-left mb-10 sm:mb-16"
                >
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-primary">
                        02 / History
                    </span>
                    <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                        Professional Timeline
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary max-w-xl font-sans">
                        A chronological summary of office assistance, document preparation operations, and file archival systems under Advocate Kamalesh Kokadiya.
                    </p>
                </motion.div>

                {/* Timeline Frame */}
                <div className="relative max-w-3xl mx-auto md:mx-0">
                    {/* Vertical central timeline line */}
                    <div className="absolute left-4 md:left-[119px] top-0 bottom-0 w-[1px] bg-border-primary/80" />

                    {/* Job timeline card entries */}
                    {RESUME_DATA.workHistory.map((work, idx) => (
                        <div key={idx} className="relative flex flex-col md:flex-row items-start md:space-x-8 mb-12">
                            {/* Chronological Date Block - Column Left (for Desktop) */}
                            <div className="hidden md:block w-24 text-right pr-2 pt-1">
                                <span className="font-sans text-[10px] uppercase font-bold tracking-wider text-text-muted select-none">
                                    {work.duration.split(' – ')[0]}
                                </span>
                                <div className="font-sans text-xs text-text-muted mt-0.5 select-none">
                                    to {work.duration.split(' – ')[1]?.split(' (')[0]}
                                </div>
                            </div>

                            {/* Central node pin point */}
                            <div className="absolute left-3 md:left-[114px] top-7 md:top-1.5 w-2.5 h-2.5 bg-accent-primary rounded-full border border-bg-primary shadow-xs z-10" />

                            {/* Main detail content block (Column Right) */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-10% 0px' }}
                                transition={{ duration: 0.5 }}
                                className="w-full pl-8 md:pl-2 rounded-lg border border-border-primary bg-bg-secondary/20 p-6 md:p-8 shadow-2xs relative hover:border-accent-primary/20 transition-colors"
                            >
                                {/* Date indicator for mobile viewports */}
                                <div className="md:hidden flex items-center gap-1.5 text-xs text-text-muted font-bold uppercase tracking-wider mb-3">
                                    <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                                    <span>{work.duration}</span>
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-border-primary/50 pb-4 mb-6">
                                    <div>
                                        <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary">
                                            {work.role}
                                        </h3>
                                        <div className="inline-flex items-center gap-1.5 text-sm text-text-secondary mt-1 tracking-wide uppercase font-semibold">
                                            <Building2 className="w-4 h-4 text-accent-primary shrink-0" />
                                            <span>{work.organization}</span>
                                        </div>
                                    </div>

                                    <span className="sm:text-right font-sans text-xs text-accent-primary font-bold uppercase tracking-wider px-2.5 py-1 bg-accent-primary/5 border border-accent-primary/10 rounded-sm">
                                        June 2024 – Dec 2025
                                    </span>
                                </div>

                                {/* Indented tasks list */}
                                <div className="space-y-4 text-left">
                                    {work.responsibilities.map((resp, rIdx) => (
                                        <div
                                            key={rIdx}
                                            className="flex items-start gap-3.5 text-sm text-text-secondary leading-relaxed font-sans"
                                        >
                                            <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                                            <span>{resp}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Credentials Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col md:flex-row items-center gap-4 bg-bg-secondary/40 border border-border-primary rounded-lg p-6 max-w-3xl"
                >
                    <Briefcase className="w-8 h-8 text-accent-primary shrink-0" />
                    <div className="text-center md:text-left flex-1">
                        <h4 className="font-serif text-sm font-semibold text-text-primary">
                            Verify Employment Authenticity
                        </h4>
                        <p className="text-xs text-text-muted mt-0.5">
                            Available via the official signed PDFs directly. Connect for reference queries.
                        </p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <a
                            href="/resume_pallav_premium.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary text-xs font-bold uppercase tracking-wider rounded-lg bg-bg-primary transition-all duration-300"
                        >
                            <FileText className="w-4 h-4 text-accent-primary" />
                            Verbatim PDF
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
