// UI
const togglebtn = document.getElementById('toggle');
const openbtn = document.getElementById('open');
const modal = document.getElementById('modal');
const closebtn =document.getElementById('close');

// Event Listener

togglebtn.addEventListener("click",()=>{
    console.log('hay');
    document.body.classList.toggle('shownav');
});
// show modal
openbtn.addEventListener('click',()=>{
    modal.classList.add('showmodal');
    // console.log('hay');
});
//close modal
closebtn.addEventListener('click',()=>{
    modal.classList.remove('showmodal');
});

// Hide modal on outsid click
// window.addEventListener('click',(e)=>{
//     console.log(e.target);
//     if (e.target == modal){
//         modal.classList.remove(('showmodal'));
//     }
// });
window.addEventListener('click',(e)=>e.target == modal ? modal.classList.remove('showmodal'): false);

// // UI
// const togglebtn=document.getElementById('toggle');
// const openbtn=document.getElementById('open');
//
// const modal=document.getElementById('modal');
// const closebtn=document.getElementById('close');
//
// // Event Lisetener Nav
// togglebtn.addEventListener('click', ()=>{
//     // console.log('hay');
//
//     // classListထဲ addတာremoveတာမဟုတ်ဘဲ ဝင်လိုက်ထွက်လိုက်ဖြစ်စေချင်လို့ .toggle သုံးတာ
//     document.body.classList.toggle("shownav");
//
//
// });
//
// // show modal
// openbtn.addEventListener('click',()=>{
//     modal.classList.add('showmodal');
// });
//
// // close modal
// closebtn.addEventListener('click',()=>{
//     modal.classList.remove('showmodal');
// });
//
// // hide modal on outside click(modal box ပေါ်လာတဲ့အချိန် ဘေးမှာလွတ်နေတဲ့နေရာတွေကို ထိလိုက်တဲ့အခါ modal boxကိုပျောက်သွားစေ◌ချင်လို့)
// // window တစ်ခုလုံးကိုနားထောင်ရမယ်
// // window.addEventListener('click',(e)=>{
// //     // console.log(e.target);
// // e.targetနဲ့ ထောက်ကြည့်လိုက်တဲ့အခါမှာ modalbox ရဲ့ လွတ်နေတဲ့နေရာတွေက modalဖြစ်နေလို့
// // modalကိုက အပေါ်မှာ getElement နဲ့ ပြန်ခေါ်ထားပြီးသားမို့ တန်းသုံးလို့ရ
//
//
// //     if(e.target === modal){
// //         modal.classList.remove('showmodal');
// //     }
// // })
//
// window.addEventListener('click',(e)=>e.target === modal ? modal.classList.remove('showmodal'):false);