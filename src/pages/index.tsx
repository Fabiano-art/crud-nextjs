import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={'flex justify-center h-screen items-center bg-gradient-to-r from-blue-300 to-purple-900'}>
      <Layout titulo="Cadastro">
        <span>Conteudo</span>
      </Layout>
    </div>
  )
}
