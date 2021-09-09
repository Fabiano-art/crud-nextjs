interface BotaoProps {
    children: any,
    className?:  string,
    onClick? : () => void
}

export default function Botao(props: BotaoProps){
    return (
        <button onClick={props.onClick} className={`py-2 px-4 text-gray-100 rounded-xl mb-2 text-lg font-bold 
                            ${props.className ?? ''}`}>
            {props.children}
        </button>
    )
} 