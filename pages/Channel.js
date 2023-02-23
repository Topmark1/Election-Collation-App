import Image from "next/image";
import Link from "next/link";

import Style from "../styles/Home.module.css";
import kalifat from "../public/kafilat.jpeg";
import apc from "../public/apc.png";

export default function Home() {
  return (
    <div className={Style.home}>
      <div className={Style.home_box}>
        <div className={Style.home_box_imgs}>
          <Image
            className={Style.home_img}
            src={kalifat}
            alt="hon."
            width={100}
            height={100}
          />
          <Image
            className={Style.home_img}
            src={apc}
            alt="apc"
            width={100}
            height={100}
          />
        </div>
        <h3>Welcome to Hon. Kafilat Ogbara Navigation Page </h3>
        <Link href={{ pathname: "ResultInputPage" }}>
          <button>Result Input Page</button>
        </Link>
        <Link href={{ pathname: "KosofeResult" }}>
          <button>Kosofe Local Goverment Result</button>
        </Link>
        <Link href={{ pathname: "wards" }}>
          <button>Result Break-Down</button>
        </Link>
      </div>
    </div>
  );
}
