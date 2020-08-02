// FullStack Perú: https://www.facebook.com/groups/607163139705114/

import BankService from "./bank.service";

const button = document.querySelector("button");
const bankService = new BankService(button, "click")