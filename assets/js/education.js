AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Google Cybersecurity Professional Certificate",
    cardImage: "assets/images/education-page/Cyber.png",
    moocLink: "https://www.coursera.org/account/accomplishments/professional-cert/DL9DJJLH6C26",
  },
  {
    title: "AZ900 Microsoft Certified: Azure Fundamentals",
    cardImage: "assets/images/education-page/AZ-900.png",
    moocLink: "https://learn.microsoft.com/api/credentials/share/en-us/aswinved/D4182FB5CC669C54?sharingId=ACA43114315AFFBE",
  },
  {
    title: "AWS Fundamentals",
    cardImage: "assets/images/education-page/aws-1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/specialization/YUDQGHA7SYEM",
  },
  {
    title: "AWS Cloud Technical Essentials",
    cardImage: "assets/images/education-page/aws-2.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/TB6TUWUDQ7FQ",
  },
  {
    title: "Architecting Solutions on AWS",
    cardImage: "assets/images/education-page/aws-3.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/R4MFHRSZFXKX",
  },
  {
    title: "Migrating to the AWS Cloud",
    cardImage: "assets/images/education-page/aws-4.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/PDAZJWLD2PA3",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    cardImage: "assets/images/education-page/aws-5.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/A4V4Z73MWFJL",
  },
  {
    title: "Create Machine Learning Models in Microsoft Azure",
    cardImage: "assets/images/education-page/az-2.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/VG2EB5YPP9S7",
  },
  {
    title: "Microsoft Azure Machine Learning for Data Scientists",
    cardImage: "assets/images/education-page/az-1.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/74WT5YHZJ8G2",
  },
  {
    title: "Introduction to DevOps",
    cardImage: "assets/images/education-page/devops.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/WF7GLP9SR8EW",
  },
  {
    title: "Container Orchestration using Kubernetes",
    cardImage: "assets/images/education-page/kubernetes.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/R3VA3PB6KQLA",
  },
  {
    title: "Docker for absolute beginners",
    cardImage: "assets/images/education-page/docker.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/JX3NGYWJ2YXQ",
  },
  {
    title: "Introduction to Cloud Computing",
    cardImage: "assets/images/education-page/cloudcompute.png",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/BECX57CYWB6J",
  },
  {
    title: "Introduction to Agile Development and Scrum",
    cardImage: "assets/images/education-page/agile.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/APKVQYLN6XWL",
  },
  {
    title: "Introduction to Google Workspace Administration",
    cardImage: "assets/images/education-page/gcp-1.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/LBUUC2DU3457",
  },
  {
    title: "Sogeti Sales Certification - Sales Enablement (Cloud)",
    cardImage: "assets/images/education-page/sales.png",
    moocLink:
      "https://www.coursera.org/account/accomplishments/verify/WK7FT5KVBYSC",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
