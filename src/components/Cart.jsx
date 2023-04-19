import { Button, Card, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { CartContext } from '../context/ShoppingCartContext';
import swal from 'sweetalert';

const Cart = () => {
  const { cart, setCart } = useContext(CartContext)
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price
  }, 0)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const isErrorName = name === "";
  const isErrorEmail = email === "";
  const handleSubmit = (e) => {
    {
      email === "" || name === "" || cart.length === 0 ? null : swal({
        title: `Gracias por tu compra ${name}! Monto total : $${totalPrice.toFixed(3)}`,
        text: `Te enviamos un mail a ${email} con los pasos a seguir a continuación`,
        icon: "success",
        button: "Aceptar",
      });
    }
    e.preventDefault();
  }


  return (
    <Card textAlign={'center'} paddingBottom={'5rem'} width={'50%'} marginLeft={'25%'} marginTop={'8%'} >
      {
        cart.length === 0 ?
          <Text>NO HAY ARTICULOS EN EL CARRITO</Text>
          :
          <>
            <Text fontSize='3xl'>Articulos en el carrito:<Text as='mark'>{quantity}</Text></Text>
            <Text fontSize={'4xl'}>Total:<Text as='mark'>${totalPrice.toFixed(3)}</Text></Text>
            <FormControl width={"100%"} alignItems={'center'} isInvalid={isErrorName || isErrorEmail}  >
              <FormLabel fontSize={'2xl'} as={'ins'} textAlign={'center'}>Nombre</FormLabel>
              <Input textAlign={'center'} type='text' onChange={(e) => setName(e.target.value)} isRequired={true} />
              {isErrorName && (<FormErrorMessage>El nombre es requerido</FormErrorMessage>)}
              <FormLabel fontSize={'2xl'} as={'ins'} textAlign={'center'}>Email</FormLabel>
              <Input textAlign={'center'} type='email' onChange={(e) => setEmail(e.target.value)} />
              {isErrorEmail && (<FormErrorMessage>El email es requerido</FormErrorMessage>)}
              <FormHelperText>Nunca cumpartiremos tu email.</FormHelperText>
              <Button style={{ margin: "1rem" }} type='submit' variant='solid' colorScheme='green' onClick={handleSubmit}>Comprar</Button>
            </FormControl>
          </>
      }
    </Card>
  )
}

export default Cart