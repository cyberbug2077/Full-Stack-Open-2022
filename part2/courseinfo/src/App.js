const Header = ({ header }) => {
  console.log(header);
  return (
    <h1>{header}</h1>
  )
}

const Part = ({ part }) => {
  console.log(part);
  return (
    <>
      <p>{part.name}  {part.exercises}</p>
    </>
  )
}

const Content = ({ content }) => {
  console.log(content);
  return (
    <>
      {content.map(part => <Part key={part.id} part={part} />)}
    </>
  )
}

const SumOfEX = ({ content }) => {
  let total = content.reduce((p, c) => p + c.exercises, 0)
  return (
    <>
      <p><strong>total of {total} exercises </strong></p>
    </>
  )
}

const Course = ({ course }) => {
  console.log(course);
  return (
    <>
      <Header header={course.name} />
      <Content content={course.parts} />
      <SumOfEX content={course.parts} />
    </>
  )
}

const Courses = ({ courses }) => {
  console.log(courses);
  return (
    <>
      {courses.map(part => <Course key={part.id} course={part} />)}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Courses courses={courses} />
}

export default App