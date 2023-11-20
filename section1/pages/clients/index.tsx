import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manuel" },
  ];
  return (
    <div className={styles.main}>
      <h1>The Clients Page</h1>
      <ul>
        <li>
          {clients.map((client) => (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{ pathname: "/clients/[id]", query: { id: client.id } }}
              >
                {client.name}
              </Link>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}

// Link 태그의 프로퍼티인 href를 사용하는 방법
// 1. href={`/clients/${client.id}` 요렇게 url를 문자열로 지정
// 2. href={{ pathname: "/clients/[id]", query: { id: client.id } }} 요렇게 동적으로 객체로 지정
