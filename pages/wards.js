import React from "react";
import Image from "next/image";

import Style from "../styles/wards.module.css";
import apc from "../public/apc.png";
import Link from "next/link";
import useLocalStorage from "use-local-storage";
import Data from "../components/ElectionData"

import resultStyle from "../styles/resultStyle.module.css";


const wards = () => {
  
//const [a,b] = useLocalStorage("kosofe",'')

  const kosofeData = Data.kosofe

// let kosofeData
//       a?( kosofeData = a.kosofe):( kosofeData=kosofeData1)
     

     
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
          <h2>KOSOFE LOCAL GOVERMENT WARDS</h2>
        </div>
        <div className={Style.wards_box_wards}>
          {kosofeData.map((ward, i) => (
            <div>
            <Link
              href={{ pathname: `pollingUnits${i + 1}` }}
              key={i + 1}
              pollingUnits={ward.pollingUnits[i + 1]}
            >
              <p className={Style.wards_box_ward}>
                {ward.wardNo}
                {"."}
                {ward.wardName}
              </p>
            </Link>
            <div>
              
              <div className={resultStyle.resultDisplay}>
                  <h3>{ward.wardName} RESULT SUMMARY</h3>

                  <div className={resultStyle.pres}>
                    <h4>PRESIDENTIAL</h4>
                    <p>
                      APC: {
                        ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.APC
                        },0)
                        }, 
                      
                      PDP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return (previousValue*1) + (currentValue.Result.Presidential.PDP*1)
                        },0)}, LP:
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.Presidential.LP*1
                        },0)}, NNPP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.Presidential.NNPP*1
                        },0)}, ADC:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.Presidential.ADC*1
                        },0)},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>LAGOS EAST SENETORIAL</h4>
                    <p>
                      APC: {
                        ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.APC
                        },0)
                        }, 
                      
                      PDP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return (previousValue*1) + (currentValue.Result.LagosEastSenatorial.PDP*1)
                        },0)}, LP:
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.LagosEastSenatorial.LP*1
                        },0)}, NNPP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.LagosEastSenatorial.NNPP*1
                        },0)}, ADC:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.LagosEastSenatorial.ADC*1
                        },0)},
                    </p>
                      </div>

                  <div className={resultStyle.pres}>
                    <h4>HOUSE OF REPRESENTATIVE</h4>
                    <p>
                      APC: {
                        ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.APC
                        },0)
                        }, 
                      
                      PDP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return (previousValue*1) + (currentValue.Result.HouseOfRepresentative.PDP*1)
                        },0)}, LP:
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.LP*1
                        },0)}, NNPP:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.HouseOfRepresentative.NNPP*1
                        },0)}, ADC:{" "}
                      {ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue*1 + currentValue.Result.HouseOfRepresentative.ADC*1
                        },0)},
                    </p>
                  </div>
                </div>
            </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default wards;
