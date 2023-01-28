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
      <section className="CardSection">
        <div className="">
          <div className="CardSize">
            {data.map((CardDetails, index) => (
              <div className="ContctDesign">
                <article key={index}>
                  <div className="ParenDiv">
                    <div className="nmMbl">
                      <p> {CardDetails.Name} </p>
                      <p> {CardDetails.MobileNumber} </p>
                    </div>
                    <div className="callIncon">
                      <a href={"tel:" + CardDetails.MobileNumber}>
                        {/* <i className={CardDetails.FontawsomeIcon}> </i> */}
                        <i class="fa-solid fa-phone-flip"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailView;
