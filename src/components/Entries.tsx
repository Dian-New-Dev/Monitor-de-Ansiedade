import React from 'react';

// Define o tipo para as props, se necessário
interface Entry {
    date: string;
    time: string;
    situation: string;
    feelings: string;
    thoughts: string;
    anxietyLevel: number;
}

interface EntriesProps {
    entries: Entry[];
}

const Entries: React.FC<EntriesProps> = ({ entries }) => {
    return (
        <div className="entries-list">
            {entries.map((entry, index) => (
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

export default Entries;
