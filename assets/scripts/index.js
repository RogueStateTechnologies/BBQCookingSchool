let json;

async function fetchJson()
{
    const response = await fetch("./assets/JSON/Text.JSON")
    const data = await response.json();
    json = await data;

}

fetchJson();

function renderLanding() 
{
    let blurbP = document.createElement("p");
    let blurbDiv = document.createElement("div");
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "Welcome To BBQCookingSchool.com";

    subHeading.innerHTML = "The only website dedicated to advanced education of the worlds BBQ cooks through home-study!";
    
    blurbDiv.className = "container";
    
    blurbDiv.id = "landing-blurb";
    
    blurbP.className = "blurb";
    
    blurbP.innerHTML = formatTextArray(json["landing"]["blurb"]);
    
    blurbDiv.appendChild(blurbP);
    
    text.appendChild(blurbDiv);
}

function renderAbout() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "About Us"
    
    let whoDiv = document.createElement("div");
    let whoP = document.createElement("p");

    whoDiv.className = "container";
    whoDiv.appendChild(whoP);
    whoP.innerHTML = formatTextArray(json["about"]["who"]["instructor"]);
    text.appendChild(whoDiv);
}

function renderTestimonials() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "What people are saying";
    
    let testimonialDiv = document.createElement("div");

    testimonialDiv.className = "container";
    testimonialDiv.appendChild(formatTestimonials());
    text.appendChild(testimonialDiv);
}

function renderCourse() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "A little about the course"

    let learningDiv = document.createElement("div");
    let learningP = document.createElement("p")

    learningDiv.appendChild(learningP);
    learningP.innerHTML = formatTextArray(json["course"]["learning"]);

    text.appendChild(learningDiv);
}

function renderOrder() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";

    heading.innerHTML = "Order Now!"

    let price = document.createElement("h3");
    let disclaimer = document.createElement("span");

    price.innerHTML = json["order"]["price"];
    disclaimer.innerHTML = json["order"]["shipping"];

    text.appendChild(price);
    text.appendChild(disclaimer);
}

function renderContact() 
{
    let heading = document.getElementsByClassName("heading")[0];
    let subHeading = document.getElementsByClassName("sub")[0];
    let text = document.getElementById("text");

    heading.innerHTML = "";
    subHeading.innerHTML = "";
    text.innerHTML = "";
}

function formatTextArray(toBeFormatted) {
    let body = "";
    toBeFormatted.forEach(string => {
        body = body + "<br>" + string;
    });
    
    return body;
}

function formatTestimonials() 
{
    let testimonials = document.createElement("ul");
    json["testimonials"].forEach(testimonial => {
        let newTestimonial = document.createElement("li");
        newTestimonial.className = "testimonial"
        newTestimonial.innerHTML = `${testimonial["name"]} <br> ${testimonial["date"]} <br> ${formatTextArray(testimonial.body)}`
        testimonials.appendChild(newTestimonial);
    });   
    return testimonials; 
}