import Donation from "../Donation/Donation";


const Donations = ({donationsData}) => {
    return (
        <div className="my-24 px-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    donationsData.map(donation => <Donation key={donation?.id} donation={donation}></Donation>)
                }
            </div>
        </div>
    );
};

export default Donations;