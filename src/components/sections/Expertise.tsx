'use client'

import { motion } from 'framer-motion'
import { FileEdit, Search, ClipboardCheck, ArrowRight } from 'lucide-react'

// Workflows detailing the exact operations
const WORKFLOWS = [
    {
        step: 'Process 01',
        title: 'Sale Deed Drafting Support',
        description:
            'Assisting in the structuring, drafting, and reviewing of Sale Deeds, lease agreements, affidavits, and notary bonds. Ensuring proper legal terms and formatting match property rules.',
        icon: <FileEdit className="w-6 h-6 text-accent-primary" />,
        bullets: [
            'Document clause review',
            'Affidavit drafting',
            'Sale agreement layout checks',
            'Client data validation',
        ],
    },
    {
        step: 'Process 02',
        title: 'Title Ownership Verification',
        description:
            'Performing title searches by inspecting historical registry archives, index records, and ownership logs to confirm clean titles for secure transactions.',
        icon: <Search className="w-6 h-6 text-accent-primary" />,
        bullets: [
            'Registry searches',
            'Ownership log audit',
            'Index register inspection',
            'Encumbrance reviews',
        ],
    },
    {
        step: 'Process 03',
        title: 'Registration Execution',
        description:
            'Coordinating client paperwork, gathering credentials, and preparing scheduling logs to submit files to local offices for timely stamp validations.',
        icon: <ClipboardCheck className="w-6 h-6 text-accent-primary" />,
        bullets: [
            'Client liaison',
            'Registry coordinator support',
            'Stamp validation prep',
            'Appointment logging',
        ],
    },
]

export default function Expertise() {
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
        <section id="expertise" className="py-16 sm:py-24 bg-bg-primary">
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    className="text-left mb-10 sm:mb-16"
                >
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-primary">
                        04 / Workflow
                    </span>
                    <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                        Office & Legal Specializations
                    </h2>
                    <p className="mt-2 text-sm text-text-secondary max-w-xl font-sans">
                        Detailed breakdown of practical, hands-on tasks managed during property registrations and administrative support.
                    </p>
                </motion.div>

                {/* 3-Column Card Layout */}
                <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
                    {WORKFLOWS.map((flow, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative flex flex-col rounded-lg border border-border-primary/80 bg-bg-secondary/20 p-6 md:p-8 hover:border-accent-primary/20 hover:shadow-xs transition-all duration-300"
                        >
                            {/* Step indicator block */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-sans text-xs font-extrabold tracking-wider text-accent-primary bg-accent-primary/10 px-2.5 py-1 rounded-sm">
                                    {flow.step}
                                </span>
                                <div className="p-2 bg-bg-primary rounded-md border border-border-primary/50">
                                    {flow.icon}
                                </div>
                            </div>

                            {/* Title and description */}
                            <h3 className="font-serif text-lg md:text-xl font-bold text-text-primary mb-3">
                                {flow.title}
                            </h3>

                            <p className="font-sans text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                                {flow.description}
                            </p>

                            {/* Workflow Details Checklist */}
                            <div className="mt-6 pt-6 border-t border-border-primary/50">
                                <h4 className="font-sans text-xs font-bold uppercase tracking-wider text-text-primary mb-3">
                                    Scope of Execution:
                                </h4>
                                <ul className="space-y-2">
                                    {flow.bullets.map((bullet, bIdx) => (
                                        <li key={bIdx} className="flex items-center gap-2 text-xs text-text-secondary font-sans">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary shrink-0" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Gateway Helper Action */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#contact"
                        onClick={handleScrollToContact}
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-primary group hover:text-accent-hover transition-colors cursor-pointer"
                    >
                        Need help with custom deed preparation? Let's connect
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
