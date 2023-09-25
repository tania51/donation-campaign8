import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const SingleDonation = () => {

    const singleIdObj = useParams();
    const singleId = singleIdObj.id;
    const singleIdInt = parseInt(singleId);
    const singleDonation = useLoaderData();
    // console.log(singleDonation);
    // console.log(singleIdInt);

    const clickedDonation = singleDonation.find(donate => donate.id === singleIdInt);
    
    const { id, picture, price, title, description } = clickedDonation;

    useEffect(() => {
        const donateSavedArr = [];

        const getDonationInfoFromLocal = JSON.parse(localStorage.getItem('donate'));
        if (!getDonationInfoFromLocal) {
            donateSavedArr.push(clickedDonation);
            localStorage.setItem('donate', JSON.stringify(donateSavedArr));
        }
        else {
            const isExists = getDonationInfoFromLocal.find(donate => donate.id === id);
            if (!isExists) {
                donateSavedArr.push(...getDonationInfoFromLocal, clickedDonation);
                localStorage.setItem('donate', JSON.stringify(donateSavedArr))
            }
            

        }
    }, [])


    return (
        <div className="px-10">
            <div>
                <figure className="relative h-96 w-full">
                    <img
                        className="h-full w-full rounded-xl object-cover object-center"
                        src={picture}
                        alt="nature image"
                    />
                    <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-between bg-[#0b0b0b80] py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <button>Donate ${price}</button>
                    </figcaption>
                    <h2 className="text-3xl text-[#0B0B0B] font-bold pt-7">{title}</h2>
                    <p className="text-[#0b0b0bb3] pt-2">{description}</p>
                </figure>
            </div>
        </div>
    );
};

export default SingleDonation;