import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function HomePage() {
  return (
    <div className={styles.main}>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfilo</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

// a 태그로 구현했을 때와 다르게 백엔드에게 HTTP 요청을 보낼 필요가 없어서 app state가 바뀌지 않아서 렌딩 속도가 빨라짐!
// replace property: 새로운 페이지를 또 띄우지 않고, 현재 페이지를 새 페이지로 바꿀 수 있음
