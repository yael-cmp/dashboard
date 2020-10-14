import React, { useEffect, useState } from "react";
import Card, { CardOverview } from "../components/card";
import Grid from "../components/grid";
import "../assets/styles/components/dashboard.scss";
import Toggle from "../components/toggle";

const Home = () => {
  const [isDark, setIsDark] = useState(false);
  function darkMode() {
    if (isDark === false) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }
  return (
    <div
      className={!isDark ? "DARK" : ""}
      style={{ transition: ".6s ease-out" }}
    >
      <div className="dashboard">
        <div className="cont">
          <div className="cont-max color_w">
            <h1 style={{ margin: "0 auto" }}>Social Media Dashboard</h1>{" "}
            <Toggle left funct={darkMode} />
            <h5
              className="color_d"
              style={{ marginTop: "0", marginBottom: "3rem" }}
            >
              Total Followers: 23,004
            </h5>
            <div className="cont-g">
              <Grid>
                <Card
                  url=""
                  iconApp="facebook"
                  subs={3090822}
                  user="@hpkitchen"
                  number={-50}
                ></Card>
                <Card
                  url="https://twitter.com/yael_cmp"
                  iconApp="twitter"
                  subs={1022}
                  user="@hpkitchen"
                  number={50}
                ></Card>
                <Card
                  url="https://instagram.com/yael_cmp"
                  iconApp="instagram"
                  subs={208220}
                  user="@hpkitchen"
                  number={-5}
                ></Card>
                <Card
                  iconApp="youtube"
                  subs={9822}
                  user="@hpkitchen"
                  number={20}
                ></Card>
              </Grid>
            </div>
            <h1>Overview - Today</h1>
            <div className="cont-g">
              <Grid>
                <CardOverview
                  iconApp="facebook"
                  subs={30}
                  number={-50}
                ></CardOverview>
                <CardOverview
                  iconApp="facebook"
                  subs={400}
                  number={20}
                ></CardOverview>
                <CardOverview
                  url="https://twitter.com/yael_cmp"
                  iconApp="twitter"
                  subs={3020}
                  number={50}
                ></CardOverview>
                <CardOverview
                  iconApp="instagram"
                  url="https://instagram.com/yael_cmp"
                  subs={1104}
                  number={-5}
                ></CardOverview>
                <CardOverview
                  iconApp="youtube"
                  subs={4023340}
                  number={20}
                ></CardOverview>
                <CardOverview
                  iconApp="youtube"
                  subs={2023340}
                  number={-40}
                ></CardOverview>
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <div
        class="attribution"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          minHeight: "80px",
          alignItems: "center",
          background: "#cccc",
          flexFlow: "wrap",
        }}
      >
        Challenge by
        {" _"}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          rel="noopener noreferrer"
          target="_blank"
          style={{ color: "#1db489" }}
        >
          {" "}
          Frontend Mentor{" "}
        </a>
        . Coded by @
        <a style={{ color: "#1db489" }} href="https://twitter.com/yael_cmp">
          yael_cmp
        </a>
        🦖 .
      </div>
    </div>
  );
};
export default Home;
