var nodes = null;
    var edges = null;
    var ArchiMateLanguage = null;
    var ArchiMateLanguageNodesDataSet=null;
    var ArchiMateLanguageEdgesDataSet=null;
    var ArchiMateLanguageNodesDataView=null;
    var ArchiMateLanguageEdgesDataView=null;
    var node=null;
    var edge=null;
    var nodeString=null;
    var edgeString=null;
    var edgeLenght=null;
    var title=null;
    var image=null;
    var images=null;
    var letsDraw=0;
    var data=null;
    var options=null;
    var seed = 2;

    var DIR = './img/archimate/';
    var EDGE_LENGTH_MAIN = 150;
    var EDGE_LENGTH_SUB = 50;
    var ArchiMateObjects=null;
    var ArchiMateRelations=null;
    var AccessRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var CompositionRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var FlowRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var AggregationRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var AssignmentRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var InfluenceRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var RealizationRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var SpecializationRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var TriggeringRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var ServingRelationArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var ArchiMateObjects=null;
    var StrategyObjectsWithNames=null;
    var BusinessObjectsWithNames=null;
    var ApplicationObjectsWithNames=null;
    var TechnicalObjectsWithNames=null;
    var MotivationObjectsWithNames=null;
    var ImplementationMigrationObjectWithNames=null;
    var OtherObjectsWithNames=null;
    var StrategyObjectsWithId=null;
    var BusinessObjectsWithId=null;
    var ApplicationObjectsWithId=null;
    var TechnicalObjectsWithId=null;
    var MotivationObjectsWithId=null;
    var ImplementationMigrationObjectWithId=null;
    var OtherObjectsWithId=null;
    var z=0;
    var alreadyConfigured=0;
    var checkedRelations=null;
    var checkedEntities=null;
    var inputRelations=null;
    var inputEntities=null;
    var inputLayers=null;
    var trace=null;

