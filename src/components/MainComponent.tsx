import React, { useState, useEffect } from 'react';
import axios from 'axios'; // biblioteca para fazer requisição HTTP
import Entries from './Entries';

const MainComponent: React.FC = () => {
    
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        situation: '',
        feelings: '',
        thoughts: '',
        anxietyLevel: ''
    });

    const [entries, setEntries] = useState([]);

    // Função para buscar entradas do backend
    const fetchEntries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/entries');
            setEntries(response.data);
        } catch (error) {
            console.error('Erro ao buscar entradas:', error);
        }
    };

    // Chama fetchEntries quando o componente é montado
    useEffect(() => {
        fetchEntries();
    }, []);

    // Atualiza formData com os valores dos inputs
    const receberEntradaDoUsuario = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Envia os dados do formulário e atualiza as entradas
    const receberSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/entries', formData);
            // Após o envio, busca as entradas novamente
            fetchEntries();
            setFormData({
                date: '',
                time: '',
                situation: '',
                feelings: '',
                thoughts: '',
                anxietyLevel: ''
            });
        } catch (error) {
            console.error('Erro ao enviar a entrada:', error);
        }
    };
    
    return (
        <div className='bg-sky-950'>
            <div className="p-10 flex flex-col justify-center items-center">
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
                <Entries entries={entries} />
            </div>
        </div>
    );
};

export default MainComponent;
