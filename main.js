const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__img img",{
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".header__content h1",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__content .section__description",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__links",{
    ...scrollRevealOption,
    delay: 1500,
});


const workout = document.querySelector(".workout__images");

const workoutContent = Array.from(workout.children);

workoutContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  workout.appendChild(duplicateNode);
});

ScrollReveal().reveal(".workout__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".workout__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".story__image img",{
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".story__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".story__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
    interval: 500,
});

ScrollReveal().reveal(".story__link", {
    ...scrollRevealOption,
    delay: 2000,
});

ScrollReveal().reveal(".feature__grid li", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".download__image img",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".membership__content .section__header",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".membership__content .section__header",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".membership__btn",{
    ...scrollRevealOption,
    delay: 1000,
});




