var btn = document.getElementById("fetchphoto");
var img = document.getElementById("imgid");

const myFunc = () => {
  fetch("https://login-signup-production.up.railway.app/image", {
    method: "POST",
  })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      img.src = URL.createObjectURL(blob);
    });
};

btn.addEventListener("click", myFunc);
