const internetStatus = document.querySelector("#status"),
  internetImage = document.querySelector("#image"),
  mainSection = document.querySelector("#main");

const setOnline = () => {
  internetImage.src = "./images/online.png";
  mainSection.classList.add("online");
  internetStatus.innerHTML = "You're ONLINE!!! Connection looks good.";
};

const setOffline = () => {
  internetImage.src = "./images/offline.png";
  mainSection.classList.remove("online");
  internetStatus.innerHTML = "OOPS!! Your Internet connection is down";
};

const connectionStatus = async () => {
  try {
    const fetchResult = await fetch(
      "https://en.wikipedia.org/wiki/Main_Page#/media/File:Henties_bay.jpg"
    );
    setOnline();
    return fetchResult.status >= 200 && fetchResult.status < 300;
  } catch (error) {
    console.log(error);
    setOffline();
  }
};

setInterval(() => {
  if (window.navigator.onLine) {
    setOnline();
  } else {
    setOffline();
  }
}, 1000);

window.addEventListener("load", async () => {
  if (await connectionStatus()) {
    setOnline();
  } else {
    setOffline();
  }
});
