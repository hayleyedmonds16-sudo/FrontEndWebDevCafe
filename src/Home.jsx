import MenuTable from "./components/MenuTable.jsx"

const Home = ({ items }) => {
    return (
        <div className="container">
            <div className="row">

                <div className="col-md-4">
                    <h2>Who We Are</h2>
                    <p>
                        Welcome to our café! We serve freshly
                        prepared food and drinks.
                    </p>
                </div>

                <div className="col-md-4">
                    <h2>Where We Are</h2>
                    <div className="map-placeholder">
                        Map goes here
                    </div>
                </div>

                <div className="col-md-4">
                    <h2>Our Menu</h2>
                    <MenuTable items={items} />
                </div>

            </div>
        </div>
    );
};

export default Home;

