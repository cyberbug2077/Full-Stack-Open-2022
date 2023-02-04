import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons') 
      .then(response => {
        console.log('respons:', response);
        setPersons(response.data)
      })
  } 

  useEffect(hook, [])

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
      axios
        .post('http://localhost:3001/persons', person)
        .then(response => {
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter show={show} handleShow={handleShow} />
      <h3>add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber} 
      />
      <h3>Numbers</h3>
      <Persons persons={persons} show={show}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App