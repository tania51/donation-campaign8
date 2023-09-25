import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="px-10">
            <div className="flex justify-between py-6 items-center">
                <img className="w-52" src="../../../src/assets/Logo.png" alt="some" />
                <div className="flex gap-5 text-lg">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-[#0B0B0B]" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-[#0B0B0B]" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "text-[#0B0B0B]" : isActive ? "text-[#FF444A] underline" : ""
                        }
                    >Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;