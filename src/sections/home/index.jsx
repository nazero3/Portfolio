import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<p className={styles.greet}>Hi, my name is</p>
			<h1 className={styles.heading_1}>Nezir</h1>
			<h1 className={styles.heading_2}>I'm software Engineer</h1>
			<p className={styles.desc}>
			Highly motivated and skilled software engineer with a strong background in computer vision and artificial intelligence.
			I am seeking a challenging role in a dynamic organization where I can utilize my expertise to contribute to the development
			and implementation of cutting-edge technology.
			With a solid educational foundation and hands-on experience in C++, Java, and open-source libraries such as OpenCV and DPDK, 
			I am confident in my ability to develop and implement innovative solutions in a fast-paced environment.
			</p>
			<a href="#work">
				<button className={styles.btn}>Check out my work !</button>
			</a>
		</section>
	);
}

export default Home;