import { Header } from './components/Header'
import { Video } from './components/Video'
import { Purpose } from './components/Purpose'
import { Banner } from './components/Banner'
import { Conferences } from './components/Conferences'
import { Footer } from './components/Footer'
import './App.css'
import { NextConferences } from './components/NextConferences'


function App() {
  return (
    <>
      <Header />
      <Video />
      <Purpose />
      <Banner />
      <Conferences />
      <NextConferences />
      <Footer />
    </>
  )
}

export default App
