import React from "react";
import AllinOneData from "../AllData/AllinOneDatacopy";
// pore add korchi
import { useParams } from "react-router-dom";
import { CardDatas } from "../data";

// const Detailcopy = () => {
//   const { title } = useParams();
// };

class Detailcopy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Carddetails: AllinOneData.data,
      filterData: [],
    };
  }

  filterData = (e) => {
    if (e.target.value == "হাসপাতাল") {
      var filterData = this.state.Carddetails.filter((data) => {
        return data.token == "হাসপাতাল";
      });
    }

    if (e.target.value == "ক্লিনিক") {
      var filterData = this.state.Carddetails.filter((data) => {
        return data.token == "ক্লিনিক";
      });
    }

    this.setState({
      ...this.state,
      filterData: filterData,
    });
  };

  render() {
    return (
      <div>
        {/* <h1> {title} page </h1> */}
        <div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              onChange={this.filterData}
              value="হাসপাতাল"
            />
            <label class="form-check-label" for="inlineRadio1">
              হাসপাতাল
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              onChange={this.filterData}
              value="ক্লিনিক"
            />
            <label class="form-check-label" for="inlineRadio2">
              ক্লিনিক
            </label>
          </div>
        </div>

        <div>
          <h3>Total: {this.state.Carddetails.length} </h3>
        </div>
        <div className="container">
          <div className="row">
            {this.state.filterData.map(function (data) {
              return (
                <div className="col-md-4">
                  <div className="card mt-3">
                    <div className="card-header">
                      <h3>Name:</h3>
                    </div>
                    <div className="card-body">
                      <h5>Name: {data.Name} </h5>
                      <h5>Mobile: {data.MobileNumber} </h5>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Detailcopy;
