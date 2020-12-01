const $ = (function () {
  const Constructor = function (selector) {
    this.elems = document.querySelectorAll(selector);
  }

  Constructor.prototype.toArray = function () {
    return Array.prototype.slice.call(this.elems);
  }

  Constructor.prototype.first = function () {
    return this.elems[0];
  }

  Constructor.prototype.last = function () {
    return this.elems[this.elems.length - 1];
  }

  Constructor.prototype.addClass = function (className) {
    this.toArray().forEach(elem => elem.classList.add(className));
    return this;
  }

  Constructor.prototype.removeClass = function (className) {
    this.toArray().forEach(elem => elem.classList.remove(className));
    return this;
  }

  return Constructor;

})();

const btns = new $('button');
const items = new $('li');

btns.removeClass('btn-blue').addClass('btn-red');

console.log('$.toArray', btns.toArray());
console.log('$.toArray', items.toArray());
console.log('$.first', btns.first());
console.log('$.last', btns.last());