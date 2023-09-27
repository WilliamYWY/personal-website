import '@styles/globals.css'
import Header from './header'

export const metadata = {
    title: "Promptopia",
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({children}) => {
  return (
    <html lang='en' className='scroll-smooth'>
      <body>
        <Header/>
        <main className='app'>
            {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout