import React from 'react';

const Entry: React.FC = () => {

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className= "p-10 flex flex-col justify-center items-center bg-sky-900 w-[80%] max-w-[1000px] rounded-3xl">
        <h2 className='text-blue-600'>ENTRADA</h2>
        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Data</h4>
            <p className='text-blue-200'></p>
        </div>

        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Horário</h4>
            <p className='text-blue-200'></p>
        </div>

        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Situação</h4>
            <p className='text-blue-200'></p>
        </div>

        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Sensações</h4>
            <p className='text-blue-200'></p>
        </div>

        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Pensamentos</h4>
            <p className='text-blue-200'></p>
        </div>

        <div className='text-l p-5 border w-[80%] rounded-3xl border-sky-900'>
            <h4 className='text-blue-50 text-2xl'>Nível de Ansiedade</h4>
            <p className='text-blue-200'></p>
        </div>
    </div>
    </div>

  );
};

export default Entry;