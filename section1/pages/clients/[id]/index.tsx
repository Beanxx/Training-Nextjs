import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); // {id: 'max'}

  return (
    <div className={styles.main}>
      <h1>The Projects of a Given Client</h1>
    </div>
  );
}
