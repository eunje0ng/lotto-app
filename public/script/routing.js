// 대상
const openBTN = document.querySelector("#openSide")
const closeBTN = document.querySelector("#closeSide")
const sidePan = document.querySelector("#sidePannel")

// 이벤트 등록
openBTN.addEventListener("click", sideOpen);
closeBTN.addEventListener("click", sideClose);

// 함수
function sideOpen(){
    sidePan.classList.remove("d-none");
}
function sideClose(){
    sidePan.classList.add("d-none");
}