const gLink = document.querySelector("#glink"),
  downloadLink = document.querySelector("#download-link"),
  btnGenerate = document.querySelector(".btn"),
  btnCopy = document.querySelector(".copy"),
  btnCopyAudio = document.querySelector(".copy-audio"),
  btnCopyVideo = document.querySelector(".copy-video"),
  embedAudio = document.querySelector("#embed-audio"),
  embedVideo = document.querySelector("#embed-video"),
  btnClear = document.querySelector(".clear");

const createAudioElement = (controls = "controls", source) => {
  const audio = document.createElement("audio");
  const a = document.createElement("a");

  a.href = source;
  a.innerHTML = "Download link";
  audio.controls = controls;
  audio.src = source;
  audio.type = "audio/mp3";
  audio.appendChild(a);
  return audio.outerHTML;
};

const createIframeElement = (source) => {
  const iframe = document.createElement("iframe");

  iframe.height = 200;
  iframe.width = 300;
  iframe.src = source;

  return iframe.outerHTML;
};

const generateDownloadLink = (e) => {
  e.preventDefault();
  const gLinkValue = gLink.value;
  const confirmLink =
    gLinkValue.substring(0, 32) === "https://drive.google.com/file/d/";

  if (confirmLink) {
    const getDownloadLink = gLinkValue
      .replace(
        "https://drive.google.com/file/d/",
        "https://drive.google.com/uc?export=download&id="
      )
      .replace("/view?usp=share_link", "");
    downloadLink.value = getDownloadLink;
    embedAudio.value = createAudioElement("controls", getDownloadLink);
    embedVideo.value = createIframeElement(
      gLinkValue.replace("/view?usp=share_link", "/preview")
    );
  } else {
    alert("Please input valid google drive link");
    return;
  }
};

const clearDownloadLink = (e) => {
  e.preventDefault();
  gLink.value = "";
  downloadLink.value = "";
  embedAudio.value = "";
  embedVideo.value = "";
};

const copy = (e) => {
  let text, copyButton;

  if (e.target.className === "copy") {
    text = downloadLink.value;
    copyButton = btnCopy;
  } else if (e.target.className === "copy-audio") {
    text = embedAudio.value;
    copyButton = btnCopyAudio;
  } else {
    text = embedVideo.value;
    copyButton = btnCopyVideo;
  }

  if (!text.length) {
    alert("Please enter a Google file link");
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    copyButton.innerHTML = "Copied";
    setTimeout(() => {
      copyButton.innerHTML = "Copy";
    }, 2000);
  });
};

btnCopy.addEventListener("click", copy);
btnCopyAudio.addEventListener("click", copy);
btnCopyVideo.addEventListener("click", copy);
btnGenerate.addEventListener("click", generateDownloadLink);
btnClear.addEventListener("click", clearDownloadLink);
