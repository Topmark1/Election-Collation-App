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
            
            width={140}
            height={110}
          />
          <Image
            className={Style.home_img}
            src={apc}
            alt="apc"
            width={140}
            height={110}
          />
        </div>
        <h3>Welcome to Hon. Kafilat Ogbara Result Channel </h3>
        <p>Click next to proceed</p>
        <Link href={{ pathname: "Channel" }}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
}
