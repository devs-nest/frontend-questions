var btn = document.getElementById("fetchphoto");
var img = document.getElementById("imgid");

const myFunc = () => {
  fetch("http://localhost:9002/image", {
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
