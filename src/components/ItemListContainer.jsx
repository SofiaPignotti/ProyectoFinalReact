import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { items } from '../../data';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { category } = useParams()
  const getItems = async () => {
    const response = items
    setProducts(items)
  };

  useEffect(() => {
    getItems()
  }, [])

  const categoryFilter = products.filter((products) => products.category === category);

  return (
    <div>
      {category ? <ItemList productos={categoryFilter} /> : <ItemList productos={products} />}
    </div>
  )
}

export default ItemListContainer