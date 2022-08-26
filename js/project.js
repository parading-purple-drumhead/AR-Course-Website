const [urlParams] = new URLSearchParams(window.location.search);

const projects = {
  1: {
    id: 1,
    title: "Project 1",
    description: "No description yet",
    image: "./images/filler.png",
    url: "#",
  },
  2: {
    id: 2,
    title: "Project 2",
    description: "No description yet",
    image: "./images/filler.png",
    url: "#",
  },
  3: {
    id: 3,
    title: "Project 3",
    description: "No description yet",
    image: "./images/filler.png",
    url: "#",
  },
};

const project = projects[urlParams[1]];

console.log(project);

document.getElementById(
  "title"
).innerText = `Project ${urlParams[1]} | Sudhanshu Basu Roy`;
document.getElementById("project-title").innerText = project["title"];

if (project["description"] == "No description yet")
  document.getElementById("no-documentation-alert").style.display = "block";
