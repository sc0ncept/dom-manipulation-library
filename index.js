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
  }

  Constructor.prototype.removeClass = function (className) {
    this.toArray().forEach(elem => elem.classList.remove(className));
  }

  return Constructor;

})();