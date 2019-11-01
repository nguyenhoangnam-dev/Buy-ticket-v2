//MicroModal.init();

// This use for default choice

tex = doc.createTextNode("Normal");
squareDiv.appendChild(tex);
squareDiv.classList.add("choice");
moreTool.appendChild(squareDiv);
tex = doc.createTextNode("Eraser");
squareDiv1.appendChild(tex);
moreTool.appendChild(squareDiv1);
tex = doc.createTextNode("Show");
squareDiv2.appendChild(tex);
moreTool.appendChild(squareDiv2);
tex = doc.createTextNode("Hide");
squareDiv3.appendChild(tex);
moreTool.appendChild(squareDiv3);
tex = doc.createTextNode("Text");
squareDiv4.appendChild(tex);
moreTool.appendChild(squareDiv4);
tex = doc.createTextNode("More");
squareDiv5.appendChild(tex);
moreTool.appendChild(squareDiv5);

one = doc.getElementById('one')
two = doc.getElementById('two')
three = doc.getElementById('three')
four = doc.getElementById('four')
five = doc.getElementById('five')

fill.value = ""
fill.disabled = true
stroke.value = "";
stroke.disabled = true;
slider.value = 1;
slider.disabled = true;

mouse.addEventListener("click", () => {
  if (checkChoice(choice) != 0) {
    while (moreTool.hasChildNodes()) {
      child = moreTool.firstChild;
      if (child.hasChildNodes()) {
        child.removeChild(child.firstChild);
      }
      moreTool.removeChild(moreTool.firstChild);
    }

    clearClass(choice, "choice");
    clearClass(choiceTool, "choice");
    clearClass(choiceTool, "not-choice");
    mouse.classList.add("choice");
    tex = doc.createTextNode("Normal");
    squareDiv.appendChild(tex);
    squareDiv.classList.add("choice");
    moreTool.appendChild(squareDiv);
    tex = doc.createTextNode("Eraser");
    squareDiv1.appendChild(tex);
    moreTool.appendChild(squareDiv1);
    tex = doc.createTextNode("Show");
    squareDiv2.appendChild(tex);
    moreTool.appendChild(squareDiv2);
    tex = doc.createTextNode("Hide");
    squareDiv3.appendChild(tex);
    moreTool.appendChild(squareDiv3);
    tex = doc.createTextNode("Text");
    squareDiv4.appendChild(tex);
    moreTool.appendChild(squareDiv4);
    tex = doc.createTextNode("More");
    squareDiv5.appendChild(tex);
    moreTool.appendChild(squareDiv5);
  }

  one = doc.getElementById('one')
  two = doc.getElementById('two')
  three = doc.getElementById('three')
  four = doc.getElementById('four')
  five = doc.getElementById('five')
  six = doc.getElementById('six')
});