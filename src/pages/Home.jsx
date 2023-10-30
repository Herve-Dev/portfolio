import React from "react";
import Avatar from "../components/Avatar";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <main>
      <section className="section-avatar">
        <Avatar />
      </section>
      <section className="section-about">
        <AboutMe />
      </section>
    </main>
  );
}

export default Home;
