import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Cliente from '../core/Cliente'
import Table from '../components/Table'
import Botao from '../components/Botao'
import Formulario from '../components/Formulario'

export default function Home() {

  const clientes = [
    new Cliente('Regiane', 20, '1'),
    new Cliente('Fabiano', 21, '2'),
    new Cliente('Miguel', 1)
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente){
    console.log('Excluir ' + cliente.nome)
  }

  return (
    <div className={'flex justify-center h-screen items-center bg-gradient-to-r from-blue-300 to-purple-900'}>
      <Layout titulo="Cadastro">
        <div className='flex justify-end'>
          <Botao className='bg-blue-600'>Novo Cliente</Botao>
        </div>
        <Table clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Table>
        <Formulario cliente={clientes[1]}></Formulario>
      </Layout>
    </div>
  )
}
