import '../styles/globals.css';
import 'animate.css';
import NavBar from '../component/NavBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
	AOS.init();
	AOS.refresh();
})
	
  return (
	<>
		<a id="anchor"></a>
		<NavBar id="NavBar"></NavBar>
		<Component {...pageProps} />
		
	</>
	);
}

export default MyApp
