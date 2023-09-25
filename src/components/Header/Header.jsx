import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="px-10">
            <div className="md:flex md:justify-between py-6 items-center text-center">
                <img className="w-52 mx-auto md:mx-0" src="../../../src/assets/Logo.png" alt="some" />
                <div className="flex text-lg gap-3 justify-center pt-4 md:pt-0">
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline" : isPending ? 'pending' : ''
                        }
                    >Home
                    </NavLink>
                    <NavLink to="/donation"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline" : isPending ? 'pending' : ''
                        }
                    >Donation
                    </NavLink>
                    <NavLink to="/statistics"
                        className={({ isActive, isPending }) =>
                            isActive ? "text-[#FF444A] underline" : isPending ? 'pending' : ''
                        }
                    >Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;