import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // {projectid: '2'}
  // => 동적 경로 세그먼트에 대한 구체적인 값에 엑세스할 수 있음

  return (
    <div className={styles.main}>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
