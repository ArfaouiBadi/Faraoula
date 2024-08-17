import Image from "next/image";

export default function Home() {
  return (
    <>
      <img src="/loader.gif" className="loader"/>
      <div className="button-container">
        Start
      </div>
    </>
  );
}
