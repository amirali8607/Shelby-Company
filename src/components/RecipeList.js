import './RecipeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import deleteIcon from '../assist/deleteIcon.svg'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'
export default function RecipeList( {comp} ) {
  const {mode,color} = useTheme()
  const handleClick = async (id) => {
    try {
      const ref = doc(db , 'shelbyID' , id)
      await deleteDoc(ref)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='recipe-list'>
        {comp.map((cmpshelby)=>(
          <div key={cmpshelby.id} className={`card ${mode}`}>
              <h3>{cmpshelby.firstname} {cmpshelby.lastname}</h3>
              <p>{cmpshelby.job} to job</p>
              <h5>{cmpshelby.movie} Movie Favorite !</h5>
              <h6>He {cmpshelby.age} Years Age !</h6>
              <Link to={`/details/${cmpshelby.id}`} style={ {
                background:color
              } }>press to kill</Link>
              <img className='delete' src={deleteIcon} onClick={() => {handleClick(cmpshelby.id)} }/>
          </div>
        ))}
    </div>
  )
}
