import React from "react";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

const explore = () => {
  return (
    <div className="h-screen bg-black">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 via-gray-900 to-black">
        <figure className="flex flex-col items-center justify-center pt-10 ">
          <div className="text-center pb-10 align-middle min-w-[1100px] h-[300px] p-8 bg-purple-700 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div
              className="md:mt-4 md:mb-8 mb-6 md:pb-2 bg-gradient-to-r from-[#fff] via-[#fff]/80 to-[#9d9ea1]/50 bg-clip-text 
                                text-transparent xl:text-[4rem] md:text-5xl font-bold font-polySans md:max-w-5xl text-center text-[22px] max-w-[575px]"
            >
              Explore
            </div>
            <p className="text-white text-lg font-bold pb-5">
              Explore all the Gaming Events here
            </p>
            <Link
              href="/livestreams"
              className="inline-flex justify-center align-middle items-center p-5 text-lg font-medium text-center text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join Current Live Event
              <BsFillArrowRightCircleFill className="ml-3" />
            </Link>
          </div>
        </figure>

        <div>
          <div className="flex flex-col justify-center items-center content-center ">
            {/* map nft data here using Event Card component to show multiple events*/}
            <div className="flex flex-row p-10">
              {/* creating duplicate events */}
              <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/AptosTrends.png"
                    alt="Gaming Trends on Aptos"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Gaming Trends on Aptos</h2>
                  <div className="flex">
                    <p>Check out Gaming trends on Aptos - 2023</p>
                    <div className="justify-end">
                      <BiHeart />
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                  </div>
                </div>
              </div>
              <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                <figure className="pt-4">
                  <img
                    src="/images/howtoplayumi.jpeg"
                    alt="Umi's Friends Stream"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tutorial: How to play Umi's friends and setup account
                  </h2>
                  <div className="flex">
                    <p>
                      Find out how to create an account in-game and tips for
                      beginners,
                    </p>
                    <div className="justify-end">
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
                  <img src="/images/Cyberpet.png" alt="CyberPet" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Update: CyberPet introduces new skins and much
                    more!
                  </h2>
                  <div className="flex">
                    <p>In the Latest update, CyberPet announces major changes in
                      the game that you do not want to miss!</p>
                    <div className="justify-end">
                      <BiHeart />
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row p-10">
              {/* creating duplicate events */}
              <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="/images/AptosTrends.png"
                    alt="Gaming Trends on Aptos"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Gaming Trends on Aptos</h2>
                  <div className="flex">
                    <p>Check out Gaming trends on Aptos - 2023</p>
                    <div className="justify-end">
                      <BiHeart />
                    </div>
                  </div>
                  <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                  </div>
                </div>
              </div>
              <div className="card card-compact mx-5 w-[400px] bg-base-100 shadow-xl">
                <figure className="pt-4">
                  <img
                    src="/images/howtoplayumi.jpeg"
                    alt="Umi's Friends Stream"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Tutorial: How to play Umi's friends and setup account
                  </h2>
                  <div className="flex">
                    <p>
                      Find out how to create an account in-game and tips for
                      beginners,
                    </p>
                    <div className="justify-end">
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
                  <img src="/images/Cyberpet.png" alt="CyberPet" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Update: CyberPet introduces new skins and much
                    more!
                  </h2>
                  <div className="flex">
                    <p>
                      In the Latest update, CyberPet announces major changes in
                      the game that you do not want to miss!
                    </p>
                    <div className="justify-end">
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
  );
};

export default explore;
