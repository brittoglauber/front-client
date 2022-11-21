import axios from 'axios'
import React, { useEffect, useState } from 'react'
import IUser from '../types/IUser'
import Usuario from './Usuario'

const Usuarios = () => {

  const [usuarios, setUsuarios] = useState<IUser[]>([])  
  
  useEffect(() => {
    axios.get('http://localhost:5000/user')
        .then(resposta => {
            setUsuarios(resposta.data.results)
        })
        .catch(erro => {
            console.log(erro)
        })
  }, [])  

  return (
    <>
        usuarios[]
    </>
  )
}

export default Usuarios