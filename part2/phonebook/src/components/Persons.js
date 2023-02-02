const Persons = ({persons, show}) => {
  return (
    <div> 
     {persons
      .filter(item => item? item.name.toLowerCase().includes(show.toLowerCase()) : true)
      .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}

export default Persons