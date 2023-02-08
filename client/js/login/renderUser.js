import { deleteStorage, getNode, loadStorage } from "../index.js";


const logoSwitch = getNode("#logo-and-switch");

let savedUsername = loadStorage("userName").then(res=> savedUsername = res);



const loggedIn = ({
  name = savedUsername
}) => { 
  return `
    <ul id="member" class="member">
      <li>어서오세요 ${name} 고객님</li>
      <li style="width: 55px;"><span class="member__divide-bar" aria-hidden="true"></span><button class="logout" style="cursor:pointer;">로그아웃</button></li>
      <li><span class="member__divide-bar" aria-hidden="true"></span><a href="/">고객센터<img src="./assets/header/Icon-down-1.png" alt="" /></a></li>
    </ul>
`
}

const loggedOut = () => {
  return `
    <ul id="member" class="member">
      <li><a href="./register.html">회원가입</a></li>
      <li><span class="member__divide-bar" aria-hidden="true"></span><a href="./login.html">로그인</a></li>
      <li><span class="member__divide-bar" aria-hidden="true"></span><a href="/">고객센터<img src="./assets/header/Icon-down-1.png" alt="" /></a></li>
    </ul>
  `
}

export const showLogin = () => {

  if(savedUsername !== null) {
    logoSwitch.insertAdjacentHTML('afterend', loggedIn(savedUsername));

    const logout = getNode(".logout");
    console.log(logout);

    const clickLogout = () => {
      deleteStorage("userName");
      deleteStorage("uid");
      location.reload();
    }

    logout?.addEventListener("click", clickLogout);

  } else {
    logoSwitch.insertAdjacentHTML('afterend', loggedOut());
  }
}






