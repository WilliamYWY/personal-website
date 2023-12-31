import '@styles/globals.css'

export const metadata = {
    title: "William Yang",
    description: 'Personal Website'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <main className='app'>
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout