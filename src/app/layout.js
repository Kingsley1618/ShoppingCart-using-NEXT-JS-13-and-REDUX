'use client'
import './globals.css'
import { Rubik } from 'next/font/google'
import Navbar from "@/components/Navbar/Navbar"
import { ReduxProvider } from '@/redux/features/provider'

const rubik = Rubik({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
   
    <html lang="en">

      <body className={rubik.className}>
      <ReduxProvider>
      <Navbar />
        {children}
        </ReduxProvider>
        </body>
       
    </html>
   
  )
}
