"use strict";

class LinkStyleImpl {
  get sheet() {
    if (this._sheet) {
      return this._sheet;
    }

    return null;
  }
}

module.exports = {
  implementation: LinkStyleImpl
};
