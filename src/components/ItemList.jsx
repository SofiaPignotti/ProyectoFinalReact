import React, { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Item from './Item'
import { useParams } from 'react-router-dom'

const ItemList = () => {
  const [storeItems, setStoreItems] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "lajas");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); // Me traigo la data y el ID del documento para poder enviarselo como prop a item
      setStoreItems(docs)
    })
  }, [])

  const { category } = useParams()
  const filteredItems = category ? storeItems.filter(product => product.category === category) : storeItems;
  return (
    <div>
      {filteredItems.map((product, idx) => {
        return <Item key={product.id} {...product} id={product.id} />
      })}
    </div>
  )
}

export default ItemList