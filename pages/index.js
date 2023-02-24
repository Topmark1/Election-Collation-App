import Image from "next/image";
import Link from "next/link";

import Style from "../styles/hopee.module.css";
import kalifat from "../public/kafilat.jpeg";
import apc from "../public/apc.png";

export default function Hopee() {
  return (
    <div className={Style.hopee} >
      <div className={Style.hopee_box} style={{marginTop:'-70px'}}>
        <div className={Style.hopee_box_imgs} style={{display:"flex",width: '60%',
  margin: 'auto',
  textAlign: 'center',
  justifyContent:"center"}}>
          <Image
            className={Style.hopee_img}
            style={{width:'85%'}}
            src={kalifat}
            alt="hon."
            width={100}
            height={100}
          />
          <Image
            className={Style.hopee_img}
            style={{width:'85%'}}
            src={apc}
            alt="apc"
            width={100}
            height={100}
          />
        </div>
        <h3 style={{fontFamily:"times new Roman",fontSize:"18px"}}>Welcome to Hon. Kafilat Ogbara Result Channel </h3>

        <div className={Style.buttons}>
          <div>
            <Link href={{ pathname: "summary" }}>
              <button>Result Summary</button>
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "wards" }}>
              <button>Result Breakdown</button>
            </Link>
          </div>
          <div>
            <Link href={{ pathname: "ResultInputPage" }}>
              <button>Input</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
