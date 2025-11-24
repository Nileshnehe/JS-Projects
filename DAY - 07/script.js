const users = [
  {
    fullName: "Ava Mitchell",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    profession: "Frontend Developer",
    description: "Ava specializes in building clean and responsive UI using HTML, CSS and JavaScript.",
    tags: ["JavaScript", "React", "UI", "CSS"]
  },
  {
    fullName: "Ethan Carter",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    profession: "Backend Engineer",
    description: "Ethan loves building scalable APIs and working with cloud technologies.",
    tags: ["Node.js", "API", "Cloud", "MongoDB"]
  },
  {
    fullName: "Sophia Turner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    profession: "UI/UX Designer",
    description: "Sophia creates human-centered designs with a focus on simplicity and usability.",
    tags: ["Figma", "UX", "Wireframes", "Prototyping"]
  },
  {
    fullName: "Lucas Perez",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    profession: "Full Stack Developer",
    description: "Lucas works on both frontend and backend to deliver complete web solutions.",
    tags: ["JavaScript", "Node.js", "React", "MySQL"]
  },
  {
    fullName: "Mia Reynolds",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    profession: "Data Analyst",
    description: "Mia transforms raw data into meaningful insights and dashboards.",
    tags: ["Python", "Data", "Excel", "Visualization"]
  }
  
];

var sum = ''
users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
});


var main = document.querySelector('main')
main.innerHTML = sum