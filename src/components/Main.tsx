import { ReactNode } from "react";

import styles from "./Main.module.scss";

export default function Main({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className={styles.main}>{children}</main>;
}
