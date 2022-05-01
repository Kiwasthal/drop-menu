import idGenerator from './generateid';
import generateDropDownStyles from './generateDropStyle';

let createDropDown = (
  appendTo,
  mainColor,
  hoverColor,
  activeColor,
  fontColor,
  ...addedContent
) => {
  const uniqueId = idGenerator();

  generateDropDownStyles(
    mainColor,
    hoverColor,
    activeColor,
    fontColor,
    uniqueId
  );

  let nav = document.createElement('nav');
  nav.classList.add(`dropdown-${uniqueId}`);

  let navIcon = document.createElement('div');
  navIcon.classList.add(`navIcon-${uniqueId}`);

  let empty = document.createElement('div');
  appendTo.appendChild(nav);
  nav.appendChild(navIcon);
  navIcon.appendChild(empty);

  addedContent.forEach((element) => {
    let item = document.createElement('a');
    item.textContent = element;
    nav.appendChild(item);
  });
};

export default createDropDown;
