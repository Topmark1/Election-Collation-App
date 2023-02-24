import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "../styles/wards.module.css";
import resultStyle from "../styles/resultStyle.module.css";
import apc from "../public/apc.png";
import Data from "../components/ElectionData";

const pollenUnits1 = () => {
  const [dropResult, setDropResult] = useState(null);

  const openResults = (i) => {
    if (!dropResult) {
      setDropResult(i);
    } else if (dropResult === i) {
      setDropResult(null);
    } else setDropResult(i);
    console.log(dropResult);
  };
  const ward1 = {
    wardNo: 7,
    wardName: "ISHERI‐OLOWO‐IRA/SHANGISHA/MAGODO PHASE I & II",
  };

  const pollingUnits = Data.kosofe[0].pollingUnits;

  return (
    <div className={Style.wards}>
      <div className={Style.wards_box}>
        <div className={Style.wards_box_head}>
          <Image
            className={Style.wards_box_head_img}
            src={apc}
            alt="apc-logo"
            width={50}
            height={50}
          />
          <h2>{ward1.wardName} Polling Units</h2>
        </div>
        <div className={Style.wards_box_wards}>
          {pollingUnits.map((pollingUnit, i) => (
            <p
              className={Style.wards_box_ward}
              onClick={() => openResults(i + 1)}
            >
              {pollingUnit.PU_No}
              {"."} {"  "} {pollingUnit.PU_Name}
              {dropResult === i + 1 ? (
                <div className={resultStyle.resultDisplay}>
                  <h3>{pollingUnit.PU_Name} RESULT SUMMARY</h3>

                  <div className={resultStyle.pres}>
                    <h4>PRESIDENTIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.Presidential.APC}, PDP:{" "}
                      {pollingUnit.Result.Presidential.PDP}, LP:
                      {pollingUnit.Result.Presidential.LP}, NNPP:{" "}
                      {pollingUnit.Result.Presidential.NNPP}, ADC:{" "}
                      {pollingUnit.Result.Presidential.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>LAGOS EAST SENETORIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.LagosEastSenatorial.APC}, PDP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.PDP}, LP:
                      {pollingUnit.Result.LagosEastSenatorial.LP}, NNPP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.NNPP}, ADC:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>HOUSE OF REPRESENTATIVE</h4>
                    <p>
                      APC: {pollingUnit.Result.HouseOfRepresentative.APC}, PDP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.PDP}, LP:
                      {pollingUnit.Result.HouseOfRepresentative.LP}, NNPP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.NNPP}, ADC:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.ADC},
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default pollenUnits1;
