const signin=document.querySelector(".signin__card");
const userid=signin.querySelector("#userid");
const pwd1=signin.querySelector("#pwd1");
const submit=signin.querySelector("input[type=submit]");

submit.addEventListener("click",e=>{
    e.preventDefault();

    let id_value=userid.value; //id입력값
    let id_value_len=id_value.length; // id 입력값의 개수
    let pwd1_value=pwd1.value; // 비밀번호 입력값
    
    const num=/[0-9]/;
    const str=/[a-zA-Z]/;
    const spc=/[~!#$%^&*()_+]/;
    
 //id 제어 (공백 또는 5글자 미만)
 if(id_value == "" || id_value_len<5){
    alert("아이디는 5글자 이상 입력하세요.");
 }
 //비밀번호
 if(!num.test(pwd1_value)){
    alert("비밀버호에 숫자를 포함시켜주세요.");
 }
 if(!str.test(pwd1_value)){
    alert("비밀번호에 영문을 포함시켜주세요.");
 }
 if(!spc.test(pwd1_value)){
    alert("비밀번호에 특수문자를 포함시켜주세요.");
 }
});