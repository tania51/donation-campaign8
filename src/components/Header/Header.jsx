import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="px-10">
            <div className="flex justify-between py-6 items-center">
                <img className="w-52" src="../../../src/assets/Logo.png" alt="some" />
                <div className="flex text-lg gap-3">
                    <NavLink to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >Home
                    </NavLink>
                    <NavLink to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >Donation
                    </NavLink>
                    <NavLink to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >Statistics
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;