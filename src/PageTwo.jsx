function PageTwo({ scp }) {
    return (
        <div>
            <h1>{scp.id}: {scp.name}</h1>
            <p>{scp.description}</p>
        </div>
    );
}

export default PageTwo;