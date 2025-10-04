import Image from "next/image";

import styles from "./Hero.module.scss";

export default function Hero() {
	return (
		<div className={styles.container}>
			<div className={styles.background}></div>
			<Image src="/hero.jpg" alt="Hero" fill className={styles.image} />

			<div className={styles.content}>
				<h1 className={styles.h1}>
					Profesjonalny Serwis Rowerowy w Krakowie
				</h1>

				<p className={styles.text}>
					Solidność, precyzja i zaufanie. Naprawiamy, regulujemy i
					doradzamy – zawsze tak, jakby to był nasz rower. Zostaw go w
					dobrych rękach – zajmiemy się resztą.
				</p>
			</div>
		</div>
	);
}
