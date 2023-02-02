import { useState } from 'react'
const Persons = ({persons, show}) => {
  return (
    <div> 
     {persons
      .filter(item => item? item.name.toLowerCase().includes(show.toLowerCase()) : true)
      .map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    </div>
  )
}


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  const handleNewName = event => setNewName(event.target.value)
  const handleNewNumber = event => setNewNumber(event.target.value)
  const handleShow = event => setShow(event.target.value)

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
      <form>
        <div>
          filter shown with: 
          <input 
            value={show} 
            onChange={handleShow}/>
        </div>
      </form>

      <h2>add a new</h2>
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
        <Persons persons={persons} show={show}/>
      ...
      <div>debug: {newName}</div>
    </div>
  )
}

export default App