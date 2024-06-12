// src/App.tsx
import { useState } from 'react';
import './App.css';
import { useAthlete } from './AthleteContext';
import {ProfileType} from "./models/Profile.model.ts";

function App() {
    const [error, setError] = useState(null);
    const { athlete } = useAthlete();

    let client_id = import.meta.env.VITE_CLIENT_ID;
    if(!client_id) { // If Vite environment variables are not available, use Node environment variables
        client_id = process.env.VITE_CLIENT_ID;
    }

const handleStravaConnect = () => {
    // Redirect user to Strava's authorization endpoint
    window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${window.location.origin}/callback&response_type=code&scope=read_all,activity:read`;
};


    return (
        <div>
            <h2>Connect to Strava using the button below</h2>
            <button onClick={handleStravaConnect}>Connect to Strava</button>
            {error && <p>{error}</p>}
            {athlete && (
                <div>
                    //we display all of the infos of the athlete (of type ProfileType)
                    {Object.entries(athlete).map(([key, value]) => (
                        <p key={key}>
                            <strong>{key}:</strong> {value}
                        </p>
                    ))}

                </div>
            )}
        </div>
    );
}

export default App;
