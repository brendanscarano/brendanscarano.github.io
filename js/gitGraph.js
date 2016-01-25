var gitgraph = new GitGraph({
  template: "metro", // or blackarrow
  orientation: "vertical",
  author: "",
  mode: "extended" // or compact if you don't want the messages
});

var master = gitgraph.branch("master");

gitgraph.commit("Master: Initial commit"); // 1 commit upon HEAD

var develop = gitgraph.branch("develop"); // New branch from HEAD

develop.commit("Develop: Cut from master");

develop.commit({
  dotColor: "white",
  dotSize: 10,
  dotStrokeWidth: 10,
  sha1: "666",
  message: "Pimp dat commit",
  author: "Jacky <prince@dutunning.com>",
  tag: "a-super-tag",
});

var featureOne = develop.branch("feature 1"); // New branch from develop

featureOne.commit("feature 1 cut from develop");
featureOne.commit("feature Branch 1: commit");

// var featureTwo = develop.branch("feature 2"); // New branch from develop

// featureTwo.commit("feature Branch 2: commit");

// featureTwo.merge(develop);
featureOne.merge(develop);

var release = develop.branch("release"); // New branch from develop

release.commit("release branch cut from develop");

release.merge(develop);
release.merge(master);



// master.commit({message: "Fast bugfix", author: "John Fixer"});
// myfeature.commit({message: "New cool feature", author: "John feature"});

// develop.merge(master);
// myfeature.merge(master);
// master.commit({message: "Release of version 0.1", tag: "0.1", author: "John Releaser", sha1: "abcdef0"});