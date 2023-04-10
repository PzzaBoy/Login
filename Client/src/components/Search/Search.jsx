import { useState } from "react";
import { students } from "../../utils/get";
import styles from './Search.module.css'

const data = await students();

export const Search = () => {
  const [search, setSearch] = useState('')
  const [students, setStudents] = useState(data)

  const handleSearch = (event) => {
    const inputSearch = event.target.value
    setSearch(inputSearch)
  }

  const handleStudent = () => {
    const searchedStudent = data.filter(student => student.Nombre.toLowerCase().includes(search.toLowerCase()))
    setStudents(searchedStudent)
  }

  return (
    <div>
      <header>
        <input value={search} onChange={handleSearch} type="text" placeholder="Buscar" />
        <button onClick={() => handleStudent()}>buscar</button>
      </header>

      <section className={styles['content-container']}>
        <div className={styles.info}>
          <p>NOMBRE</p>
          <p>APELLIDO</p>
          <p>CEDULA</p>
          <p>CURSOS</p>
        </div>
        {students.map(item => (
          <div className={styles.student} key={item.Id}>
            <p>{item.Nombre}</p>
            <p>{item.Apellido}</p>
            <p>{item.Cedula}</p>
            <p>{item.Cursos}</p>
          </div>))}
      </section>

    </div>)
}