import styles from "./Logo.module.scss";

export default function Logo() {
    return (
        <div className={styles.logo}>
            <p className={styles.first}>
                <span>Bike</span>
                <span>Hub</span>
            </p>

            <p className={styles.second}>
                <span>Bike</span>
                <span>Hub</span>
            </p>
        </div>
    );
}
