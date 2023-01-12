function addParagraf() {
    let div = document.createElement("div");
    div.setAttribute("class", "paragraf-container");

    let nodeTitle = document.createElement("label");
    nodeTitle.setAttribute("for", "paragraf-title");

    let titleText = document.createElement("h3");
    titleText.append("Paragraf title:");

    let titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("class", "paragraf-title");

    nodeTitle.appendChild(titleText);
    nodeTitle.appendChild(titleInput);
    div.appendChild(nodeTitle);

    let nodeParagraf = document.createElement("label");
    nodeParagraf.setAttribute("for", "paragraf-text");

    let text = document.createElement("h3");
    text.append("Paragraf:");
    let input = document.createElement("textarea");
    input.setAttribute("for", "paragraf-text");
    input.setAttribute("cols", "30");
    input.setAttribute("rows", "10");

    nodeParagraf.appendChild(text);
    nodeParagraf.appendChild(input);

    div.appendChild(nodeParagraf);

    document.getElementById("password-container").before(div);
}
function addIMG() {
    let div = document.createElement("div");
    div.setAttribute("class", "img-container");
}