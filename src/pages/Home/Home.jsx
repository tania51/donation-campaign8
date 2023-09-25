import { useLoaderData } from "react-router-dom";
// import Banner from "../../components/Banner/Banner";
import Donations from "../../components/Donations/Donations";


const Home = () => {
    const donationsData = useLoaderData();
    return (
        <div>
            {/* <Banner></Banner> */}
            <Donations donationsData={donationsData}></Donations>
        </div>
    );
};

export default Home;