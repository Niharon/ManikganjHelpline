import React from "react";
import { useParams } from "react-router-dom";
import { CardDatas } from "../data";
import { CardDetails } from "../AllData/AllinOneData";
const Detail = () => {
  const { title } = useParams();
  console.log(CardDatas);
  return (
    <div>
      <h1> {title} Page </h1>
      {CardDatas?.map((CardData, index) => (
        <article key={index}>
          {/* <h2> {CardData?.title} </h2> */}
          {/* {CardData?.CardDetails?.map((CardDetail, index) => (
            <div key={index}>
              <p> {CardDetail?.hsptlname} </p>
              <p> {CardDetail?.MblNmbr} </p>
            </div>
          ))} */}
        </article>
      ))}

      {CardDetails.map((CardDetails, index) => (
        <article key={index}>
          <p> {CardDetails.Name} </p>
          <p> {CardDetails.MobileNumber} </p>
        </article>
      ))}
    </div>
  );
};

export default Detail;
