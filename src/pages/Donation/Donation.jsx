import { useState } from "react";
import DonateAllCard from "../../components/DonateAllCard/DonateAllCard";



const Donation = () => {

    const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
    const [seeAll, setSeeAll] = useState(false);
    console.log(getDonationInfoFromLocal);

    if (getDonationInfoFromLocal === null) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <div className="text-center italic">
                    <h1 className="text-4xl">No Donation found!!</h1>
                    <p className="text-2xl mt-4">Please Donate First.</p>
                </div>
            </div>
        )
    }
    return (
        <div>

            <div className="grid lg:grid-cols-2 gap-5 px-10">
                {
                    seeAll ? getDonationInfoFromLocal.map(donate => <DonateAllCard key={donate.id} donate={donate}></DonateAllCard>) :
                        getDonationInfoFromLocal.slice(0, 4).map(donate => <DonateAllCard key={donate.id} donate={donate}></DonateAllCard>)
                }
            </div>
            <div className="text-center pb-10">
                {

                    (getDonationInfoFromLocal.length > 4) ? <button onClick={() => setSeeAll(!seeAll)} className={`my-10 bg-green-500 px-5 py-1 rounded text-white ${(seeAll) && 'hidden'}`}>See All</button> : <button onClick={() => setSeeAll(!seeAll)} className='hidden'>See All</button>
                }

            </div>
        </div>
    );
};

export default Donation;