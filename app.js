const skills = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "FRONTEND",
  "ANDROID",
  "C#",
  "C++",
  "ACCESS",
  "MicrosoftOffice",
];


const projects = [
    {
        id:1,
        img : "assets/calculator3.png",
        project_naem: "Calculator",
        project_link: "#",
        category: "Web"
    },
    {
        id:2,
        img : "assets/DonyayeAyandeh_new.png",
        project_naem: "Donyaye Ayandeh",
        project_link: "#",
        category: "Android"
    },
    {
        id:3,
        img : "assets/countries.png",
        project_naem: "Countries Application",
        project_link: "#",
        category: "Android"
    },
/*     {
        id:4,
        img : "assets/countries.png",
        project_naem: "Countries Application",
        project_link: "#",
        category: "Android"
    }, */

];



/*----------     Set Skills:     ----------*/

function setSkills() {
    const colDiv = skills.map(function (item) {
            return ` <div class="col-md-4  aos-init animate__animated aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="container-i-h3">
               <i class="fas fa-chevron-right"></i>
               <h3>${item}</h3>
            </div>
          
            </div> `;
        });

    const infoSkills = document.getElementById("info-skills");

    infoSkills.innerHTML = colDiv.join("");

    //* centering :  
    // text-align: center;
    infoSkills.style.textAlign ="center";
}




/*----------     Set active state on Buttons:     ----------*/

function activateTheButton(item) {
    document.querySelectorAll(".btn-category").forEach(function (btn) {
      btn.classList.remove("active");
    });
    if (item) {
      item.classList.add("active");
    }
  }



/*----------       Set Categories :       ----------*/
function setButtonCategories() {
    const categoryContainer = document.getElementById("category-container");
    //* move data from our Object into empty array:
    const categories = projects.reduce(function (values,item){
      if (item && item.category && !values.includes(item.category)) {
            values.push(item.category);  
      }  
      return values;    
    }
     , ["all"]);

     
     //* "creating Button" for each element( in fact for each "category") :
     const buttons = categories.map(function (category) {
        const classList = category === 'all' ? "btn-category active" : "btn-category";
       return `<button class="${classList}"  data-id="${category}">${category}</button>`;
     });
    //* Show Buttons(categories) on the HtmlTag :
     categoryContainer.innerHTML = buttons.join("");
    //* alignment (Tarazbandi): Center :
     categoryContainer.style.textAlign = "center";



    // * active state:
    document.querySelectorAll(".btn-category").forEach(function (item) {
        const categoryType = item.getAttribute("data-id");
        item.addEventListener("click", function () {
            // debugger

          // **** ------  Display All Projects for "all" category: ------ **** //
          activateTheButton(item);
          if (categoryType === "all") {
            displayProjectItems(projects);
            return;
          }


          // Alingments (TarazBandi) for web and Android category:
          if (categoryType === "Web") {
            const projectsContainer = document.getElementById("info-projects");
            projectsContainer.style.justifyContent = "center";
            // return;
          }
          if (categoryType === "Android") {
            const projectsContainer = document.getElementById("info-projects");
            projectsContainer.style.justifyContent = "space-between";
            // return;
          }


          /// ****----   Display related Projects for related categories:  ----**** //
          const filteredMenu = projects.filter(function (item) {
            return item.category === categoryType;
          });

          displayProjectItems(filteredMenu);
        });
      });
}



/*----------       Show Projects'content:       ----------*/
// Mohtava :

function displayProjectItems(items) {
    const menuWrapper = document.getElementById("info-projects");
    if (items) {
      menuWrapper.innerHTML = items
        .map(function (item) {
          return ` <div class="col-lg-4  col-md-6   items-col  aos-init animate__animated aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                    <img src=${item.img} alt="" class="project-img">

                    <div class="item-details">
                      <p>${item.project_naem}</p>
                      <a href="${item.project_link}" target="blank">Demo</a>
                    </div>                  
                </div> `;
        })
        .join("");
        // menuWrapper.style.transition = "10s";
    }

  }



/*----------       Call functions:       ----------*/
document.addEventListener("DOMContentLoaded" , function () {
    setSkills();
    setButtonCategories();
    displayProjectItems(projects);   
    // smoothScroll();
});



/*--------------------------------------       Menue       ----------------------------------*/
function Menu(item) {
    const menu_inputTag = document.getElementById("menu-input");
    const nav_menu_ul = document.getElementById("nav-menu");
    const collapse_menu = document.getElementById("navbarSupportedContent");
    if (menu_inputTag.checked === false) {
        // debugger
        collapse_menu.style.transition= "1s";
        collapse_menu.style.display= "block";
        // nav_menu_ul.style.backgroundColor= "red";
        
        console.log(menu_inputTag.checked);    
    }
    if (menu_inputTag.checked === true)
    {
        collapse_menu.style.transition= "0.4s";
        collapse_menu.style.display= "none";
        console.log(menu_inputTag.checked); 

    }
    return;   
}

function menuLink_hidden() {
    const collapse_menu = document.getElementById("navbarSupportedContent");
    collapse_menu.style.display= "none";

    const menu_inputTag = document.getElementById("menu-input");
    menu_inputTag.checked = false;

    // const mySkillsLink = document.getElementById("my-skills-link");

    // mySkillsLink.style.href = "";
}

/* function animationOnSectionLink(params) {
    debugger
    const sectionTag = document.getElementsByTagName("section");
    sectionTag.animate({
        opacity: [ 0, 1 ],          // [ from, to ]
        color:   [ "#fff", "#000" ] // [ from, to ]
      }, 2000);
    
} */
/* function smoothScroll() {
    const body = document.body,
     sectionTag = document.getElementsByTagName('section')[0],
    // height = sectionTag.getBoundingClientRect().height - 1,
    speed = 0.05;

var offset = 0

body.style.height = Math.floor(height) + "px"
    offset += (window.pageYOffset - offset) * speed
    
    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll(); */
