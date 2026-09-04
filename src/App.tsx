import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Warehousing from './pages/Warehousing'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'
import { useHashRoute } from './hooks/useHashRoute'
import { getPostBySlug } from './data/blogPosts'

const SITE_NAME = 'ardle'

function pageTitle(route: string) {
  if (route === 'about') return 'About Us'
  if (route === 'contact') return 'Contact Us'
  if (route === 'services') return 'Services'
  if (route === 'services/warehousing') return 'Warehousing & Distribution'
  if (route === 'blog') return 'Blog'
  if (route.startsWith('blog/')) {
    const post = getPostBySlug(route.slice('blog/'.length))
    return post ? post.title : 'Blog'
  }
  return 'Freight, Warehousing & Logistics'
}

function App() {
  const route = useHashRoute()

  useEffect(() => {
    document.title = `${SITE_NAME} — ${pageTitle(route)}`
  }, [route])

  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default App
