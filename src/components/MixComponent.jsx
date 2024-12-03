import React from "react";

// a reusable ProjectEntry component for each work entry
const ProjectEntry = ({ role, title, director, year, link }) => {
  const RoleHeader = () =>
    link ? (
      <a
        className="mix-flex"
        target="_blank"
        href={link}
        rel="noopener noreferrer"
      >
        <span>{role}</span>
        <img
          className="icon"
          width="24"
          src="/icons/link.svg"
          alt="link icon"
        />
      </a>
    ) : (
      <span>{role}</span>
    );

  return (
    <div className="good">
      <RoleHeader />
      <p style={{ marginBottom: "0px" }}>
        {title} ({year})<br />
        {director}
      </p>
    </div>
  );
};

const projects = [
  {
    role: "Live Sound Engineer",
    title: "Matilda The Musical",
    year: "2024",
    director: "Dir. Emil Pantelimon",
  },

  {
    role: "Mixing Engineer",
    title: "Die Zauberflöte",
    year: "2024",
    director: "Dir. Cristian Mihailescu",
  },

  {
    role: "Mixing Engineer",
    title: "L'elisir d'amore",
    year: "2023",
    director: "Dir. Cristian Mihailescu",
  },
  {
    role: "Sound Design",
    title: "Good, Evil and the Sun",
    year: "2023",
    director: "Dir. Yutaro Keino",
    link: "https://www.imdb.com/title/tt31173224/?ref_=nm_flmg_job_2_cdt_t_1",
  },
  {
    role: "Sound Design",
    title: "Punguista",
    year: "2022",
    director: "Dir. Yutaro Keino",
  },
  {
    role: "Recording Engineer",
    title: "The Spell",
    year: "2022",
    director: "Alice Sonia Michael",
  },
  {
    role: "Recording Engineer",
    title: "Istehlal LP",
    year: "2022",
    director: "Mohamad Zatari Trio",
  },
  {
    role: "Mixing Engineer",
    title: "Isabelle",
    year: "2021",
    director: "Dir. Cristian Nicolae",
    link: "https://www.imdb.com/title/tt13333354/?ref_=nm_knf_t_2",
  },
  {
    role: "Recording Engineer",
    title: "Sailor",
    year: "2021",
    director: "Fine It's Pink",
  },
  {
    role: "Mixing Engineer",
    title: "Live Concert",
    year: "2020",
    director: "Mohamad Zatari Trio",
    link: "https://www.youtube.com/watch?v=vhOumBg0gDA&embeds_euri=https%3A%2F%2Feditor.wixapps.net%2F&embeds_origin=https%3A%2F%2Feditor.wixapps.net&feature=emb_logo",
  },
  {
    role: "Recording Engineer",
    title: "Love Create Inspire",
    year: "2020",
    director: "Urma",
  },
  {
    role: "Assistant Sound Editor",
    title: "Zoo",
    year: "2018",
    director: "Dir. Antonio Tublen",
    link: "https://www.imdb.com/title/tt7624934/?ref_=nm_knf_t_1",
  },
];
const MixComponent = () => {
  const createRow = (projects, index, isEven) => {
    const className = isEven ? "even" : "odd";
    const startIndex = index * 2;

    return (
      <div key={index} className={className}>
        {!isEven && <div />}
        {projects.slice(startIndex, startIndex + 2).map((project, idx) => (
          <React.Fragment key={idx}>
            <ProjectEntry {...project} />
            <div />
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="text-mix">
      {Array.from({ length: Math.ceil(projects.length / 2) }, (_, index) =>
        createRow(projects, index, index % 2 === 0)
      )}
    </div>
  );
};

export default MixComponent;
