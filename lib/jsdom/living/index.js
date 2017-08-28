"use strict";

const cssom = require("css-object-model");

exports.DOMException = require("domexception");
exports.NamedNodeMap = require("./attributes").NamedNodeMap;
exports.Attr = require("./generated/Attr").interface;
exports.Node = require("./generated/Node").interface;
exports.Element = require("./generated/Element").interface;
exports.DocumentFragment = require("./generated/DocumentFragment").interface;
exports.Document = exports.HTMLDocument = require("./generated/Document").interface;
exports.XMLDocument = require("./generated/XMLDocument").interface;
exports.CharacterData = require("./generated/CharacterData").interface;
exports.Text = require("./generated/Text").interface;
exports.CDATASection = require("./generated/CDATASection").interface;
exports.ProcessingInstruction = require("./generated/ProcessingInstruction").interface;
exports.Comment = require("./generated/Comment").interface;
exports.DocumentType = require("./generated/DocumentType").interface;
exports.DOMImplementation = require("./generated/DOMImplementation").interface;
exports.NodeList = require("./generated/NodeList").interface;
exports.HTMLCollection = require("./generated/HTMLCollection").interface;
exports.HTMLOptionsCollection = require("./generated/HTMLOptionsCollection").interface;
exports.DOMStringMap = require("./generated/DOMStringMap").interface;
exports.DOMTokenList = require("./generated/DOMTokenList").interface;

exports.Event = require("./generated/Event").interface;
exports.CustomEvent = require("./generated/CustomEvent").interface;
exports.MessageEvent = require("./generated/MessageEvent").interface;
exports.ErrorEvent = require("./generated/ErrorEvent").interface;
exports.HashChangeEvent = require("./generated/HashChangeEvent").interface;
exports.FocusEvent = require("./generated/FocusEvent").interface;
exports.PopStateEvent = require("./generated/PopStateEvent").interface;
exports.UIEvent = require("./generated/UIEvent").interface;
exports.MouseEvent = require("./generated/MouseEvent").interface;
exports.KeyboardEvent = require("./generated/KeyboardEvent").interface;
exports.TouchEvent = require("./generated/TouchEvent").interface;
exports.ProgressEvent = require("./generated/ProgressEvent").interface;
exports.CompositionEvent = require("./generated/CompositionEvent").interface;
exports.WheelEvent = require("./generated/WheelEvent").interface;
exports.EventTarget = require("./generated/EventTarget").interface;

exports.Location = require("./generated/Location").interface;
exports.History = require("./generated/History").interface;

exports.Blob = require("./generated/Blob").interface;
exports.File = require("./generated/File").interface;
exports.FileList = require("./generated/FileList").interface;

exports.DOMParser = require("./generated/DOMParser").interface;

exports.FormData = require("./generated/FormData").interface;
exports.XMLHttpRequestEventTarget = require("./generated/XMLHttpRequestEventTarget").interface;
exports.XMLHttpRequestUpload = require("./generated/XMLHttpRequestUpload").interface;

exports.NodeIterator = require("./generated/NodeIterator").interface;
exports.TreeWalker = require("./generated/TreeWalker").interface;

exports.CSS = cssom.CSS.interface;
exports.CSSRuleList = cssom.CSSRuleList.interface;
exports.CSSStyleDeclaration = cssom.CSSStyleDeclaration.interface;
exports.CSSStyleSheet = cssom.CSSStyleSheet.interface;
exports.MediaList = cssom.MediaList.interface;
exports.StyleSheet = cssom.StyleSheet.interface;
exports.StyleSheetList = cssom.StyleSheetList.interface;

exports.CSSConditionRule = cssom.CSSConditionRule.interface;
exports.CSSFontFaceRule = cssom.CSSFontFaceRule.interface;
exports.CSSGroupingRule = cssom.CSSGroupingRule.interface;
exports.CSSImportRule = cssom.CSSImportRule.interface;
exports.CSSKeyframeRule = cssom.CSSKeyframeRule.interface;
exports.CSSKeyframesRule = cssom.CSSKeyframesRule.interface;
exports.CSSMarginRule = cssom.CSSMarginRule.interface;
exports.CSSMediaRule = cssom.CSSMediaRule.interface;
exports.CSSNamespaceRule = cssom.CSSNamespaceRule.interface;
exports.CSSPageRule = cssom.CSSPageRule.interface;
exports.CSSRule = cssom.CSSRule.interface;
exports.CSSStyleRule = cssom.CSSStyleRule.interface;
exports.CSSSupportsRule = cssom.CSSSupportsRule.interface;

require("./register-elements")(exports);

// This needs to be cleaned up...
require("../level3/xpath")(exports);

// These are OK but need migration to webidl2js eventually.
exports.NamedNodeMap = require("./attributes").NamedNodeMap;
require("./node-filter")(exports);

exports.URL = require("whatwg-url").URL;
exports.URLSearchParams = require("whatwg-url").URLSearchParams;
