import React, { useEffect, useRef } from 'react'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://assets.polkastarter.gg/PGG_Website_Banners_2ccb26781c/PGG_Website_Banners_2ccb26781c.png')] before:bg-cover before:bg-center before:opacity-50 before:blur-[3px]`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold mb-[2.5rem] `,
    description: `text-[#cccccc] container-[400px] text-3xl mt-[0.8rem] mb-[.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#adff01] rounded-lg mr-5 text-black hover:bg-[#2b9348] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-white rounded-lg mr-5 text-black hover:bg-[#f0f0f0] cursor-pointer`,
    cardContainer: `rounded-[3rem] before:bg-gray-500 before:opacity-5`,
    infoContainer: `h-20  p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
    const ref = useRef(null);

    useEffect(() => {
        import("@lottiefiles/lottie-player");
    })
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.description}>
                            Introducing Tatrix
                        </div>
                        <div className={style.title}>
                            Stream & Organize Games on the Aptos Blockchain
                        </div>

                        <div className={style.ctaContainer}>
                            <button className={style.accentedButton}>Explore</button>
                            <button className={style.button}>Stream</button>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        {/* <img
                            className="rounded-t-lg"
                            src="https://media.istockphoto.com/id/1297564630/vector/game-dev-isometric-concept-education-of-creation-3d-design-of-location-or-level-computer.jpg?s=612x612&w=0&k=20&c=NuOH1Hfd3Y-DJtqwc9bafZEjrifMs47rdr4Zw1nGV3g="
                            alt=""
                        /> */}
                        <lottie-player
                            id="firstLottie"
                            autoplay
                            loop
                            mode="normal"
                            src="https://assets7.lottiefiles.com/packages/lf20_YrdJ2K8cQY.json"
                            style={{ width: "600px", height: "500px" }}
                        ></lottie-player>
                        {/* <div className={style.infoContainer}>
                            <img
                                className="h-[2.25rem] rounded-full"
                                src="https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&w=384"
                                alt=""
                            />
                            <div className={style.author}>
                                <div className={style.name}>Doodles</div>
                                <a
                                    className="text-[#1868b7]"
                                    href="http://localhost:3000/collections/doodles-official"
                                >
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero