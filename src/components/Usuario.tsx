import React from 'react'
import IUser from '../types/User'

interface UsuariosProps {
    usuarios: IUser
    username: string
}

const Usuario = ({ usuarios }: UsuariosProps) => {
  return (
    <>
        <h2>{usuarios.username}</h2>
    </>
  )
}

export default Usuario