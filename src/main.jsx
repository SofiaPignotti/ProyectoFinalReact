import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAAnLS8seByzagwO6JMrFHvRHb_FqWfJO4",
    authDomain: "mglajas.firebaseapp.com",
    projectId: "mglajas",
    storageBucket: "mglajas.appspot.com",
    messagingSenderId: "519353154613",
    appId: "1:519353154613:web:cc66ad94f959f769b0457c"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
