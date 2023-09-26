import { Link } from "react-router-dom";


const Donation = ({ donation }) => {

    const { id, picture, category, title, card_bg_color, category_bg_color, text_color } = donation || {};




    return (
        <div>
            <Link to={`/donation-details/${id}`}>
                <div style={{ backgroundColor: card_bg_color }} className="relative flex flex-col rounded bg-clip-border text-gray-700 shadow-md">
                    <div className="relative h-44 overflow-hidden rounded-t-lg bg-white bg-clip-border text-gray-700">
                        <img
                            src={picture}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="px-5 flex pt-5">
                        <p style={{ backgroundColor: category_bg_color, color: text_color }} className="block font-medium leading-relaxed text-blue-gray-900 antialiased px-3 rounded">
                            {category}
                        </p>
                        <p className="flex-1"></p>
                    </div>
                    <div className="px-5 pb-5">
                        <h2 style={{ color: text_color }} className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased pt-2">
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Donation;