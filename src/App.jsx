import { Footer } from './components/footer'
import { Header } from './components/Header'
import { AppNav } from './routes/AppNav'

function App() {
  return (
    <div className="App">
      <Header/>
      <AppNav/>
      <Footer/>
    </div>
  )
}

export default App