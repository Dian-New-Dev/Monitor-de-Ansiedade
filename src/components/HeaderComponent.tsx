import React from 'react';
import { useState } from 'react'; // 1 - importa useState

const HeaderComponent: React.FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false); //2 - Inicializa o Estado


    const toggleModal = () => { // 3 - Função necessária para manipular o evento
        setIsModalVisible(!isModalVisible);
    };

    return (
        <div className=' relative bg-sky-950 flex flex-col justify-center items-center gap-10 py-10'>
            <h1 className='text-5xl font-extrabold dark:text-white'>
                Monitor de <span className='text-red-600'>Ansiedade</span></h1>
            <h2 className='text-2xl font-extrabold dark:text-white'>
                App interativo de monitoramento de picos de ansiedade</h2>
            <button 
                className='text-white hover:text-sky-200 bg-sky-800 hover:bg-sky-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 hover:scale-110 border-sky-500 hover:border-sky-700'
                onClick={toggleModal} //5 - liga a função ao botão
                >
                Por quê?</button>

            {isModalVisible && ( // 4 - o && é o condicional do JSX, se isModalVisible for true, executa o código
                <div id='headerModal' className='absolute inset-0 flex justify-center items-center z-50 border bg-slate-950 bg-opacity-70'>
                    <div id='innerModal' className='flex flex-col justify-center items-center bg-sky-950 p-10 w-4/5 gap-5 rounded-xl border border-blue-200'>
                        <p className='text-blue-200 text-sm'>
                            "Registro de Pensamentos Automáticos" é uma ferramenta frequentemente utilizada na Terapia Cognitivo-Comportamental (TCC) para ajudar os pacientes a identificar, monitorar e reestruturar pensamentos disfuncionais que contribuem para a ansiedade. Ao anotar os pensamentos, contextos e sentimentos associados aos momentos de ansiedade, os pacientes podem começar a reconhecer padrões e trabalhar com seu terapeuta para desenvolver estratégias mais adaptativas de enfrentamento.
                        </p>
                        <p className='text-blue-200 text-sm'>
                            Substituindo os tradicionais papeis e canetas, a presente aplicação busca facilitar o registro de pensamentos ansiosos ao automatizar a gravação de elementos como local ou horário. 
                        </p>
                        <button 
                        className='text-white hover:text-sky-200 bg-sky-800 hover:bg-sky-900 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 border-2 hover:scale-110 border-sky-500 hover:border-sky-700'
                        onClick={toggleModal} //5 - liga a função ao botão
                        >
                            Fechar
                        </button>

                    </div>
                


                </div>
            )}
        </div>

    );
};
export default HeaderComponent;
