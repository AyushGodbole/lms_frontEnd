import {FiMenu} from 'react-icons/fi'
import {AiFillCloseCircle} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../Redux/Slices/Authslice';

// this is sidebar
function HomeLayout({children}){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // check if user is logged in
    const isLoggedIn = useSelector((state)=>state?.auth?.isLoggedIn);

    // for displaying roles
    const role = useSelector((state)=>state?.auth?.role);

    // function to implement log-out
    async function handleLogout(e){
        e.preventDefault();

        const response = await dispatch(logOut());
        if(response?.payload?.success){
            // console.log(response);
            // then go to home page and reset value
            navigate('/');
        }
        // navigate('/');
    }


    function changeWidth(){
        const drawerSide = document.getElementsByClassName('drawer-side');
        // console.log('d-side',drawerSide);
        // console.log('d-side-0',drawerSide[0]);
        drawerSide[0].style.width = 'auto';
    }

    function hideDrawer(){
        const element = document.getElementsByClassName('drawer-toggle');
        console.log(element);
        element[0].checked = false;
        
        const drawerSide = document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width = '0';
    }

    return(
        <>
            <div className="min-h-[90vh]">
                <div className="drawer absolute left-0 z-50 w-fit">
                    <input className="drawer-toggle" id="my-drawer" type="checkbox"/>
                    <div className="drawer-content">
                        <label htmlFor="my-drawer" className='cursor-pointer relative'>
                            <FiMenu 
                                onClick={changeWidth}
                                size={'32px'}
                                className='font-bold text-white m-4'
                            />
                        </label>
                    </div>

                    <div className='drawer-side w-0'>
                        <label htmlFor="my-drawer" className='drawer-overlay'></label>
                        <ul className='menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative'>
                            <li className='w-fit z-50 absolute right-2'>
                                <button onClick={hideDrawer}>
                                    <AiFillCloseCircle size={'24px'}/>
                                </button>
                            </li>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>

                            {isLoggedIn && role==='ADMIN' && (
                                <li>
                                    <Link to='/admin/dashboard'>Admin Dashboard</Link>
                                </li>
                            )}

                            <li>
                                <Link to='/courses'>All Courses</Link>
                            </li>
                            <li>
                                <Link to='/about'>About us</Link>
                            </li>
                            <li>
                                <Link to='/contact'>Contact us</Link>
                            </li>

                            {/* if not logged in show login , signup button */}
                            {!isLoggedIn && (
                                <li className='w-[67%]'>
                                    <div className='w-full flex items-center justify-center gap-4'>
                                        <button className='btn-primary px-4 py-1 font-semibold rounded-md'>
                                            <Link to='/login'>Login</Link>
                                        </button>
                                        <button className='btn-secondary px-4 py-1 font-semibold rounded-md'>
                                            <Link to='/signup'>Signup</Link>
                                        </button>
                                    </div>
                                </li>
                            )}

                            {/* if logged in show profile , logout button */}
                            {isLoggedIn && (
                                <li className='w-[67%]'>
                                    <div className='w-full flex items-center justify-center gap-4'>
                                        <button className='btn-primary px-4 py-1 font-semibold rounded-md'>
                                            <Link to='/user/profile'>Profile</Link>
                                        </button>
                                        <button className='btn-secondary px-4 py-1 font-semibold rounded-md'>
                                            <Link onClick={handleLogout}>Logout</Link>
                                        </button>
                                    </div>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>

                {children}

                <Footer />
            </div>
        </>
    )
}

export default HomeLayout;