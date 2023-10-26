
async function leftTransistion(){

    document.querySelector(".rightPanel").style.transform = "translateX(-600px)";
    document.querySelector(".rightPanel").style.zIndex ="-100";
    document.querySelector(".leftPanel").style.transform = "translatex(600px);";
    document.querySelector(".leftPanel").style.zIndex ="100";
    document.querySelector("#right").style.transform = "translateX(599px)"
    document.querySelector("#right").style.zIndex = "2"
}

async function rightTransistion(){
    document.querySelector("#right").style.zIndex = "-2"
    const leftPanel = document.querySelector(".leftPanel")
    leftPanel.style.transform = "translatex(600px);"
    leftPanel.style.zIndex ="-100";
    document.querySelector(".rightPanel").style.transform = "translateX(0px)";
    document.querySelector(".rightPanel").style.zIndex ="100";
    document.querySelector("#right").style.zIndex = "-2"
    document.querySelector("#right").style.transform = "translateX(0px)"
   
   
}

function OpenModelSignup(){
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
    const input = document.querySelector("#input").innerText = "YOU ARE SUCCESSFUL SIGN UP";
}
function OpenModelLogin(){
    const modal = document.querySelector("#modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.querySelector("#modal");
    modal.style.display = "none";

  }


  $(document).ready(function(){
    $("#myElement").hide("explode", {distance: 100}); // Hides the element with ID "myElement" with an explode transition effect and moves it away from the center of the screen by 100 pixels

  });
  

  

  