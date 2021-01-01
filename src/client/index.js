import { checkForInput } from './js/inputChecker'
import { handleSubmit } from './js/formHandler'
import { resultImg } from './js/outputImgResult'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import boardP from './images/boardP.jpg';
import boardN from './images/boardN.jpg';
import boardNeg from './images/boardNeg.jpg';
import logo from './images/logo.png';
import 'bootstrap';
let logoImg = document.getElementById('logo');
logoImg.src = logo;
console.log("CHANGE!!");

export {
    resultImg,
    checkForInput,
    handleSubmit,
    boardP,
    boardN,
    boardNeg
}