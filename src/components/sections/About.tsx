'use client'

import { motion } from 'framer-motion'
import { RESUME_DATA } from '@/constants/resumeData'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

export default function About() {
    return (
        <section id="about" className="py-16 sm:py-24 bg-bg-secondary/20 border-y border-border-primary/50">
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-start"
                >
                    {/* Left Column Education Table & Icon details */}
                    <div className="lg:col-span-5 flex flex-col space-y-6 sm:space-y-8">
                        <div>
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-primary">
                                01 / Credentials
                            </span>
                            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-text-primary">
                                Academic Foundation
                            </h2>
                            <p className="mt-2 text-sm text-text-muted">
                                Completed secondary, higher secondary, and undergraduate commerce tracks in Gujarat.
                            </p>
                        </div>

                        {/* Mobile Stack (Shown below sm) */}
                        <div className="space-y-4 sm:hidden">
                            {RESUME_DATA.educationHistory.map((edu, idx) => (
                                <div key={idx} className="rounded-lg border border-border-primary bg-bg-primary/60 p-4.5 shadow-2xs">
                                    <div className="flex justify-between items-start gap-2 border-b border-border-primary/40 pb-2 mb-2">
                                        <div>
                                            <span className="font-bold text-text-primary text-xs sm:text-sm tracking-tight leading-tight block">
                                                {edu.degree}
                                            </span>
                                            <span className="block text-[10px] text-text-muted mt-0.5">
                                                {edu.year}
                                            </span>
                                        </div>
                                        <span className="shrink-0 text-xs font-bold text-accent-primary bg-accent-primary/5 px-2 py-0.5 border border-accent-primary/10 rounded-sm">
                                            {edu.score}
                                        </span>
                                    </div>
                                    <div className="text-xs text-text-secondary leading-snug">
                                        {edu.institution}
                                    </div>
                                    <div className="text-[10px] text-text-muted mt-1 leading-snug">
                                        {edu.boardOrUniversity}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Structured Table Layout representing credentials (desktop) */}
                        <div className="hidden sm:block overflow-hidden rounded-lg border border-border-primary bg-bg-primary/50 shadow-xs">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-bg-secondary/80 border-b border-border-primary text-text-secondary">
                                            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                                                Degree & Year
                                            </th>
                                            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider">
                                                Institution & Board
                                            </th>
                                            <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-right">
                                                Score
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border-primary/50 text-sm">
                                        {RESUME_DATA.educationHistory.map((edu, idx) => (
                                            <tr key={idx} className="hover:bg-bg-secondary/40 transition-colors">
                                                <td className="px-4 py-4.5">
                                                    <div className="font-bold text-text-primary text-xs sm:text-sm">
                                                        {edu.degree.split(' | ')[0]}
                                                    </div>
                                                    <div className="text-xs text-text-muted mt-1">{edu.year}</div>
                                                </td>
                                                <td className="px-4 py-4.5">
                                                    <div className="font-medium text-text-secondary text-xs sm:text-sm leading-snug">
                                                        {edu.institution}
                                                    </div>
                                                    <div className="text-[10px] sm:text-xs text-text-muted mt-1 leading-snug">
                                                        {edu.boardOrUniversity}
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4.5 text-right font-semibold text-accent-primary text-xs sm:text-sm">
                                                    {edu.score}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Narrative Summary */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 lg:pt-8 text-left leading-relaxed">
                        <span className="font-sans text-xs font-medium uppercase tracking-widest text-text-muted">
                            Professional Brief
                        </span>

                        <p className="text-base text-text-secondary font-sans leading-relaxed">
                            {RESUME_DATA.summary}
                        </p>

                        <p className="text-base text-text-secondary font-sans leading-relaxed">
                            Equipped with a solid commercial background (Bachelor of Commerce), my focus is on applying structured business methodologies to administrative assistance and legal drafting roles. Having worked directly within a busy advocate's office, I handle document processing, property registry verification, and administrative file tracking with a high degree of speed, precision, and efficiency.
                        </p>

                        {/* Core Values Quote Container */}
                        <div className="relative rounded-lg border-l-4 border-accent-primary bg-bg-secondary/50 p-6 shadow-2xs">
                            <span className="absolute -top-3 left-4 text-xs font-bold uppercase tracking-wider text-accent-primary bg-bg-primary px-2 border border-border-primary/45 rounded-sm">
                                Commitment Principle
                            </span>
                            <blockquote className="font-serif text-lg italic text-text-primary mt-2">
                                "Detail orientation and thorough documentation are the pillars of clean legal and office administration. I am dedicated to maintaining zero-error data entry, strict client confidentiality, and proactive task coordination."
                            </blockquote>
                        </div>

                        {/* 3 Grid mini stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="flex flex-col p-4 rounded-lg bg-bg-primary border border-border-primary text-center">
                                <GraduationCap className="w-5 h-5 text-accent-primary mx-auto mb-2" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                                    Degree
                                </span>
                                <span className="text-sm font-bold text-text-primary mt-1">B.Com</span>
                            </div>
                            <div className="flex flex-col p-4 rounded-lg bg-bg-primary border border-border-primary text-center">
                                <BookOpen className="w-5 h-5 text-accent-primary mx-auto mb-2" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                                    Languages
                                </span>
                                <span className="text-sm font-bold text-text-primary mt-1">Trilingual</span>
                            </div>
                            <div className="flex flex-col p-4 rounded-lg bg-bg-primary border border-border-primary text-center">
                                <Award className="w-5 h-5 text-accent-primary mx-auto mb-2" />
                                <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted">
                                    Focus
                                </span>
                                <span className="text-sm font-bold text-text-primary mt-1">Accuracy</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
