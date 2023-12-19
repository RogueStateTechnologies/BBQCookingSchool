function changeTestimonial(direction) 
{
    let active = document.getElementsByClassName("testimonial active")[0];
    let activeId = Number(active.id);

    if (direction === "back") 
    {
        console.log("moving back")

        if (activeId == 1) 
        {
            activeId = 9;    
        } else
        {
            activeId -= 1;
        }

        active.className = "testimonial inactive";
        active = document.getElementById(activeId);
        active.className = "testimonial active";    
    }

    if (direction === "forward")
    {
        console.log(activeId)
        console.log("moving forward")

        if (activeId == 9) 
        {
            activeId = 1;
        }else
        {
            activeId += 1;
        }

        console.log(activeId)
        active.className = "testimonial inactive";
        active = document.getElementById(activeId);
        active.className = "testimonial active";
    }
}

function showArticle(article) 
{
    let active = document.getElementsByClassName("about active")[0];
    let newActive = document.getElementById(article);
    
    active.className = "about inactive";
    newActive.className = "about active"
}