const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street",
    "address-line-2" : "Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
//--nav--
const navLink = document.querySelectorAll("nav a");
const aTag = document.querySelectorAll("nav a");
const newNav = document.querySelector("nav");

const blog = document.createElement("a");
const moreIdeas = document.createElement("a");

const navLink1 = navLink[0];
const navLink2 = navLink[1];
const navLink3 = navLink[2];
const navLink4 = navLink[3];
const navLink5 = navLink[4];
const navLink6 = navLink[5];

blog.textContent = "Blog";
moreIdeas.textContent = "More Ideas";

blog.setAttribute("href", "#");
moreIdeas.setAttribute("href", "#");
blog.style.color = "green";
moreIdeas.style.color = "green";

newNav.prepend(blog);
newNav.append(moreIdeas);

navLink1.textContent = siteContent["nav"]["nav-item-1"];
navLink2.textContent = siteContent["nav"]["nav-item-2"];
navLink3.textContent = siteContent["nav"]["nav-item-3"];
navLink4.textContent = siteContent["nav"]["nav-item-4"];
navLink5.textContent = siteContent["nav"]["nav-item-5"];
navLink6.textContent = siteContent["nav"]["nav-item-6"];

aTag.forEach(a => (a.style.color = "green"));

//--CTA--
const ctaText = document.querySelector(".cta-text h1");
const ctaImg = document.querySelector("#cta-img");
const ctaBtn = document.querySelector(".cta-text button");

ctaText.textContent = siteContent["cta"]["h1"];
ctaImg.src = siteContent["cta"]["img-src"];
ctaBtn.textContent = siteContent["cta"]["button"];

//--main content--
const textDiv = document.querySelectorAll(".text-content");
const midImg = document.querySelector("#middle-img");

midImg.src = siteContent["main-content"]["middle-img-src"];

textDiv[0].classList.add("feat");
textDiv[1].classList.add("abt");
textDiv[2].classList.add("serv");
textDiv[3].classList.add("prod");
textDiv[4].classList.add("vis");

const ftH4 = document.querySelector(".feat h4");
const abH4 = document.querySelector(".abt h4");
const svH4 = document.querySelector(".serv h4");
const prH4 = document.querySelector(".prod h4");
const vsH4 = document.querySelector(".vis h4");

ftH4.textContent = siteContent["main-content"]["features-h4"];
abH4.textContent = siteContent["main-content"]["about-h4"];
svH4.textContent = siteContent["main-content"]["services-h4"];
prH4.textContent = siteContent["main-content"]["products-h4"];
vsH4.textContent = siteContent["main-content"]["vision-h4"];

const ftP = document.querySelector(".feat p");
const abP = document.querySelector(".abt p");
const svP = document.querySelector(".serv p");
const prP = document.querySelector(".prod p");
const vsP = document.querySelector(".vis p");

ftP.textContent = siteContent["main-content"]["features-content"];
abP.textContent = siteContent["main-content"]["about-content"];
svP.textContent = siteContent["main-content"]["services-content"];
prP.textContent = siteContent["main-content"]["products-content"];
vsP.textContent = siteContent["main-content"]["vision-content"];

const colorH4 = document.querySelectorAll("h4");

colorH4.forEach(h4 => h4.style.color = "blue");

//--contact--
var newP = document.createElement("P");
document.querySelector(".contact").appendChild(newP);

const contactH4 = document.querySelector(".contact h4");
const contactP = document.querySelectorAll(".contact p");
const contactP1 = contactP[0];
const contactP2 = contactP[1];
const contactP3 = contactP[2];
const contactP4 = contactP[3];

contactH4.textContent = siteContent["contact"]["contact-h4"];
contactP1.textContent = siteContent["contact"]["address"];
contactP2.textContent = siteContent["contact"]["address-line-2"];
contactP3.textContent = siteContent["contact"]["phone"];
contactP4.textContent = siteContent["contact"]["email"];

//--footer--

const footerP = document.querySelector("footer p");

footerP.textContent = siteContent["footer"]["copyright"];

