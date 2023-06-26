import React from 'react'
import Link from 'next/link';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'

const explore = () => {
    return (
        <div className='h-screen bg-black'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black'>
                <figure className="flex flex-col items-center justify-center pt-10 ">
                    <div className="text-center pb-10 align-middle min-w-[1100px] h-[300px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
                                text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]">
                            Explore</div>
                        <p className='text-white text-lg font-bold pb-5'>
                            Explore all the Gaming Events here
                        </p>
                        <Link href="/explore" className="inline-flex justify-center align-middle items-center p-5 text-lg font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >
                            Join Current Live Event
                            <BsFillArrowRightCircleFill className="ml-3" />
                        </Link>
                    </div>
                </figure>

                <div>
                    <div className="align center justify-center">
                        {/* map nft data here using Event Card component to show multiple events*/}
                        <div className='flex p-10'>
                            {/* creating duplicate events */}
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">God Of War Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2758&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">MetaChess3 Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Mario Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex p-10'>
                            {/* creating duplicate events */}
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">God Of War Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2758&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">MetaChess3 Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                                <figure>
                                    <img src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" alt="Shoes" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">Mario Stream</h2>
                                    <div className='flex'>
                                        <p>Watch Finals here</p>
                                        <div className='justify-end'>
                                            <BiHeart />
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        {/* <button className="btn btn-primary">Buy Now</button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default explore