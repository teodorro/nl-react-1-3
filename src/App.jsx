import './css/main.css'
import { Calendar } from './components/Calendar';

function App() {
  const now = new Date(2023, 0, 8)

  return (
    <Calendar date={now} />
  )
}

export default App
