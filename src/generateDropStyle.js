const generateDropDownStyles = (
  backgroundColor,
  hoverColor,
  activeColor,
  fontColor,
  uniqueId
) => {
  let styler = document.createElement('style');
  styler.innerHTML = `.dropdown-${uniqueId} { 
      width:300px ; 
      background-color: ${backgroundColor};
      color: ${fontColor} ;
      clip-path: circle(24px at 32px 24px) ;
      -webkit-transition: -webkit-clip-path 0.5625s, clip-path 0.375s ;
      transition: -webkit-clip-path 0.5625s, clip-path 0.375s; 
    }`;
  styler.innerHTML += `.dropdown-${uniqueId}:hover {
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
      -webkit-transition-duration: 0.75s;
      transition-duration: 0.75s;
      -webkit-clip-path: circle(390px at 225px 24px);
      clip-path: circle(390px at 150px 24px);
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} a {
      display: block;
      line-height: 50px;
      padding: 0 20px;
      color: inherit;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; 
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} a:hover {
      background: ${hoverColor}
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} a:active {
      background: ${activeColor};
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} .navicon-${uniqueId} {
      padding: 23px 20px;
      cursor: pointer;
      -webkit-transform-origin: 32px 24px;
      -ms-transform-origin: 32px 24px;
      transform-origin: 32px 24px;
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} .navicon-${uniqueId} div {
      position: relative;
      width: 20px;
      height: 2px;
      background: rgba(0, 0, 0, 0.87);
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} .navicon-${uniqueId} div::before,
    .dropdown-${uniqueId} .navicon-${uniqueId} div::after {
      {
      display: block;
      content: '';
      width: 20px;
      height: 2px;
      background: rgba(0, 0, 0, 0.87);
      position: absolute;
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} .navicon-${uniqueId} div::before {
      top: -7px; 
    }`;
  styler.innerHTML += `.dropdown-${uniqueId} .navicon-${uniqueId} div::after {
      top: 7px;
    }`;
  document.querySelector('head').appendChild(styler);
};

export default generateDropDownStyles;
