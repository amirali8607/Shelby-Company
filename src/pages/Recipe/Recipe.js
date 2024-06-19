import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import './Recipe.css'
export default function Recipe() {
  const [Company,setCompany] = useState(null)
  const [isLoading,setIsLoading] = useState(null)
  const [error,setError] = useState(null)
  const { myId } = useParams()
  const {mode,color} = useTheme()
  useEffect(() => {
    setIsLoading(true)
    const ref = doc(db , 'shelbyID', myId)
    // getDoc(ref)
    //   .then(doc => {
    //     if(doc.empty){
    //       setError('error')
    //       setIsLoading(false)
    //     }else{
    //       setIsLoading(false)
    //       setCompany(doc.data())
    //     }
    //   })
    const unsub = onSnapshot(ref,(snapshot) => {
      if(snapshot.empty){
        setError('error')
        setIsLoading(false)
      }else{
        setIsLoading(false)
        setCompany(snapshot.data())
      }
    })
    return () => unsub()
  },[myId])
  const handleClick = async () => {
    try {
      const ref = doc(db,'shelbyID',myId)
      await updateDoc(ref,{
        teacher: 'Taheri'
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className={`recipe ${mode}`}>
      {isLoading && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {Company && (
      < >
        <h2>{Company.teacher} My Favorite Teacher !</h2>
        <h4>I love {Company.game} game...</h4>
        <p>Im {Company.device} Devices :D</p><br />
        <button style={ {
          background: color
        } } onClick={() => handleClick()}>Update Teacher</button>
      </ >
      )}
    </div>
  )
}