
import './globals.css'
import { Inter } from 'next/font/google'
import { QuioscoProvider } from "../context/QuioscoProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Café - Quioscoapp',
  description: 'Generated by create next app',
}



export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <QuioscoProvider>
            {children}
        </QuioscoProvider>  
      </body>
    </html>
  )
}
