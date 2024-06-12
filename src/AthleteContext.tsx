// src/AthleteContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProfileType } from './models/Profile.model.ts';

interface AthleteContextType {
    athlete: ProfileType | null;
    setAthlete: React.Dispatch<React.SetStateAction<ProfileType | null>>;
}

const AthleteContext = createContext<AthleteContextType | null>(null);

export const AthleteProvider = ({ children }: { children: ReactNode }) => {
    const [athlete, setAthlete] = useState<ProfileType | null>(null);

    return (
        <AthleteContext.Provider value={{ athlete, setAthlete }}>
            {children}
        </AthleteContext.Provider>
    );
};

export const useAthlete = () => {
    const context = useContext(AthleteContext);
    if (!context) {
        throw new Error('useAthlete must be used within an AthleteProvider');
    }
    return context;
};
