import Wallet from "../../components/petraWallet/wallet";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { useState } from "react";
import tatrixLogo from '../../public/images/tatrixLogo.png'
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const style = {
  wrapper: `bg-black w-screen px-[1.2rem] py-[0.8rem] flex `,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#363840] rounded-[0.8rem] hover:bg-[#4c505c]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] font-Outfit font-light text-[12px] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` font-Outfit font-light flex items-center align-right justify-end`,
  headerItem: ` font-Outfit font-light text-white px-4 font-bold font-Outfit text-[#c8cacd] hover:text-white cursor-pointer`,
  headerIcon: `text-[#8a939b] text-3xl font-black px-4 hover:text-white cursor-pointer`,
};

export default function Navbar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("Enter Your Streaming ID");

  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={tatrixLogo} height={50} width={60} alt="mantle logo" />
          <div
            href="/"
            target={"_blank"}
            className="text-[32px] px-2 text-white font-serif"
          >
            TATRIX
          </div>
          <div className={style.logoText}></div>
        </div>
      </Link>

      {/* search bar to search streams */}
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          type="text"
          value={searchQuery}
        //  onKeyPress={(e) => {
        // if (e.key === 'Enter')
        //     console.log(searchQuery)
        // }}
        />
        <button
          onClick={() => {
            router.push(`/streaming/${searchQuery}`);
          }}
          className="px-2 text-[#98ee2c] font-Outfit text-[14px] font-bold"
        >
          Search
        </button>
      </div>

      <div className={style.headerItems}>
        <Link href="/streaming">
          {/* <div className={style.headerItem}> Streaming </div> */}
        </Link>
        <div
          className={style.headerItem}
          onClick={() => {
            router.push("/event");
          }}
        >
          Create Event
        </div>
        <div
          className={style.headerItem}
          onClick={() => {
            router.push("/explore");
          }}
        >
          Explore
        </div>
        <div className={style.headerItem} onClick={() => { router.push('/CreateAndViewAsset') }}> Video NFT</div>
        <div
          className={style.headerItem}
          onClick={() => {
            router.push("/tournament");
          }}
        >
          Tournaments
        </div>

        {/* <div className={style.headerIcon} onClick={() => { router.push(`/profile/${address}`) }}> */}
        <div
          className={style.headerIcon}
          onClick={() => {
            router.push("/nft");
          }}
        >
          <CgProfile />
        </div>
        <div className={style.headerIcon}>

        </div>
        <div className="flex relative text-lg font-semibold px-10 py-3 bg-[#98ee2c] mr-5 text-black hover:bg-[#f0f0f0] cursor-pointer ">
          <Wallet />
        </div>
      </div>
    </div>
  );
}
