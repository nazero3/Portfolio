import Heading from "../../components/heading";
import styles from "./styles.module.css";
import Imag from '../../imgs/profile_img.jpg'

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
						I'm software engineer graduated from the Middle East Technical University.
						My passion for coding made me start the journey for coding in my master degree.
						Before that I had experience in working with mechtronics designs such as material testing machines.
						My life philosophy goes by believing in hard work and not running away from making mistakes,
						because without failure We won't improve.
					</p>
					<p className={styles.desc}>
						I love traveling and exploring different cultures. I have been to more than 10 countires.
						It all started when I travled and lived in poland for Erasmus. It was amazing experience that
						changed the way I look at life.
					</p>
				</div>
				<div className={styles.right}>
					<img
						src={Imag}
						alt="profile"
						className={styles.profile_img}
					/>
					<div className={styles.img_border}></div>
				</div>
			</div>
		</section>
	);
}

export default About;