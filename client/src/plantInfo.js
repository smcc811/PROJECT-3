import { render } from "@testing-library/react";
import axios from "axios";
import React from "react";

componentDidMount();
{
  axios
    .get(
      `https://trefle.io/api/v1/plants?token=LJaYJar9CFy3kjCF6AccAg0UxCkhUS4IYk03GD8OIn0`
    )
    .then((res) => {
      console.log(res);
      this.setState({ plants: res.data });
    });
}

render(); {
  return <ul>{this.state.plant.map(plant => <li>{plant.name}</li>)}
    </ul>;
}  
  
 

export default class plantINfo extends React.component {
  state = {
    plants: [],
  };
}
