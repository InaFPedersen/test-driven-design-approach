const Home = () => {
    const title = "Home";

    return (
        <div>
            <h2>{title}</h2>
            <p>Lorum ipsum</p>
            <img
                src="../images/landscape.jpg"
                alt="landscape"
                data-cy="test-picture"
            />
        </div>
    );
};

export default Home;
