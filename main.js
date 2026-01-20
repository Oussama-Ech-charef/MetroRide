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