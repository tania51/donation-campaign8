import { useState, useRef } from "react";
import Donation from "../Donation/Donation";
import bgImage from '../../assets/banner.jpg';



const Donations = ({ donationsData }) => {
    const allDonationData = [...donationsData];

    const [displayCards, setDisplayCards] = useState(allDonationData)
    const [searchDisplayCards, setSearchDisplayCards] = useState(allDonationData);
    const searchRef = useRef();

    const searchHandeler = e => {
        e.preventDefault();

        const searchInputValue = searchRef.current.value;
        console.log(searchInputValue);
        if (searchInputValue === '') {
            setSearchDisplayCards(displayCards);
        }
        else if (searchInputValue === 'health') {
            const healthCards = displayCards.filter(cards => cards.category === 'Health');
            setSearchDisplayCards(healthCards);
        }
        else if (searchInputValue === 'education') {
            const educationCards = displayCards.filter(cards => cards.category === 'Education');
            setSearchDisplayCards(educationCards);
        }
        else if (searchInputValue === 'clothing') {
            const clothingCards = displayCards.filter(cards => cards.category === 'Clothing');
            setSearchDisplayCards(clothingCards);
        }
        else if (searchInputValue === 'food') {
            const foodCards = displayCards.filter(cards => cards.category === 'Food');
            setSearchDisplayCards(foodCards);
        }
    }

    return (
        <div>
            {/* banner section */}
            <div className="h-[70vh]">
                <div className={`h-full w-full flex items-center justify-center bg-contain bg-blend-overlay bg-[#fcfbfbf2]`} style={{backgroundImage: `url(${bgImage}`}}>
                    <div>
                        <h1 className="text-lg md:text-3xl text-[#0B0B0B] font-bold mb-7">I Grow By Helping People In Need</h1>
                        <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem] mt-3">
                            <input ref={searchRef}
                                type="search"
                                className="peer h-full w-full rounded-[7px] border border-[#DEDEDE] bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder="Search here...."
                                required
                            />
                            <button onClick={searchHandeler}
                                className="!absolute right-0 top-0 bottom-0 z-10 select-none rounded-r bg-[#FF444A] py-2 px-5 text-center align-middle font-sans text-xs font-bold capitalize text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:shadow-none"
                                type="button"
                                data-ripple-light="true"
                            >
                                Search
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            {/* all cards section */}
            <div className="my-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
                    {
                        searchDisplayCards.map(donation => <Donation key={donation?.id} donation={donation}></Donation>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Donations;