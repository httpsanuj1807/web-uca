import { createRoot } from 'react-dom/client';
import { App } from '../src/App.jsx';

const myRootContainer = createRoot(document.getElementById("root"));

myRootContainer.render(<App />);