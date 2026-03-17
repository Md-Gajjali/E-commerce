import React from 'react'
import Container from './Container'
import SecHeading from './SecHeading'


const NewArrival = () => {
    return (
        <div>
            <Container>
                <div className='mt-42 '>
                    <SecHeading
                        className='flex flex-col items-center'
                        title='Featured'
                        heading='New Arrival'
                    />
                </div>
                <div className="grid lg:grid-cols-2 gap-4 items-start mt-15">
                    <div className="col-span-1 row-span-2 ">
                        <div className=' bg-[url(assets/New-Arrival/Ps5.png)]  h-105  relative  md:h-130 bg-center bg-no-repeat bg-cover text-white px-7.5  py-22.25' >
                            
                            <div className='absolute bottom-0 pb-7.5'>
                                <h3 className='font-Inter font-semibold text-[24px] '>PlayStation 5</h3>
                                <p className='font-pop font-normal text-[14px] w-60.5 leading-5.25 text-[#fafafac5] mt-4 mb-4'>Black and White version of the PS5 coming out on sale.</p>
                                <a href="" className='hover:border-b mt-4 font-pop font-medium text-[16px]'>Shop Now</a>
                            </div>
                        </div>
                    </div>

                    <div className=' bg-[url(assets/New-Arrival/vibe.png)] relative w-full h-70 bg-center bg-no-repeat bg-cover' >
                        <div className='absolute bottom-0 py-6 px-6 '>
                            <h3 className='font-Inter font-semibold text-[24px] text-white '>Women’s Collections</h3>
                            <p className='font-pop font-normal text-[14px] w-60.5 leading-5.25 text-[#fafafac5] mt-4 mb-4'>Featured woman collections that give you another vibe.</p>
                            <a href="" className='hover:border-b  font-pop font-medium text-[16px] text-white'>Shop Now</a>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4 col-span-1'>
                        <div className='bg-[url(assets/New-Arrival/speaker.png)] relative w-full h-44 md:h-56 bg-center bg-no-repeat bg-cover' >
                            <div className='absolute bottom-0 py-6 px-6 '>
                                <h3 className='font-Inter font-semibold text-[24px] text-white '>Speaker</h3>
                                <p className='font-pop font-normal text-[14px] w-60.5 leading-5.25 text-[#fafafac5] mt-sm mb-xm'>Amazon wireless speakers</p>
                                <a href="" className='hover:border-b  font-pop font-medium text-[16px] text-white'>Shop Now</a>
                            </div>
                        </div>
                            <div className='bg-[url(assets/New-Arrival/perfume.png)] w-full relative h-44 md:h-56 bg-center bg-no-repeat bg-cover' >
                                <div className='absolute bottom-0 py-6 px-6 '>
                                    <h3 className='font-Inter font-semibold text-[24px] text-white '>Perfume</h3>
                                    <p className='font-pop font-normal text-[14px] w-60.5 leading-5.25 text-[#fafafac5] mt-sm mb-xm'>GUCCI INTENSE OUD EDP</p>
                                    <a href="" className='hover:border-b  font-pop font-medium text-[16px] text-white'>Shop Now</a>
                                </div>
                            </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NewArrival
