function portfolio() {
  const portfolioLink = "https://gtalin.github.io/";

  let a = document.createElement("a");
  a.setAttribute("href", portfolioLink);
  a.setAttribute("target", "_blank");
  a.textContent = "Portfolio link";
  return a;
}

module.exports = portfolio;
