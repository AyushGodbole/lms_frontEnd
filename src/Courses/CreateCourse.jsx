import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../Redux/Slices/CourseSlice";
import HomeLayout from "../Layouts/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput,setUserInput] = useState({
        title:'',
        category:'',
        createdBy:'',
        description:'',
        thumbNail:null,
        previewImage:'',
    })

    function handleImageUpload(e){
        e.preventDefault();

        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            // after image is fully loaded
            fileReader.addEventListener('load',function(){
                setUserInput({
                    ...userInput,
                    // previewImage to e send as url to backend
                    previewImage:this.result,
                    // thumbNail to be shown on frontend
                    thumbNail:uploadedImage
                })
            })
        }
    }

    function handleUserInputChange(e){
        const {name,value} = e.target;
        setUserInput({
            ...userInput,
            [name]:value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();

        if(!userInput.title||!userInput.category||!userInput.createdBy||!userInput.description||!userInput.thumbNail){
            toast.error('All fields are mandatory');
            return;
        }

        const response = await dispatch(createNewCourse(userInput));

        if(response?.payload?.success){
            setUserInput({
                title:'',
                category:'',
                createdBy:'',
                description:'',
                thumbNail:null,
                previewImage:'',
            })
            navigate('/courses');
        }

    }

    return (
        (
            <HomeLayout>
                <div className="flex justify-center items-center h-[100vh]">
                <form noValidate onSubmit={onFormSubmit}
                      className="flex flex-col justify-center rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative"
                >
                    

                    <h1 className="text-2xl text-center font-bold mb-4">
                        <Link className=" absolute left-2 text-2xl text-accent cursor-pointer" onClick={()=>navigate(-1)}>
                            <AiOutlineArrowLeft />
                        </Link>
                        Create New Course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6">
                            <div>
                                <label htmlFor="image_upload">
                                    {userInput.previewImage?
                                    (<img src={userInput.previewImage}
                                          className="w-full h-44 m-auto border"/>
                                    ):(
                                        <div className=" w-full h-44 m-auto flex items-center justify-center border cursor-pointer">
                                            <h1 className="font-bold text-lg">Upload the course thumNail</h1>
                                        </div>
                                    )}
                                </label>
                                <input type="file"
                                       id="image_upload"
                                       className="hidden"
                                       accept=".jpg,.jpeg,.png"
                                       name="image_upload"
                                       onChange={handleImageUpload}
                                />
                                </div>
                            <div className="flex flex-col gap-1">
                                    <label htmlFor="title">
                                        course title : {''}
                                    </label>
                                    <input type="text"
                                           className=" bg-transparent px-2 py-1 border outline-none"
                                           required
                                           name="title"
                                           id="title"
                                           placeholder="course title ..."
                                           value={userInput.title}
                                           onChange={handleUserInputChange} 
                                    />
                                </div>
                        </div>

                        {/* right part */}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                    <label htmlFor="createdBy">
                                        course instructor : {''}
                                    </label>
                                    <input type="text"
                                           className=" bg-transparent px-2 py-1 border outline-none"
                                           required
                                           name="createdBy"
                                           id="createdBy"
                                           placeholder="course instructor ..."
                                           value={userInput.createdBy}
                                           onChange={handleUserInputChange} 
                                    />
                            </div>
                        

                          <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                    <label htmlFor="category">
                                        course category : {''}
                                    </label>
                                    <input type="text"
                                           className=" bg-transparent px-2 py-1 border outline-none"
                                           required
                                           name="category"
                                           id="category"
                                           placeholder="course category ..."
                                           value={userInput.category}
                                           onChange={handleUserInputChange} 
                                    />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-col gap-1">
                                    <label htmlFor="category">
                                        course description : {''}
                                    </label>
                                    <textarea type="text"
                                           className=" bg-transparent px-2 py-1 border outline-none resize-none overflow-y-scroll"
                                           required
                                           name="description"
                                           id="description"
                                           placeholder="course description ..."
                                           value={userInput.description}
                                           onChange={handleUserInputChange} 
                                    />
                            </div>
                        </div>
                        </div>
                    </main>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-sm font-semibold text-lg cursor-pointer bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 mt-3"
                    >
                        Create Course
                    </button>
                </form>
                </div>
            </HomeLayout>
        )
    )
}

export default CreateCourse;