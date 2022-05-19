import React, { Component } from "react";
import styles from "./home.module.css";
import v1 from "./assets/img/v1.png"
import v2 from "./assets/img/v2.png"
import v3 from "./assets/img/v3.png"
import v4 from "./assets/img/v4.png"
import v5 from "./assets/img/v5.png"
import v6 from "./assets/img/v6.png"
import v7 from "./assets/img/v7.png"
import v8 from "./assets/img/v8.png"
import v9 from "./assets/img/v9.png"




import model from "./assets/img/model.jpg";

export default class Home extends Component {
  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: v1,
    //   url :"./assets/img/v1.png"  => k ra hìnhA
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: v2,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: v3,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: v4,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: v5,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: v6,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: v7,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: v8,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: v9,
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderGlasse = () => {
    return this.data.map((item, index) => {
      let { id, price, name, url, desc } = item;
      return (
        <div className={styles.glasseItem} onClick={()=>{
            this.handleColor(url)
        }}>
          <img src={url} />
          <p>{name}</p>
        </div>
      );
    });
  };

    state = {
      img: this.data[0].url,
    };

    handleColor = (color) => {
      this.setState({
        img: color,
      });
    };

  render() {
    return (
      <div className={styles.container}>
        <h1>TRY GLASSES APP ONLINE</h1>
        <div className={styles.glasse}>
          <img src={this.state.img} />
        </div>
        <img className={styles.model} src={model} />
        <div className={styles.glasseList}>{this.renderGlasse()}</div>
      </div>
    );
  }
}
