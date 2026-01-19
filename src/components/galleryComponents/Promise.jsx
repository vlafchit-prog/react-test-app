import React from 'react'

const Promise = () => {
    return (
        <div className='text-center flex flex-col items-center space-y-10 lg:py-35 md:py-30 sm:py-20 py-15 shadow-xl px-6'>
            <div className='max-w-185 flex flex-col items-center space-y-10'>
                <div>
                    <img src="/FooterLogo.png" alt="Logo Image" className='lg:w-35 md:w-30 sm:w-25 w-20' />
                </div>
                <p className='Simple text-lg '>From the moment you become an Erzulie couple until the moment that you cut the cake, you are assured of the most amazing experience.  Your cake is our priority and we will dedicate hours to designing, creating and perfecting your design so that it’s immaculate from every angle.</p>
            </div>
            <div className='lg:flex gap-10 space-y-10'>
                <div className='lg:block justify-items-center '>
                    <img src="/PromiseHoney.png" alt="Honey Image" className='lg:min-w-100 h-full rounded-2xl' />
                </div>
                <div className=' max-w-145 sm:space-y-10 space-y-5'>
                    <h2 className='text-2xl'>VALUES</h2>
                    <p>We are highly conscious of environmental ethics and sustainability, and are always striving to minimise our carbon footprint on personal and professional levels. We’ve taken strong measures to reduce waste, and to replace single use plastic with sustainable materials.</p>
                    <p>We plant trees to balance out miles travelled to deliver our cakes, and we’re actively making positive changes to maintain our Eco-friendly status.</p>
                    <p>The eggs we use are free range/organic, sourced locally and always freshly laid. Butter is 100% natural and organic, giving our cakes that delicious rich yet subtle flavour, and our Vanilla is purely extracted from the most sumptuous vanilla pods.</p>
                    <p>We only source fair trade Belgian chocolate made from the finest cocoa beans, contributing to our luxurious chocolate ganache filling. Our cakes are covered in a clean finish of luxury Swiss fondant, made from natural ingredients, and is free from additives and preservatives.</p>
                    <p>Our signature, luxurious Swiss Meringue Buttercream is known for its velvety smooth texture that instantly melts in your mouth.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Promise
