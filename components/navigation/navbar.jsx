import Wallet from "../../components/petraWallet/wallet";

export default function Navbar() {
	return (
		<div>
			<a target={"_blank"} className="text-[32px] text-white font-serif">
				{/* <img src="/logo.png"></img> */} TATRIX
			</a>
			{/* <ConnectButton></ConnectButton> */}
			<Wallet/>
		</div>
	);
}
