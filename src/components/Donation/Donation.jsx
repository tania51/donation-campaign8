import { Link } from "react-router-dom";


const Donation = ({ donation }) => {

    const { id, picture, category, title } = donation || {};

    

    
    return (
        <div>
            <Link to={`/singledonation/${id}`}>
                <div className="relative flex flex-col rounded-x bg-clip-border text-gray-700 shadow-md">
                    <div className="relative mt-4 h-44 overflow-hidden rounded-t-lg bg-white bg-clip-border text-gray-700">
                        <img
                            src={picture}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-5">
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {category}
                        </p>
                        <h2 className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased pt-2">
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Donation;