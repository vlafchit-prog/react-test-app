import React from 'react'
import { NavLink } from 'react-router-dom'

const MeetNina = () => {
    return (
        <div>
            <div className='text-center mb-45 flex flex-col items-center space-y-10'>
                <h2 className='text-3xl mb-3'>MEET</h2>
                <h2 className='text-6xl Simple'>NINA</h2>
                <hr className='text-main-rose w-60'/>
                <h3 className='Elegant text-7xl'>It all started with Lola.</h3>
            </div>
            <div className='bg-[#f3edec] flex flex-col items-center pb-30 sm:px-10'>

                <div className='flex gap-10 relative top-[-120px] '>
                    <div className='max-w-120'>
                        <img src="/NinaImage1.jpg" alt="Image Nina" className='lg:block hidden rounded-xl' />
                    </div>
                    <div className='lg:max-w-120'>
                        <img src="/NinaImage2.jpg" alt="Image Nina" className='rounded-xl' />
                    </div>
                    <div className='max-w-120'>
                        <img src="/NinaImage3.jpg" alt="Image Nina" className='lg:block hidden rounded-xl' />
                    </div>
                </div>

                <div className=' max-w-167 text-center space-y-6 px-4  text-lg'>
                   <p className='Simple'>Lola was a French high-end fashion magazine I created as a child with my sisters.</p>
                   <p className='Simple'>We used to pretend we owned a glamorous enterprise as editors of our fabulously fictional magazine. I would sketch these gorgeous bridal gowns with a clear vision of my haute couture designs. I knew even then that I would someday create my own company. As it happened, things turned out to be a little less gowns and a little more ganache, but I can’t think of a business I would rather be behind than this one.</p>
                   <p className='Simple'>I’m a British designer with Egyptian and Turkish roots. I trained in bridal fashion design, and always had a passion for travelling the world and immersing myself in different art and cultures. This has significantly shaped my designs and allowed me to discover unique ways of expressing emotions through art. I feel honoured to have the opportunity to create cakes for weddings worldwide and bring dream designs to life.</p>
                   <h3 className='Elegant text-6xl mt-15 mb-2'>Nina</h3>
                   <h3 className='text-xl'>EDITOR OF ELEGANCE AT ERZULIE</h3>
                </div>
            </div>
        </div>
    )
}

export default MeetNina
