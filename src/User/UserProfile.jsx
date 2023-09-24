import { useEffect } from "react";
import { useSelector } from "react-redux";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function UserProfile(){

    const userData = useSelector((state)=>state?.auth?.data);
    console.log(userData);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-5 text-white shadow-[0_0_10px_black] w-[35vw]">
                    <img src={userData?.avatar?.secure_url} 
                         alt="profie-image"
                         className="w-40 m-auto rounded-full border border-black" 
                    />

                    <h3 className="text-xl text-center font-semibold capitalize">
                        {userData?.fullName}
                    </h3>

                    <div className="grid grid-cols-2">
                        <p>Email : </p>
                        <p>{userData?.email}</p>

                        <p>Role :</p>
                        <p>{userData?.role}</p>

                        <p>Subscription :</p>
                        <p>{userData?.subscription?.status==='active'?'Active':'Inactive'}</p>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                        <Link to='/changepassword' className='w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold cursor-pointer p-3 text-center'>
                            <button>Change Password</button>
                        </Link>

                        <Link to='/user/editprofile' className='w-1/2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold cursor-pointer p-3 text-center'>
                            <button>Edit Profile</button>
                        </Link>
                    </div>

                    {userData?.subscription?.state==='active' && (
                        <button className="w-full  bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold cursor-pointer p-3 text-center">
                            Cancel Subscription
                        </button>
                    )}
                </div>
            </div>
        </HomeLayout>
    )
}

export default UserProfile;