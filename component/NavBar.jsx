import Link from "next/link";
import styles from "../styles/navbar.module.css"
const NavBar = () => {
	return <nav className={styles.navbar}> 
	<Link href="">
		<a className={styles.logolink}>MARYUM RAINA</a>
	</Link>
	<Link href="#skills">
		<a className = "hover-underline-animation">Skills </a> 
	</Link>
	<Link href="#schoolprojects">
		<a className = "hover-underline-animation">Projects </a> 
	</Link>
	<Link href="#workExperience">
		<a className = "hover-underline-animation">Work Experience </a> 
	</Link>
	<Link href="#contact">
    	<a className = "hover-underline-animation">Contact </a> 
    </Link>
	<Link href="Maryum Raina Resume.pdf" download>
		<a className = "hover-underline-animation">Resume </a> 
	</Link>
	</nav>;
};
export default NavBar;