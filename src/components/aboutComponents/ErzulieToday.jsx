import React from 'react'

const ErzulieToday = () => {
    return (
        <div className='bg-[url("/bgImage.jpg")] flex lg:flex-row flex-col gap-10 lg:space-y-0 sm:space-y-10 justify-center items-center lg:py-30 md:py-25 sm:py-20 py-15 px-10'>
            <div className='justify-items-center '>
                <img src="/ImageErzulieTodey.jpg" alt="Honey Image" className='lg:min-w-100 h-full rounded-2xl w-180' />
            </div>
            <div className=' max-w-145 sm:space-y-10 space-y-5 text-white sm:text-xl '>
                <h2 className='Simple sm:text-5xl text-3xl text-center'>ERZULIE TODAY,,,</h2>
                <p className='Simple'>My husband and I have driven our vision together and now lead a small team of creatives. We remain actively involved in every detail, running our vibrant bakery and cake academy in South Cambridgeshire.</p>
                <p className='Simple'>Our cakes have been at the centre of many beautiful celebrations across Europe, chosen by celebrities and leading wedding planners in the UK and beyond. I’m passionate about creating an authentic experience for our couples, transforming fragmented concepts into balanced, cohesive designs.</p>
                <p className='Simple'>I love indulging my inner artist, designing elegant masterpieces that celebrate your style and capture the essence of what your marriage represents.</p>
            </div>
        </div>
    )
}

export default ErzulieToday
