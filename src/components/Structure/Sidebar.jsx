import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../services/user-api";
import { ImCross } from "react-icons/im";
import { FaImagePortrait, FaUser } from "react-icons/fa6";
import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { RiContactsFill, RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setOpen, onLogout }) => {

    return (
        <>


            <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                    <ul className="space-y-2 font-medium">
                        <div className="p-3 w-full flex justify-end" onClick={() => setOpen(false)}>
                            <ImCross />
                        </div>
                        <li>
                            <Link className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <div><FaUser size={20} /></div>
                                <span className="ms-3">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100 ">
                                <div><MdSpaceDashboard size={20} /></div>
                                <span className="ms-3">Home</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <div>
                                <FaImagePortrait size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Biodata</span>
                                {/* <span class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full ">3</span> */}
                            </Link>
                        </li>

                        <li>
                            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <div>
                                <IoMdInformationCircle size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                                <div>
                                <RiContactsFill size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
                            </Link>
                        </li>

                        <li>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" onClick={onLogout}>
                                <div>
                                <RiLogoutCircleRLine size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
                                {/* <span class="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">Pro</span> */}
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </aside>


        </>
    );
};



export default Sidebar