import ReactDOM from 'react-dom';
import '../public/sass/style.sass'
import App from './App';
import { AuthProvider } from './providers/AuthProvider';

const rootElement = document.getElementById('root');

const app = (
	<AuthProvider>
		<App/>
	</AuthProvider>
);

ReactDOM.render(app, rootElement);


