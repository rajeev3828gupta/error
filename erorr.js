let toastBox = document.getElementById("toastBox");
let successMsg = "<i class='bx bxs-check-square'></i> Successfully submitted";
let errorMsg = "<i class='bx bxs-error-circle'></i> Please fix the error!";
let invalidMsg = "<i class='bx bxs-x-circle' ></i> Invalid input,check again";

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },3000)
}