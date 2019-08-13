var P1_Module_Factory = function () {
  var P1 = {
    name: 'P1',
    defaultElementNamespaceURI: 'http:\/\/purl.org\/dc\/elements\/1.1\/',
    defaultAttributeNamespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace',
    typeInfos: [{
        localName: 'SimpleLiteral',
        propertyInfos: [{
            name: 'content',
            collection: true,
            allowDom: false,
            type: 'elementRefs'
          }, {
            name: 'lang',
            typeInfo: 'Language',
            type: 'attribute'
          }]
      }, {
        localName: 'ElementContainer',
        typeName: 'elementContainer',
        propertyInfos: [{
            name: 'any',
            minOccurs: 0,
            collection: true,
            mixed: false,
            allowDom: false,
            typeInfo: '.SimpleLiteral',
            type: 'elementRef'
          }]
      }],
    elementInfos: [{
        elementName: 'date',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'title',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'source',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'type',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'identifier',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'language',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'relation',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'any',
        typeInfo: '.SimpleLiteral'
      }, {
        elementName: 'description',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'subject',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'publisher',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'coverage',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'contributor',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'rights',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'creator',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }, {
        elementName: 'format',
        typeInfo: '.SimpleLiteral',
        substitutionHead: 'any'
      }]
  };
  return {
    P1: P1
  };
};
if (typeof define === 'function' && define.amd) {
  define([], P1_Module_Factory);
}
else {
  var P1_Module = P1_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.P1 = P1_Module.P1;
  }
  else {
    var P1 = P1_Module.P1;
  }
}