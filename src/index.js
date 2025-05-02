import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "antd/dist/reset.css";
import { VideoCallProvider } from './context/Context'; // Adjust the path as needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrapping with BrowserRouter for routing */}
      <VideoCallProvider>
        
        <App />
      </VideoCallProvider>
    </BrowserRouter>
  </StrictMode>
);
