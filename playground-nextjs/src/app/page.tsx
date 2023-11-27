"use client"; // 클라이언트 컴포넌트로 취급

// import { Metadata } from "next";
import { useRouter } from "next/navigation";

// [<head> 변경]
// 🚨 use client 선언하여 클라이언트 컴포넌트 파일에선 함께 사용 불가
// export const metadata: Metadata = {
//   title: "Next.js",
// };

export default function Page() {
  const router = useRouter();

  return (
    <>
      <h1 className="mb-10">Hello, Home page!</h1>

      <button
        type="button"
        onClick={() => router.push("/dashboard")}
        className="border-dashed border-2 rounded-md border-spacing-2 min-w-min p-2"
      >
        Navigating Dashboard page!
      </button>
    </>
  );
}
