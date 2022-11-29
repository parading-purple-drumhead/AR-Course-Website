// const articles = [
//   {
//     id: 1,
//     title:
//       "What has Germany done to inform and protect asylum seekers in the Covid-19 pandemic?",
//     description: `In the beginning of November 2020, German Chancellor Angela Merkel announced a partial lockdown as a second wave of coronavirus swept across Germany. The new lockdown, which now looks set to last until the end of January, limits travelling and socializing and has closed bars, restaurants and cultural institutions. The public health ministry continues to emphasise the importance of social distancing, mask-wearing and proper personal hygiene.`,
//     image:
//       "https://apiwp.thelocal.com/wp-content/uploads/2021/01/4b0ac80960b859634317466cc73b3cee7cf84fbb974a030fb2a5a8b403f2a2f2-842x563.jpg",
//     url: "https://www.thelocal.de/20210107/what-has-germany-done-to-inform-and-protect-asylum-seekers-in-the-covid-19-pandemic/",
//   },
//   {
//     id: 2,
//     title:
//       "The Unaccounted Killer: Tracing the dots between toxic masculinity and femicide across four countries",
//     description: `Blindfolded, determined and with a choreography and chant simple but strong enough to spread around the world: The collective “Las Tesis”, in the middle of anti-government protests, took to the streets of Santiago de Chile to shed light on another matter concerning inequality in the country. This time, the focus was on violence against women, including rape and femicide. Their performance was not delivered on just any day, but precisely on the 25th of November 2019, the International Day for the Elimination of Violence against Women. `,
//     image:
//       "https://blog.hostwriter.org/wp-content/uploads/2020/01/elvioladorerestu.jpg",
//     url: "https://blog.hostwriter.org/the-unaccounted-killer-tracing-the-dots-between-toxic-masculinity-and-femicide-across-four-countries/",
//   },
//   {
//     id: 3,
//     title:
//       "Discordant Civil-Military Relations: The Spanner in The Works of India's Military Modernization",
//     description: `"Maarna nahi, maarna nahi!" (Don't hit, don't hit!), a faceless voice called out as the band of merry men trudged under the hot afternoon sun. Cries of "Allah-u-Akbar" and "Pakistan Zindabad!" rent the air as the troop marched on, fending off the excited villagers from their 'precious cargo'. Only one man did not join in the triumphant chanting. His brow bled and he was clad in overalls different from the fatigues donned by the Pakistani troopers as they bound and led him to an unmarked green truck.`,
//     image:
//       "https://static.tildacdn.com/tild3634-6539-4963-b930-616561306566/indian-flag-2644512_.jpg",
//     url: "http://munduscollection2019.tilda.ws/tanushree",
//   },
// ];

const projects = [
  {
    id: 1,
    title: 'Project 1 - Around The World',
    description: `This project was made as a part of the coursework in
    CS 428 Virtual, Augmented and Mixed Reality,
    instructed by
    Dr. Andrew Johnson
    at the University of Illinois at Chicago during the Fall 2022
    semester. The aim of the project was to create two AR-based
    knickknacks of two different attractions of our choice and
    also display the local time and live weather of the
    attractions. My choice of attractions for the knickknack were
    Chicago's Cloud Gate and the United Center. Chicago is a city
    I've always wanted to live in or at least visit, with seeing
    The Bean being on my bucket list. Having been a Bulls fan ever
    since I started watching basketball, attending a game at the
    United Center is another bucket list activity.`,
    image: './images/project1/Screenshot_20220919-172106_2.jpg',
    url: './project1.html',
  },
  {
    id: 2,
    title: 'Project 2 - More Cup of Coffee',
    description: `This project was made as a part of the coursework in
    CS 428 Virtual, Augmented and Mixed Reality,
    instructed by
    Dr. Andrew Johnson
    at the University of Illinois at Chicago during the Fall 2022
    semester. The aim of the project was to create a Virtual
    Reality scene comprising a commercial kiosk of our choice. I
    worked on it with my teammate,
    Advait Pai.
    Our choice of kiosk for the scene was a convenience store that
    sells packaged food and stationery.`,
    image: './images/project2/Cover.jpg',
    url: './project2.html',
  },
  {
    id: 3,
    title: "Project 3 - Our House",
    description: `This project was made as a part of the coursework 
    in CS 428 Virtual, Augmented and Mixed Reality, instructed by Dr. 
    Andrew Johnson at the University of Illinois at Chicago during 
    the Fall 2022 semester. The aim of the project was to create a 
    Virtual Reality scene on a building scale, where we modified the 
    atrium of the upcoming CDRLC building. I worked on it with my 
    teammate, Advait Pai. Our choice of theme for the scene was 
    Christmas and we put various Christmas decorations up in parts 
    of the atrium.`,
    image: './images/project3/Cover.jpg',
    url: './project3.html',
  },
  {
    id: 4,
    title: "Student's Choice - SculptrVR",
    description: `SculptrVR is an open-world, cloud-based VR game that 
    allows users to create 3D models and explore virtual worlds created 
    by them and other users. The modeling is achieved via a combination 
    of hand gestures and controller inputs. Available on multiple platforms 
    like Steam, Windows, PlayStation and the Meta Quest, it allows users to 
    sculpt in a VR world at a massive range of scale. It allows users to 
    zoom in up to 10,000x, letting them make from the tiniest sculptures to 
    Godzilla-sized stuff. It was developed using Unreal Engine, and is a 
    voxel-based modeling system.`,
    image: './images/students-choice/Cover.jpg',
    url: './students-choice.html',
  },
]

