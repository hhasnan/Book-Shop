    import { Swiper, SwiperSlide } from 'swiper/react';
    import BookData from '../data/books.json'
    import { HiOutlineBookOpen } from 'react-icons/hi';
    import {Tooltip} from 'react-tooltip';
    import { FreeMode, Pagination } from 'swiper/modules';
    import { Link } from 'react-router-dom';
    import 'swiper/css';
    import 'swiper/css/effect-cards';


    const LatestBooks = () => {

        const latestBooks = [...BookData].sort((a, b) => b.year - a.year).slice(0, 9);

        return (
            <>
                <Swiper
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="latest-books-carousel"
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >

                    {
                        latestBooks.map((book, index) => (
                            <SwiperSlide className='relative' key={index}>
                                <img src={book.image_url} alt="" className='w-[100%] h-[100%] rounded-2xl swiper-img' />
                                <div className='absolute top-0 left-0 w-[100%] h-[100%] rounded-2xl swiper-hover-div'>
                                    <div className='w-[100%] h-[100%] text-[rgba(255, 255, 255, 1)] card-bg absolute z-50 top-0 rounded-2xl '>
                                    </div>
                                    <div className='absolute top-0 left-0 z-[100] swiper-hover-text flex flex-col w-[100%] h-[100%] rounded-2xl ' style={{justifyContent:'space-between'}}>
                                        <h3 className='text-sm font-bold title absolute top-[-1%] mx-4'>Name : {book.title}</h3>
                                        <Link to={`/explore/read-more/${encodeURIComponent(book.id)}`} className='read-more flex flex-row w-[86%] my-auto mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-sm px-2 py-2 shadow-lg'>
                                            <div className="mx-auto"><HiOutlineBookOpen/></div>
                                        </Link>
                                        <p className='text-sm author absolute bottom-[-5%] mx-4'>
                                            Year : {book.year} <br />
                                            Author : {book.author}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                <Tooltip anchorSelect=".read-more" place="top" className="z-[100]">
                    Read More
                </Tooltip>
            </>
        )
    }

    export default LatestBooks
