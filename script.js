
const cursor = document.querySelector("#cursor");
const caseItem = document.querySelector("#case-items");

window.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        top: dets.y,
        left: dets.x
    })
});


caseItem.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        opacity: 0
    })
});

caseItem.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        opacity: 1
    })
});

const item = document.querySelectorAll(".items");
item.forEach(item => {
    const video = item.firstElementChild.lastElementChild;
    item.addEventListener("mouseenter", () => {
        gsap.to(video, {
            opacity: 1
        })
    })
    item.addEventListener("mouseleave", () => {
        gsap.to(video, {
            opacity: 0
        })
    })
})

