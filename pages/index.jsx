
import Link from "next/link";
import React from 'react'
import {FaAngleDoubleUp, FaLinkedin} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';
import {FiDownload} from 'react-icons/fi';
import {RiArrowDownSLine} from 'react-icons/ri';
import animate from 'animate.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const home = () => {
	return (
		
		<div>
		
		<div className="name">
		
			<h1 id="h1"> Hi, I am Maryum</h1>
			<h2>Currently in second year of Computer Science major and looking for opportunities to {"\n"}
			gain experience in web development.</h2>
			<svg width="100px" height="100px">
			<Link href='#schoolprojects'>
			<svg className="arrows">
							<path className="a1" d="M0 0 L30 32 L60 0"></path>
							<path className="a2" d="M0 20 L30 52 L60 20"></path>
							<path className="a3" d="M0 40 L30 72 L60 40"></path>
						</svg>
			</Link>
			</svg>
		</div>
		<div className="projects" id="schoolprojects"> 
			
			<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				School Projects
			</div>
			<div id="MeepoWasHere" className="Project" data-aos={"fade-up"}>
				<div className="container">
					<div className='projscreenshot'>
					<img src={'/MeepoWasHere.png'}/>
					</div>
					<div className="info">
					<text className="title2">Game: Meepo Was Here </text>
					<pre className="info">
					<pre className="bold">Description:</pre> Game made with python using Object Oriented Programming for the player and blocks.{"\n"}
					{"\n"}
					<pre className="bold">Key Concepts:</pre> Object Oriented Programming, Stacks, Polymorphism{"\n"}
					{"\n"}
					<pre className="bold">Assigned Task:</pre> Implement undo method using stack. Define class behaviours using correct principles of OOP.
					Constantly read board and update the rules of the game while checking if the game is over.{"\n"}
					{"\n"}
					<pre className="bold">Language:</pre> Python
					</pre>
					</div>
				</div>
			</div>
			
			<div id="QuadTreeCompression" className="Project" data-aos={"fade-up"}>
				<div className="container">
				<div className='projscreenshot'>
				<img src={'/QuadTreeCompression.png'}/>
				</div>
				<div className="info">
				<text className="title2">Image Compression/Decompressor</text>
				<pre className="info">
				<pre className="bold">Description:</pre> Compresses image given a specific loss level between 0 and 255. Capable of mirroring 
				images if specified. Decompresses images given the name of a.qdt file. Uses QuadTree children to 
				represent pixels and preorder traversal to serialize QuadTree.{"\n"}
				{"\n"}
				<pre className="bold">Key Concepts:</pre> QuadTrees (Trees with exactly 4 children), Tree traversal {"\n"}
				{"\n"}
				<pre className="bold">Assigned Task:</pre> Construct QuadTrees that represent the maximum loss of an image. Serialize and deserialize 
				image using preorder traversals.{"\n"}
				{"\n"}
				<pre className="bold">Language:</pre> Python{"\n"}
				</pre>
				</div>
				</div>
			</div>
			<div id="ThreeMusketeers" className="Project" data-aos={"fade-up"}>
				<div className="container">
				<div className='projscreenshot'>
				<img src={'/ThreeMusketeers.png'}/>
				</div>
				<div className="info">
				<text className="title2">Three Musketeers Game</text>
				<pre className="info">
				<pre className="bold">Description:</pre> Three Musketeers board game created with full GUI. Can load board from a given file 
				and save game to a file. Evaluates the score of the board and uses score to decide {"\n"}
				move for computer player.{"\n"}
				{"\n"}
				<pre className="bold">Key Concepts:</pre> JavaFX, Event Handling and User Input {"\n"}
				{"\n"}
				<pre className="bold">Assigned Task:</pre> Handle user input according to which side is currently playing their turn {"\n"}
				(Musketeer or Guard) and update GUI depending on if the player is making their move or has {"\n"}
				already made their move.{"\n"}
				{"\n"}
				<pre className="bold">Language:</pre> Python {"\n"}
				</pre>
				</div>
				</div>
			</div>
		</div>
		<div className="projects" id="personalprojects" style={{'height':'900px'}}> 
			<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				Personal Projects
			</div>
			<div id="RandomBookGenerator" className="Project" data-aos={"fade-up"}>
				<div className="container">
				<div className='projscreenshot'>
				<img src={'/RandomBookGenerator.png'}/>
				</div>
				<div className="info">
				<text className="title2">Random Book Generator</text>
				<pre className="info">
				<pre className="bold">Description:</pre> Random Book Generator that generates a random book after the user picks a genre.{"\n"}
				Also allows you to search up books and add them to your library after you create an account.{"\n"}
				Uses the Google Books API and Django framework.{"\n"}
				{"\n"}
				<pre className="bold">Key Concepts:</pre> Django, HTML, CSS, APIs {"\n"}
				{"\n"}
				<pre className="bold">Language:</pre> Python, Javascript{"\n"}
				</pre>
				</div>
				</div>
			</div>
		</div>
		
		<div className="contact" id="contact"> 
			<div className="title">
				Contact Information
			</div>
			<div className="container">
				<div className="circle" data-aos={"zoom-in"}>
					<a href="https://www.linkedin.com/in/maryum-r-57918b229" target="_blank" rel="noreferrer">
					<FaLinkedin className="contactIcon"/>
					</a>
					<text>
					LinkedIn
					</text>
				</div>
				<div className="circle" data-aos={"zoom-in"}>
					<a href="mailto:maryum.r707@gmail.com">
					<FiMail className="contactIcon"/>
					</a>
					<text>
					Email
					</text>
				</div>
				<div className="circle" data-aos={"zoom-in"}>
					<a href="Maryum Raina Resume.docx" download>
					<FiDownload className="contactIcon"/>
					</a>
					<text>
					Resume
					</text>
				</div>
			</div>
		</div>
		<div className="footer" id="footer"> 
			<div className="container">
				<Link href="#anchor">
				<FaAngleDoubleUp className="up-icon"/>
				</Link>
			</div>
			<div className="container">
				<text style={{'font-size':'30px'}}>MARYUM RAINA</text>
			</div>
			<div className="container" style={{'justify-content':'center'}}>
				<a href="https://www.linkedin.com/in/maryum-r-57918b229" target="_blank" rel="noreferrer">
					<FaLinkedin className="tinyIcon"/>
				</a>
				<a href="mailto:maryum.r707@gmail.com">
					<FiMail className="tinyIcon"/>
				</a>
				<a href="Maryum Raina Resume.docx" download>
					<FiDownload className="tinyIcon"/>
				</a>
			</div>
		</div>
		</div>
		
		
		
	);
};

export default home;