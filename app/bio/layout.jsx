'use client'
import '@styles/globals.css'
import Header from './header'
import { AnimatePresence, motion } from "framer-motion";

const RootLayout = ({children}) => {
  return (
      <div>
        <Header/>
        <main className='app'>
            {children}
        </main>
      </div>
  )
}

export default RootLayout