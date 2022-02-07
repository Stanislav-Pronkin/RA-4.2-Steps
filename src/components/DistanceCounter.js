import { useState } from "react";
import DistanceList from "./DistanceList";
import FormAddDistance from "./FormAddDistance";

export default function DistanceCounter() {
    const [tracks, setTracks] = useState([]);

    const handleAdd = track => {
        const newTracks = [...tracks];
        const trackDate = newTracks.find(o => o.date === track.date)

        if (trackDate) {
            trackDate.distance += track.distance
        } else {
            newTracks.push(track);
            newTracks.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
        }

        setTracks(newTracks);
    }

    const handleDelete = id => {
        setTracks(prevTracks => prevTracks.filter(o => o.id !== id));
    }

    return (
        <div className="distance-counter">
            <FormAddDistance onAdd={handleAdd} />
            <DistanceList tracks={tracks} onDelete={handleDelete} />
        </div>
    )
}