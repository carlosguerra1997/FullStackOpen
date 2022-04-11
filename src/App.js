import { Anecdotes } from './components/part1/anecdotes/Anecdotes';
import { ContactBook } from './components/part2/tlfGuide/ContactBook';
import { CountriesMenu } from './components/part2/Countries/CountriesMenu';
import { Courses } from './components/part1/courseInfo/Courses'
import { CoursePart2 } from './components/part2/CoursePart2/CoursePart2';
import { Unicafe } from './components/part1/unicafe/Unicafe';

function App() {
  return (
    <div>
      { /*
        <Courses />
        <Unicafe />
        <Anecdotes />
        <CoursePart2 />
        <CountriesMenu />
        */
      }
      <ContactBook />
    </div>
  )
}

export default App;
