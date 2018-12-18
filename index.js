import './css/button.css';
module.exports = function button(props={}, callback, classStr=null, textStr=null) {

  let el = document.createElement('button-wrapper');
  Object.keys(props).forEach(key => el.setAttribute(key, props[key], true));
  el.setAttribute('class','btn-wrapper');

  let btnClass = (classStr) ? classStr: '';
  let btnText = (textStr) ? textStr: 'Click me';
  el.innerHTML = `
    <button class="btn ${btnClass}">${btnText}</button>
  `;
  // return el;
  return el;
};
