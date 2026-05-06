const skills = document.querySelectorAll(".skill-progress");

const showSkills = () => {
    skills.forEach(skill => {
        const rect = skill.getBoundingClientRect();

        if (rect.top < window.innerHeight) {
            skill.style.width = skill.dataset.width;
        }
    });
};

window.addEventListener("scroll", showSkills);