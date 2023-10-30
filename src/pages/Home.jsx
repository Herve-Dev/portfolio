import React from "react";
import Avatar from "../components/Avatar";
import AboutMe from "../components/AboutMe";
import Stack from "../components/Stack";

function Home() {
  return (
    <main>
      <section className="section-avatar">
        <Avatar />
      </section>
      <div>
        <section className="section-about">
          <AboutMe />
        </section>
        <section className="section-stack">
          <Stack />
        </section>
      </div>
    </main>
  );
}

export default Home;
