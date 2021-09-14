import { Component } from "react";
import Config from "../../Config";
import "../Dashboard/Dashboard.css";

class Album extends Component {
  constructor() {
    super();
    this.state = {
      data: false,
    };
  }

  //   Get data section
  componentDidMount() {
    let url = `${Config.baseLocalUrl}/album`;
    fetch(url, {
      method: "Get",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((resp) => {
        this.setState({ data: resp });
      });
    });
  }

  //  HTML section starts from here
  render() {
    const data = this.state.data;
    console.warn(data);

    return (
      <div class="container">
        {data ? (
          <div>
            <div className="row">
              {data.map(function (d, idx) {
                return (
                  <div className="col-md-3" key={idx}>
                    <ul className="card-list">
                      <li className="card">
                        {d.title}
                        <a className="card-image">
                          <img
                            src="https://picsum.photos/200"
                            alt="Psychopomp"
                          />
                        </a>
                        <a className="card-description">
                          <h2>Album</h2>
                          <p class="text-wrap">{d.title}</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>Please wait</p>
        )}
      </div>
    );
  }
}
export default Album;
