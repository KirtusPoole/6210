import { Link } from 'react-router-dom';

export default function Nav({ scpData }) {
    return (
        <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
            <Link to="/" style={{ marginRight: 12 }}>Home</Link>
            {scpData && scpData.length > 0 ? (
                scpData.map((scp) => (
                    <Link
                        key={scp.id}
                        to={`/scp/${scp.id}`}
                        style={{ marginRight: 12 }}
                    >
                        {scp.id}
                    </Link>
                ))
            ) : (
                <span>No SCP data available</span>
            )}
        </nav>
    );
}