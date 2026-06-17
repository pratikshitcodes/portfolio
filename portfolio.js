const navList=document.querySelector(".nav-links");
const navLinks=document.querySelectorAll(".nav-links a");

navList.addEventListener("click",(e)=>{
    const clickedLink=e.target.closest("a");
    if(!clickedLink){
        alert("Click Valid Link");
    }
    else{
        navLinks.forEach((link) => {
            if(link===clickedLink){
                link.classList.add("active");
            }
            else{
                link.classList.remove("active");
            }
        });
    }
});
gsap.from(".online-links a", {
    x: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".hero-img", {
    scale: 0.5,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".profession, .name, .hero-about, .download", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});
function abtSectionTrigger() {
    gsap.killTweensOf(".about-heading, .about-text, .contact-btn, .skill-heading, .skills-1, .skills-2, .profile-img");

    gsap.fromTo(
        ".about-heading, .about-text, .contact-btn, .skill-heading",
        {
            x: -80,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.2,
            ease: "power2.out"
        }
    );

    gsap.fromTo(
        ".skills-1, .skills-2",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.9,
            stagger: 0.2,
            ease: "power2.out"
        }
    );

    gsap.fromTo(
        ".profile-img",
        {
            y: 30,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 1,
            ease: "power2.out"
        }
    );
}
ScrollTrigger.create({
    trigger: "#about",
    start: "top 70%",
    onEnter: abtSectionTrigger,
    onEnterBack: abtSectionTrigger
});
abtSectionTrigger();

function resumeTrigger(){
    gsap.fromTo(".resume-heading",  
        {
            x:-120,
            opacity:0
        },
        {
            x:0,
            duration:1,
            opacity:1, 
            ease: "power2.out"
        }
    );
    gsap.fromTo(".resume-column-1",  
        {
            y:100,
            opacity:0
        },
        {
            y:0,
            duration:1,
            opacity:1, 
            ease: "power2.out"
        }
    );
    gsap.fromTo(".resume-column-2",  
        {
            y:-100,
            opacity:0
        },
        {
            y:0,
            duration:1,
            opacity:1, 
            ease: "power2.out"
        }
    );
}

ScrollTrigger.create({
    trigger: "#resume",
    start: "top 70%",
    onEnter: resumeTrigger,
    onEnterBack: resumeTrigger
});

function contactTrigger() {
    gsap.fromTo(".contact-heading",
        {
            y: -80,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }
    );

    gsap.fromTo(".left-section",
        {
            x: -120,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.2
        }
    );

    gsap.fromTo(".right-section",
        {
            x: 120,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.2
        }
    );

    gsap.fromTo(".contact-details > div",
        {
            y: 40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.5
        }
    );

    gsap.fromTo(".contact-icons img",
        {
            scale: 0,
            opacity: 0
        },
        {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
            delay: 0.8
        }
    );

    gsap.fromTo(".right-section input, .right-section textarea, .send-btn",
        {
            y: 40,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 0.5
        }
    );
}

ScrollTrigger.create({
    trigger: "#contact",
    start: "top 70%",
    onEnter: contactTrigger
});