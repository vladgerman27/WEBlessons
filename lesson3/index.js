function multi() {
    //alert("ERROR!");
    let div = document.createElement('div');
    let textNode = document.createTextNode('Глупая шутка про табуретку');
    document.body.append(div);
    div.append(textNode);

    div.classList.add('goose');
    let goose = document.querySelector('.goose');
    goose.style.margin = "50px";
}