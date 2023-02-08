import { emailValidation, getNode, idValidation, nameValidation, numberValidation, pwValidation } from "../index.js";

let userId = getNode("#user-id");
let userPw = getNode("#password");
let userPwCheck = getNode("#password-check");
let userName = getNode("#user-name");
let userEmail = getNode("#user-email");
let userNumber = getNode("#user-number")
const registerBtn = getNode("#register-btn");

export const reDirect = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(location.href="http://localhost:5500/index.html");
    },100)
  })
}

const userinfoValidation = () => {
  if (!idValidation(userId) || !pwValidation(userPw, userPwCheck) || !nameValidation(userName)
      || !emailValidation(userEmail) || !numberValidation(userNumber)) return false;
  else {
    const UUID = self.crypto.randomUUID();
    return(
      {
        uid:UUID,
        userId:userId.value,
        userPw:userPw.value,
        userName:userName.value,
        userEmail:userEmail.value,
        userNumber:userNumber.value,
      }
    );
  }
}

const addUser = (data) => {
    fetch('http://localhost:3000/userList',{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type':'application/json; charset=UTF-8'
      },
    })
    .then(() => {
      alert("회원가입이 완료되었습니다.");
    })
    .catch(() => {
      alert("회원가입에 실패하였습니다.");
    });
  }


const register = (e) => {
  const userInfo = userinfoValidation();
  if(userInfo !== false) {
    addUser(userInfo);
    e.preventDefault();
    reDirect();
  } else {
    e.preventDefault();
  }
}

export const registerProgress = () => {
  registerBtn?.addEventListener('click', register);
}