// Called when the Visualization API is loaded.
function draw() {

    destroy();
    nodes = [];
    edges = [];
    document.getElementById('configureDisplay').innerHTML="";
    checkedRelations=[];
    checkedEntities=[];
    document.getElementById("ArchiMateLanguage").style.display="block";
    document.getElementById("RSelection-pane").style.display="none";
    document.getElementById("ERSelection-pane").style.display="none";   
    
    inputRelations = document.getElementsByClassName('relationsCheckbox');
    inputEntities = document.getElementsByClassName('entitiesCheck');

    alert ("R" +document.getElementById("R").checked);
    alert ("RE" +document.getElementById("ER").checked);
  
    if (document.getElementById("R").checked==true){
    if (document.getElementById("relation").selectedIndex=="0"){document.getElementById("relation").selectedIndex="1";};    
    }
    if (document.getElementById("ER").checked==true){
       document.getElementById("relation").selectedIndex="0"; 

    }  
 
 
    
    if (document.getElementById("eventDisplay").checked){ document.getElementById("eventSpan").style.display='block';}
    else{document.getElementById("eventSpan").style.display='none';};
    
    if (document.getElementById("parameterDisplay").checked){
        
        var options = {interaction:{hover:false},
            physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
                barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
            configure: { filter:function (option, path) {
                if (path.indexOf('physics') !== -1) { return true;}
                if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
            container: document.getElementById('configureDisplay')}
        };
        
        ;}
    else{
        var options = {interaction:{hover:false},
            physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
                barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
            configure: false
        };
        ;};
    

    for(var i=0; inputRelations[i]; ++i){
            if(inputRelations[i].checked){
                checkedRelations.push(inputRelations[i].value);}}
    
    
    inputEntities = document.getElementsByClassName('entitiesCheckbox');
    checkedEntities='';
    for(var i=0; inputEntities[i]; ++i){
            if(inputEntities[i].checked){
                if(checkedEntities==''){      checkedEntities = inputEntities[i].value;}
                else{
                    checkedEntities = checkedEntities+ '-'+ inputEntities[i].value;}
                    }
        }


switch (document.getElementById("relation").selectedIndex){
    case 0:
    // i.e. modelType ER
    trace='';
    edgeId='';
    
    //creation of nodes from entities
    for (var i = 0; i < ArchiMateObjects.length-2; i++) {
        image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
        nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
        +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
        +'"label":"'+ArchiMateObjects[i]+'"'+','
        +'"image":"./img/archimate/'+image+'.svg"'
        +'}';       
        node=JSON.parse(nodeString);
        nodes.push(node);
        nodeString=null;
    };

    //creation of edges from relations
   for (var i = 0; i <58; i++) {
      for (var j = 1; j <59 ; j++) {
        title=ArchiMateRelations[i][j];
        edgeId= '{' +'"from":'+ i + "," + '"to":' + j + ","+'"relations":'+ title+  '}';
        edgeString={
            "id": edgeId,
            "from": i,
            "to": j-1,
            "arrows":'to',
            "length": EDGE_LENGTH_MAIN,
            //          "value": 1,
            "title":title
        };
        trace= trace + "i:"+i+ " j:"+ j +" ";
        
         if(inputEntities[i].checked==true) {

            for (var k = 0; k <checkedRelations.length ; k++) {
                  if (ArchiMateRelations[i][j].indexOf(checkedRelations[k])>=0){;
                      edge=JSON.parse(JSON.stringify(edgeString));
                      edges.push(edge);
                      }
            }
         }
      }
   }
//    alert (trace);
   
   //if layers is checked, some complementary nodes for each layer is created, plus edges from layers to entities belonging to the layers
    if (document.getElementById('layers').checked){
        nodes.push({id: 200, shape: 'image',label: 'Business Layer', image: DIR + 'business-layer.svg', shape: 'image'});
        nodes.push({id: 300, shape: 'image',label: 'Application Layer', image: DIR + 'application-layer.svg', shape: 'image'});
        nodes.push({id: 400, shape: 'image',label: 'PhysicalTechnology Layer', image: DIR + 'physical-technology-layer.svg', shape: 'image'});
        nodes.push({id: 500, shape: 'image',label: 'Motivation', image: DIR + 'motivation-layer.svg', shape: 'image'});
        nodes.push({id: 600, shape: 'image',label: 'Other', image: DIR + 'other-layer.svg', shape: 'image'});
        nodes.push({id: 700, shape: 'image',label: 'ImplementationMigration', image: DIR + 'implementation-migration-layer.svg', shape: 'image'});
        nodes.push({id: 800, shape: 'image',label: 'Strategy', image: DIR + 'strategy-layer.svg', shape: 'image'});
        for (var i = 0; i <= 2; i++) {edges.push({from: 800, to: i,  arrows:'to', length: EDGE_LENGTH_MAIN});}
        for (var i = 3; i <= 15; i++) {edges.push({from: 200, to: i,arrows:'to', length: EDGE_LENGTH_MAIN});}
        for (var i = 16; i <= 24; i++) {edges.push({from: 300, to: i, arrows:'to',length: EDGE_LENGTH_MAIN});}
        for (var i = 25; i <= 41; i++) {edges.push({from: 400, to: i, arrows:'to',length: EDGE_LENGTH_MAIN});}
        for (var i = 42; i <= 51; i++) {edges.push({from: 500, to: i, arrows:'to',length: EDGE_LENGTH_MAIN});}
        for (var i = 52; i <= 56; i++) {edges.push({from: 700, to: i, arrows:'to',length: EDGE_LENGTH_MAIN});}
        for (var i = 57; i <= 59; i++) {edges.push({from: 600, to: i, arrows:'to',length: EDGE_LENGTH_MAIN});}
    }
    break;

    case 1:
    for (var i = 0; i < AccessRelationArray.length; i++) {
        if (AccessRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        };
    }

   for (var i = 0; i <58; i++) {
       for (var j = 1; j <59 ; j++) {
          if (ArchiMateRelations[i][j].indexOf('a')>=0){
              title=ArchiMateRelations[i][j];
              edgeString={
                  "from": i,
                  "to": j-1,
                  "arrows":'to',
                  "length": EDGE_LENGTH_MAIN,
                  "title":title
              };
             edge=JSON.parse(JSON.stringify(edgeString));
             edges.push(edge);
          }
       }
   }

    break;
    
    
    case 2:
    for (var i = 0; i < CompositionRelationArray.length; i++) {
        if (CompositionRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('c')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 3:
    for (var i = 0; i < FlowRelationArray.length; i++) {
        if (FlowRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('f')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 4:
    for (var i = 0; i < AggregationRelationArray.length; i++) {
        if (AggregationRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
             node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('g')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    
    
    case 5:
    for (var i = 0; i < AssignmentRelationArray.length; i++) {
        if (AssignmentRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('i')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 6:
    for (var i = 0; i < InfluenceRelationArray.length; i++) {
        if (InfluenceRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('n')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 7:
    for (var i = 0; i < RealizationRelationArray.length; i++) {
        if (RealizationRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('r')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    
    case 8:
    for (var i = 0; i < SpecializationRelationArray.length; i++) {
        if (SpecializationRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('s')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 9:
    for (var i = 0; i < TriggeringRelationArray.length; i++) {
        if (TriggeringRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('t')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    case 10:
    for (var i = 0; i < ServingRelationArray.length; i++) {
        if (ServingRelationArray[i]=="1"){
            image= ArchiMateObjects[i].toLowerCase().replace("_", "-").replace("_", "-");
            nodeString='{'+'"id":'+i+","+'"shape":"image"' +','
            +'"title":"'+ArchiMateObjects[i]+'"'+","+'"shape":"image"' +','
            +'"label":"'+ArchiMateObjects[i]+'"'+','
            +'"image":"./img/archimate/'+image+'.svg"'
            +'}';
            node=JSON.parse(nodeString);
            nodes.push(node);
            nodeString=null;
        }
    }
    for (var i = 0; i <58; i++) {
        for (var j = 1; j <59 ; j++) {
            if (ArchiMateRelations[i][j].indexOf('v')>=0){
                title=ArchiMateRelations[i][j];
                edgeString={
                    "from": i,
                    "to": j-1,
                    "arrows":'to',
                    "length": EDGE_LENGTH_MAIN,
                    "title":title
                };
                edge=JSON.parse(JSON.stringify(edgeString));
                edges.push(edge);
            }
        }
    }
    break;
    
    default:
    nodes.push({id: 200, shape: 'image',label: 'TO BE DONE', image: DIR + 'business-layer.svg', shape: 'image'});
    
    
}

//alert(checkedEntities);
//alert (ArchiMateObjects.length);
//alert (ArchiMateRelations.length);
    container = document.getElementById('ArchiMateLanguage');
    data = {
        nodes: nodes,
        edges: edges
    };
    document.getElementById("ArchiMateLanguage").innerHTML = "";

    ArchiMateLanguage = new vis.Network(container, data, options);
    ArchiMateLanguage.on("doubleClick", function (params) {
               params.event = "[original event]";
               document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
               draw();
               });
    ArchiMateLanguage.on("click", onClickArchiMateNodes); 
    
    ArchiMateLanguage.on("oncontext", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
      });
    ArchiMateLanguage.on("dragStart", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
      });
    ArchiMateLanguage.on("dragging", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
      });
   ArchiMateLanguage.on("dragEnd", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
      });
   ArchiMateLanguage.on("zoom", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
      });
   ArchiMateLanguage.on("showPopup", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
      });
   ArchiMateLanguage.on("hidePopup", function () {
      console.log('hidePopup Event');
      });
   ArchiMateLanguage.on("select", function (params) {
      console.log('select Event:', params);
      });
   ArchiMateLanguage.on("selectNode", function (params) {
      console.log('selectNode Event:', params);
      });
   ArchiMateLanguage.on("selectEdge", function (params) {
      console.log('selectEdge Event:', params);
      });
   ArchiMateLanguage.on("deselectNode", function (params) {
      console.log('deselectNode Event:', params);
      });
   ArchiMateLanguage.on("deselectEdge", function (params) {
      console.log('deselectEdge Event:', params);
      });
   ArchiMateLanguage.on("hoverNode", function (params) {
      console.log('hoverNode Event:', params);
      });
   ArchiMateLanguage.on("hoverEdge", function (params) {
      console.log('hoverEdge Event:', params);
      });
   ArchiMateLanguage.on("blurNode", function (params) {
      console.log('blurNode Event:', params);
      });
  ArchiMateLanguage.on("blurEdge", function (params) {
      console.log('blurEdge Event:', params);
      });
}

function destroy() {
    if (ArchiMateLanguage !== null) {
        ArchiMateLanguage.destroy();
        ArchiMateLanguage = null;
    }
}
  function clearPopUp() {
      document.getElementById('saveButton').onclick = null;
      document.getElementById('cancelButton').onclick = null;
      document.getElementById('network-popUp').style.display = 'none';
  }
  
  function cancelEdit(callback) {
      clearPopUp();
      callback(null);
  }
  
  function saveData(data,callback) {
      data.id = document.getElementById('node-id').value;
      data.label = document.getElementById('node-label').value;
      data.title = document.getElementById('node-title').value;
      clearPopUp();
      callback(data);
  }

function initArchiMate(){
		document.getElementById("ERSelection-pane").style.display="none";
		document.getElementById("RSelection-pane").style.display="none";
		document.getElementById("relationsButtons").style.display="none";
		document.getElementById("relationsCheckbox").style.display="none";
		document.getElementById("entitiesCheck").style.display="none";
		document.getElementById("ArchiMateLanguage").style.display="block";

    
        alert("This is the ArchiMagine Vis viewer for ArchiMate\nMotivation: ArchiMate visual exploration\nCopyright © 2017-2021 Nicolas Figay. All Rights Reserved.");
       
        
        ArchiMateObjects=["Resource","Capability", "Course_Of_Action","Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Contract", "Representation", "Product", "Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Data_Object", "Node", "Device", "System_Software","Technology_Collaboration", "Technology_Interface", "Path","Communication_Network", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Artifact", "Equipment", "Facility", "Distribution_Network", "Material", "Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value", "WorkPackage", "Deliverable", "Implementation_Event", "Plateau", "Gap", "Location", "Grouping", "Junction"];
        StrategyObjectsWithNames=["Resource", "Capability", "Course_Of_Action" ];
        BusinessObjectsWithNames=["Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Contract", "Representation", "Product"];
        ApplicationObjectsWithNames=["Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Data_Object"];
        TechnicalObjectsWithNames=["Node", "Device", "System_Software","Technology_Collaboration", "Technology_Interface", "Path","Communication_Network", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Artifact", "Equipment", "Facility", "Distribution_Network", "Material"];
        MotivationObjectsWithNames=["Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value"];
        ImplementationMigrationObjectWithNames=["WorkPackage", "Deliverable", "Implementation_Event", "Plateau", "Gap"];
        OtherObjectsWithNames=["Location", "Grouping", "Junction"];
        StrategyObjectsWithId=[0,1,2];
        BusinessObjectsWithId=[4,5,6,7,9,9,10,11,12,13,14,15,16];
        ApplicationObjectsWithId=[17,18,19,20,21,22,23,24,25];
        TechnicalObjectsWithId=[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
        MotivationObjectsWithId=[43,44,45,46,47,48,49,50,51,52];
        ImplementationMigrationObjectWithId=[53,54,55,56,57];
        OtherObjectsWithId=[59,60,61];
        
        ArchiMateRelations=
        [
         [ "Resource",
          "cfgost", "fiotv", "forv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgionrstv","fionrt" ],
         [ "Capability",
          "fot", "cfgostv", "forv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgnorstv","fnortv" ],
         [ "Course_Of_Action",
          "fo", "fo", "cfgostv",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cfgnorstv","fnortv" ],
         [ "Actor",
          "or", "or", "or",
          "cfgostv","fiotv","fotv","cfgiotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "ino","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Business_Role",
          "or", "or", "or",
          "fotv","cfgostv","fotv","cfgotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "io","o","io","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Business_Collaboration",
          "or", "or", "or",
          "fgotv","fgiotv","cfgostv","cfgiotv","fiotv","fiotv","fiotv","fiotv","fiortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Business_Interface",
          "or", "or", "or",
          "fotv","fotv","fotv","cfgostv","fotv","fotv","fotv","fotv","fiotv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Business_Process",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","cfgostv","cfgotv","cfgotv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Business_Function",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","cfgotv","cfgostv","cfgotv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Business_Interaction",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","cfgotv","cfgotv","cfgostv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],       
         [ "Business_Event",
          "o", "o", "o",
          "fot","fot","fot","fot","fot","fot","fot","cfgost","fot","ao","ao","ao","fo",
          "fot","fot","fot","fot","fot","fot","ot","fot","o",
          "fot","fot","fot","fot","fot","fot","fot","fot","fot","fot","ot","fot","o","fot","fot","fot","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorst","afnort" ],
          [ "Business_Service",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","otv","fotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],  
         [ "Business_Object",
          "or", "or", "or",
          "o","o","o","o","o","o","o","o","o","cgos","cgos","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Contract",
          "or", "or", "or",
          "o","o","o","o","o","o","o","o","o","cgos","cgos","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [  "Representation",
          "or", "or", "or",
          "o","o","o","o","o","o","o","o","o","or","or","cgos","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Product",
          "or", "or", "or",
          "forv","forv","fov","forv","forv","forv","forv","forv","cfgorv","acgo","acgo","acgo","cfgos",
          "forv","forv","forv","forv","forv","forv","forv","cfgorv","acgo",
          "forv","forv","forv","forv","forv","fo","fo","forv","forv","forv","forv","cfgorv","acgo","forv","forv","fo","acgo",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fo",
          "acfgnorsv","afnorv" ],
         [ "Application_Component",
          "or", "or", "or",
          "fotv","fotv","fotv","fortv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "cfgorstv","cfgorstv","cfgortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Application_Collaboration",
          "or", "or", "or",
          "fotv","fotv","fotv","fortv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "cfgorstv","cfgorstv","cfgortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Application_Interface",
          "or", "or", "or",
          "fotv","fotv","fotv","fortv","fotv","forv","forv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","cfgostv","fotv","fotv","fotv","fotv","fiotv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Application_Function",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","cfgostv","cfgotv","cfgotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Application_Interaction",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","cfgotv","cfgostv","cfgotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Application_Process",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","cfgotv","cfgotv","cfgostv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Application_Event",
          "o", "o", "o",
          "ot","ot","ot","ot","ot","ot","ot","ot","ot","ao","ao","o","fo",
          "fot","fot","fot","fot","fot","fot","cfgost","fot","ao",
          "fot","fot","fot","fot","fot","fot","fot","fot","fot","fot","ot","fot","o","fot","fot","fot","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorst","afnort" ],
         [ "Application_Service",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fotv","fortv","fotv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","cfgostv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","otv","fotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Data_Object",
          "or", "or", "or",
          "o","o","o","o","o","o","o","o","o","or","or","o","o",
          "o","o","o","o","o","o","o","o","cgos",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Node",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiorv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiortv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Device",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiorv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiortv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "System_Software",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiortv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Technology_Collaboration",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiorv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiortv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Technology_Interface",
          "or", "or", "or",
          "fotv","fotv","fotv","fortv","fotv","fotv","fotv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fortv","fotv","fotv","fotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","cfgostv","fot","fot","fotv","fotv","fotv","fotv","fiotv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginorstv","afinortv" ],
         [ "Path",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","fgiortv","fgiortv","cfgost","fot","fiortv","fiortv","fiortv","fiortv","fiortv","ao","fgiortv","fgiortv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgiorstv","afinortv" ],
         [ "Communication_Nerwork",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "fgiortv","fgiortv","fgiortv","fgiortv","fgiortv","fort","cfgost","fiortv","fiortv","fiortv","fiortv","fiortv","ao","fgiortv","fgiortv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgiorstv","afinortv" ],
         [ "Technology_Function",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","cfgostv","cfgotv","cfgotv","fotv","fortv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Technology_Process",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","cfgotv","cfgostv","cfgotv","fotv","fortv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Technology_Interaction",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","cfgotv","cfgotv","cfgostv","fotv","fortv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorstv","afnortv" ],
         [ "Technology_Event",
          "o", "o", "o",
          "ot","ot","ot","ot","ot","ot","ot","ot","ot","ao","ao","ao","fo",
          "ot","ot","ot","ot","ot","ot","ot","ot","ao",
          "fot","fot","fot","fot","fot","fot","fot","fot","fot","fot","cfgost","fot","ao","fot","fot","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgnorst","afnort" ],
         [ "Technology_Service",
          "o", "or", "or",
          "fotv","fotv","fotv","fotv","fortv","fortv","fortv","fotv","fortv","ao","ao","ao","fo",
          "fotv","fotv","fotv","fotv","fotv","fotv","fotv","fortv","ao",
          "fotv","fotv","fotv","fotv","fotv","fot","fot","fotv","fotv","fotv","fotv","cfgostv","ao","fotv","fotv","fot","ao",
          "no","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfgorstv","afnortv" ],
         [ "Artifact",
          "or", "or", "or",
          "forv","forv","fov","forv","forv","forv","forv","forv","forv","aor","aor","ao","fo",
          "forv","forv","forv","forv","forv","forv","forv","forv","aor",
          "forv","forv","forv","forv","forv","fo","fo","forv","forv","forv","forv","forv","acgos","forv","forv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fo",
          "acfgostv","afnotv" ],
         [ "Equipment",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","aor",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","aio",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginostv","afinortv" ],
         [ "Facility",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","ao",
          "cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","fot","fot","fiortv","fiortv","fiortv","fiortv","fiortv","aio","cfgiorstv","cfgiorstv","fot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginostv","afinortv" ],
         [ "Distribution_Network",
          "or", "or", "or",
          "fiortv","fiortv","fotv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","ao","ao","ao","fo",
          "fortv","fortv","fortv","fortv","fortv","fortv","fortv","fortv","aor",
          "fgiortv","fgiortv","fgiortv","fgiortv","fgiortv","fort","fot","fiortv","fiortv","fiortv","fiortv","fiortv","ao","fgiortv","fgiortv","cfgot","ao",
          "nor","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","fot",
          "acfginostv","afinortv" ],
         [ "Material",
          "or", "or", "or",
          "o","o","o","o","o","o","o","o","o","or","or","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","cgos",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Stakeholder",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "cgnos","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Driver",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","cgnos","no","no","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Assessment",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","cgnos","no","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Goal",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","cgnos","no","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Outcome",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","cgnos","no","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Principle",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","cgnos","no","no","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Requirement",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","cgnos","cgnos","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Constraint",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","nor","nor","nor","cgnos","cgnos","no","no",
          "o","o","o","o","o","o",
          "cgnors","nor" ],
         [ "Meaning",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","no","no","no","no","no","cgnos","no",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "Value",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","no","no","no","no","no","no","cgnos",
          "o","o","o","o","o","o",
          "cgnos","no" ],
         [ "WorkPackage",
          "or", "or", "or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "cfgost","aor","fot","ort","o","or",
          "acfgnorst","afnort" ],
         [ "Deliverable",
          "or", "or", "or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or",
          "or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or","or",
          "o","no","no","nor","nor","nor","nor","nor","no","no",
          "o","cgos","o","or","o","or",
          "cgnors","nor" ],
         [ "Implementation_Event",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","no","no","no","no","no","no","no","no","no",
          "fot","ao","cfgost","ot","o","o",
          "acfgnost","afnot" ],
         [ "Plateau",
          "cgor", "cgor", "cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor","cgor",
          "o","no","no","cgnor","nor","nor","cgnor","cgnor","no","no",
          "ot","o","ot","cgost","o","cgor",
          "cgnorst","cgnort" ],
         [ "Gap",
          "o", "o", "o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","o","o","o","o","o","o",
          "o","o","o","o","cgos","o",
          "cgos","o" ],
         [ "Location",
          "cgor", "cgor", "cgor",
          "cfgiortv","cfgiortv","cfgotv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgo","acgo","acgo","cfgo",
          "cfgortv","cfgortv","cfgortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgo",
          "cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgort","cfgot","cfgiortv","cfgiortv","cfgiortv","cfgiortv","cfgiortv","acgo","cfgiortv","cfgiortv","cfgot","acgo",
          "cgnor","cgno","cgno","cgnor","cgnor","cgnor","cgnor","cgnor","cgno","cgno",
          "cgo","cgo","cgo","cgo","cgo","cfgost",
          "acfginorstv","acfginortv" ] ,
         [ "Grouping",
          "cgorst", "cfgiorstv", "cfgorst",
          "cfgiorstv","cfgiortsv","cfgorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","cfgiorstv","acgors","acgors","acgors","cfgors",
          "cfgorstv","cfgorstv","cfgorstv","cfgiorstv","cfgiortsv","cfgiorstv","cfgiorstv","cfgiorstv","acgors",
          "cfgiorstv","cfgiorstv","cfgiortsv","cfgiorstv","cfgiorstv","cfgorst","cfgorst","cfgiorstv","cfgiortv","cfgiorstv","cfgiorstv","cfgiorstv","acgiors","cfgiorstv","cfgiorstv","cfgorst","acgiors",
          "cgninors","cgnos","cgnos","cgnors","cgnors","cgnors","cgnors","cgnors","cgnos","cgnos",
          "cfgiost","acgors","cfgiost","cgorst","cgos","cfgorst",
          "acfginorstv","acfginortv" ],
         [ "Junction",
          "fort", "fiortv", "fortv",
          "fiortv","fiortv","fortv","fiortv","fiortv","fiortv","fiortv","fiortv","fiortv","aor","aor","aor","for",
          "fortv","fortv","fortv","fiortv","fiortv","fiortv","fiortv","fiortv","aor",
          "fiortv","fiortv","fiortv","fiortv","fiortv","fort","fort","fiortv","fiortv","fiortv","fiortv","fiortv","aior","fiortv","fiortv","fort","aior",
          "inor","no","no","nor","nor","nor","nor","nor","no","no",
          "fiot","aor","fiot","ort","o","fort",
          "afinortv","afinortv" ]
         ];
         
         //Creation of vis DataSets for Nodes and Edges
         //The idea is to take advantage of DataSet and DataView features
         
         
         nodes = [];
         edges = [];
         document.getElementById("ArchiMateLanguage").innerHTML = "";

         ArchiMateLanguageNodesDataSet = new vis.DataSet(nodes);
         ArchiMateLanguageEdgesDataSet = new vis.DataSet(edges);
         
         
         ArchiMateLanguageNodesDataSet.on('*', function (event, properties, senderId) {
           console.log('event', event, properties);
         });
         ArchiMateLanguageEdgesDataSet.on('*', function (event, properties, senderId) {
            console.log('event', event, properties);
          });
          
         ArchiMateLanguageNodesDataSet.add ([
         {id: 0, label: 'ArchiMagine Dynamic Viewer', image:  './img/ArchiMagine_DMN.svg', shape: 'image'},
         {id: 1, label: 'IMAGINE',  image: './img/Imagine.png', shape: 'image'},
         {id: 2, label: 'ArchiMagine',  image: './img/archimagine.png', shape: 'image'},
         {id: 3, label: 'Visjs',  image: './img/vis-js.png', shape: 'image'},
         {id: 4, label: 'ArchiMate',  image: './img/ArchiMate-logo.jpg', shape: 'image'}
         ]);

         ArchiMateLanguageEdgesDataSet.add([
         {from: 0, to: 1, id:"1", label:"output from", arrows:'to'},
         {from: 0, to: 2, id:"2", label:"component of",arrows:'to'},
         {from: 0, to: 3, id:"3", label:"uses", arrows:'to'},
         {from: 0, to: 4, id:"4",label:"based on", arrows:'to'}       
         ]);
         
         
                
         //Creation of RelationArrays which is a matrix the list of entities which are in the domain or in the range of the relation, and is used in order to define all the nodes of the network for describing the relation
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("a")>=0){AccessRelationArray[i]=1;AccessRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("c")>=0){CompositionRelationArray[i]=1;CompositionRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("f")>=0){FlowRelationArray[i]=1;FlowRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("g")>=0){AggregationRelationArray[i]=1;AggregationRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("i")>=0){AssignmentRelationArray[i]=1;AssignmentRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("n")>=0){InfluenceRelationArray[i]=1;InfluenceRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("r")>=0){RealizationRelationArray[i]=1;RealizationRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("s")>=0){SpecializationRelationArray[i]=1;SpecializationRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("t")>=0){TriggeringRelationArray[i]=1;TriggeringRelationArray[j-1]=1;};};};
         for (var i = 0; i <57; i++) {for (var j = 1; j <59 ; j++) {if (ArchiMateRelations[i][j].indexOf("v")>=0){ServingRelationArray[i]=1;ServingRelationArray[j-1]=1;};};};



var ArchiMateLanguageNodesDataView = new vis.DataView(ArchiMateLanguageNodesDataSet, {
  filter: function (item) {
    return (item.id == 1);
  },
  fields: ['id', 'shape', 'label', 'image']
});

         var data = {
             nodes: ArchiMateLanguageNodesDataSet,
            edges: ArchiMateLanguageEdgesDataSet
         };
 
         document.getElementById('ER').checked=true;
         document.getElementById('R').checked=false;
         document.getElementById('ALL').checked=true;
         
         var container = document.getElementById('ArchiMateLanguage');

         
         var options = {interaction:{hover:false},
                       "edges": {"smooth": { "forceDirection": "none"}},
                       "physics": {
                                   "barnesHut": {
                                                  "gravitationalConstant":  -100000,
                                                  "centralGravity": 10,
                                                  "damping": 0.5,
                                                  "avoidOverlap": 1
                                  }},
                        configure: false,
                        nodes: {
                                borderWidth:4,
                                size:30,
	                            color: {border: '#406897',background: '#6AAFFF'},
                                font:{color:'black'},
                                shapeProperties: {useBorderWithImage:true}
                                },
                        layout: {randomSeed:seed} // just to make sure the layout is the same when the locale is changed
       	       
         };

         ArchiMateLanguage = new vis.Network(container, data, options);




         ArchiMateLanguage.on("doubleClick", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
     //               draw();
     //                  ArchiMateLanguageNodesDataSet.add ([
     //    {id: 10, shape: 'image',label: 'ArchiMagine Dynamic Viewer', image:  './img/ArchiMagine_DMN.svg', shape: 'image'},
     //    {id: 11, shape: 'image',label: 'IMAGINE',  image: './img/Imagine.png', shape: 'image'},
     //    {id: 12, shape: 'image',label: 'ArchiMagine',  image: './img/archimagine.png', shape: 'image'},
     //    {id: 13, shape: 'image',label: 'Visjs',  image: './img/vis-js.png', shape: 'image'},
     //    {id: 14, shape: 'image',label: 'ArchiMate',  image: './img/ArchiMate-logo.jpg', shape: 'image'}
     //    ]);
                    });
          ArchiMateLanguage.on("click", onClickArchiMateNodes); 

          ArchiMateLanguage.on("oncontext", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("dragStart", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("dragging", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("dragEnd", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("zoom", function (params) {
                    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("showPopup", function (params) {
                    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
                    });
          ArchiMateLanguage.on("hidePopup", function () {
                    console.log('hidePopup Event');
                    });
          ArchiMateLanguage.on("select", function (params) {
                    console.log('select Event:', params);
                    });
          ArchiMateLanguage.on("selectNode", function (params) {
                    console.log('selectNode Event:', params);
                    });
          ArchiMateLanguage.on("selectEdge", function (params) {
                    console.log('selectEdge Event:', params);
                    });
         ArchiMateLanguage.on("deselectNode", function (params) {
                    console.log('deselectNode Event:', params);
                    });
         ArchiMateLanguage.on("deselectEdge", function (params) {
                    console.log('deselectEdge Event:', params);
                    });
         ArchiMateLanguage.on("hoverNode", function (params) {
                    console.log('hoverNode Event:', params);
                    });
         ArchiMateLanguage.on("hoverEdge", function (params) {
                    console.log('hoverEdge Event:', params);
                   });
         ArchiMateLanguage.on("blurNode", function (params) {
                   console.log('blurNode Event:', params);
                   });
         ArchiMateLanguage.on("blurEdge", function (params) {
                   console.log('blurEdge Event:', params);
                   });
         document.getElementById("relation").addEventListener("change", function(){
                   draw();
                   });
                                                                        
         document.getElementById("eventDisplay").addEventListener("change", function(){
                   if (document.getElementById("eventDisplay").checked){ document.getElementById("eventSpan").style.display='block';}
                   else{document.getElementById("eventSpan").style.display='none';};
                   });
                                                                                                                                 
         document.getElementById("parameterDisplay").addEventListener("change", function(){
                   if (document.getElementById("parameterDisplay").selectedIndex=="0"){
                      var options = {interaction:{hover:false},
                                     physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
                                     barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
                                     configure: { filter:function (option, path) {
                                                if (path.indexOf('physics') !== -1) { return true;}
                                                if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
                                     container: document.getElementById('myArchi')}
                                    };
                     }
                  else{
                        var options = {interaction:{hover:false},
                        physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
                        barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
                        configure: false}
                     };
                     draw();
                     });


};

function clickButton(button)
{
myButton=button.title;
var c = document.getElementById(myButton.toLowerCase().replace(" ", "_").replace(" ", "_").replace('(', "").replace(')', "")) ; c.checked = (c.checked) ? false : true ;button.style.backgroundColor='white';if (c.checked==true){button.style.backgroundColor='lightgray';}

}

function setModel(modelType)
{
    myModelType=modelType.name;
    document.getElementById("ERSelection-pane").style.display="none";
    document.getElementById("RSelection-pane").style.display="none";
    document.getElementById("ArchiMateLanguage").style.display="none";
    switch (myModelType){
    case "ER":
    document.getElementById("ERSelection-pane").style.display="block";
    break;
    case "R":
    document.getElementById("RSelection-pane").style.display="block";
    break;
    document.getElementById("ArchiMateLanguage").style.display="block";
    default:    
    } 

}

function onClickArchiMateNodes(params){
params.event = "[original event]";
document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));

//if (params.nodes.length > 0) {

 //  var connectedEdges = ArchiMateLanguage.getConnectedEdges(params.nodes[0]);
//   var fromNodes="";
 //  var toNodes=""; 
 //  var selectedNode=nodes[params.nodes[0]];
 //  var size=connectedEdges.length;

//   alert(nodes[params.nodes[0]].label + " with " + size + " edges" );


 //  for (var i = 0; i < size; i++) {
 //     alert ("i: "+ i+ " from: " +edges[i].from);
  //    if (edges[i].from == params.nodes[0]){toNodes=toNodes+nodes[edges[i].to]+"; "}
  //    else {fromNodes=fromNodes+nodes[edges[i].to]+"; "};
//      describedConnectedEdges=describedConnectedEdges + edges[i].from + ";"
 //     }
//   alert ("node: " + selectedNode + " edge from: " + fromNode + " edge to:" + toNode);
//   alert (connectedEdges); 
//alert ("i:" + i + " edge " + edges[connectedEdges[i].id].from + " to " +edges[connectedEdges[i].id].to );     
// alert ("i:" + i + " edge " + connectedEdges[i]);     
 
// }

 //}
// alert(describedConnectedEdges);
}



