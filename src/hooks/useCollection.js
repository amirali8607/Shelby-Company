import { useEffect, useState } from "react"
import { db } from "../firebase/config"
import { collection, onSnapshot } from "firebase/firestore"

export const useCollection = (slbID) => {
   const [mycollection,setMycollection] = useState(null)
   const [isLoading,setIsLoading] = useState(false)
   const [error , setError] = useState(false) 
   useEffect(() => {
      setIsLoading(true)
      let ref = collection(db,slbID)
         const unsub = onSnapshot(ref, (snapshot) => {
            if(snapshot.empty){
               setError('ERROR! no soldier details to load...')
               setIsLoading(false)
            }else{
               let result = []
               snapshot.docs.forEach(myDocs => {
                  result.push({id: myDocs.id, ...myDocs.data()})
               })
               setMycollection(result)
               setIsLoading(false)
            }
         })
         return () => unsub()
   },[slbID])
   return {mycollection,isLoading,error}
}