"use strict";

const cssom = require("css-object-model");

module.exports = core => {
  // What works now:
  // - Accessing the rules defined in individual stylesheets
  // - Modifications to style content attribute are reflected in style property
  // - Modifications to style property are reflected in style content attribute
  // TODO
  // - Modifications to style element's textContent are reflected in sheet property.
  // - Modifications to style element's sheet property are reflected in textContent.
  // - Modifications to link.href property are reflected in sheet property.
  // - Less-used features of link: disabled
  // - Less-used features of style: disabled, scoped, title
  // - CSSOM-View
  //   - getComputedStyle(): requires default stylesheet, cascading, inheritance,
  //     filtering by @media (screen? print?), layout for widths/heights
  // - Load events are not in the specs, but apparently some browsers
  //   implement something. Should onload only fire after all @imports have been
  //   loaded, or only the primary sheet?

  // Rules
  core.CSSConditionRule = cssom.CSSConditionRule.interface;
  core.CSSFontFaceRule = cssom.CSSFontFaceRule.interface;
  core.CSSGroupingRule = cssom.CSSGroupingRule.interface;
  core.CSSImportRule = cssom.CSSImportRule.interface;
  core.CSSKeyframeRule = cssom.CSSKeyframeRule.interface;
  core.CSSKeyframesRule = cssom.CSSKeyframesRule.interface;
  core.CSSMarginRule = cssom.CSSMarginRule.interface;
  core.CSSMediaRule = cssom.CSSMediaRule.interface;
  core.CSSNamespaceRule = cssom.CSSNamespaceRule.interface;
  core.CSSPageRule = cssom.CSSPageRule.interface;
  core.CSSRule = cssom.CSSRule.interface;
  core.CSSStyleRule = cssom.CSSStyleRule.interface;
  core.CSSSupportsRule = cssom.CSSSupportsRule.interface;

  // Other
  core.CSS = cssom.CSS.interface;
  core.CSSRuleList = cssom.CSSRuleList.interface;
  core.CSSStyleDeclaration = cssom.CSSStyleDeclaration.interface;
  core.CSSStyleSheet = cssom.CSSStyleSheet.interface;
  core.MediaList = cssom.MediaList.interface;
  core.StyleSheet = cssom.StyleSheet.interface;
  core.StyleSheetList = cssom.StyleSheetList.interface;

  // Relavant specs
  // http://www.w3.org/TR/DOM-Level-2-Style (2000)
  // http://www.w3.org/TR/cssom-view/ (2008)
  // http://dev.w3.org/csswg/cssom/ (2010) Meant to replace DOM Level 2 Style
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/ HTML5, of course
  // http://dev.w3.org/csswg/css-style-attr/  not sure what's new here

  // Objects that aren't in cssom library but should be:
  //   CSSRuleList  (cssom just uses array)
  //   CSSFontFaceRule
  //   CSSPageRule

  // These rules don't really make sense to implement, so CSSOM draft makes them
  // obsolete.
  //   CSSCharsetRule
  //   CSSUnknownRule

  // These objects are considered obsolete by CSSOM draft, although modern
  // browsers implement them.
  //   CSSValue
  //   CSSPrimitiveValue
  //   CSSValueList
  //   RGBColor
  //   Rect
  //   Counter

  // http://dev.w3.org/csswg/cssom/#stylesheetlist
  function StyleSheetList() {}

  Object.setPrototypeOf(StyleSheetList.prototype, Array.prototype);

  StyleSheetList.prototype.item = function item(i) {
    return Object.prototype.hasOwnProperty.call(this, i) ? this[i] : null;
  };

  core.StyleSheetList = StyleSheetList;
};
