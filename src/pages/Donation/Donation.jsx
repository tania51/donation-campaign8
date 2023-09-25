import { useState } from "react";
import DonateAllCard from "../../components/DonateAllCard/DonateAllCard";
// import DonateAllCard from "../../components/DonateAllCard/DonateAllCard";



const Donation = () => {

    const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
    const [seeAll, setSeeAll] = useState(false);

    console.log(seeAll);

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    seeAll ? getDonationInfoFromLocal.map(donate => <DonateAllCard key={donate.id} donate={donate}></DonateAllCard>) :
                    getDonationInfoFromLocal.slice(0, 4).map(donate =><DonateAllCard key={donate.id} donate={donate}></DonateAllCard>)
                }
            </div>
            <div className="text-center">
                <button onClick={() => setSeeAll(!seeAll)} className="my-10 bg-green-500 px-5 py-1 rounded text-white">See All</button>
            </div>
        </div>
    );
};

export default Donation;