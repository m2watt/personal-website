
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
		
		<div className="bodyBackground">
		
		<div className="name">
		
			<h1 id="h1"> Hi, I am Maryum</h1>
			<h2>Computer Science student with experience coding in multiple languages and web development. Seeking an internship to build
			on my skills and learn from industry professionals while applying the knowledge I possess from my university education, work experience
			and side projects.</h2>
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
		
		<div className="skills" id="skills">
		<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				Technical Skills
			</div>
			<div style={{'width': '100%'}} data-aos={"fade-up"}>
				<div style={{'paddingTop': '2%', 'paddingBottom': '3%', 'font-size':'30px', 'font-weight':'100'}}>Languages</div>
				<div>
					<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><defs><linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#366a96"/><stop offset="1" stopColor="#3679b0"/></linearGradient><linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffc836"/><stop offset="1" stopColor="#ffe873"/></linearGradient></defs><g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)"><path d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z" fill="url(#A)"/><path d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z" fill="url(#B)"/><path d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z" fill="#fff"/></g></svg>
					<text>Python</text>
					</div>
					<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 128 128"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587s12.968 12.976-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>
						<text>Java</text>
						</div>
						
					<div>
					<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"  viewBox="0 0 48 48" fillRule="evenodd" clipRule="evenodd"><path fill="#283593" fillRule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clipRule="evenodd"/><path fill="#5c6bc0" fillRule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clipRule="evenodd"/><path fill="#fff" fillRule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clipRule="evenodd"/><path fill="#3949ab" fillRule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clipRule="evenodd"/></svg>
						<text>C</text>
						</div>
						
				</div>
				<div style={{'paddingBottom': '3%', 'font-size':'30px', 'font-weight':'100'}}>Front-end Development</div>
				<div>
					<div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" fill="#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" fill="#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" fill="#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" fill="#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" fill="#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" fill="#fff"/></svg>
					<text>HTML</text>
					</div>
					<div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32"><title>file_type_css</title><polygon points="5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201" fill="#1572b6"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" fill="#33a9dc"/><polygon points="16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191" fill="#fff"/><polygon points="16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218" fill="#ebebeb"/><polygon points="19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151" fill="#fff"/><polygon points="16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935" fill="#ebebeb"/><polygon points="16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191" fill="#ebebeb"/></svg>
					<text>CSS</text>
					</div>
					<div><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>
					<text>Javascript</text>
					</div>
				</div>
			</div>
			<div style={{'width': '100%'}}>
				<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)', 'paddingTop': '5%'}}>
					Soft Skills
				</div>
				<div style={{'display':'flex', 'flexDirection':'row', 'justify-content': 'space-around', 'padding': '15%', 'paddingTop': '2%', 'paddingBottom': '10%'}} data-aos={"fade-up"}>
					<div>Collaboration and working in a team<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="Layer 2" id="Layer_2"><path d="M2,20v2h8V20a4,4,0,0,0-1.62-3.2A3,3,0,0,0,9,15a3,3,0,0,0-6,0,3,3,0,0,0,.62,1.8A4,4,0,0,0,2,20Z"/><path d="M20.38,6.8A3,3,0,0,0,21,5a3,3,0,0,0-6,0,3,3,0,0,0,.62,1.8A4,4,0,0,0,14,10v2h8V10A4,4,0,0,0,20.38,6.8Z"/><polygon points="5 11 7 11 7 7 13 7 13 5 5 5 5 11"/><polygon points="17 17 11 17 11 19 19 19 19 13 17 13 17 17"/></g></svg></div>
					<div>Communication, conflict-resolution<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="a"/><g id="b"/><g id="c"><g><path d="M408,328c-44.18262,0-80,35.81714-80,80s35.81738,80,80,80,80-35.81726,80-80-35.81738-80-80-80Zm-53.3335,80c0-29.45532,23.87842-53.33337,53.3335-53.33337,10.17188,0,19.67822,2.84753,27.76611,7.78894l-73.31055,73.31067c-4.94141-8.08801-7.78906-17.5946-7.78906-27.76624Zm53.3335,53.33325c-10.17188,0-19.67822-2.84741-27.76611-7.78882l73.31055-73.31055c4.94141,8.08789,7.78906,17.59436,7.78906,27.76611,0,29.45508-23.87842,53.33325-53.3335,53.33325Z"/><rect height="17.88854" transform="translate(-76.32816 284.49845) rotate(-63.43495)" width="8.00006" x="187.99997" y="195.05573"/><path d="M490.82812,93.17139c-13.81445-13.81445-32.17285-21.83545-51.69531-22.58496-19.13281-.73401-37.65088,5.58679-52.34082,17.78973-6.1377-4.56573-12.78906-8.4599-19.85449-11.53192-20.74707-9.02051-44.21484-10.77832-66.07031-4.94824-28.08789,7.49023-46.5498,34.89014-42.94434,63.73438l2.1084,16.86572,.01367-.00165c.00635,.0545,.00098,.10889,.00977,.16327l8,48c.32129,1.92871,1.99023,3.34229,3.94531,3.34229h20v12c0,2.20898,1.79102,4,4,4h17.75781c2.3252,0,4.41602,1.29199,5.45605,3.37256,.80371,1.60596,.86719,3.40381,.17969,5.0625-.68652,1.65869-2.00293,2.88525-3.70703,3.45264l-12.95117,4.31738c-1.18262,.39453-2.11426,1.31738-2.51855,2.49658-.40527,1.1792-.23633,2.47998,.45508,3.51709l8.16504,12.24756c5.3584,8.03613,15.70312,11.05127,24.48242,7.30469l6.33496,25.33984-15.82031,20.85791c-2.74365,3.6167-5.22021,7.39539-7.43555,11.30151l.0498-.42163-90.60156-10.65918-18.33203-18.33154c-3.77734-3.77734-8.7998-5.85791-14.1416-5.85791h-20.25586c-6.44849,0-12.31299,3.12036-16.00244,8.03394l5.55615-22.22632,13.22949,6.61475c9.86523,4.93262,21.90137,.91895,26.83203-8.94434l.84473-1.68896c.77051-1.53955,.46875-3.3999-.74902-4.61719l-6.81152-6.8125c-3.98047-3.98047-4.60352-10.26855-1.48047-14.95264,3.62598-5.43701,10.99707-6.91064,16.43359-3.28662l10.81152,7.20801c1.12891,.75342,2.56348,.88184,3.80859,.34229,1.24609-.53955,2.13281-1.67383,2.35547-3.0127l8-47.99658c.00879-.05469,.0166-.10986,.02344-.16504l4.65137-37.21191c2.19238-17.53125-7.61914-34.63574-23.85742-41.59521-18.80762-8.05914-39.11523-10.64844-59.17871-7.62976l4.44336-6.0592h45.97266c2.20898,0,4-1.79102,4-4v-8c0-11.02783-8.97168-20-20-20h-7.67773l11.78125-14.72656c4.19141-5.23877,5.47656-12.18262,3.43652-18.57373-2.03906-6.3916-7.1084-11.30762-13.55957-13.15088l-19.33105-5.52344c-9.6582-2.7583-19.92188,2.12207-23.87793,11.35205l-18.24512,42.57324L22.40625,201.24854c-6.83691,8.79053-9.20996,20.02881-6.50879,30.8335l12.22168,48.88818,.00781-.00195c.04785,.19189,.10278,.38306,.18066,.57031l39.32129,94.37012L12.375,494.30859l7.25,3.38281,56-120c.47559-1.01904,.5-2.19141,.06738-3.22998l-38.7334-92.95996,42.20801-28.13916,29.26367,36.5791,15.77441,47.32373,7.58984-2.53027-13.82031-41.46069,31.88696,6.37732,45.3728,52.93494-19.47339,38.94543-13.97388-3.22473-39.28809-31.43066c-.94336-.75537-2.17578-1.04297-3.35742-.7832-1.17969,.25879-2.17871,1.0376-2.71973,2.11768l-3.84766,7.6958c-3.20117,6.40283-2.72266,14.08105,1.24805,20.0376l6.7041,10.05566h-21.00977c-6.01562,0-11.65234,2.66797-15.46582,7.31982-3.81445,4.65186-5.3252,10.70312-4.14551,16.60254l1.59961,7.99951c1.86328,9.31641,10.11133,16.07812,19.6123,16.07812h28.25586c5.3418,0,10.36426-2.08057,14.1416-5.85791l9.52344-9.52393,9.34595,3.33789-6.3645,63.646,7.96094,.7959,6.16699-61.66931,92.50684,33.03845c.4375,.15625,.89258,.23291,1.3457,.23291,.75781,0,1.50977-.21533,2.16309-.63525l49.87988-32.06567v62.47534h8v-67.61816l2.04834-1.31689-4.43994-6.65625-58.15918,37.38818-110.14648-39.33838c-1.45898-.521-3.08203-.1543-4.17383,.93848l-11.31348,11.31348c-2.2666,2.2666-5.28027,3.51514-8.48535,3.51514h-28.25586c-5.70117,0-10.64941-4.05713-11.76758-9.64697l-1.60059-7.99951c-.70703-3.53955,.19922-7.17041,2.48828-9.96191,2.28809-2.79102,5.66992-4.3916,9.2793-4.3916h28.4834c1.47559,0,2.83105-.81201,3.52637-2.11279,.69629-1.30029,.62012-2.87842-.19824-4.10596l-10.84961-16.27441c-2.38184-3.57422-2.66895-8.18115-.74805-12.02246l1.63477-3.27002,36.13574,28.90918c.46875,.37451,1.01562,.63916,1.59961,.77393l104,24c1.27051,.29346,2.60547-.05176,3.5752-.92432l57.18262-51.46387c1.74316-1.56836,3.69141-2.84619,5.79102-3.79736l-3.30078-7.28711c-2.84863,1.29053-5.4873,3.01904-7.8418,5.1377l-7.31201,6.58093c.25586-19.94409,6.86719-39.32874,19.01221-55.33972l16.23145-21.40015,43.99561-14.66504s24.77295,35.45825,26.06885,37.44604l6.70117-4.37012c-1.34375-2.06055-27.75781-39.8667-27.75781-39.8667l-6.80273-13.60571,20.62305-29.46118c21.8457-31.20996,24.28125-71.47949,6.35352-105.09375-2.74268-5.14233-5.93359-10.01318-9.50342-14.57428,18.9502-1.32922,36.84521,10.32196,42.98779,28.75104l11.10059,33.30127c.54492,1.6333,2.07324,2.73486,3.79492,2.73486s3.25-1.10156,3.79492-2.73486l24-72c.47852-1.4375,.10449-3.02197-.9668-4.09375ZM69.94043,224.25635l5.49512,21.97937-40.93115,27.28748-10.84521-43.38159c-2.10156-8.40332-.25586-17.14453,5.06152-23.98145L131.15723,74.45557c.20996-.27002,.38477-.56543,.51953-.87988l18.44824-43.04688c2.37305-5.53711,8.52832-8.46777,14.32715-6.81104l19.33105,5.52344c3.92871,1.12207,6.89355,3.99805,8.13574,7.89062,1.24219,3.8916,.49023,7.95361-2.06152,11.14404l-16.98047,21.22559c-.96094,1.2002-1.14844,2.84521-.48242,4.23145,.66602,1.38574,2.06738,2.26709,3.60547,2.26709h16c6.61719,0,12,5.3833,12,12v4h-44c-1.27441,0-2.47168,.60693-3.22559,1.63477l-83.55859,113.94336c-3.52734,4.81055-4.72168,10.88916-3.27539,16.67822Zm40.89502,55.88513l-27.16602-33.95758-1.66797-6.67108,34.38721,26.74561-5.55322,13.88306Zm45.28369-17.11169l-7.07422,28.2998-31.54492-6.30859,30.21387-75.53564c.40918-1.02246,.37793-2.16895-.08496-3.16846-.46387-.99951-1.31934-1.76318-2.36426-2.11182l-5.82324-1.94092c-3.47168-1.15723-6.2666-3.76025-7.66699-7.1416s-1.26465-7.19775,.37207-10.4707c3.11133-6.22266,10.70605-8.75391,16.92773-5.64258l1.13672,.56836c1.28418,.64209,2.81152,.54736,4.00781-.24951l15.77246-10.51465c3.80762-2.5376,8.6377-2.70361,12.61035-.43408l44.99512,25.71143-6.52539,39.14941-5.66406-3.77637c-9.10938-6.07178-21.45605-3.60107-27.52734,5.50537-5.23145,7.8457-4.18848,18.37939,2.48047,25.04688l4.74316,4.74365c-3.20312,5.28662-10.00293,7.31836-15.625,4.50732l-17.68945-8.84473c-1.08594-.54297-2.3584-.56299-3.46094-.05664-1.10156,.50732-1.91406,1.4873-2.20898,2.66406Zm106.75195,148.60449l-79.09033-18.25171,18.00854-36.01587,44.42163,22.21094c.56152,.28076,1.1748,.42236,1.78906,.42236,.47461,0,.95117-.08447,1.4043-.25488l37.65332-14.12012,16.1665,5.7738c.0249,1.25891,.08057,2.51904,.15283,3.7804l-40.50586,36.45508Zm-63.07373-66.01697l16.15771-5.38586,59.43311,21.22607-27.15967,10.18457-45.71729-22.85864-2.71387-3.16614Zm103.59326,17.34583l-86.04492-30.73022c-.84473-.30127-1.76367-.31055-2.61035-.02783l-18.43945,6.14648c-.74658,.24915-1.51196,.41528-2.28613,.51367l-32.48999-37.90527c1.37134-5.22974,6.13379-8.95996,11.59741-8.95996h20.25586c3.20508,0,6.21875,1.24854,8.48535,3.51514l19.31348,19.31348c.63574,.63574,1.46777,1.03906,2.36035,1.14404l89.17383,10.49109c-5.34277,11.46155-8.51855,23.82996-9.31543,36.49939Zm43.44238-80.12378l-6.95215-27.80957c-.29492-1.17676-1.10742-2.15674-2.20898-2.66406-.53125-.24414-1.10156-.36572-1.67188-.36572-.61328,0-1.22656,.14111-1.78906,.42236l-3.36621,1.68311c-5.40039,2.69971-12.00195,.94824-15.35156-4.07666l-5.25977-7.89014,7.98242-2.66113c3.88086-1.29297,7.00391-4.20215,8.56934-7.98096,1.56543-3.77832,1.41406-8.04395-.41504-11.70215-2.4043-4.80762-7.2373-7.79443-12.6123-7.79443h-13.75781v-12c0-2.20898-1.79102-4-4-4h-20.61133l-6.72949-40.37451,78.8877-6.57373c5.69141-.47607,10.91211,2.97412,12.71484,8.38477,1.75293,5.25781-.24316,11.07764-4.85449,14.15186l-13.62598,9.0835c-1.54688,1.03125-2.17969,2.99219-1.52637,4.73242l24,64c.35449,.9458,1.05273,1.72168,1.95605,2.17334l14.80762,7.40381,5.34082,10.68213-39.52637,13.17578Z"/><rect height="8.00019" transform="translate(-61.69794 91.80014) rotate(-18.43495)" width="25.29822" x="239.35089" y="231.9999"/><rect height="25.29822" transform="translate(-87.4067 414.72968) rotate(-71.56505)" width="8.00019" x="239.9999" y="255.35089"/><rect height="28.84441" transform="translate(-138.10213 317.95381) rotate(-56.30993)" width="7.99982" x="224.00009" y="273.57779"/><rect height="8.00006" transform="translate(-45.67236 150.5524) rotate(-26.56818)" width="17.88854" x="287.05573" y="167.99997"/><path d="M429.99707,238.11621l4.00586,6.9248c16.03516-9.27637,25.99707-26.53516,25.99707-45.04102,0-5.94336-.99609-11.7749-2.95996-17.33301l-7.54297,2.66602c1.66113,4.69922,2.50293,9.63379,2.50293,14.66699,0,15.65967-8.43066,30.26514-22.00293,38.11621Z"/><path d="M462.66699,234.86279l2.66602,7.54297c11.16504-3.94629,18.66699-14.55811,18.66699-26.40576,0-3.19824-.53613-6.33789-1.59375-9.33203l-7.54297,2.66406c.75391,2.13623,1.13672,4.37939,1.13672,6.66797,0,8.46387-5.3584,16.04443-13.33301,18.86279Z"/><path d="M48.36523,121.30811l7.92773-1.06738c-.66406-4.93848-.47949-9.94092,.5498-14.86865,3.20312-15.32861,14.44336-27.90088,29.33398-32.81055l-2.50586-7.59766c-17.59277,5.80078-30.87402,20.65723-34.6582,38.77246-1.21582,5.81836-1.43359,11.73047-.64746,17.57178Z"/><path d="M36.37207,91.56006c-.30176-2.2417-.21777-4.51562,.25-6.75732,1.73145-8.28564,8.52734-14.61035,16.90918-15.73828l-1.06641-7.92871c-11.73633,1.57959-21.25,10.43311-23.67383,22.03125-.6543,3.13379-.77051,6.31738-.34668,9.46143l7.92773-1.06836Z"/><path d="M244.95215,70.53613l7.17578,3.53711c2.20312-4.4707,5.14746-8.52051,8.74902-12.03564,11.20801-10.93701,27.55176-15.10254,42.64648-10.875l2.1582-7.70312c-17.83691-4.99902-37.14648-.07227-50.39258,12.85303-4.25293,4.15137-7.73145,8.93701-10.33691,14.22363Z"/><path d="M255.56543,33.68652c6.05664-5.9126,15.22656-7.37061,22.8125-3.63281l3.53516-7.17578c-10.62012-5.23438-23.45508-3.19092-31.93555,5.08301-2.29004,2.23535-4.16211,4.81201-5.56543,7.65967l7.17578,3.53613c1.00098-2.03076,2.33887-3.87109,3.97754-5.47021Z"/></g></g><g id="d"/></svg></div>
					<div>Adaptability to new work environments<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title>Vergaderen</title><circle cx="36.02" cy="19.01" r="3"/><circle cx="24" cy="14.57" r="3"/><path d="M29 25v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h10z"/><circle cx="12.09" cy="19.01" r="3"/><path d="M38.06 23.48h-2c-1.656 0-3.56 1.343-3.56 3l5.44 7.58h3.08v-7.58a3 3 0 0 0-2.96-3zM17.5 25.985L14.31 31H12l3.5-5c0-1.66-1.34-2.55-3-2.55h-2.462a3 3 0 0 0-3 3V32a2 2 0 0 0 2 2H16.5l-.06 1.042h-5.28L9 38.968h30l-8.5-12.983h-13z"/></svg></div>
				</div>
				
			</div>
		</div>
		<div className="workExperience" id="workExperience" >
			<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				Work Experience
			</div>
			<div className="MCC" style={{'paddingLeft':'25%', 'paddingRight':'25%', "display":"flex", "flexDirection":"column", "align-items":"center", "paddingTop":"5%", "paddingBottom":"5%"}}>
				<img style={{"width": "200px", "height": "auto"}} src="MCC_Logo_Colour_Black-01.png"></img>
				<div data-aos={"fade-up"} style={{"paddingTop":"5%"}}>
					monstrARTity Mississauga, Ontario
					<div style={{"display":"flex","flexDirection":"row", "justify-content":"space-between"}}>
						<div style={{"font-size":"20px"}}>Associate Web Development Coordinator, Marketing </div>
						<div>05, 2022 − Current</div>
					</div>
					<ul>
						<li>Collaborated with team members to design landing pages and integrated tracking tools like Facebook Pixel and Google Tags</li>
						<li>Updated organization’s Hubspot websites while ensuring cross-browser, cross-platform mobile compatibility
							compliance with Canada’s Standard on Web Accessibility and SEO
						</li>
						<li>Used frontend development languages such as HTML, CSS, and JavaScript to improve user experience and design</li>
						<li>Tracked and provided feedback on all web-based activities, including statistical analyses and reports</li>
					</ul>
					
				</div>
			</div>
			<div className="Walmart" style={{'paddingLeft':'25%', 'paddingRight':'25%', "display":"flex", "flexDirection":"column", "align-items":"center"}}>
				<img style={{"width": "200px", "height": "auto"}} src="WalmartLogo.png"></img>
				<div data-aos={"fade-up"} style={{"paddingTop":"5%"}}>
					<br></br>Walmart Mississauga, Ontario
					<div style={{"display":"flex","flexDirection":"row", "justify-content":"space-between"}}>
						<div style={{"font-size":"20px"}}>Cashier </div>
						<div>11, 2019 − 05, 2020</div>
					</div>
					
					<ul>
						<li>Assisted customers with checking out, returns, and general inquiries about store products and services</li>
						<li>Processed debit, credit and cash transactions while applying occasional store discounts</li>
						<li>Maintained neat and clutter-free work area around checkout area in accordance with brand policies</li>
					</ul>
				</div>
			</div>

		</div>
		<div className="education" style={{"paddingTop": "10%"}}>
		<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				Education
			</div>
			<div style={{'display':'flex', 'flexDirection':'row', 'paddingLeft':'15%', 'paddingRight': '15%', 'align-items':'center'}} data-aos={"fade-up"}>
			<img style={{'width': '200px', 'height': '200px', "margin-right":"5%"}} src="uoft.png"></img>
			<div style={{"text-align":"left"}}>				University of Toronto Mississauga<br></br>
				Honours in Bachelors of Science (H.Bsc.), Computer Science and Geographic Information Systems + PEY Co-op
				<br></br>Expected Graduation Date: 04-2025
				<br></br>GPA: 3.93/4.0
				<br></br>Academic Transcript available upon request
				<br></br>Relevant courses: 
				<ul>
					<li>
					Software Design
					</li>
					<li>
					Software Tools and Systems Programming
					</li>
					<li>
					Introduction to the Theory of Computation
					</li>
					
				</ul>
				</div>
				

			</div>
		</div>

		
		<div className="projects" id="schoolprojects"> 
			
			<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				School Projects
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

			<div id="myShell" className="Project" data-aos={"fade-up"}>
				<div className="container">
				<div className='projscreenshot'>
				<img src={'/myShell.png'}/>
				</div>
				<div className="info">
				<text className="title2">myShell</text>
				<pre className="info">
				<pre className="bold">Description:</pre> A shell is a computer program that allows users to access system resources{"\n"}
				and interact with the computer's operating systems through a command line interface. myShell borrows it syntax from Bash, {"\n"}
				a Unix shell created by Brian Fox and first released in 1989.
				<pre className="bold">Key Concepts:</pre>  Dynamic memory allocation, low-level memory management, fork and pipe system calls {"\n"}
				{"\n"}
				<pre className="bold">Assigned Task:</pre> Create a fully functioning shell in C that is able to navigate {"\n"}
				file systems and execute the following commands echo, ls, cd, cat, wc, pipes (|), bg (&), kill, ps, exit, start-server{"\n"}
				close-server, send and start-client. Use knowledge of C system calls to create commands {"\n"}
				(start-server, send, connect) that allowed two-way communication between users of myShell {"\n"}
				Implement error-handling and make sure all user input is valid{"\n"}

				<pre className="bold">Language:</pre> C {"\n"}
				</pre>
				</div>
				</div>
			</div>
		</div>
		<div className="awards">
		<div className="title" data-aos={"fade-up"} style={{'color':'rgb(0, 0, 64)'}}>
				Awards
		</div>
		<div style={{'display': 'flex', 'flexDirection': 'column'}} data-aos={"fade-up"}>
			<div style={{'display': 'flex', 'flexDirection': 'row', 'marginBottom':'10%'}}>
				<img src="awardIcon.png" style={{'height': '100px', 'width': '100px', 'marginRight':'10%'}}></img>
				<div>Dean's List Scholar<br></br>
				This designation is given at the end of the Fall/Winter session and/or Summer Session to Faculty of Arts Science degree
				students who complete their fifth, tenth, fifteenth, or twentieth degree credits in the Faculty and obtain a Cumulative
				Grade Point Average of 3.50 or higher
				</div>
			</div>
			<div style={{'display': 'flex', 'flexDirection': 'row'}}>
				<img src="awardIcon.png" style={{'height': '100px', 'width': '100px', 'marginRight':'10%'}}></img>
				<div>U of T Mississauga Entrance Scholarship<br></br>
				Awarded to admitted UTM students with a high school average greater than 92%
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
					<div>
					LinkedIn
					</div>
				</div>
				<div className="circle" data-aos={"zoom-in"}>
					<a href="mailto:maryum.raina@mail.utoronto.ca">
					<FiMail className="contactIcon"/>
					</a>
					<div>
					Email
					</div>
				</div>
				<div className="circle" data-aos={"zoom-in"}>
					<a href="Maryum_Raina_Resume_2022.pdf" download>
					<FiDownload className="contactIcon"/>
					</a>
					<div>
					Resume
					</div>
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
			
		</div>
		</div>
		
		
		
	);
};

export default home;