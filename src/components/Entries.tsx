import React from 'react';

// Define o tipo para as props, se necessário
interface LogEntry {
    date: string;
    time: string;
    situation: string;
    feelings: string;
    thoughts: string;
    anxietyLevel: number;
}

interface FormatoDeProps {
    entradas: LogEntry[];
    //nome da propriedade: tipo de variável dessa proprriedaed, um array de objetos LogEntry
}

//o componente recebe a prop "entradas" que é um array de objs "LogEntry"
const ListaDeEntradas: React.FC<FormatoDeProps> = ({ entradas }) => {
    return (
        <div className="entradas-list">
            {entradas.map((entry, index) => ( // o método map chama itera sobre todos os itens do array entradas (cada qual, um objeto Logentry). Para cada iteração, ele executa a função abaixo, a qual renderiza uma div com os elementos dentro
                <div key={index} className="entry-item">
                    <p><strong>Data:</strong> {entry.date}</p>
                    <p><strong>Horário:</strong> {entry.time}</p>
                    <p><strong>Situação:</strong> {entry.situation}</p>
                    <p><strong>Sensações:</strong> {entry.feelings}</p>
                    <p><strong>Pensamentos:</strong> {entry.thoughts}</p>
                    <p><strong>Nível de Ansiedade:</strong> {entry.anxietyLevel}</p>
                </div>
            ))}
        </div>
    );
};

export default ListaDeEntradas;
