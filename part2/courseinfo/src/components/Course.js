const Header = ({ header }) => {
  console.log(header);
  return (
    <h2>{header}</h2>
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

export default Course