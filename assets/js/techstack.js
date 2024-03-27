AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/aws.png",
    langName: "AWS Cloud",
    langDesc: "<li>Have 2+ years of experience in developing, managing, and monitoring solutions on Aws cloud environment.</li>",
  },
  {
    langImage: "assets/images/techstack-page/azure.png",
    langName: "Azure Cloud",
    langDesc: "<li>Have 3+ years of experience in developing, managing, and monitoring solutions on Azure cloud environment.</li>",
  },
  {
    langImage: "assets/images/techstack-page/google.png",
    langName: "Google Cloud",
    langDesc: "<li>Have 2+ years of experience in developing, managing, and monitoring solutions on Google cloud platform.</li>",
  },
  {
    langImage: "assets/images/techstack-page/kubernetes.png",
    langName: "Kubernetes",
    langDesc: "<li>Have proficient experience in developing  container orchestration systems for automating software deployment, scaling, and management on Kubernetes platform.</li>",
  },
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language. Have 4+ years of experience in python programming language.</li>",
  },
  {
    langImage: "assets/images/techstack-page/docker.png",
    langName: "Docker",
    langDesc: "<li>Docker simplifies the development, testing, and deployment of software using its client-server architecture and registries. Have 2+ years of experience with Docker frame work.</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/powershell.png",
    langName: "PowerShell",
    langDesc: "<li>PowerShell is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language. Have 3+ years of experience in PowerShell scripting. Developed multiple automation scripts on servers to simplyfy the process and improve productivity.</li>",
  },
  {
    langImage: "assets/images/techstack-page/terraform.png",
    langName: "Terraform",
    langDesc: "<li>Terraform is an infrastructure as code tool that lets you define and manage cloud and on-prem resources in human-readable configuration files. Have 2+ years of experience with Terraform tool.</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. Have 3+ years of experience in programming in C.</li>"
  },
  {
    langImage:"assets/images/techstack-page/shell.png",
    langName:"Shell",
    langDesc:"<li>A shell script is a computer program designed to be run by a Unix shell, a command-line interpreter. Have 4+ years of experience in Shell Scripting.</li>"
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400">
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
