interface BotaoProps {
    children: any,
    className?:  string
}

export default function Botao(props: BotaoProps){
    return (
        <button className={`py-2 px-4 text-gray-100 rounded-xl mb-2 text-lg font-bold 
                            ${props.className ?? ''}`}>
            {props.children}
        </button>
    )
} 