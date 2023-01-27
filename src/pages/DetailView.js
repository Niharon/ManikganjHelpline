import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardDetails } from "../AllData/AllinOneData";
const DetailView = () => {
  console.log(CardDetails);
  const { title } = useParams();
  console.log(title);
  const [data, setData] = useState([]);
  useEffect(() => {
    let tempArr = [];
    CardDetails.map((x) => {
      if (x.token == title) {
        tempArr.push(x);
        console.log(x);
      }
    });
    setData(tempArr);
  }, [title]);
  console.log(data);
  return (
    <div>
      {data.map((CardDetails, index) => (
        <article key={index}>
          <p> {CardDetails.Name} </p>
          <p> {CardDetails.MobileNumber} </p>
        </article>
      ))}
    </div>
  );
};

export default DetailView;
