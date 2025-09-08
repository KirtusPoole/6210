import { useParams } from 'react-router-dom';

function ScpPage({ scpData }) {
    const { id } = useParams();
    const scp = scpData.find((item) => item.id === id);

    if (!scp) {
        return <h2>SCP Not Found</h2>;
    }

    // Split description into paragraphs based on \n
    const paragraphs = scp.description.split('\n').filter(p => p.trim().length > 0);

    return (
        <div>
            <h1>{scp.id}: {scp.name}</h1>
            <h3>Item #</h3>
            <p>{scp.id}</p>
            <h3>Name</h3>
            <p>{scp.name}</p>
            {scp.image && (
                <>
                    <h3>Image</h3>
                    <img src={`${import.meta.env.BASE_URL}${scp.image}`} alt={scp.name} />
                </>
            )}
            <h3>Description</h3>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </div>
    );
}

export default ScpPage;