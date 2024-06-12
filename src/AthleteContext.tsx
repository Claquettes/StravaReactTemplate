// src/AthleteContext.tsx
import React, { createContext, useState, useContext } from 'react';

const AthleteContext = createContext(null);

export const AthleteProvider = ({ children }) => {
    const [athlete, setAthlete] = useState(null);

    return (
        <AthleteContext.Provider value={{ athlete, setAthlete }}>
            {children}
        </AthleteContext.Provider>
    );
};

export const useAthlete = () => {
    return useContext(AthleteContext);
};
