import "./App.css";
import Box from "./components/Box";

import one from "./Assets/01.jpg";
import two from "./Assets/02.jpg";
import three from "./Assets/03.jpg";
import four from "./Assets/04.jpg";
import five from "./Assets/05.jpg";
import six from "./Assets/06.jpg";
import seven from "./Assets/07.jpg";
import eight from "./Assets/08.jpg";

import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      imageArr: [
        { id: 1, img: one },
        { id: 2, img: two },
        { id: 3, img: three },
        { id: 4, img: four },
        { id: 5, img: one },
        { id: 6, img: six },
        { id: 7, img: four },
        { id: 8, img: three },
        { id: 9, img: two },
        { id: 10, img: five },
        { id: 11, img: five },
        { id: 12, img: eight },
        { id: 13, img: six },
        { id: 14, img: seven },
        { id: 15, img: eight },
        { id: 16, img: three },
        { id: 17, img: five },
        { id: 18, img: one },
      ],
      currentPage: 1,
      itemsPerPage: 6,
    };
  }

  handleNext = () => {
    const { currentPage, imageArr, itemsPerPage } = this.state;
    const totalPages = Math.ceil(imageArr.length / itemsPerPage);

    if (currentPage < totalPages) {
      this.setState({ currentPage: currentPage + 1 });
    }
  };

  handlePrevious = () => {
    const { currentPage } = this.state;

    if (currentPage > 1) {
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  render() {
    const { imageArr, currentPage, itemsPerPage } = this.state;

    // Calculate indexes for slicing the image array
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = imageArr.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <>
        <h1>All Cards Are Here.</h1>
        <div className="container">
          {currentItems.map((element) => {
            return (
              <div key={element.id}>
                <Box image={element.img} number={element.id} />
              </div>
            );
          })}
        </div>
        <div className="btn-box">
          <button onClick={this.handlePrevious} disabled={currentPage === 1}>
            ← Previous
          </button>
          <button
            onClick={this.handleNext}
            disabled={currentPage * itemsPerPage >= imageArr.length}
          >
            Next →
          </button>
        </div>
      </>
    );
  }
}

export default App;