const projectList = document.getElementById('project-list')

for (let i = 0; i < projects.length; i++) {
  const project = projects[i]

  // if (i == 1) {
  //   projectList.innerHTML += `<div class="bg-white mb-5 shadow-sm project">
  //             <a href="${
  //               'project.html?id=' + project['id']
  //             }" style="text-decoration: none; color: black">
  //             <div class="row">
  //               <div class="col-lg-6 p-0">
  //                 <img src="${project['image']}" class="project-image" />
  //               </div>
  //               <div class="col-lg-6 py-4 px-5 py-lg-3 px-lg-5">
  //                 <h4>${project['title']}</h4>
  //                 <p class="project-description">
  //                   ${project['description']}
  //                 </p>
  //               </div>
  //             </div>
  //             </a>
  //           </div>`
  //   continue
  // }

  // if (i % 2 == 0) {
  //   projectList.innerHTML += `<div class="bg-white mb-5 shadow-sm project">
  //             <a href="./project1.html" style="text-decoration: none; color: black">
  //             <div class="row">
  //               <div class="col-lg-6 p-0">
  //                 <img src="${project['image']}" class="project-image" />
  //               </div>
  //               <div class="col-lg-6 py-4 px-5 py-lg-3 px-lg-5">
  //                 <h4>${project['title']}</h4>
  //                 <p class="project-description">
  //                   ${project['description']}
  //                 </p>
  //               </div>
  //             </div>
  //             </a>
  //           </div>`
  // } else {
  //   projectList.innerHTML += `<div class="bg-white mb-5 shadow-sm project">
  //             <a href="${
  //               'project.html?id=' + project['id']
  //             }" style="text-decoration: none; color: black">
  //             <div class="row">
  //               <div class="col-lg-6 p-0 d-lg-none">
  //                 <img src="${project['image']}" class="project-image" />
  //               </div>
  //               <div class="col-lg-6 py-4 px-5">
  //                 <h4>${project['title']}</h4>
  //                 <p class="project-description">
  //                   ${project['description']}
  //                 </p>
  //               </div>
  //               <div class="col-lg-6 p-0 d-none d-lg-block">
  //                 <img src="${project['image']}" class="project-image" />
  //               </div>
  //             </div>
  //             </a>
  //           </div>`
  // }

  projectList.innerHTML += `<div class="bg-white mb-5 shadow-sm project">
              <a href="${project['url']}" style="text-decoration: none; color: black">
              <div class="row">
                <div class="col-lg-6 p-0">
                  <img src="${project['image']}" class="project-image" />
                </div>
                <div class="col-lg-6 py-4 px-5 py-lg-3 px-lg-5">
                  <h4>${project['title']}</h4>
                  <p class="project-description">
                    ${project['description']}
                  </p>
                </div>
              </div>
              </a>
            </div>`
}
