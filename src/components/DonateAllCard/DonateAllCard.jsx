import { Link } from "react-router-dom";


const DonateAllCard = ({ donate }) => {
    const { id, picture, category, title, price, card_bg_color, category_bg_color, text_color } = donate;
    return (
        <div>
            <div style={{ backgroundColor: card_bg_color }} className="relative flex w-full h-52 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className="flex">
                        <p style={{ backgroundColor: category_bg_color, color: text_color }} className="block font-medium leading-relaxed text-blue-gray-900 antialiased px-3 rounded mb-1">
                            {category}
                        </p>
                        <p className="flex-1"></p>
                    </div>
                    <h4 className="mb-1 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{ color: text_color }} className="mb-2 block font-semibold font-sans text-base leading-relaxed text-gray-700 antialiased">
                        ${price}
                    </p>
                    <a className="inline-block" href="#">
                        <Link to={`/donation-details/${id}`}>
                            <button style={{ backgroundColor: text_color }}
                                className="rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                View Details

                            </button>
                        </Link>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DonateAllCard;