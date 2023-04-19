import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const Item = ({id}) => {
  const [item, setItem] = useState([])
  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db,"lajas",`${id}`)
    getDoc(oneItem).then((snapshot)=>{
      if(snapshot.exists()){
        const docs = snapshot.data()
        setItem(docs)
      }
    })
  },[])
  const { cart, setCart } = useContext(CartContext);
  const addToCart = (id) => {
    setCart((currItems) => {
      const isItemFound = currItems.find((product) => product.id === id);
      if (isItemFound) {
        return currItems.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity + 1 }
          } else {
            return product;
          }
        });
      } else {
        const {price} = item
        return [...currItems, { id, quantity: 1, price }]
      }
    })
  };
  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((product) => product.id === id)?.quantity === 1) {
        return currItems.filter((product) => product.id !== id);
      } else {
        return currItems.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 }
          } else {
            return product;
          }
        })
      }
    })  
  };

  const getQuantityById = (id) => {
    return cart.find((product) => product.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(item.title);

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '400px' }}
        src={item.image}
        alt={item.title}
      />
      <Stack>
        <CardBody>
          <Heading size='md'>{item.title}</Heading>
          <Text py='2'>
            {item.description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $ {item.price}
          </Text>
        </CardBody>
        <CardFooter>
          <Stack variant='solid' colorScheme='blue'>
            {
              quantityPerItem === 0 ? (
                <div>
                  {/* Le paso item.title porque estoy teniendo un problema con el id, me reconoce el mismo id para todos los items y me suma siempre el mismo al carrito, lo solucione pasandole title momentaneamente. */}
                  <Button variant='solid' colorScheme='blue' onClick={() => addToCart(item.title)}>Añadir al carrito</Button>
                </div>
              ) : (
                <div>
                  <Button variant='solid' colorScheme='green' onClick={() => addToCart(item.title)}>Añadir más</Button>
                </div>
              )
            }
            {
              quantityPerItem > 1 && (
                <>
                  <Button variant='solid' colorScheme='red' onClick={() => removeItem(item.title)} >Eliminar item</Button>
                </>

              )
            }
            {quantityPerItem === 1 &&
              <Button variant='solid' colorScheme='red' onClick={() => removeItem(item.title)} >Eliminar</Button>
            }
            <Button variant='ghost' colorScheme='yellow'>Cantidad : {quantityPerItem}</Button>
          </Stack>
          {
            quantityPerItem > 0 && (
              <Button><Link to={'/cart'}>Ir a finalizar compra</Link></Button>
            )
          }
        </CardFooter>
      </Stack>
    </Card>
  )
}


export default Item

