var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};


function init(){
  //init data
  var json = {
    "children": [
     {
       "children": [
         {
           "children": [         
//              { 
//                "children": [
//                  { 
//                   "children": [], 
//                   "data": {
//                     "NbConstruct": "1", 
//                     "$color": "#FFDB9B", 
//                     "image": "../img/archimate/resource.svg", 
//                      "$area": 100
//                    }, 
//                   "id": "to-resource", 
//                    "name": "Resource"
//                   },
//                   { 
//                    "children": [], 
//                    "data": {
//                      "NbConstruct": "1", 
//                      "$color": "#FFDB9B", 
//                      "image": "../img/archimate/capability.svg", 
//                      "$area": 100
//                    }, 
//                    "id": "to-capability", 
//                    "name": "Capability"
//                   },
//                   { 
//                    "children": [], 
//                    "data": {
//                      "NbConstruct": "1", 
//                      "$color": "#FFDB9B", 
//                      "image": "../img/archimate/course-of-action.svg", 
//                      "$area": 100
//                    }, 
//                    "id": "to-course-of-action", 
//                    "name": "Course of Action"
//                   }
//                 ], 
//                 "data": {
//                   "NbConstruct": "3", 
//                   "$color": "#FFDB9B", 
//                   "$area": 300
//                }, 
//                "id": "flow-from-resource", 
//                "name": "flow to"
//               }
           ], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFDB9B", 
             "image": "../img/archimate/course-of-action.svg", 
             "$area": 100
           }, 
           "id": "course-of-action", 
           "name": "Course Of Action" 
         },
         { 
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFDB9B", 
             "image": "../img/archimate/resource.svg", 
             "$area": 100
           }, 
           "id": "resource", 
           "name": "Resource"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFDB9B", 
             "image": "../img/archimate/capability.svg", 
             "$area": 100
           }, 
           "id": "capability", 
           "name": "Capability"
         }
       ], 
       "data": {
         "$color": "#FFDB9B", 
         "NbConstruct": "3", 
         "$area": 300
       }, 
       "id": "strategy", 
       "name": "Strategy"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-actor.svg", 
             "$area": 100
           }, 
           "id": "business-actor", 
           "name": "Actor"
         },
                  {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/contract.svg", 
             "$area": 100
           }, 
           "id": "contract", 
           "name": "Contract"
         },
        {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-function.svg", 
             "$area": 100
           }, 
           "id": "business-function", 
           "name": "Business Function"
         },
        {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/product.svg", 
             "$area": 100
           }, 
           "id": "product", 
           "name": "Product"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-interface.svg", 
             "$area": 100
           }, 
           "id": "business-interface", 
           "name": "Business Interface"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-interaction.svg", 
             "$area": 100
           }, 
           "id": "business-interaction", 
           "name": "Business Interaction"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-process.svg", 
             "$area": 100
           }, 
           "id": "business-process", 
           "name": "Business Process"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-event.svg", 
             "$area": 100
           }, 
           "id": "business-event", 
           "name": "Business Event"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-collaboration.svg", 
             "$area": 100
           }, 
           "id": "business-collaboration", 
           "name": "Business Collaboration"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-object.svg", 
             "$area": 100
           }, 
           "id": "business-object", 
           "name": "Business Object"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/representation.svg", 
             "$area": 100
           }, 
           "id": "representation", 
           "name": "Representation"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-service.svg", 
             "$area": 100
           }, 
           "id": "business-service", 
           "name": "Business Service"
          },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/archimate/business-role.svg", 
             "$area": 100
           }, 
           "id": "business-role", 
           "name": "Business Role"
          }
       ], 
       "data": {
         "$color": "#FFFF99",
         "NbConstruct": 13, 
         "$area": 1300
       }, 
       "id": "business", 
       "name": "Business"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-service.svg", 
             "$area": 100
           }, 
           "id": "application-service", 
           "name": "Application Service"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-interaction.svg", 
             "$area": 100
           }, 
           "id": "application-interaction", 
           "name": "Application Interaction"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-collaboration.svg", 
             "$area": 100
           }, 
           "id": "application-collaboration", 
           "name": "Application Collaboration"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/data-object.svg", 
             "$area": 100
           }, 
           "id": "data-object", 
           "name": "Data Object"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-interface.svg", 
             "$area": 100
           }, 
           "id": "application-interface", 
           "name": "Application Interface"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-event.svg", 
             "$area": 100
           }, 
           "id": "application-event", 
           "name": "Application Event"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-process.svg", 
             "$area": 100
           }, 
           "id": "application-process", 
           "name": "Application Process"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-function.svg", 
             "$area": 100
           }, 
           "id": "application-function", 
           "name": "Application Function"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/archimate/application-component.svg", 
             "$area": 100
           }, 
           "id": "application-component", 
           "name": "Application Component"
         }
       ], 
       "data": {
          "$color": "#DEFFFF",
         "NbConstruct": 9, 
         "$area": 900
       }, 
       "id": "application-layer", 
       "name": "Application"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/distribution-network.svg", 
             "$area": 100
           }, 
           "id": "distribution-network", 
           "name": "Distribution Network"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-function.svg", 
             "$area": 100
           }, 
           "id": "technology-function", 
           "name": "Technology Function"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-process.svg", 
             "$area": 100
           }, 
           "id": "technology-process", 
           "name": "Technology Process"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/device.svg", 
             "$area": 100
           }, 
           "id": "device", 
           "name": "Device"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-interface.svg", 
             "$area": 100
           }, 
           "id": "technology-interface", 
           "name": "Technology Interface"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/system-software.svg", 
             "$area": 100
           }, 
           "id": "system-software", 
           "name": "System Software"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/equipment.svg", 
             "$area": 100
           }, 
           "id": "equipment", 
           "name": "Equipment"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/facility.svg", 
             "$area": 100
           }, 
           "id": "facility", 
           "name": "Facility"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/node.svg", 
             "$area": 100
           }, 
           "id": "Node", 
           "name": "Node"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-service.svg", 
             "$area": 100
           }, 
           "id": "technology-service", 
           "name": "Technology Service"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/artifact.svg", 
             "$area": 100
           }, 
           "id": "artifact", 
           "name": "Artifact"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-collaboration.svg", 
             "$area": 100
           }, 
           "id": "technology-collaboration", 
           "name": "Technology Collaboration"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/path.svg", 
             "$area": 100
           }, 
           "id": "path", 
           "name": "Path"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/material.svg", 
             "$area": 100
           }, 
           "id": "material", 
           "name": "Material"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-interaction.svg", 
             "$area": 100
           }, 
           "id": "technology-interaction", 
           "name": "Technology Interaction"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/communication-network.svg", 
             "$area": 100
           }, 
           "id": "communication-network", 
           "name": "Communication Network"
         },
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCF4CC", 
             "image": "../img/archimate/technology-event.svg", 
             "$area": 100
           }, 
           "id": "technology-event", 
           "name": "Technology Event"
         }
         
       ], 
       "data": {
         "$color": "#CCF4CC", 
         "NbConstruct": 17, 
         "$area": 1700
       }, 
       "id": "physical-technology-layer", 
       "name": "Physical & Technology Layer"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/goal.svg", 
             "$area": 100
           }, 
           "id": "goal", 
           "name": "Goal"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/principle.svg", 
             "$area": 100
           }, 
           "id": "principle", 
           "name": "Principle"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/outcome.svg", 
             "$area": 100
           }, 
           "id": "outcome", 
           "name": "outcome"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/requirement.svg", 
             "$area": 100
           }, 
           "id": "requirement", 
           "name": "Requirement"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/value.svg", 
             "$area": 100
           }, 
           "id": "value", 
           "name": "Value"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/stakeholder.svg", 
             "$area": 100
           }, 
           "id": "stakeholder", 
           "name": "Stakeholder"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/assessment.svg", 
             "$area": 100
           }, 
           "id": "assessment", 
           "name": "Assessment"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/constraint.svg", 
             "$area": 100
           }, 
           "id": "constraint", 
           "name": "Constraint"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/driver.svg", 
             "$area": 100
           }, 
           "id": "driver", 
           "name": "Driver"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#CCCCFF", 
             "image": "../img/archimate/meaning.svg", 
             "$area": 100
           }, 
           "id": "meaning", 
           "name": "Meaning"
         }
       ], 
       "data": {
         "$color": "#CCCCFF", 
         "NbConstruct": 10, 
         "$area": 1000
       }, 
       "id": "motivation-layer", 
       "name": "Motivation"
     }, 
     {
       "children": [
         {
            "children": [
              {
                 "children": [
                    {
                       "children": [], 
                          "data": {
                            "NbConstruct": "1", 
                            "$color": "#FFCCFF", 
                            "image": "../img/archimate/workpackage.svg", 
                            "$area": 100
                          }, 
                          "id": "to-workpackage", 
                          "name": "Work Package"
                        }                
                 ], 
                 "data": {
                   "NbConstruct": "1", 
                   "$color": "#FFCCFF", 
                   "image": "../img/archimate/meaning.svg", 
                   "$area": 100
                 }, 
                 "id": "flow from workpackage", 
                 "name": "Flow"
               }          
           ], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCCFF", 
             "image": "../img/archimate/workpackage.svg", 
             "$area": 100
           }, 
           "id": "workpackage", 
           "name": "Work Package"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCCFF", 
             "image": "../img/archimate/plateau.svg", 
             "$area": 100
           }, 
           "id": "plateau", 
           "name": "Plateau"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCCFF", 
             "image": "../img/archimate/implementation-event.svg", 
             "$area": 100
           }, 
           "id": "implementation-event", 
           "name": "Implementation Event"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCCFF", 
             "image": "../img/archimate/gap.svg", 
             "$area": 100
           }, 
           "id": "gap", 
           "name": "Gap"
         }, 
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCCFF", 
             "image": "../img/archimate/deliverable.svg", 
             "$area": 100
           }, 
           "id": "deliverable", 
           "name": "Deliverable"
         }
       ], 
       "data": {
         "$color": "#FFCCFF",
         "NbConstruct": 5, 
         "$area": 500
       }, 
       "id": "implementation-migration-layer", 
       "name": "Implementation & Migration"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFCC00", 
             "image": "../img/archimate/location.svg", 
             "$area": 100
           }, 
           "id": "location", 
           "name": "location"
         }
       ],
         "data": {
         "$color": "#FFCC00", 
         "NbConstruct": 1, 
         "$area": 100
       }, 
       
       "id": "other", 
       "name": "Other"
     } 
   ], 
   "data": {    "$color": "#FFF5EE" }, 
   "id": "root", 
   "name": "ArchiMate Language"
   };
  //end
  //init TreeMap
  var tm = new $jit.TM.Squarified({
    //where to inject the visualization
    injectInto: 'infovis',
    //parent box title heights
    titleHeight: 15,
    //enable animations
    animate: animate,
    //box offsets
    offset: 1,
    //Attach left and right click events
    Events: {
      enable: true,
      onClick: function(node) {
        if(node) tm.enter(node);
      },
      onRightClick: function() {
        tm.out();
      }
    },
    duration: 1000,
    //Enable tips
    Tips: {
      enable: true,
      //add positioning offsets
      offsetX: 20,
      offsetY: 20,
      //implement the onShow method to
      //add content to the tooltip when a node
      //is hovered
      onShow: function(tip, node, isLeaf, domElement) {
        var html = "<div class=\"tip-title\">" + node.name 
          + "</div><div class=\"tip-text\">";
        var data = node.data;
        if(data.NbConstruct) {
          html += "Nombre de construction: " + data.NbConstruct;
        }
        if(data.image) {
          html += "<img src=\""+ data.image +"\" class=\"entity\" />";
        }
        tip.innerHTML =  html; 
      }  
    },
    //Add the name of the node in the correponding label
    //This method is called once, on label creation.
    onCreateLabel: function(domElement, node){
        domElement.innerHTML = node.name;
        var style = domElement.style;
        style.display = '#9FD4FF';
        style.color='black';
        style.border = '1px solid transparent';
        domElement.onmouseover = function() {
          style.border = '1px solid #9FD4FF';
        };
        domElement.onmouseout = function() {
          style.border = '1px solid transparent';
        };
    }
  });
  tm.loadJSON(json);
  tm.refresh();
  //end
  //add events to radio buttons
  var sq = $jit.id('r-sq'),
      st = $jit.id('r-st'),
      sd = $jit.id('r-sd');
  var util = $jit.util;
  util.addEvent(sq, 'change', function() {
    if(!sq.checked) return;
    util.extend(tm, new $jit.Layouts.TM.Squarified);
    tm.refresh();
  });
  util.addEvent(st, 'change', function() {
    if(!st.checked) return;
    util.extend(tm, new $jit.Layouts.TM.Strip);
    tm.layout.orientation = "v";
    tm.refresh();
  });
  util.addEvent(sd, 'change', function() {
    if(!sd.checked) return;
    util.extend(tm, new $jit.Layouts.TM.SliceAndDice);
    tm.layout.orientation = "v";
    tm.refresh();
  });
  //add event to the back button
  var back = $jit.id('back');
  $jit.util.addEvent(back, 'click', function() {
    tm.out();
  });
}
