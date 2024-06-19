import RecipeList from '../../components/RecipeList'
// import { useEffect, useState } from 'react'
// import { collection, getDocs } from '@firebase/firestore'
// import { db } from '../../firebase/config'
import './Home.css'
import { useCollection } from '../../hooks/useCollection'

export default function Home() {
  const { mycollection:data ,isLoading,error} = useCollection('shelbyID')
  //be jaye useEffect az custome hook useCollection estefade miknim
  // useEffect(() => {
  //   setIsLoading(true)
  //   const ref = collection(db, 'shelbyID')
  //   getDocs(ref)
  //     .then((snapshot) => {
  //       if(snapshot.empty)
  //       {
  //         setError('ERROR! no soldier details to load...')
  //         setIsLoading(false)
  //       }else{
  //         let result = []  
  //         snapshot.docs.forEach(myDocs => {
  //           result.push({id: myDocs.id, ...myDocs.data()})
  //         })
  //         setData(result)
  //         setIsLoading(false)
  //       }
  //     })
  // },[])
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {data && <RecipeList comp={data}/>}
    </div>
  )
}
