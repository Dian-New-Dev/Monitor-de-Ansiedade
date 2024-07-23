import React, { useState } from 'react';
import Entry from './Entry';
import axios from 'axios'; // biblioteca para fazer requisição HTTP


const MainComponent: React.FC = () => {
    
    //se uma parte da aplicação sofrerá mudanças e precisará ser re-renderizada, esta
    //parte precisa receber um state. No caso, nosso form mudará pois receberá input
    //logo, precisa de um state. Eis como iniciá-lo com um destructuring:

    const [formData, setFormData] = useState({
        //form data é variável custom, a segunda adiciona "set" ao nome para indicar
        //ser a variável com estado alterado (no caso, o form após receber input)
        //ou seha, formData = form estático(objeto), setFormData = função que atualiza o primeiro, precisa ser definida posteriormente

        date: '',
        time: '',
        situation: '',
        feelings: '',
        thoughts: '',
        anxietyLevel: ''
    });

    //com o estado criado, precisa-se manipulá-lo com uma função, um manipulador de eventos:

    const receberEntradaDoUsuario = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //isso é uma função com um parâmetro: "e", que representa o evento sendo manipulado
        //"e" recebe duas tipagens, indicando que o evento pode vir de um input e de um textarea
        const { name, value } = e.target; //e.target representa o elemento html que disparou o evento, extraindo duas propriedades, name e value
        setFormData({ //esssa função atualiza o estado de formData
            ...formData, // "..." é o operador spread, o qual faz uma cópia do formData atual ao invés de modifica-lo
            [name]: value
        })
    }

    //agora, é necessário um hanlder para submissão do formulário
    const receberSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await exios.post()
        }
        //aqui os dados serão manipulados, por hora vamos apenas loga-los
       console.log(formData) 
    }
    
    return (
        <div className='bg-sky-950'>
            <div className= "p-10 flex flex-col justify-center items-center">
                <h2 className='text-blue-50'>NOVA ENTRADA</h2>
                <form className='flex flex-col items-center w-[80%] max-w-[1000px] border border-opacity-25 border-blue-50 gap-10 p-10 rounded-3xl'>
                <input 
                        className='w-full p-5 rounded-3xl' 
                        type="date" 
                        id="date" 
                        name="date" 
                        placeholder='Data'
                        value={formData.date}
                        onChange={receberEntradaDoUsuario}
                    />
                    <input 
                        className='w-full p-5 rounded-3xl' 
                        type="time" 
                        id="time" 
                        name="time" 
                        placeholder='Horário'
                        value={formData.time}
                        onChange={receberEntradaDoUsuario}
                    />
                    <textarea 
                        className='w-full p-5 rounded-3xl min-h-60' 
                        id="situation" 
                        name="situation" 
                        placeholder='Situação'
                        value={formData.situation}
                        onChange={receberEntradaDoUsuario}
                    />
                    <textarea 
                        className='w-full p-5 rounded-3xl min-h-60' 
                        id="feelings" 
                        name="feelings" 
                        placeholder='Sensações'
                        value={formData.feelings}
                        onChange={receberEntradaDoUsuario}
                    />
                    <textarea 
                        className='w-full p-5 rounded-3xl min-h-60' 
                        id="thoughts" 
                        name="thoughts" 
                        placeholder='Pensamentos'
                        value={formData.thoughts}
                        onChange={receberEntradaDoUsuario}
                    />
                    <input 
                        className='w-full p-5 rounded-3xl' 
                        type="number" 
                        id="anxietyLevel" 
                        name="anxietyLevel" 
                        placeholder='Nível de Ansiedade' 
                        min="1" 
                        max="5"
                        value={formData.anxietyLevel}
                        onChange={receberEntradaDoUsuario}
                    />
                    
                    <button onClick={receberSubmit} className='text-white hover:text-sky-200 w-7/12 bg-sky-800 hover:bg-sky-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 hover:scale-110 border-sky-500 hover:border-sky-700' type="submit">
                        Submeter Entrada
                    </button>

                </form>
            </div>

            <div>
                <Entry />
            </div>
        </div>
        
    );
};

export default MainComponent;