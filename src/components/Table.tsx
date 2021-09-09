import Cliente from "../core/Cliente";
import {IconeEdicao, IconeLixeira} from '../components/icones';

interface TableProps {
    clientes: Cliente[],
    clienteSelecionado?: (cliente: Cliente) => void,
    clienteExcluido?: (cliente: Cliente) => void
}

export default function Table(props: TableProps){


    function renderData(){
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'}`}>
                    <td className='text-left py-3 pl-2'>{cliente.id}</td>
                    <td className='text-left py-3 pl-2'>{cliente.nome}</td>
                    <td className='text-left py-3 pl-2'>{cliente.idade}</td>
                    {renderActions(cliente)}
                </tr>
            )
        })
    }

    function renderActions(cliente : Cliente){
        return (
            <td className='flex justify-center'>
                {props.clienteSelecionado ? (
                    <button className='flex justify-center items-center text-green-600 hover:bg-gray-100 p-2 m-1 rounded-full' 
                    onClick={() => props.clienteSelecionado?.(cliente)}>
                        {IconeEdicao}
                    </button>
                    ) : false
                }

                {props.clienteExcluido ? (
                    <button className='flex justify-center items-center text-red-600 hover:bg-gray-100 p-2 m-1 rounded-full'
                    onClick={() => props.clienteExcluido?.(cliente)}>
                        {IconeLixeira}
                    </button>
                    ) : false
                }
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={'bg-gradient-to-r from-purple-500 to-red-500 text-gray-200'}>
                <tr>
                    <th className='text-left py-3 pl-2'>Codigo</th>
                    <th className='text-left py-3 pl-2'>Nome</th>
                    <th className='text-left py-3 pl-2'>Idade</th>
                    <th className='text-center py-3 pl-2'>Ações</th>
                </tr>
            </thead>
            {renderData()}
        </table>
    )
}