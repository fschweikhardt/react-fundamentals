// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'



function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // const refsForm = React.useRef(null)

  const [ alert, setAlert ] = React.useState(null)
  const [ newName, setNewName ] = React.useState([])
  
  const handleSubmit = event => {
    event.preventDefault()
    
    // const { value } = event.target.elements.username
    onSubmitUsername(newName)

    // const { value } = refsForm.current
    // onSubmitUsername(value)

    // setName(value.toLowerCase())
    
  }

  const checkInput = event => {  
    const { value } = event.target
    const isValid = (value === value.toLowerCase())
    setAlert(isValid ? null : `no upper case!`)
    setNewName(event.target.value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type="text" id='username' onChange={checkInput} value={newName}/>
      </div>
      <button type="submit">Submit</button>
      { alert }
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
