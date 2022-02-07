export default function DistanceList({ tracks, onDelete }) {
    return (
        <div className="distance-list">
            <div className="list-header">
                <span className="item-header">Дата(дд.мм.гг)</span>
                <span className="item-header">Пройдено, км</span>
                <span className="item-header">Действия</span>
            </div>
            <div className="distance-items">
                <ul className="item-list">
                    {tracks.map(o => 
                        <li className="item" key={o.id}>
                            <span className="item-date">{new Date(o.date).toLocaleDateString()}</span>
                            <span className="item-distance">{o.distance}</span>
                            <button className="btn delete-btn" onClick={() => onDelete(o.id)}>✘</button>
                        </li>)}
                </ul>
            </div>
        </div>
    )
}