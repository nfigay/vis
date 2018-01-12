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
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFDB9B", 
             "image": "../img/articles/course-of-action.png", 
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
             "image": "../img/articles/resource.png", 
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
             "image": "../img/articles/capability.png", 
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
       "id": "2016", 
       "name": "2016"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#FFFF99", 
             "image": "../img/articles/business-actor.png", 
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
             "image": "../img/articles/contract.png", 
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
             "image": "../img/articles/business-function.png", 
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
             "image": "../img/articles/product.png", 
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
             "image": "../img/articles/business-interface.png", 
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
             "image": "../img/articles/business-interaction.png", 
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
             "image": "../img/articles/business-process.png", 
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
             "image": "../img/articles/business-event.png", 
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
             "image": "../img/articles/business-collaboration.png", 
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
             "image": "../img/articles/business-object.png", 
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
             "image": "../img/articles/representation.png", 
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
             "image": "../img/articles/business-service.png", 
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
             "image": "../img/articles/all-enterprise-models-false-dr-nicolas-figay.jpg", 
             "$area": 100
           }, 
           "id": "https://www.linkedin.com/pulse/all-enterprise-models-false-dr-nicolas-figay/", 
           "name": "All the Enterprise Models are false!"
          }
       ], 
       "data": {
         "$color": "#FFFF99",
         "NbConstruct": 13, 
         "$area": 1300
       }, 
       "id": "2017", 
       "name": "2017"
     }, 
     {
       "children": [
         {
           "children": [], 
           "data": {
             "NbConstruct": "1", 
             "$color": "#DEFFFF", 
             "image": "../img/articles/application-service.png", 
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
             "image": "../img/articles/application-interaction.png", 
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
             "image": "../img/articles/application-collaboration.png", 
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
             "image": "../img/articles/data-object.png", 
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
             "image": "../img/articles/application-interface.png", 
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
             "image": "../img/articles/application-event.png", 
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
             "image": "../img/articles/application-process.png", 
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
             "image": "../img/articles/application-function.png", 
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
             "image": "../img/articles/application-component.png", 
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
       "id": "2018", 
       "name": "2018"
      }
   ], 
   "data": {    "$color": "#FFF5EE" }, 
   "id": "root", 
   "name": "Dr Nicolas Figay's LinkedIn Articles"
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
        var html = "<div class=\"tip-title\">" +'title of the article: "'+ node.name+ '"' 
          + "</div><div class=\"tip-text\">";
        var data = node.data;
        if(data.NbConstruct) {
          html += "<p>"+"Number of views " + data.NbConstruct+ "</p>";
        }
        if(data.image) {
          html += '<img alt="Smiley face"  width="128" src=\"'+ data.image +"\" class=\"entity\" />";
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
