import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function App() {
return (
        <Router>
            <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pageone" element={<PageOne />} />
                    <Route path="/pagetwo" element={<PageTwo />} />
                </Routes>
        </Router>
);
}

function Home() {
return <h1>Home</h1>;
}

export default App;
