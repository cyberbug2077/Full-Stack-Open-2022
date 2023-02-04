const Persons = ({persons, show, handleDelete}) => {
  return (
    <ul> 
    {persons
      .filter(item => item? item.name.toLowerCase().includes(show.toLowerCase()) : true)
      .map(person => 
          <li key={person.name}>
            {person.name} 
            {person.number} 
            <button onClick={handleDelete(person)}>delete</button>
          </li>
      )
    }
    </ul>
  )
}

export default Persons