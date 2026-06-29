// ── CHANGE 13: active nav on scroll using IntersectionObserver ──
const navList = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links a");
const allSections = document.querySelectorAll("section[id]");

navList.addEventListener("click", (e) => {
    const clickedLink = e.target.closest("a");
    if (!clickedLink) return;
    navLinks.forEach(l => l.classList.remove("active"));
    clickedLink.classList.add("active");
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
            });
        }
    });
}, { rootMargin: "-40% 0px -55% 0px" });

allSections.forEach(s => sectionObserver.observe(s));

// ── CHANGE 2: dynamic role cycling ──
const roles = ["Software Developer", "AI Enthusiast", "Critical Thinker"];
let roleIndex = 0;
const roleEl = document.getElementById("dynamic-role");

function cycleRole() {
    gsap.to(roleEl, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleEl.textContent = roles[roleIndex];
            gsap.fromTo(roleEl,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    });
}
setInterval(cycleRole, 2500);

// ── CHANGE 3: typewriter name — types letter by letter, erases to "P", loops ──
const fullName = "Pratikshit Singh";
const nameEl = document.getElementById("typed-name");
let charIndex = 0;
let erasing = false;

function typeWriter() {
    if (!erasing) {
        if (charIndex < fullName.length) {
            nameEl.textContent = fullName.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeWriter, 80);
        } else {
            // Wait 5 sec then start erasing
            setTimeout(() => {
                erasing = true;
                typeWriter();
            }, 5000);
        }
    } else {
        // Erase until only "P" remains
        if (charIndex > 1) {
            charIndex--;
            nameEl.textContent = fullName.substring(0, charIndex);
            setTimeout(typeWriter, 50);
        } else {
            // Stop at "P", wait 1.5 sec then retype
            setTimeout(() => {
                erasing = false;
                typeWriter();
            }, 1500);
        }
    }
}
// Start after hero animation completes (~1.5s)
setTimeout(typeWriter, 1500);

// ── CHANGE 5: hero animation — same as original ──
const heroT1 = gsap.timeline();

heroT1.from(".hero-img", {
    scale: 0.7,
    opacity: 0,
    duration: 0.7,
    ease: "power2.out"
});
heroT1.from(".profession, .name, .hero-about, .download", {
    y: 25,
    opacity: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power2.out"
});
heroT1.from(".online-links a", {
    x: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});

// ── Hide all scroll sections initially so they pop in on scroll ──
gsap.set(".about-heading, .about-text, .contact-btn, .skill-heading, .skills-1, .skills-2, .profile-img", { opacity: 0 });
gsap.set(".project-card", { opacity: 0});
gsap.set(".resume-heading, .resume-column-1, .resume-column-2", { opacity: 0 });
gsap.set(".contact-heading, .left-section, .right-section", { opacity: 0 });

// ── ABOUT section ──
function abtSectionTrigger() {
    gsap.killTweensOf(".about-heading, .about-text, .contact-btn, .skill-heading, .skills-1, .skills-2, .profile-img");

    gsap.fromTo(
        ".about-heading, .about-text, .contact-btn, .skill-heading",
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
    gsap.fromTo(
        ".skills-1, .skills-2, .profile-img",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.9, stagger: 0.2, ease: "power2.out" }
    );
}
ScrollTrigger.create({
    trigger: "#about",
    start: "top 70%",
    onEnter: abtSectionTrigger,
});

// ── CHANGE 8: project cards animate in one by one ──
ScrollTrigger.create({
    trigger: "#projects",
    start: "top 70%",
    onEnter: () => {
        gsap.fromTo(".project-card",
    { opacity: 0, y: 0 },
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: "power2.out" }
);
    }
});

// ── RESUME section ──
function resumeTrigger() {
    gsap.fromTo(".resume-heading",
        { x: -120, opacity: 0 },
        { x: 0, duration: 1, opacity: 1, ease: "power2.out" }
    );
    gsap.fromTo(".resume-column-1",
        { y: 200, opacity: 0 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.out" }
    );
    gsap.fromTo(".resume-column-2",
        { y: -200, opacity: 0 },
        { y: 0, duration: 1, opacity: 1, ease: "power2.out" }
    );
}
ScrollTrigger.create({
    trigger: "#resume",
    start: "top 70%",
    onEnter: resumeTrigger,
    onEnterBack: resumeTrigger
});

// ── CONTACT section ──
function contactTrigger() {
    gsap.fromTo(".contact-heading",
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    );
    gsap.fromTo(".left-section",
        { x: -120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(".right-section",
        { x: 120, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.45, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(".contact-details > div",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.15, ease: "power2.out", delay: 0.5 }
    );
    gsap.fromTo(".contact-icons .contact-social-link",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.15, ease: "back.out(1.7)", delay: 0.8 }
    );
    gsap.fromTo(".right-section input, .right-section textarea, .send-btn",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, stagger: 0.15, ease: "power2.out", delay: 0.5 }
    );
}
ScrollTrigger.create({
    trigger: "#contact",
    start: "top 70%",
    onEnter: contactTrigger
});
