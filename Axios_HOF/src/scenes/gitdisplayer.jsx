import React from "react";
import axios from "axios";
var gitExporter = [];
var gitScore=0;
const gitfetchData = (username, githubContributionRepo, mlProjects, designProjects, bcProjects, appProjects, webProjects, webScore, appScore, bcScore, mlScore, designScore, infosecScore, fossScore) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      let mj = 0;
      gitExporter.forEach(element => {
        if (element.login == username) {
          mj = 1;
        }
      });
      if (mj == 0) {
        response.data.webscore = webScore;
        response.data.appscore = appScore;
        response.data.blockchainscore = bcScore;
        response.data.mlscore = mlScore;
        response.data.designscore = designScore;
        response.data.infosecscore = infosecScore;
        response.data.fossscore = fossScore;

        response.data.githhubwebdev = webProjects;
        response.data.githhubappdev = appProjects;
        response.data.githubblockchain = bcProjects;
        response.data.githubdesign = designProjects;
        response.data.githubml = mlProjects;

        response.data.githubreponame = githubContributionRepo;

        gitExporter = [...gitExporter, response.data];
      }
      // else {
      //   console.log("Extra Render")
      // }
    })
    .catch((error) => {
      console.log(error);
    });
};
const token = sessionStorage.getItem("JWT");

function gitDisplayer() {
  try {
    fetch(`http://localhost:8080/get/gitUserData`, {
      mode: "cors",
      headers: {"Authorization": "Bearer "+token}
    })
      .then((res) => {
        return res.json();
      })
      .then((gitnms) => {
        for (let i = 0; i < gitnms.length; i++) {
          if(gitnms[i].githubownername!=""){
            console.log(gitnms[i].blockchainscore)
            gitfetchData(gitnms[i].githubownername, gitnms[i].githubreponame, gitnms[i].githubml, gitnms[i].githubdesign, gitnms[i].githubblockchain, gitnms[i].githhubappdev, gitnms[i].githhubwebdev, gitnms[i].webscore, gitnms[i].appscore, gitnms[i].blockchainscore, gitnms[i].mlscore, gitnms[i].designscore, gitnms[i].infosecscore, gitnms[i].fossscore);
          }
        }
      })

  }
  catch (err) {
    console.log(err);
  }
}

export default gitDisplayer;
export { gitExporter,gitScore };
