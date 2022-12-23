import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query); // {slug: ['2020', '12']}

  return (
    <div className={styles.main}>
      <h1>The Blog Posts</h1>
    </div>
  );
}

// [...slug].tsx => 스프레드 연산자를 통해 해당하는 경로를 모두 렌더링 => 문자열이 아닌 배열 출력
