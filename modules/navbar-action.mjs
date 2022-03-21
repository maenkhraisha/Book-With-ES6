/* eslint-disable */

import { show } from "./show.mjs";

export const btnHome = document.getElementById('navbtn-home');
export const btnList = document.getElementById('navbtn-list');
export const btnAdd = document.getElementById('navbtn-add');
export const btnContact = document.getElementById('navbtn-contact');

btnHome.addEventListener('click', () => {
    show("home");
})
btnList.addEventListener('click', () => {
    show("list");
})
btnAdd.addEventListener('click', () => {
    show("add");
})
btnContact.addEventListener('click', () => {
    show("contact");
})



