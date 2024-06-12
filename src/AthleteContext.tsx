// src/AthleteContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { ProfileType } from './models/Profile.model.ts';
import { StravaActivity } from './models/StravaActivity.model.ts';

interface AthleteContextType {
    athlete: ProfileType | null;
    setAthlete: React.Dispatch<React.SetStateAction<ProfileType | null>>;
    activities: StravaActivity[];
    setActivities: React.Dispatch<React.SetStateAction<StravaActivity[]>>;
    isFetchingActivities: boolean;
    setIsFetchingActivities: React.Dispatch<React.SetStateAction<boolean>>;
}

const AthleteContext = createContext<AthleteContextType | null>(null);

export const AthleteProvider = ({ children }: { children: ReactNode }) => {
    const [athlete, setAthlete] = useState<ProfileType | null>(null);
    const [activities, setActivities] = useState<StravaActivity[]>([]);
    const [isFetchingActivities, setIsFetchingActivities] = useState<boolean>(false);

    return (
        <AthleteContext.Provider value={{ athlete, setAthlete, activities, setActivities, isFetchingActivities, setIsFetchingActivities }}>
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