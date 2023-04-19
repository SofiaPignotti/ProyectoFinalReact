
// Toda la DB
// import React, { useEffect, useState } from 'react'
// import { collection, getDocs, getFirestore } from 'firebase/firestore'

// const Firebase = () => {
//   const [products, setProducts] = useState([])
//   useEffect(() => {
//     const db = getFirestore();

//     const itemsCollection = collection(db, "lajas");
//     getDocs(itemsCollection).then((snapshot) => {
//       const docs = snapshot.docs.map((doc) => doc.data());
//       setProducts(docs)
//     })

//   }, [])
//   return (
//     <div>Productos
//       {
//         products.map((product) => (
//           <div>
//             <h4>{product.title}</h4>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default Firebase

// Un documento

import React, { useEffect, useState } from 'react'
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const Document = ({id}) => {
  const [item, setItem] = useState([])

  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db,"lajas",`voyA26Xf7POjyLbH3TjH`)
    getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
        const docs = snapshot.data()
        setItem(docs)
      }
    })

  },[])

  return <div>{item.title}</div>
}


export default Document;