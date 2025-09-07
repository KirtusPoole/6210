import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import ScpPage from './ScpPage';
import scpData from './data.json';

function App() {
    return (
        <Router>
            <Nav scpData={scpData} />
            <main style={{ padding: 16 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scp/:id" element={<ScpPage scpData={scpData} />} />
                </Routes>
            </main>
        </Router>
    );
}

function Home() {
    return <h1>SCP Database</h1>;
}

export default App;