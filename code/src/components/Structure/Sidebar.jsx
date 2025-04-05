import { ImCross } from "react-icons/im";
import { FaImagePortrait, FaUser } from "react-icons/fa6";
import { MdRateReview, MdSpaceDashboard } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { usePanelContext } from "../../contexts/PanelContext";
import { useStateContext } from "../../contexts/StateContext";
import { IoCreateOutline } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";
import { useMobileContext } from "../../contexts/MobileContext";
import { FaQuestionCircle } from "react-icons/fa";

const Sidebar = ({ isOpen, setOpen }) => {
    const { setSidebarOpen } = usePanelContext()
    const { token } = useStateContext()
    const { isMobile } = useMobileContext()

    return (
        <>
            <aside className="fixed top-0 left-0 z-40 w-64 h-screen animate-slideRight dark:bg-neutral-800" >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-neutral-800">
                    <ul className="space-y-2 font-medium">
                        <div className="p-3 w-full flex justify-end" onClick={() => { setOpen(false); setSidebarOpen(false) }}>
                            <ImCross className="dark:text-white" />
                        </div>
                        {
                            !token &&
                            <li>
                                <Link to='/landing' className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                    onClick={() => { if (isMobile) { setOpen(false) } }}
                                >
                                    <div className="dark:text-white"><MdSpaceDashboard size={20} /></div>
                                    <span className="ms-3">Home</span>
                                </Link>
                            </li>
                        }
                        {
                            token &&
                            <>
                                <li>
                                    <Link to="profile" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                        onClick={() => { if (isMobile) { setOpen(false) } }}
                                    >
                                        <div className="dark:text-white"><FaUser size={20} /></div>
                                        <span className="ms-3">Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                        onClick={() => { if (isMobile) { setOpen(false) } }}
                                    >
                                        <div className="dark:text-white"><MdSpaceDashboard size={20} /></div>
                                        <span className="ms-3">Home</span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="make-biodata" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 group"
                                        onClick={() => { if (isMobile) { setOpen(false) } }}
                                    >
                                        <div className="dark:text-white">
                                            <FaImagePortrait size={20} />
                                        </div>
                                        <span className="flex-1 ms-3 whitespace-nowrap">Biodata</span>
                                    </Link>
                                </li>
                            </>
                        }
                        <li>
                            <Link to="/review" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                onClick={() => { if (isMobile) { setOpen(false) } }}
                            >
                                <div className="dark:text-white"><MdRateReview size={20} /></div>
                                <span className="ms-3">Reviews</span>
                            </Link>
                        </li>
                        {
                            !token &&
                            <>
                                <li>
                                    <Link to="signin" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                        onClick={() => { if (isMobile) { setOpen(false) } }}
                                    >
                                        <div className="dark:text-white"><BiLogInCircle size={20} /></div>
                                        <span className="ms-3">Sign In</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="signup" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                                        onClick={() => { if (isMobile) { setOpen(false) } }}
                                    >
                                        <div className="dark:text-white"><IoCreateOutline size={20} /></div>
                                        <span className="ms-3">Sign Up</span>
                                    </Link>
                                </li>
                            </>
                        }

                        <li>
                            <Link to="/about-us" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 group"
                                onClick={() => { if (isMobile) { setOpen(false) } }}
                            >
                                <div className="dark:text-white">
                                    <IoMdInformationCircle size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 group"
                                onClick={() => { if (isMobile) { setOpen(false) } }}
                            >
                                <div className="dark:text-white">
                                    <RiContactsFill size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Contact Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/frequently-asked-question" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700 group"
                                onClick={() => { if (isMobile) { setOpen(false) } }}
                            >
                                <div className="dark:text-white">
                                    <FaQuestionCircle size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">FAQ</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar