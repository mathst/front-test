import * as React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search';

function App() {
	return (
		<html>
			<head>

			</head>
			<body>
				<div id="root">
					<div className="App">

						<TextField
							id="outlined-input"
							label="Meses"
						/>
						<Button color="primary" 
							onClick={() => {
								// função de buscar na api 
							}}
						>
							search
						</Button>

					</div>
				</div>
				
			</body>
		</html>

	);
}
ReactDOM.render(<App />, document.querySelector('root'));
