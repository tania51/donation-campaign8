import { useLoaderData } from "react-router-dom";
// import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Donations/Donations";


const Home = () => {
    const donationsData = useLoaderData();
    return (
        <div>
            <Donations donationsData={donationsData}></Donations>
        </div>
    );
};

export default Home;