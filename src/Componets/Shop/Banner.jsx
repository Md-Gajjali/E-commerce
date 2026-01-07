import React from 'react'
import Cards from '../Cards'
import speaker from '../../assets/Selling-Product/speaker.png'
import keyboard from '../../assets/keyBoard.png'
import LAD from '../../assets/LAD.png'
import Container from '../Container'

const Banner = () => {
    return (
        <>
            <div className=' '>
                <Container>
                    <div className='flex relative'>
                        <div className='w-[20%]'>
                            <div className='flex  mt-20 text-[14px] font-pop font-normal text-[#3736367b]'>
                                <p>Home <span>/</span></p>
                                <p> SHop</p>
                            </div>
                            <ul className='leading-8 py-12.5 text-[16px] font-normal '>
                                <li className='font-pop font-bold text-[20px]'>Shop by Category</li>
                                <li>Woman’s Fashion</li>
                                <li>Men’s Fashion</li>
                                <li>Electronics</li>
                                <li>Home & Lifestyle</li>
                                <li>Medicine</li>
                                <li>Baby’s & Toys</li>
                                <li>Groceries & Pets</li>
                                <li>Health & Beauty</li>
                            </ul>
                            <ul className='leading-8'>
                                <li className='font-pop font-bold text-[20px]'> Shop by Color</li>
                                <li> Color 1</li>
                                <li>Color 2</li>
                                <li>Color 3</li>
                            </ul>
                        </div>
                        <div className='w-[80%] mt-52.5'>
                            <div className='flex flex-wrap justify-between gap-7.5'>
                                <div className='flex justify-end  absolute top-40 right-0 gap-2 items-center'>
                                    <p className='font-pop text-[16px] font-normal'>Show :</p>
                                    <input type="text" className='w-24.25 border-2 rounded-sm border-[#a2a0a0] py-3 px-10.5 h-7.5' />
                                </div>
                                <Cards
                                    ImgSrc={speaker}
                                    title='The north coat'
                                    price='260'
                                    discountPrice='360'
                                    Review='65'
                                    btn='Add To Card'
                                    disHidden='hidden'
                                />
                                <Cards
                                    ImgSrc={keyboard}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                                <Cards
                                    ImgSrc={LAD}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                                <Cards
                                    ImgSrc={speaker}
                                    title='The north coat'
                                    price='260'
                                    discountPrice='360'
                                    Review='65'
                                    btn='Add To Card'
                                    disHidden='hidden'
                                />
                                <Cards
                                    ImgSrc={keyboard}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                                <Cards
                                    ImgSrc={LAD}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                                <Cards
                                    ImgSrc={speaker}
                                    title='The north coat'
                                    price='260'
                                    discountPrice='360'
                                    Review='65'
                                    btn='Add To Card'
                                    disHidden='hidden'
                                />
                                <Cards
                                    ImgSrc={keyboard}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                                <Cards
                                    ImgSrc={LAD}
                                    title='HAVIT HV-G92 Gamepad'
                                    price='120'
                                    discountPrice='160'
                                    DisParcentge='40%'
                                    Review='88'
                                    btn='Add to Card'
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>

    )
}

export default Banner
