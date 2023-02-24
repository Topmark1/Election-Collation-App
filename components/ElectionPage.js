

import Image from "next/image";
import Data from "./ElectionData"
import {useState,useEffect} from "react"


import Link from "next/link";
import Router from "next/router";

import{setItem} from "local-data-storage";
import useLocalStorage from "use-local-storage";
function ElectionPage(){
const [ElectionInfo,SetElectionInfo] = useLocalStorage("kosofe",Data)

const [WardPollingUnit,setWardPollingUnit] = useState({ward:0,pu:0})
const [showModal, setShowModal] = useState(false);

//const [ElectionResult,UpdateElectionResult] = useLocalStorage("kosofe",Data)
// console.log(ElectionInfo)
// const kosofeData = getItem("kosofe").value.kosofe
//   console.log(kosofeData)
  //let kosofeData = ElectionInfo.kosofe
//  console.log('kosofeData')
//  console.log(kosofeData)
// console.log('kosofeData')
// useEffect(() => {
//     Router.push({
//         path:"/wards",
//         Query:kosofeData})
// }, [])

    

 //!!!!!!!Important: First Kick Start local Storage with this command in the onSubmit()!!!!!!!!!!!!!!!
        //--->UpdateElectionResult(Data)
        //then interact directlly with local Storgae instead of use State
        //UpdateElectionResult(Data)//ElectionInfo(Data)
        //!!!!!! To refresh the Local Storage run this two command
        // SetElectionInfo(undefined);
        // SetElectionInfo(Data)

        function Refresh(){
            SetElectionInfo(undefined);
         SetElectionInfo(Data);
    }
           


    function handleClick() {
      setShowModal(true);
    }
  
    function handleConfirm() {
      // Run your function here
       Refresh();
      // Hide the modal
      setShowModal(false);
    }
  
    function handleCancel() {
      // Hide the modal
      setShowModal(false);
    }
                


    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
            
        <section className="col-span-2">
            {/*Election Result Input Area */}
            
            <form className="flex flex-col mb-20 " onSubmit={(e)=>{alert('Data updated');
        e.preventDefault();
        console.log(ElectionInfo)
        //sendResult();
        //!!!!!!!Important: First Kick local Storage with this command!!!!!!!!!!!!!!!
        //--->UpdateElectionResult(Data)
        //then interact directlly with local Storgae instead of use State
        //UpdateElectionResult(Data)//ElectionInfo(Data)
        //!!!!!! To refresh the Local Storage run this two command
        // SetElectionInfo(undefined);
        // SetElectionInfo(Data)
        }}>
<select 
className="mt-10 p-2 rounded-full h-12 bg-gray-100 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl"
value={WardPollingUnit.ward} 
onChange={(e)=>{
    setWardPollingUnit((ward)=>({...ward,ward:e.target.value}))
}}>
    <option selected> Select a Ward</option>
{ElectionInfo.kosofe.map((ward)=>
<option value={ward.wardNo} >
{ward.wardNo + ". " + ward.wardName}
</option>)}
</select>


<select 
className="mt-10 p-2 rounded-full h-12 bg-gray-100 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl"
value={WardPollingUnit.pu} 
onChange={(e)=>{
    setWardPollingUnit((pu)=>({...pu,pu:e.target.value}))
}}>
    <option selected> Select a Polling Unit</option>
{((WardPollingUnit.ward*1)>0)?ElectionInfo.kosofe[(WardPollingUnit.ward*1)-1].pollingUnits.map((pu)=>
<option value={pu.PU_No} >
{pu.PU_No + ", " + pu.PU_Name}
</option>):"Select a Ward"}
</select>

<div className="mt-2">
    <div className="space-x-2 mt-2"> 
        <p>Presidential</p> 
        <input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.Presidential).APC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"APC"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.Presidential).PDP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"PDP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.Presidential).LP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"LP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.Presidential).NNPP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"NNPP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.Presidential).ADC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"ADC"}
/>
     </div>
     <div className="space-x-2 mt-2"> 
        <p>Lagos East Senatorial</p> 
        <input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.LagosEastSenatorial).APC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"APC"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.LagosEastSenatorial).PDP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"PDP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.LagosEastSenatorial).LP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"LP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.LagosEastSenatorial).NNPP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"NNPP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.LagosEastSenatorial).ADC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"ADC"}
/>
     </div>
     <div className="space-x-2 mt-2"> 
        <p>House Of Representative</p> 
        <input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.HouseOfRepresentative).APC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"APC"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.HouseOfRepresentative).PDP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"PDP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.HouseOfRepresentative).LP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"LP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.HouseOfRepresentative).NNPP = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"NNPP"}
/>
<input 
className="mt-2 p-2 rounded-full h-6 bg-gray-100 w-14  focus:outline-none text-xs"
type="text"
onChange={(e)=>{
    if((WardPollingUnit.ward*1)+(WardPollingUnit.pu*1) > 1){
    let MagicState =[]
    MagicState = MagicState.concat(ElectionInfo.kosofe)
    let ward = WardPollingUnit.ward
    let pu = WardPollingUnit.pu;
    (MagicState[ward-1].pollingUnits[pu-1].Result.HouseOfRepresentative).ADC = e.target.value ;
    SetElectionInfo({kosofe:MagicState}
    )}
else{alert("Select a ward, Select a Polling Unit and Input all Values")}
}}
placeholder={"ADC"}
/>
     </div>
</div>

<button className="mt-10 p-2 rounded-full h-12 bg-red-500 hover:bg-red-700 flex-grow sm:px-5 focus:outline-none text-xs sm:text-xl" type="submit" >Submit</button>
</form>


<div className="" onClick={Refresh}>
                  
                </div>
                <div>
      <button
        className="absolute mt-10 sm:ml-96 mb-14 pl-3 flex items-center hover:bg-red-500 cursor-pointer bg-gray-100  sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
        onClick={handleClick}
      >
        Danger Refresh Storage
      </button>
      {showModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to run the refresh Storage with last updated storage in vscode?</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
              onClick={handleConfirm}
            >
              Yes
            </button>
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleCancel}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>

















            {/*Real Time Election info*/}
           
        </section>
        </main> )
}
export default ElectionPage


 {/*<div className="flex flex-wrap w-full">
        
            {"All Presidential Result : "}
            {ElectionInfo.kosofe.map((ward)=>
ward.pollingUnits.map((pollingUnit)=>
<p className=""> 
{pollingUnit.Result.Presidential.APC} 
{pollingUnit.Result.Presidential.LP}
{pollingUnit.Result.Presidential.PDP}
{pollingUnit.Result.Presidential.NNPP}
{pollingUnit.Result.Presidential.ADC}
"APC LagosEastSenatorial Result"
{pollingUnit.Result.LagosEastSenatorial.APC}
</p> )
)}
</div>*/}

// export const kosofeData = ElectionInfo//{d:6}
// console.log('kosofeData')
// console.log(kosofeData)
// console.log('kosofeData')