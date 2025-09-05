import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--body-font'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--heading-font'
})

export const metadata = {
  title: 'DreamForge - AI Dream Generator',
  description: 'Describe your dream, let AI transform it into art.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen text-slate-800 antialiased">{children}</body>
    </html>
  )
}