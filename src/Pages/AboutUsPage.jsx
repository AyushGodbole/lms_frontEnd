import HomeLayout from '../Layouts/HomeLayout'
import aboutMainImage from '../Assets/Images/aboutMainImage.png'
import ajpImage from '../Assets/Images/apj.png'
import billGates from '../Assets/Images/billGates.png'
import einstein from '../Assets/Images/einstein.png'
import steveJobs from '../Assets/Images/steveJobs.png'
import nelsonMandela from '../Assets/Images/nelsonMandela.png'



function AboutUs(){
    return(
        <HomeLayout>
            <div className='flex flex-col text-white pl-20 pt-20'>
                <div className='flex items-center gap-5 mx-10'>
                    {/* left section */}
                    <section className='w-1/2 space-y-2'>
                        <h1 className='text-5xl text-yellow-500 font-semibold'>
                            Affordable and Quality Education.
                        </h1>
                        <p className='text-xl text-gray-200'>
                            Our aim is to provide the affordable and quality education in the world.
                            we are providing the platform for the aspiring teacher and students to 
                            share their skill,creativity and knowledge to each other to empower and 
                            contribute in the growth and wellness of mankind.
                        </p>
                    </section>

                    {/* right section */}
                    <section className='w-1/2 '>
                        <img src={aboutMainImage} alt="aboutImage" className='drop-shadow-2xl' style={
                            {
                                filter:'drop-shadow(0 10px 10px rgb(0,0,0.7))'
                            }
                        }/>
                    </section>
                </div>

                {/* carouse part */}

                <div className="carousel w-1/2 m-auto my-14">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center m-auto gap-4'>
                            <img src={nelsonMandela} className="w-[40%] rounded-full border border-gray-200" />
                            <h2 className='text-2xl font-semibold'>Nelson Mandela</h2>
                            <p>{"Education is the most powerful weapon which you can use to change the world."}</p>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-[7.25rem] right-[7.25rem] top-[45%]">
                            <a href="#slide5" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center m-auto gap-4'>
                        <img src={ajpImage} className="w-[40%] rounded-full border border-gray-200" />
                        <h2 className='text-2xl font-semibold'>Apj Abdul Kalam</h2>
                        <p>{"Determination is the power that sees us through all our frustration and obstacles."}</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-[7.25rem] right-[7.25rem] top-[45%]">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center m-auto gap-4'>
                        <img src={einstein} className="w-[40%] rounded-full border border-gray-200" />
                        <h2 className='text-2xl font-semibold'>Einstein</h2>
                        <p>{"Try not to become a man of success, but rather try to become a man of value."}</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-[7.25rem] right-[7.25rem] top-[45%]">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center m-auto gap-4'>
                        <img src={steveJobs} className="w-[40%] rounded-full border border-gray-200" />
                        <h2 className='text-2xl font-semibold'>Steve Jobs</h2>
                        <p>{"The people who are crazy enough to think they can change the world are the ones who do."}</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-[7.25rem] right-[7.25rem] top-[45%]">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide5" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                        <div className='flex flex-col items-center m-auto gap-4'>
                        <img src={billGates} className="w-[40%] rounded-full border border-gray-200" />
                        <h2 className='text-2xl font-semibold'>Bill Gates</h2>
                        <p>{"If you are born poor it’s not your mistake, but if you die poor it's your mistake."}</p>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-[7.25rem] right-[7.25rem] top-[45%]">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
        </HomeLayout>
    )
}

export default AboutUs;