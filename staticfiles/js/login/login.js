/*
    email, pw 입력란

    이메일 input 클릭하면 처음에는 하늘색의 굵은 반투명 outline 추가
        -> 이벤트 리스너 click
        -> focus-visible 클래스 추가

    다만, blur 되었을 때, 값이 아무것도 없다면 테두리 빨갛게 변경(아마 red?)
        -> 이 때 다시 input 클릭하면 위의 클릭 이벤트로 나오는
           굵은 테두리가 빨간색으로 변경


    비밀번호 input을 클릭하면 마찬가지로 해당 부분만 하늘색의 굵은 반투명 outline 추가

    단, blur 되었을 때에는 이메일과 비밀번호 input 모두 테두리 빨갛게 변경

    이 상태에서 클릭했을 때에는 비밀번호 input 만 빨간색 굵은 반투명 테두리 추가 
*/

// email, password input 객체를 상수에 할당
const emailInput = document.querySelector(".email-input");
const passwordInput = document.querySelector(".password-input");

// 로그인 버튼(submit) 객체 가져옴
const loginButton = document.querySelector(".login-button");

// email input을 클릭했을 때의 이벤트 리스너
// 스타일은 CSS쪽에서 클래스 선택자로 추가
emailInput.addEventListener("click", (e) => {
  e.target.classList.toggle("focus-visible");
});

// email input에 값을 입력했을 때의 이벤트 리스너
// 스타일은 CSS쪽에서 클래스 선택자로 추가
emailInput.addEventListener("keyup", (e) => {
  // 값이 있는지 검사
  if (e.target.value) {
    // email-blur 클래스가 있는지(테두리 빨간색인지) 검사
    if (e.target.classList.contains("email-blur")) {
      e.target.classList.remove("email-blur");
      e.target.classList.remove("focus-visible");
      return;
    }

    // 없다면 focus-visible 클래스가 있는지 검사
    if (!e.target.classList.contains("focus-visible")) {
      // 없을 때 추가
      e.target.classList.add("focus-visible");
    }
    return;
  }

  // 값이 없는(없어진) 경우, 엔터를 입력했는지 검사
});

// email input이 blur 되었을 때의 이벤트 리스너
// 위 클릭으로 추가된 클래스는 삭제되고, 새로운 클래스 추가
emailInput.addEventListener("blur", (e) => {
  // 만약 값이 아무것도 없으면
  if (!e.target.value) {
    // email-blur 있는지 확인하고, 없을 때 추가
    e.target.classList.contains("email-blur")
      ? ""
      : e.target.classList.add("email-blur");
  }
  // 값 유무 상관 없이 blur 되면 삭제
  e.target.classList.remove("focus-visible");
});

// password-input도 같은 방식으로 진행
// password-input을 클릭했을 때의 이벤트 리스너
passwordInput.addEventListener("click", (e) => {
  e.target.classList.toggle("focus-visible");
});

// password-input에 입력했을 때의 이벤트 리스너
passwordInput.addEventListener("keyup", (e) => {
  // password-input에 값 있는지 검사 - 있다면 password-input에만 실행
  if (e.target.value) {
    // blur 있는지 검사 - 있다면 blur, focus 제거
    if (e.target.classList.contains("password-blur")) {
      e.target.classList.remove("password-blur");
      e.target.classList.remove("focus-visible");
      return;
    }

    // 만약 키를 뗀 시점에서 값이 없다면 blur 추가
    e.target.classList.add("password-blur");

    // 그리고 email-input에 값 있는지도 검사
    if (!emailInput.value) {
      // 없다면 email-blur 추가
      emailInput.classList.add("email-blur");
    }
    return;
  }

  // 값이 없는(없어진) 경우, 엔터를 입력했는지 검사 -
});

// password input이 blur 되었을 때의 이벤트 리스너
// email input에도 blur 속성 추가!
passwordInput.addEventListener("blur", (e) => {
  e.target.classList.remove("focus-visible");
  e.target.classList.add("password-blur");
  emailInput.classList.add("email-blur");
});

/*
    다른 SNS 로그인 아이콘

    mouseover 되면 아이콘 색깔 뿌얘짐
        -> img 태그에 opacity 적용

    mouseout 되면 원상복구
*/
const images = document.querySelectorAll(".login-with-sns-wrap > img");

images.forEach((image) => {
  image.addEventListener("mouseover", (e) => {
    e.target.style.opacity = 0.6;
  });

  image.addEventListener("mouseout", (e) => {
    e.target.style.opacity = 1;
  });
});

/*
    footer 쪽 bucketplace~ 글자(a 태그)

    mouseover 되면 text-decoration 다시 생김
        -> text-decoration: underline

    mouseout 되면 원상복구
*/
const aNonDecoration = document.querySelector("footer a");

// mouseover 이벤트 추가
aNonDecoration.addEventListener("mouseover", (e) => {
  e.target.style.textDecorationLine = "underline";
});

// mouseout 이벤트 추가
aNonDecoration.addEventListener("mouseout", (e) => {
  e.target.style.textDecorationLine = "none";
});

// 현재 남은 것들
// 일부 텍스트 및 svg 아이콘 사이 간격
// SNS 쪽 svg 이미지들 싹 다 img 로 변경
// input 태그 쪽 z-index 조정
