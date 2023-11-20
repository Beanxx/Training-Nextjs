import styles from "../../../styles/Home.module.css";
import { useRouter } from "next/router";

export default function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query); // {id: 'max', clientprojectid: '2'}

  return (
    <div className={styles.main}>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}
