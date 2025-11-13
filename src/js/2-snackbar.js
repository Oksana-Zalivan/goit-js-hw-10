import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

function createPromise(delay, shouldResolve) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldResolve) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value; // "fulfilled" або "rejected"
    const shouldResolve = state === "fulfilled";

    createPromise(delay, shouldResolve)
    .then(delayValue => {

        iziToast.success({
            title: "OK",
            message: `✅ Fulfilled promise in ${delayValue}ms`,
            position: "topRight",
        });
    })
    .catch(delayValue => {
        iziToast.error({
            title: "Error",
            message: `❌ Rejected promise in ${delayValue}ms`,
            position: "topRight",
        });
    });

});

