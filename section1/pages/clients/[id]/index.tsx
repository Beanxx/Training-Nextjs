import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

export default function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); // {id: 'max'}

  function loadProjectHandler() {
    // load data...
    // push(): 다른 페이지로 이동하는 메서드 => <Link> 컴포넌트를 프로그램화해서 사용 가능
    // router.push("/clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });

    // router.replace: 현재 페이지를 코드의 페이지로 대체 => 페이지 이동 후엔 되돌아 갈 수 없게 됨
  }

  return (
    <div className={styles.main}>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
