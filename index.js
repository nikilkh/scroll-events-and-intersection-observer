const terms = document.querySelector(".terms-conditions");
const acceptButton = document.querySelector(".accept-button");

function obCallback(payload) {
    console.log(payload);
    if(payload[0].intersectionRatio === 1) {
        acceptButton.disabled = false;
        ob.unobserve(terms.lastElementChild);
    }
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);



