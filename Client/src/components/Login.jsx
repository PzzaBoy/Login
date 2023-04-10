import { useState } from "react"
import { validatorUser } from "../Hooks/useIsUser"
import { Link } from "react-router-dom"

export const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (event) => {
    const input = event.target.value
    setUsername(input)
  }

  const handlePassword = (event) => {
    const inputPassword = event.target.value
    setPassword(inputPassword)
  }

  return (
    <div>
      <form action="submit">
        <label> Username </label>
        <input onChange={handleUsername} type="text" />
        <label> Password </label>
        <input onChange={handlePassword} type="text" />
        {validatorUser(username, password) === true ? <Link to={'search'}>enviar</Link> : null}
      </form>
    </div>
  )
}