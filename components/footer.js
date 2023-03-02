import Link from "next/link";

export default function Footer({ events }) {
  return (
    <footer className="w-full my-8">


      <div className="text-center lil-text mt-8">
        Powered by{" "}
        <Link href="https://ShibariumAI.com" target="_blank">
          ShibariumAI.com
        </Link>{" "}
    
        .
      </div>
    </footer>
  );
}
