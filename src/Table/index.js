import "./style.css";

const Table = () => {
	return (
		<table className="table">
			<caption className="table__caption">
				Ulubieni bębniarze plus przykłady (otwiera linki).
			</caption>
			<tr>
				<th className="table__cell table__cell--header " scope="col"> Muzyk</th>
				<th className="table__cell table__cell--header " scope="col"> Znany zespół</th>
				<th className="table__cell table__cell--header " scope="col"> Przykładowy utwór</th>
			</tr>
			<tr>
				<th className="table__cell table__cell--header " scope="row">Jan Axel "Hellhammer" Blomberg</th>
				<td className="table__cell" rowspan="2">"Dimmu Borgir"</td>
				<td className="table__cell">
					<a className="content__link" target="_top"
						href="https://www.youtube.com/watch?v=tFIW5b2lwpg">"Mayhem" -
						Crystallized Pain in
						Deconstruction
					</a>
				</td>
			</tr>
			<tr>
				<th className="table__cell table__cell--header " scope="row"> Nicholas Barker</th>
				<td className="table__cell">
					<a className="content__link" target="_top"
						href="https://www.youtube.com/watch?v=deYZEKb_nfA">"Dimmu
						Borgir" -
						Blessing Upon The
						Throne
						Of Tyranny
					</a>
				</td>

			</tr>
			<tr>
				<th className="table__cell table__cell--header " scope="row"> Maciej "Darkside" Kowalski</th>
				<td className="table__cell">"Mgła"</td>
				<td className="table__cell">
					<a className="content__link" target="_top" href="https://www.youtube.com/watch?v=qW8SAdPkFgk">
						"Mgła" -Age of excuse VI
					</a>
				</td>

			</tr>
		</table>

	)
};

export default Table;