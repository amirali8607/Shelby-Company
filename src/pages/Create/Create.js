import './Create.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist'
import { useTheme } from '../../hooks/useTheme'
import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore'
export default function Create() {
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [teacher,setTeacher] = useState('')
  const [age,setAge] = useState('')
  const [job,setJob] = useState('')
  const [device,setDevice] = useState([])
  const [movie,setMovie] = useState([])
  const [game,setGame] = useState([])
  const navigate = useNavigate()
  const {color} = useTheme()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const doc = {firstname,lastname,job,movie:[movie],age:age+' years ',teacher,game:[game],device:[device]}
    try {
      const ref = collection(db,'shelbyID')
      await addDoc(ref,doc)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  // const handleAdd = (e) => {
  //   e.preventDefault()
  //   if(lastname && !movie.includes(lastname)){
  //     setMovie(prevMovie => [...prevMovie,lastname])
  //   }
  //   setLastname('')
  // }
  return (
    <div className="create">
      <h2 className="page-title">Add a new soldier</h2>
      <form onSubmit={handleSubmit}>
        <label >
          <span>Soldier Firstname: </span>
          <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} required/>
        </label>
        <label >
          <span>Soldier Lastname: </span>
          <div className='ingredients'>
            <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname}/>
          </div>
        </label>
        <label>
          <span>Soldier Job: </span>
          <input onChange={(e) => setJob(e.target.value)} value={job} required/>
        </label>
        <label>
          <span>Soldier Movie Favorite: </span>
          <input onChange={(e) => setMovie(e.target.value)} value={movie} required/>
        </label>
        <label >
          <span>Soldier Age(y): </span>
          <input type="number" onChange={(e) => setAge(e.target.value)} value={age} required/>
        </label>
        <label >
          <span>Soldier Game Favorite: </span>
          <input type="text" onChange={(e) => setGame(e.target.value)} value={game} required/>
        </label>
        <label >
          <span>Soldier Device: </span>
          <input type="text" onChange={(e) => setDevice(e.target.value)} value={device} required/>
        </label>
        <label >
          <span>Soldier Teacher Favorite: </span>
          <input type="text" onChange={(e) => setTeacher(e.target.value)} value={teacher} required/>
        </label>
        <button style={ {
              background:color
            } } type="submit">Submit</button>
      </form>
    </div>
  )
}
