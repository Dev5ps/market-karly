export { idValidation, pwValidation, nameValidation, emailValidation, numberValidation };

const regExp1 = /^[a-z][a-z\d]{3,11}$/;
const regExp2 = /[0-9]/;
const regExp3 = /^(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,15}$/;
const regExp4 = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,}$/;
const regExp5 = /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExp6 = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

  const idValidation = (id) => {
    if(!regExp1.test(id.value)) {
      alert("아이디는 영소문자로 시작하는 4~12 글자 입니다.");
      return false;
    }
    if(!regExp2.test(id.value)) {
      alert("아이디는 숫자를 하나 이상 포함하세요.");
      return false;
    }

    return true;
  }

  const pwValidation = (pw, pwCheck) => {
    if(!regExp3.test(pw.value)) {
      alert("비밀번호는 8~15자리 숫자/문자/특수문자를 포함해야 합니다.");
      return false;
    }

    if(!(pw.value == pwCheck.value)) {
      alert("비밀번호가 같아야 합니다.");
      return false;
    }

    return true;
  }

  const nameValidation = (name) => {
    if(!regExp4.test(name.value)) {
      alert("한글 2글자 이상 입력하세요.");
      return false;
    }

    return true;
  }

  const emailValidation = (email) => {
    if(!regExp5.test(email.value)) {
      alert("올바른 이메일 주소를 입력하세요.");
      return false;
    }

    return true;
  }

  const numberValidation = (number) => {
    if(!regExp6.test(number.value)) {
      alert("올바른 휴대폰 번호를 입력하세요.");
      return false;
    }
    
    return true;
  }
