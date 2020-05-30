import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";

import corona from "./asset/covid19image.jpg";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {},
  //   };
  // }
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    // console.log(fetchedData);
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    // console.log(data);

    return (
      <div className={styles.container}>
        <img src={corona} alt="Covid19" className={styles.image} />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
