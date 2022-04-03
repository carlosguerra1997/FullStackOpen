import { Anecdotes } from './components/anecdotes/Anecdotes';
import { Courses } from './components/courseInfo/Courses'
import { Unicafe } from './components/unicafe/Unicafe';

function App() {
  return (
    <div>
      <Courses />
      <Unicafe />
      <Anecdotes />
    </div>
  )
}

export default App;
