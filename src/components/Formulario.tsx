import Input from "./input";
import Cliente from '../core/Cliente'
import { useState } from "react";
import Botao from '../components/Botao'

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

    return (
        <div>
            {
                id ? <Input texto="Código" valor={id} readOnly></Input> : null
            }
            <Input texto='Nome' valor={nome} onChange={setNome}/>
            <Input texto="Idade" tipo="number" valor={idade} onChange={setIdade}></Input>
            <div className='flex justify-end mt-7'>
                <Botao className='mr-3 bg-green-600'>{id ? 'Alterar' : 'Salvar'}</Botao>
                <Botao className='bg-gray-600'>Cancelar</Botao>
            </div>
        </div>
    )
}