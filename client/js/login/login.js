import { getNode, reDirect, saveStorage, showLogin } from "../index.js";

let loginBtn = getNode("#login-btn");
let loginId = getNode("#LOGIN_ID");
const member = getNode("#member");

const filterUserinfo = (array) => {
  const result = array.filter(value => value.userId === loginId.value);
  if(result.length == 0) {
    alert("올바른 회원정보를 입력해주세요.");
  } else {
      if(localStorage.getItem("uid") !== null) {
        alert("로그인 정보가 있습니다.");
      } else {
        alert("로그인이 완료되었습니다.");
        reDirect();
        saveStorage("uid",result[0].uid);
        saveStorage("userName",result[0].userName);
      }
  }
}

const gotoLogin = () => {
  fetch('http://localhost:3000/userList', {
    method: "GET",
    headers: {
      'Content-Type' : 'application/json; charset=UFT-8'
    },
  })
  .then(res => res.json())
  .then(res => filterUserinfo(res));
}

const login = (e) => {
  e.preventDefault();
  gotoLogin();
}

export const loginProgress = () => {
  showLogin();
  loginBtn?.addEventListener("click",login);
}