import {useState} from 'react';
import './App.css';
import {useAthlete} from './AthleteContext';
import {ProfileType} from "./models/Profile.model.ts";
import {StravaActivity} from "./models/StravaActivity.model.ts";

function App() {
    const [error, setError] = useState<string | null>(null);
    const {athlete, setAthlete, activities, isFetchingActivities, setActivities} = useAthlete();

    let client_id = import.meta.env.VITE_CLIENT_ID;
    if (!client_id) {
        client_id = process.env.VITE_CLIENT_ID;
    }

    const handleStravaConnect = () => {
        window.location.href = `https://www.strava.com/oauth/authorize?client_id=${client_id}&redirect_uri=${window.location.origin}/callback&response_type=code&scope=read_all,activity:read`;
    };

    return (
        <div>
            {!athlete && (
                <>
                    <h1>Cardio Quest</h1>
                    <h3>To get started, connect to Strava</h3>
                    <button onClick={handleStravaConnect}>Connect to Strava</button>
                    <p>Only your activities will be accessed, no other data will be read or modified.</p>
                </>
            )}
            {error && <p>{error}</p>}
            {athlete && (
                <div>
                    <h1>{athlete.firstname} {athlete.lastname}</h1>
                    <h3>Activities</h3>
                    <div>
                        {isFetchingActivities &&
                            <p>Activity fetching is still in progress, it can take up to 2 minutes.</p>}
                        {activities && activities.map(activity => (
                            <li key={activity.id}>{activity.name}</li>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;

