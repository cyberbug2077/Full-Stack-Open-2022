import { useState } from 'react'
const Persons = ({persons}) => {
  return (
    <div> 
     {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNewName = event => setNewName(event.target.value)
  const handleNewNumber = event => setNewNumber(event.target.value)

  const addPerson = event => {
    event.preventDefault()
    const person = {name: newName,
                    number: newNumber}
    if(persons.filter(item => item.name === person.name).length > 0 ) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(persons.concat(person))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                    value={newName} 
                    onChange={handleNewName}/>
        </div>
        <div>
          number: <input
                    value={newNumber} 
                    onChange={handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <Persons persons={persons} />
      ...
      <div>debug: {newName}</div>
    </div>
  )
}

export default App