import './App.css'
import Student from './components/StudentApp';

const StudentDetails = [
  {
    studentName : "Ansi",
    clgName : "Shree Saurastra College of MGT & Computer Science",
    age : 18,
    gender : "Female"
  },
  {
    studentName : "Rajal",
    clgName : "Shree Saurastra College of MGT & Computer Science",
    age : 18,
    gender : "Female"
  },
  {
    studentName : "Shruti",
    clgName : "Shree Saurastra College of MGT & Computer Science",
    age : 18,
    gender : "Female"
  },
  {
    studentName : "Hiral",
    clgName : "Shree Saurastra College of MGT & Computer Science",
    age : 18,
    gender : "Female"
  },
  {
    studentName : "Tina",
    clgName : "Shree Saurastra College of MGT & Computer Science",
    age : 18,
    gender : "Female"
  }
];

function App() {

  return (
    <>
      <Student studentInformation={StudentDetails}/>
    </>
  )
}

export default App
