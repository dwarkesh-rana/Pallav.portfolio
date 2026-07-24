'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MessageSquare, Clock, ShieldAlert, Check } from 'lucide-react'

export default function Contact() {
    const [copiedType, setCopiedType] = useState<string | null>(null)

    // Runtime runtime obfuscated contact builders to guard against scrapers
    const handleMailTo = () => {
        const user = 'pallavzapadiya97'
        const domain = 'gmail.com'
        window.location.href = `mailto:${user}@${domain}`
    }

    const handlePhoneCall = () => {
        const code = '+91'
        const number = '9723639597'
        window.location.href = `tel:${code}${number}`
    }

    const handleWhatsAppChat = () => {
        const code = '91'
        const number = '9723639597'
        window.open(`https://wa.me/${code}${number}`, '_blank', 'noopener,noreferrer')
    }

    const handleCopyClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedType(type)
            setTimeout(() => setCopiedType(null), 2500)
        })
    }

    return (
        <section
            id="contact"
            className="py-24 bg-bg-secondary/20 border-y border-border-primary/50 relative"
        >
            <div className="mx-auto max-w-(--container-width-max) px-6 md:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
                    {/* Left Column Description Context */}
                    <div className="lg:col-span-5 flex flex-col space-y-6 text-left">
                        <div>
                            <span className="font-sans text-xs font-bold uppercase tracking-wider text-accent-primary">
                                05 / Connection
                            </span>
                            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">
                                Get In Touch
                            </h2>
                            <p className="mt-2 text-sm text-text-secondary font-sans leading-relaxed">
                                Interested in booking support, employment opportunities, or deed drafting assistance in Gujarat? Select a channel below to initiate communication.
                            </p>
                        </div>

                        {/* Quick stats badges */}
                        <div className="space-y-4 pt-4 border-t border-border-primary/60">
                            <div className="flex items-center gap-3 text-xs text-text-secondary font-sans">
                                <Clock className="w-5 h-5 text-accent-primary shrink-0" />
                                <span>Response Time: Typically under 24 hours</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-text-secondary font-sans">
                                <ShieldAlert className="w-5 h-5 text-accent-primary shrink-0" />
                                <span>Confidentiality: Strict client-chamber secrecy maintained</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column Direct Contact Cards Grid */}
                    <div className="lg:col-span-7 w-full space-y-4">
                        <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4 text-left">
                            Direct Contact Pathways:
                        </h3>

                        {/* Email Card Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg border border-border-primary bg-bg-primary shadow-2xs hover:border-accent-primary/20 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-primary/5 rounded-md border border-accent-primary/10">
                                    <Mail className="w-5 h-5 text-accent-primary" />
                                </div>
                                <div className="text-left">
                                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">
                                        Email Address
                                    </span>
                                    <div className="font-serif text-sm sm:text-base font-bold text-text-primary mt-0.5">
                                        pallavzapadiya97@gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                    onClick={handleMailTo}
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-accent-primary hover:bg-accent-hover text-bg-primary text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                                >
                                    Send Mail
                                </button>
                                <button
                                    onClick={() => handleCopyClipboard('pallavzapadiya97@gmail.com', 'email')}
                                    className="inline-flex items-center justify-center p-2.5 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary rounded-md transition-colors cursor-pointer"
                                    aria-label="Copy email address"
                                >
                                    {copiedType === 'email' ? (
                                        <Check className="w-4 h-4 text-color-success" />
                                    ) : (
                                        <span className="text-xs uppercase font-extrabold tracking-wider px-1">Copy</span>
                                    )}
                                </button>
                            </div>
                        </motion.div>

                        {/* WhatsApp Card Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg border border-border-primary bg-bg-primary shadow-2xs hover:border-accent-primary/20 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-primary/5 rounded-md border border-accent-primary/10">
                                    <MessageSquare className="w-5 h-5 text-accent-primary" />
                                </div>
                                <div className="text-left">
                                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">
                                        WhatsApp Message
                                    </span>
                                    <div className="font-serif text-sm sm:text-base font-bold text-text-primary mt-0.5">
                                        +91 97236 39597 (Quick-chat)
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                    onClick={handleWhatsAppChat}
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-accent-primary hover:bg-accent-hover text-bg-primary text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                                >
                                    Open Chat
                                </button>
                                <button
                                    onClick={() => handleCopyClipboard('+919723639597', 'wa')}
                                    className="inline-flex items-center justify-center p-2.5 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary rounded-md transition-colors cursor-pointer"
                                    aria-label="Copy whatsapp number"
                                >
                                    {copiedType === 'wa' ? (
                                        <Check className="w-4 h-4 text-color-success" />
                                    ) : (
                                        <span className="text-xs uppercase font-extrabold tracking-wider px-1">Copy</span>
                                    )}
                                </button>
                            </div>
                        </motion.div>

                        {/* Phone Card Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-lg border border-border-primary bg-bg-primary shadow-2xs hover:border-accent-primary/20 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-accent-primary/5 rounded-md border border-accent-primary/10">
                                    <Phone className="w-5 h-5 text-accent-primary" />
                                </div>
                                <div className="text-left">
                                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-text-muted">
                                        Phone Network
                                    </span>
                                    <div className="font-serif text-sm sm:text-base font-bold text-text-primary mt-0.5">
                                        +91 97236 39597 (Call direct)
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-2 w-full sm:w-auto">
                                <button
                                    onClick={handlePhoneCall}
                                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-accent-primary hover:bg-accent-hover text-bg-primary text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                                >
                                    Place Call
                                </button>
                                <button
                                    onClick={() => handleCopyClipboard('+919723639597', 'phone')}
                                    className="inline-flex items-center justify-center p-2.5 border border-border-primary hover:border-accent-primary/50 text-text-secondary hover:text-text-primary rounded-md transition-colors cursor-pointer"
                                    aria-label="Copy phone number"
                                >
                                    {copiedType === 'phone' ? (
                                        <Check className="w-4 h-4 text-color-success" />
                                    ) : (
                                        <span className="text-xs uppercase font-extrabold tracking-wider px-1">Copy</span>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
