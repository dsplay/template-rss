import { createRoot } from 'react-dom/client';
import './styles/font-sizes.sass';
import './index.sass';
import App from './components/app';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
