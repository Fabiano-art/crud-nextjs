interface InputProps {
    tipo?: 'text' | 'number',
    texto: string,
    valor: any,
    readOnly? : boolean,
    onChange?: (valor: any) => void
}

export default function Input(props: InputProps){
    return (
        <div className='flex flex-col'>
            <label className='mb-3 mt-3'>
                {props.texto}
            </label>
            <input type={props.tipo ?? 'text'} value={props.valor}  onChange={e => props.onChange?.(e.target.value)}
            className='border border-black rounded-lg focus:outline-none px-2 py-1 focus:bg-gray-50 bg-gray-100'/>
        </div>
    )
}