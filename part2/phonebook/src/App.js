import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [show, setShow] = useState('')

  const handleNewName = event => setNewName(event.target.value)
  const handleNewNumber = event => setNewNumber(event.target.value)
  const handleShow = event => setShow(event.target.value)

  const loadPersons = () => {
    personService
      .getAll()
      .then(initPersons => {
        setPersons(initPersons)
      })
  } 

  const removePerson = (person) => 
    () => {
      if(window.confirm(`Delete ${person.name} ?`)){
         personService
           .remove(person.id)
           .then(() => {
             loadPersons()
           })
      }
    }

  const addPerson = event => {
    event.preventDefault()
    const person = {name: newName,
                    number: newNumber}
    if(persons.filter(item => item.name === person.name).length > 0 ) {
      if(window.confirm(`${newName} is already added to phonebook, repalace the old number with the new one? `)) {
        personService
          .update(persons.find(p => p.name === person.name).id, person)
          .then(modifiedPerson => {
            setPersons(persons.map(p => p.id === modifiedPerson.id ? person : p))
            setNewName('') 
            setNewNumber('')
          })
      }
    } else {
      personService
        .creat(person)
        .then(newPerson => {
          setPersons(persons.concat(newPerson))
          setNewName('') 
          setNewNumber('')
        })
    }
  }

  useEffect(loadPersons, [])

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
      <Persons persons={persons} show={show} handleDelete={removePerson}/>
      <div>debug: {newName}</div>
    </div>
  )
}

export default App