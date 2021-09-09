import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Cliente from '../core/Cliente'
import Table from '../components/Table'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'
import { useState } from 'react'

export default function Home() {

  const clientes = [
    new Cliente('Regiane', 20, '1'),
    new Cliente('Fabiano', 21, '2'),
    new Cliente('Miguel', 1)
  ]

  const [mode, setMode] = useState<'table' | 'form'>('table')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  function clienteSelecionado(cliente: Cliente){
    setCliente(cliente)
    setMode('form')
    
  }

  function clienteExcluido(cliente: Cliente){
    console.log('Excluir ' + cliente.nome)
  }

  function insertCliente(cliente: Cliente){
    console.log(cliente)
  }

  function novoCliente(){
    setMode('form')
    setCliente(Cliente.vazio())
  }
  
  return (
    <div className={'flex justify-center h-screen items-center bg-gradient-to-r from-blue-300 to-purple-900'}>
      <Layout titulo="Cadastro">
        {mode === 'table' ? (
          <>
            <div className='flex justify-end'>
              <Botao onClick={novoCliente} className='bg-blue-600'>Novo Cliente</Botao>
            </div>
            <Table clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Table>
          </>
          )
          :
          (
            <Formulario clienteMudou={insertCliente} cliente={cliente} cancelado={() => setMode('table')}></Formulario>
          )
        }
      </Layout>
    </div>
  )
}
