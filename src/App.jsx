import './css/main.css'
import { Calendar } from './components/Calendar';

function App() {
  const now = new Date(2013, 2, 4)

  return (
    <Calendar date={now} />
  )
}

export default App
