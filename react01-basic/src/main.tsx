import { createRoot } from 'react-dom/client';
import './index.css';
import Counter from './prors/state/Counter.tsx';

createRoot(document.getElementById('root')!).render(<Counter />);
