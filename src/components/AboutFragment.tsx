import Image from "next/image";
import styles from "./AboutFragment.module.scss";

interface Image {
    src: string;
    alt: string;
}

interface AboutFragmentProps {
    mainImage: Image;
    id: string;
    title: string;
    children: React.ReactNode;
    contentSide?: "left" | "right";
}

export default function AboutFragment({
    mainImage,
    children,
    title,
    id,
    contentSide = "left",
}: AboutFragmentProps) {
    return (
        <div className={`${styles.fragment} ${styles[`fragment-${id}`]}`}>
            <div
                className={`${styles.content} ${styles[`content-${contentSide}`]}`}
            >
                <p className={styles.title}>{title}</p>
                <p className={styles.text}>{children}</p>
            </div>
            <div className={styles.mainImageContainer}>
                <Image
                    src={mainImage.src}
                    alt={mainImage.alt}
                    fill
                    className={styles.image}
                />
            </div>
        </div>
    );
}
