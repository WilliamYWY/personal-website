import '@styles/globals.css'
import Header from './header'

const BlogLayout = ({children}) => {
  return (
    <div>
      <Header/>
      <main className='app'>
          {children}
      </main>
    </div>
  )
}

export default BlogLayout