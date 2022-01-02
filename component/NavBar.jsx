import Link from "next/link";
import styles from "../styles/navbar.module.css"
const NavBar = () => {
	return <nav className={styles.navbar}> 
	<Link href="">
		<a className={styles.logolink}>MARYUM RAINA</a>
	</Link>
	<Link href="Maryum Raina Resume.pdf" download>
		<a className = "hover-underline-animation">Resume </a> 
	</Link>
	<Link href="#schoolprojects">
		<a className = "hover-underline-animation">Projects </a> 
	</Link>
	<Link href="#contact">
    	<a className = "hover-underline-animation">Contact </a> 
    </Link>
	</nav>;
};
export default NavBar;