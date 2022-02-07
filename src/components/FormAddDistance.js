import { useState } from 'react';
import shortid from 'shortid';

export default function FormAddDistance({ onAdd }) {
	const [form, setForm] = useState({date: '', distance: ''});

	const handleChange = ({target}) => {
		const name = target.name;
		const value = target.value;
		setForm(prevForm => ({...prevForm, [name]: value}))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const track = {
			id: shortid.generate(),
			date: form.date,
			distance: Number(form.distance)
		}

		onAdd(track);
		setForm({date: '', distance: ''});
	};

	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="form-element">
				<label className="input-description" htmlFor="date">Дата(дд.мм.гг)</label>
				<input className="form-input" type="date" id="date" name="date" value={form.date} onChange={handleChange} required />
			</div>
			<div className="form-element">
				<label className="input-description" htmlFor="distance">Пройдено, км</label>
				<input className="form-input" type="number" id="distance" name="distance" step="0.1" value={form.distance} onChange={handleChange} required />
			</div>
			<button className="btn add-btn" type="submit">OK</button>
		</form>
	)
}