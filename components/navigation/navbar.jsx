import styles from "../../styles/Navbar.module.css";
import Wallet from "../../components/petraWallet/wallet";

export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a target={"_blank"} className="text-[32px] text-white font-serif">
				{/* <img src="/logo.png"></img> */} TATRIX
			</a>
			{/* <ConnectButton></ConnectButton> */}
			<Wallet/>
		</nav>
	);
}
