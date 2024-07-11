/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

(function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //
 
  $(document).ready(function(){
        
    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });

    
        
    $('.testimonial-slider').slick({
      autoplay: false,
      autoplaySpeed: 4000,
      fade: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

    const tabs = document.querySelectorAll('[data-tab-target]')
    const tabContents = document.querySelectorAll('[data-tab-content]')

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });

    const fk_tabs = document.querySelectorAll('[fk-data-tab-target]')
    const fk_tabContents = document.querySelectorAll('[fk-data-tab-content]')

    fk_tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = document.querySelector(tab.getAttribute('fk-data-tab-target'))
        fk_tabContents.forEach(tabContent => {
          tabContent.classList.remove('active')
        })
        fk_tabs.forEach(tab => {
          tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
      })
    });


   // Project data
    const projectData = {
      MoodMotion: {
        title: "MoodMotion",
        description: "Thesis: Synthesizing Emotional Expressions in Locomotion Systems Based on Dynamic Environmental Transitions",
        image: "images/walkthrough_2.gif",
        extra: "Recent advancements in AI and artistic techniques have significantly improved the realism of 3D graphics. A novel approach has been proposed to express the depth of a character's feelings in a virtual environment, focusing on character movements and environment variations. The approach uses psychological frameworks, interactive techniques, and deep learning methods. A robust model has been developed using Convolutional and Multi-Layer Perceptron networks, which can predict the environment type and mood factors in a real-time 3D game engine with 98% accuracy and a maximum error rate of 10 - 17% for Pleasure, Arousal, and Dominance.",
        tags: "#Unreal Engine 5.2 #Neural Network Engine(NNE) #C++ #Tensorflow #Python #Blender",
        link: "https://github.com/HasinduRamanayake/FYP_MultiModal-MultiTaskLearning",
        thesis_link: "https://drive.google.com/file/d/1iFNhAYP2SbboJTS1vciPzu5qX5FuLfCo/view?usp=sharing"
      },
      NewYearFest: {
        title: "NewYearFest",
        description: "This game was inspired by seasonal festive called Sinhala and Tamil New Year in Sri lanka and was published as IP of FCodeLabs.",
        image: "images/newyear.png",
        extra: "The finalized application is running as a web application which has scoreboared to make it more competive with players it was dedicatedly using the Firebase features(FireStore) to implement the Scoreboard feature",
        tags: "#Unity #Neural Network Engine(NNE) #Tensorflow #Python #Blender",
        link: "https://newyearfestdemo.web.app/"
      },
      DoodleCraze: {
        title: "DoodleCraze",
        description: "A third person multiplayer game",
        image: "images/DD.png",
        extra: "Additional information about DoodleCraze.",
        tags: "Unreal Engine 5.1 | Blueprints | C++ | Multiplayer Sessions | Blender",
        link: "https://hasinduramanayake.itch.io/doodlecraze"
      },
      MultiNet: {
        title: "MultiNet",
        description: "A Multiplayer Session plugin for Unreal Engine 5",
        image: "images/Multi.png",
        extra: "Plugin has been facilitated with several multiplayer functions such as Host a Session, Join a Session and Find a Session etc. Scalable for any enhancement to the core of the subsystem",
        tags: "Unreal Engine 5.3 | Blueprints | C++ | Multiplayer Sessions",
        link: "https://drive.google.com/drive/folders/10X0ZuKZ3rI2Uh3xisekPygdvGzR_i92Y?usp=sharing"
      },
      MultiShooterX: {
        title: "MultiShooterX",
        description: "A 2D two player multiplayer game",
        image: "images/MultiShooterX.png",
        extra: "This game was made just for learning purposes utilising PyGame with a very simplified UI",
        tags: "PyGame, Python",
        link: "https://github.com/HasinduRamanayake/MultiShooterX"
      }
    };

    // Modal functionality
    var modal = document.getElementById("projectModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalImage = document.getElementById("modalImage");
    var modalDescription = document.getElementById("modalDescription");
    var modalExtra = document.getElementById("modalExtra");
    var modalTags = document.getElementById("tags");
    var modalLink = document.getElementById("modalLink");
    var modalThesisLink = document.getElementById("modalThesisLink");
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.project-link').forEach(function (element) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        var projectId = this.dataset.id;
        var project = projectData[projectId];
        if (project) {
          modal.style.display = "block";
          modalTitle.textContent = project.title;
          modalImage.src = project.image;
          modalDescription.textContent = project.description;
          modalExtra.textContent = project.extra;
          modalTags.textContent = project.tags;
          
          if (project.link) {
            modalLink.style.display = 'inline-block';
            modalLink.href = project.link;
          } else {
            modalLink.style.display = 'none';
          }

          if (project.thesis_link) {
            modalThesisLink.style.display = 'inline-block';
            modalThesisLink.href = project.thesis_link;
          } else {
            modalThesisLink.style.display = 'none';
          }
        }
      });
    });

    span.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }


    // SweetAlert2 for detailed view of service items
    const serviceDetails = {
      "Game Development": {
        title: "Game Development",
        image: "images/animgif.gif",
        description: "I have experience in game development as a Technical Artist and Gameplay Programmer, having worked on a variety of projects. I am passionate about this field and eager to further expand my expertise. I look forward to learning more and gaining extensive experience from this industry, as my passion drives for it."
      },
      "Artificial Intelligence": {
        title: "Artificial Intelligence",
        image: "images/AI.gif",
        description: "I have experience in the Artificial Intelligence, by contributing to a diverse range of projects with collaboration of game development. I am excited about the prospect of learning more and gaining substantial experience on ML and DL technologies to break the prevailing boundaries of Game Development."
      },
      "Web Development": {
        title: "Web Development",
        image: "images/web.gif",
        description: "I have done lot of projects related to Web Development and I had a Intership as well. The project Higlights can be seen in detail in my GitHub"
      },
      "Blockchain": {
        title: "Blockchain",
        image: "images/block.gif",
        description: "SmartMedX is the first health related application I have experienced with Blockchain Tech Stack. It is Health Record Distribution System with concern for 3rd parties",
        
      },
      "Virtual Production": {
        title: "Virtual Production",
        image: "images/cam.gif",
        description: "I have a passion for creating Cinematics since I love 3D movies and Animations. I have several projects regarding that. you can find them in my ArtStation Profile"
      }
    };

    document.querySelectorAll('.service-slider .column').forEach(function (element) {
      element.addEventListener('click', function (event) {
        event.preventDefault();
        const title = this.querySelector('h3').innerText;
        const details = serviceDetails[title];
        if (details) {
          Swal.fire({
            title: details.title,
            html: `<img src="${details.image}" class="tab-image"><p>${details.description}</p>`,
            confirmButtonText: 'Close'
          });
        }
      });
    });

  });

  // close when click off of container
  $(document).on('click touchstart', function (e){
    var x = document.getElementById("navigation");
    if (x.className === "top-menu") {
      x.className += " menu-bar";
    } else {
      x.className = "top-menu";
    }
  });

})(jQuery);
