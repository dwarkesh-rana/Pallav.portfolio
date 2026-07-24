import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
})

const lora = Lora({
  variable: '--font-serif',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pallav Nileshbhai Zapadiya | Office & Legal Documentation Assistant',
  description:
    'Professional portfolio of Pallav Nileshbhai Zapadiya: Office Assistant, Legal Documentation Assistant, and Administrative Professional in Bhavnagar, Gujarat.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-bg-primary text-text-primary transition-colors duration-200">
        {children}
      </body>
    </html>
  )
}
