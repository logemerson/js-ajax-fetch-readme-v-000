const token = "2ffea87c43e39967b269540873afccb39f4a1d55";

const app = "I don't do much.";

fetch("https://api.github.com/user/repos", {
  headers: { Authorization: `token ${token}` }
})
  .then(res => res.json())
  .then(json => console.log(json));
