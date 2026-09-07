import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TruckPreloader from './components/TruckPreloader'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Warehousing from './pages/Warehousing'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import { useHashRoute } from './hooks/useHashRoute'
import { GlobalProvider } from './lib/cms/GlobalContext'

function App() {
  const route = useHashRoute()

  return (
    <GlobalProvider>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <TruckPreloader />
      <Header />
      <main className="site-main" id="main-content">
        {route === 'about' ? (
          <About />
        ) : route === 'contact' ? (
          <Contact />
        ) : route === 'services' ? (
          <Services />
        ) : route === 'services/warehousing' ? (
          <Warehousing />
        ) : route === 'blog' ? (
          <BlogList />
        ) : route.startsWith('blog/') ? (
          <BlogPost slug={route.slice('blog/'.length)} />
        ) : (
          <Home />
        )}
      </main>
      <Footer />
    </GlobalProvider>
  )
}

export default App
