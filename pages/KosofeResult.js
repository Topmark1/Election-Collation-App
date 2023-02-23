import React from "react";
import Image from "next/image";

import Style from "../styles/wards.module.css";
import apc from "../public/apc.png";
import Link from "next/link";
import Data from "../components/ElectionData"
import resultStyle from "../styles/resultStyle.module.css";

const wards = () => {
  const kosofeData = Data.kosofe

let PreAPC = 0
let PrePDP = 0
let PreLP = 0
let PreNNPP = 0
let PreADC = 0
 
let LESAPC = 0
let LESPDP = 0
let LESLP = 0
let LESNNPP = 0
let LESADC = 0

let HORAPC = 0
let HORPDP = 0
let HORLP = 0
let HORNNPP = 0
let HORADC = 0

  kosofeData.map((ward)=>{
                      PreAPC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.APC
                        },0);
                        PrePDP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.PDP
                        },0);
                        PreLP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.LP
                        },0);
                        PreNNPP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.NNPP
                        },0);
                        PreADC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.Presidential.ADC
                        },0);


                        LESAPC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.APC
                        },0);
                        LESPDP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.PDP
                        },0);
                        LESLP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.LP
                        },0);
                        LESNNPP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.NNPP
                        },0);
                        LESADC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.LagosEastSenatorial.ADC
                        },0);


                        HORAPC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.APC
                        },0);
                        HORPDP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.PDP
                        },0);
                        HORLP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.LP
                        },0);
                        HORNNPP += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.NNPP
                        },0);
                        HORADC += ward.pollingUnits.reduce(function(previousValue,currentValue){
                          return previousValue + currentValue.Result.HouseOfRepresentative.ADC
                        },0);
                      })
                        

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
          <h2>KOSOFE LOCAL GOVERMENT RESULT</h2>
        </div>
            <div>
            <div className={resultStyle.resultDisplay}>
                  <h3>{"Kosofe Local Government"} RESULT SUMMARY</h3>

                  <div className={resultStyle.pres}>
                    <h4>PRESIDENTIAL</h4>
                    <p>
                      APC: {PreAPC}, 
                      PDP:{" "}{PrePDP}, 
                      LP:{" "}{PreLP}, 
                      NNPP:{" "}{PreNNPP}, 
                      ADC:{" "}{PreADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>Lagos East Senatorial</h4>
                    <p>
                      APC: {LESAPC}, 
                      PDP:{" "}{LESPDP}, 
                      LP:{" "}{LESLP}, 
                      NNPP:{" "}{LESNNPP}, 
                      ADC:{" "}{LESADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>House Of Representative</h4>
                    <p>
                      APC: {HORAPC}, 
                      PDP:{" "}{HORPDP}, 
                      LP:{" "}{HORLP}, 
                      NNPP:{" "}{HORNNPP}, 
                      ADC:{" "}{HORADC},
                    </p>
                  </div>

                  
                </div>
            </div>
      </div>
    </div>
  );
};

export default wards;
