import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from 'react-icons/bs'

function Footer(){
    const currentDate =  new Date();
    const currentYear = currentDate.getFullYear();

    return(
        <>
            <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col w-[100vw] sm:flex-row items-center justify-between text-white sm:px-20 bg-gray-800'>
                <section className='text-lg '>
                    Copyright {currentYear} | All rights reserved
                </section>

                <section className='flex items-center justify-center gap-5 text-2xl text-white'>
                    <a className='hover:text-yellow-500 transition-all ease-in-out cursor-pointer'>
                        <BsFacebook />
                    </a>

                    <a className='hover:text-yellow-500 transition-all ease-in-out cursor-pointer'>
                        <BsInstagram />
                    </a>

                    <a className='hover:text-yellow-500 transition-all ease-in-out cursor-pointer'>
                        <BsLinkedin />
                    </a>

                    <a className='hover:text-yellow-500 transition-all ease-in-out cursor-pointer'>
                        <BsTwitter />
                    </a>
                </section>
            </footer>
        </>
    )
}

export default Footer;