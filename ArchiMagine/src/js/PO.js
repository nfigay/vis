var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    defaultElementNamespaceURI: 'http:\/\/www.opengroup.org\/xsd\/archimate\/3.0\/',
    typeInfos: [{
        localName: 'WorkPackage',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'RealElementType',
        baseTypeInfo: '.ElementType'
      }, {
        localName: 'ImplementationEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyProcess',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ElementType',
        baseTypeInfo: '.ConceptType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessRole',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Value',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Access',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'accessType',
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'accessType'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Location',
        baseTypeInfo: '.CompositeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Deliverable',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ModelType',
        baseTypeInfo: '.NamedReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'properties',
            typeInfo: '.PropertiesType'
          }, {
            name: 'metadata',
            typeInfo: '.MetadataType'
          }, {
            name: 'elements',
            typeInfo: '.ElementsType'
          }, {
            name: 'relationships',
            typeInfo: '.RelationshipsType'
          }, {
            name: 'organizations',
            minOccurs: 0,
            collection: true,
            typeInfo: '.OrganizationsType'
          }, {
            name: 'propertyDefinitions',
            typeInfo: '.PropertyDefinitionsType'
          }, {
            name: 'version',
            attributeName: {
              localPart: 'version'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Path',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'OrganizationType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'labelGroup',
            minOccurs: 0,
            collection: true,
            elementName: 'label',
            typeInfo: '.LangStringType'
          }, {
            name: 'documentationGroup',
            minOccurs: 0,
            collection: true,
            elementName: 'documentation',
            typeInfo: '.PreservedLangStringType'
          }, {
            name: 'item',
            minOccurs: 0,
            collection: true,
            typeInfo: '.OrganizationType'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'identifierRef',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'identifierRef'
            },
            type: 'attribute'
          }, {
            name: 'identifier',
            typeInfo: 'ID',
            attributeName: {
              localPart: 'identifier'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TechnologyInteraction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Artifact',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'CommunicationNetwork',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'AndJunction',
        baseTypeInfo: '.RelationshipConnectorType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Node',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Device',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Driver',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'RelationshipConnectorType',
        baseTypeInfo: '.ElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationInteraction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Facility',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Serving',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'DistributionNetwork',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationInterface',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Grouping',
        baseTypeInfo: '.CompositeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessService',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'RelationshipsType',
        propertyInfos: [{
            name: 'relationship',
            required: true,
            collection: true,
            typeInfo: '.RelationshipType'
          }]
      }, {
        localName: 'Gap',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyInterface',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessActor',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Representation',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Constraint',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Flow',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Assignment',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Association',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyCollaboration',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Realization',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ElementsType',
        propertyInfos: [{
            name: 'element',
            required: true,
            collection: true,
            typeInfo: '.ElementType'
          }]
      }, {
        localName: 'PropertyDefinitionType',
        baseTypeInfo: '.NamedReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'type',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Resource',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'OrganizationsType',
        propertyInfos: [{
            name: 'item',
            required: true,
            collection: true,
            typeInfo: '.OrganizationType'
          }]
      }, {
        localName: 'BusinessProcess',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Goal',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessInteraction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Composition',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyFunction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Influence',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'modifier',
            attributeName: {
              localPart: 'modifier'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Triggering',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ReferenceType',
        propertyInfos: [{
            name: 'ref',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'ref'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'PropertiesType',
        propertyInfos: [{
            name: 'property',
            required: true,
            collection: true,
            typeInfo: '.PropertyType'
          }]
      }, {
        localName: 'Material',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'SchemaInfoType',
        propertyInfos: [{
            name: 'schema'
          }, {
            name: 'schemaversion'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }]
      }, {
        localName: 'ApplicationFunction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ConceptType',
        baseTypeInfo: '.ReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'properties',
            typeInfo: '.PropertiesType'
          }]
      }, {
        localName: 'RelationshipType',
        baseTypeInfo: '.ConceptType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'source',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'target',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'target'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Principle',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyService',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Aggregation',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'CompositeType',
        baseTypeInfo: '.ElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Outcome',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'nameGroup',
            minOccurs: 0,
            collection: true,
            elementName: 'name',
            typeInfo: '.LangStringType'
          }, {
            name: 'documentation',
            minOccurs: 0,
            collection: true,
            typeInfo: '.PreservedLangStringType'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'identifier',
            required: true,
            typeInfo: 'ID',
            attributeName: {
              localPart: 'identifier'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'MetadataType',
        propertyInfos: [{
            name: 'schema'
          }, {
            name: 'schemaversion'
          }, {
            name: 'any',
            minOccurs: 0,
            collection: true,
            allowDom: false,
            mixed: false,
            type: 'anyElement'
          }, {
            name: 'schemaInfo',
            minOccurs: 0,
            collection: true,
            typeInfo: '.SchemaInfoType'
          }]
      }, {
        localName: 'DataObject',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessFunction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Specialization',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessInterface',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Stakeholder',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Assessment',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Equipment',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationService',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Capability',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'LangStringType',
        propertyInfos: [{
            name: 'value',
            type: 'value'
          }, {
            name: 'lang',
            attributeName: {
              localPart: 'lang',
              namespaceURI: 'http:\/\/www.w3.org\/XML\/1998\/namespace'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Requirement',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessObject',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'BusinessCollaboration',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Product',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationComponent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'PropertyType',
        propertyInfos: [{
            name: 'value',
            required: true,
            collection: true,
            typeInfo: '.LangStringType'
          }, {
            name: 'propertyDefinitionRef',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'propertyDefinitionRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Plateau',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'CourseOfAction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Meaning',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'OrJunction',
        baseTypeInfo: '.RelationshipConnectorType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'SystemSoftware',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'PropertyDefinitionsType',
        propertyInfos: [{
            name: 'propertyDefinition',
            required: true,
            collection: true,
            typeInfo: '.PropertyDefinitionType'
          }]
      }, {
        localName: 'PreservedLangStringType',
        baseTypeInfo: '.LangStringType'
      }, {
        localName: 'Contract',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'NamedReferenceableType',
        baseTypeInfo: '.ReferenceableType'
      }, {
        localName: 'ApplicationProcess',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationCollaboration',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        type: 'enumInfo',
        localName: 'RelationshipTypeEnum',
        baseTypeInfo: 'NMToken',
        values: ['Composition', 'Aggregation', 'Assignment', 'Realization', 'Serving', 'Access', 'Influence', 'Triggering', 'Flow', 'Specialization', 'Association']
      }, {
        type: 'enumInfo',
        localName: 'ElementTypeEnum',
        baseTypeInfo: 'NMToken',
        values: ['BusinessActor', 'BusinessRole', 'BusinessCollaboration', 'BusinessInterface', 'BusinessProcess', 'BusinessFunction', 'BusinessInteraction', 'BusinessEvent', 'BusinessService', 'BusinessObject', 'Contract', 'Representation', 'Product', 'ApplicationComponent', 'ApplicationCollaboration', 'ApplicationInterface', 'ApplicationFunction', 'ApplicationInteraction', 'ApplicationProcess', 'ApplicationEvent', 'ApplicationService', 'DataObject', 'Node', 'Device', 'SystemSoftware', 'TechnologyCollaboration', 'TechnologyInterface', 'Path', 'CommunicationNetwork', 'TechnologyFunction', 'TechnologyProcess', 'TechnologyInteraction', 'TechnologyEvent', 'TechnologyService', 'Artifact', 'Equipment', 'Facility', 'DistributionNetwork', 'Material', 'Stakeholder', 'Driver', 'Assessment', 'Goal', 'Outcome', 'Principle', 'Requirement', 'Constraint', 'Meaning', 'Value', 'Resource', 'Capability', 'CourseOfAction', 'WorkPackage', 'Deliverable', 'ImplementationEvent', 'Plateau', 'Gap', 'Grouping', 'Location', 'AndJunction', 'OrJunction']
      }, {
        type: 'enumInfo',
        localName: 'CompositeTypeEnum',
        baseTypeInfo: 'NMToken',
        values: ['Grouping', 'Location']
      }, {
        type: 'enumInfo',
        localName: 'DataType',
        baseTypeInfo: 'NMToken',
        values: ['string', 'boolean', 'currency', 'date', 'time', 'number']
      }, {
        type: 'enumInfo',
        localName: 'AccessTypeEnum',
        baseTypeInfo: 'NMToken',
        values: ['Access', 'Read', 'Write', 'ReadWrite']
      }, {
        type: 'enumInfo',
        localName: 'RelationshipConnectorEnum',
        baseTypeInfo: 'NMToken',
        values: ['AndJunction', 'OrJunction']
      }],
    elementInfos: [{
        elementName: 'model',
        typeInfo: '.ModelType'
      }]
  };
  return {
    PO: PO
  };
};
if (typeof define === 'function' && define.amd) {
  define([], PO_Module_Factory);
}
else {
  var PO_Module = PO_Module_Factory();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.PO = PO_Module.PO;
  }
  else {
    var PO = PO_Module.PO;
  }
}