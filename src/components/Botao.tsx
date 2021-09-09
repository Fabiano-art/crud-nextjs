interface BotaoProps {
    cor? : 'green' | 'blue' | 'purple',
    children: any
}

export default function Botao(props: BotaoProps){
    return (
        <button className='py-2 px-4 bg-blue-600 text-gray-100 rounded-xl mb-2 text-lg font-bold'>
            {props.children}
        </button>
    )
} 