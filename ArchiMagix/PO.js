var PO_Module_Factory = function () {
  var PO = {
    name: 'PO',
    defaultElementNamespaceURI: 'http:\/\/www.opengroup.org\/xsd\/archimate\/3.0\/',
    typeInfos: [{
        localName: 'OrganizationsType',
        propertyInfos: [{
            name: 'item',
            required: true,
            collection: true,
            typeInfo: '.OrganizationType'
          }]
      }, {
        localName: 'TechnologyCollaboration',
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
        localName: 'BusinessInterface',
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
        localName: 'RealElementType',
        baseTypeInfo: '.ElementType'
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
        localName: 'ConnectionType',
        baseTypeInfo: '.ViewConceptType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'sourceAttachment',
            typeInfo: '.LocationType'
          }, {
            name: 'bendpoint',
            minOccurs: 0,
            collection: true,
            typeInfo: '.LocationType'
          }, {
            name: 'targetAttachment',
            typeInfo: '.LocationType'
          }, {
            name: 'source',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'source'
            },
            type: 'attribute'
          }, {
            name: 'target',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'target'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ImplementationEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ViewConceptType',
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
            name: 'style',
            typeInfo: '.StyleType'
          }, {
            name: 'viewRef',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ReferenceType'
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
        localName: 'OriginalModelType',
        typeName: null,
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
        localName: 'Product',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'AllowedRelationshipTypeType',
        propertyInfos: [{
            name: 'type',
            required: true,
            typeInfo: 'NMToken',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ApplicationEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ViewpointsType',
        propertyInfos: [{
            name: 'viewpoint',
            required: true,
            collection: true,
            typeInfo: '.ViewpointType'
          }]
      }, {
        localName: 'ApplicationProcess',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Element',
        baseTypeInfo: '.Container',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'elementRef',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'elementRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'DistributionNetwork',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Plateau',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'TechnologyInteraction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Line',
        baseTypeInfo: '.ConnectionType',
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
        localName: 'ViewType',
        baseTypeInfo: '.NamedReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'properties',
            typeInfo: '.PropertiesType'
          }, {
            name: 'viewpoint',
            attributeName: {
              localPart: 'viewpoint'
            },
            type: 'attribute'
          }, {
            name: 'viewpointRef',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'viewpointRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ApplicationService',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Principle',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ViewpointType',
        baseTypeInfo: '.NamedReferenceableType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'properties',
            typeInfo: '.PropertiesType'
          }, {
            name: 'concern',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ConcernType'
          }, {
            name: 'viewpointPurpose',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NMToken'
            }
          }, {
            name: 'viewpointContent',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NMToken'
            }
          }, {
            name: 'allowedElementType',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AllowedElementTypeType'
          }, {
            name: 'allowedRelationshipType',
            minOccurs: 0,
            collection: true,
            typeInfo: '.AllowedRelationshipTypeType'
          }, {
            name: 'modelingNote',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ModelingNoteType'
          }]
      }, {
        localName: 'TechnologyEvent',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'LocationType',
        propertyInfos: [{
            name: 'x',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
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
        localName: 'WorkPackage',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'StakeholdersType',
        propertyInfos: [{
            name: 'stakeholder',
            required: true,
            collection: true,
            typeInfo: '.StakeholderType'
          }]
      }, {
        localName: 'OriginalViewsType',
        typeName: null,
        propertyInfos: [{
            name: 'viewpoints',
            typeInfo: '.ViewpointsType'
          }]
      }, {
        localName: 'Facility',
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
        localName: 'AllowedElementTypeType',
        propertyInfos: [{
            name: 'type',
            required: true,
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Value',
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
        localName: 'Association',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ViewNodeType',
        baseTypeInfo: '.ViewConceptType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'x',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'x'
            },
            type: 'attribute'
          }, {
            name: 'y',
            required: true,
            typeInfo: 'NonNegativeInteger',
            attributeName: {
              localPart: 'y'
            },
            type: 'attribute'
          }, {
            name: 'w',
            required: true,
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'w'
            },
            type: 'attribute'
          }, {
            name: 'h',
            required: true,
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'h'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'RGBColorType',
        propertyInfos: [{
            name: 'r',
            required: true,
            typeInfo: 'UnsignedByte',
            attributeName: {
              localPart: 'r'
            },
            type: 'attribute'
          }, {
            name: 'g',
            required: true,
            typeInfo: 'UnsignedByte',
            attributeName: {
              localPart: 'g'
            },
            type: 'attribute'
          }, {
            name: 'b',
            required: true,
            typeInfo: 'UnsignedByte',
            attributeName: {
              localPart: 'b'
            },
            type: 'attribute'
          }, {
            name: 'a',
            typeInfo: 'Short',
            attributeName: {
              localPart: 'a'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'TechnologyInterface',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Gap',
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
        localName: 'Device',
        baseTypeInfo: '.RealElementType',
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
        localName: 'Node',
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
        localName: 'Meaning',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Requirement',
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
        localName: 'Constraint',
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
        localName: 'Realization',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ModelType',
        baseTypeInfo: '.OriginalModelType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'views',
            typeInfo: '.ViewsType'
          }]
      }, {
        localName: 'BusinessService',
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
        localName: 'FontType',
        propertyInfos: [{
            name: 'color',
            typeInfo: '.RGBColorType'
          }, {
            name: 'name',
            attributeName: {
              localPart: 'name'
            },
            type: 'attribute'
          }, {
            name: 'size',
            typeInfo: 'Decimal',
            attributeName: {
              localPart: 'size'
            },
            type: 'attribute'
          }, {
            name: 'style',
            typeInfo: {
              type: 'list',
              baseTypeInfo: 'NMToken'
            },
            attributeName: {
              localPart: 'style'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BusinessInteraction',
        baseTypeInfo: '.RealElementType',
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
        localName: 'DataObject',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Relationship',
        baseTypeInfo: '.SourcedConnectionType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'relationshipRef',
            required: true,
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'relationshipRef'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'Assessment',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ApplicationFunction',
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
        localName: 'Grouping',
        baseTypeInfo: '.CompositeType',
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
        localName: 'BusinessFunction',
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
        localName: 'TechnologyFunction',
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
        localName: 'OrJunction',
        baseTypeInfo: '.RelationshipConnectorType',
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
        localName: 'Triggering',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ModelingNoteType',
        propertyInfos: [{
            name: 'documentationGroup',
            minOccurs: 0,
            collection: true,
            elementName: 'documentation',
            typeInfo: '.PreservedLangStringType'
          }, {
            name: 'type',
            attributeName: {
              localPart: 'type'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'NamedReferenceableType',
        baseTypeInfo: '.ReferenceableType'
      }, {
        localName: 'ConcernType',
        propertyInfos: [{
            name: 'labelGroup',
            required: true,
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
            name: 'stakeholders',
            typeInfo: '.StakeholdersType'
          }]
      }, {
        localName: 'NestingRelationship',
        baseTypeInfo: '.Relationship',
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
        localName: 'Material',
        baseTypeInfo: '.RealElementType',
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
        localName: 'Aggregation',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Diagram',
        baseTypeInfo: '.ViewType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'node',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ViewNodeType'
          }, {
            name: 'connection',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ConnectionType'
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
        localName: 'ApplicationComponent',
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
        localName: 'Container',
        baseTypeInfo: '.ViewNodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'node',
            minOccurs: 0,
            collection: true,
            typeInfo: '.ViewNodeType'
          }]
      }, {
        localName: 'BusinessRole',
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
        localName: 'Serving',
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
        localName: 'Location',
        baseTypeInfo: '.CompositeType',
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
        localName: 'BusinessObject',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
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
        localName: 'Specialization',
        baseTypeInfo: '.RelationshipType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Label',
        baseTypeInfo: '.ViewNodeType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }, {
            name: 'conceptRef',
            typeInfo: 'IDREF',
            attributeName: {
              localPart: 'conceptRef'
            },
            type: 'attribute'
          }, {
            name: 'xpathPart',
            typeInfo: 'Token',
            attributeName: {
              localPart: 'xpathPart'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'ApplicationInteraction',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
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
        localName: 'RelationshipConnectorType',
        baseTypeInfo: '.ElementType',
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
        localName: 'SourcedConnectionType',
        baseTypeInfo: '.ConnectionType'
      }, {
        localName: 'Resource',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'ViewsType',
        baseTypeInfo: '.OriginalViewsType',
        propertyInfos: [{
            name: 'diagrams',
            typeInfo: '.DiagramsType'
          }]
      }, {
        localName: 'Outcome',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'PreservedLangStringType',
        baseTypeInfo: '.LangStringType'
      }, {
        localName: 'StyleType',
        propertyInfos: [{
            name: 'lineColor',
            typeInfo: '.RGBColorType'
          }, {
            name: 'fillColor',
            typeInfo: '.RGBColorType'
          }, {
            name: 'font',
            typeInfo: '.FontType'
          }, {
            name: 'lineWidth',
            typeInfo: 'PositiveInteger',
            attributeName: {
              localPart: 'lineWidth'
            },
            type: 'attribute'
          }]
      }, {
        localName: 'BusinessActor',
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
        localName: 'RelationshipsType',
        propertyInfos: [{
            name: 'relationship',
            required: true,
            collection: true,
            typeInfo: '.RelationshipType'
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
        localName: 'BusinessProcess',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'Path',
        baseTypeInfo: '.RealElementType',
        propertyInfos: [{
            name: 'otherAttributes',
            type: 'anyAttribute'
          }]
      }, {
        localName: 'StakeholderType',
        propertyInfos: [{
            name: 'labelGroup',
            required: true,
            collection: true,
            elementName: 'label',
            typeInfo: '.LangStringType'
          }]
      }, {
        localName: 'Contract',
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
        localName: 'DiagramsType',
        propertyInfos: [{
            name: 'view',
            required: true,
            collection: true,
            typeInfo: '.Diagram'
          }]
      }, {
        localName: 'CourseOfAction',
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
        localName: 'ViewpointPurposeEnum',
        baseTypeInfo: 'NMToken',
        values: ['Designing', 'Deciding', 'Informing']
      }, {
        type: 'enumInfo',
        localName: 'ViewpointsEnum',
        baseTypeInfo: 'Token',
        values: ['Organization', 'Application Platform', 'Information Structure', 'Technology', 'Layered', 'Physical', 'Product', 'Application Usage', 'Technology Usage', 'Business Process Cooperation', 'Application Cooperation', 'Service Realization', 'Implementation and Deployment', 'Goal Realization', 'Goal Contribution', 'Principles', 'Requirements Realization', 'Motivation', 'Strategy', 'Capability Map', 'Outcome Realization', 'Resource Map', 'Project', 'Migration', 'Implementation and Migration', 'Stakeholder']
      }, {
        type: 'enumInfo',
        localName: 'ViewpointContentEnum',
        baseTypeInfo: 'NMToken',
        values: ['Details', 'Coherence', 'Overview']
      }, {
        type: 'enumInfo',
        localName: 'AccessTypeEnum',
        baseTypeInfo: 'NMToken',
        values: ['Access', 'Read', 'Write', 'ReadWrite']
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
        localName: 'FontStyleEnum',
        baseTypeInfo: 'NMToken',
        values: ['plain', 'bold', 'italic', 'underline']
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