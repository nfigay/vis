

function loadArchi()
{
  var myModel=null;
  myModel= document.getElementById("model").value;
  fetch('./' +myModel + '.archimate')
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
  .then( function(data){
    process(data);
    console.log(data);
    }
  );
}

function process(data){
  createVis(data);
  
}

function createVis(model){
  
  var txt="";
  var dir_image="./img/";
  var elements="";
  var nodes=[];
  var edges=[];
  var nodeString;
  var from="";
  var to="";
  var myTitle="";
  var EDGE_LENGTH_MAIN = 150;
  var EDGE_LENGTH_SUB = 50;
  var imageExtension="png";
  var options = {interaction:{hover:false},
                 layout: { improvedLayout:false},
                 physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
                 barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
                 configure: { filter:function (option, path) {
                   if (path.indexOf('physics') !== -1) { return true;}
                   if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
                 container: document.getElementById('configureDisplay')}
                };
  var folders = model.getElementsByTagName("folder");
  console.log(folders);
  var i; 
  // A node is first created for each ArchiMate viewpoint, relying on the way Archi captures it, i.e. with a property viewpoint
  viewpoints=["Application Cooperation","Application Usage", "Business Process Cooperation", "Capability","Goal Realization", "Implementation and Deployment", "Implementation and Migration", "Information Structure", "Layered", "Migration","Motivation","Organization","Outcome Realization","Physical", "Product", "Project","Requirements Realization","Resource","Service Realization","StakeholderHL","Strategy","Technology","Technology Usage"];
  for (i = 0; i < viewpoints.length; i++){
    var viewpointId=viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_");
    //image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
    nodeString='{'
      +'"id":"'+viewpointId+'",'
      +'"shape":"image"' +','
      +'"title":"'+viewpoints[i]+'"'+","
      +'"shape":"image"' +','
      +'"label":"'+viewpoints[i]+'"'+','
      +'" mass":10 ,'
      +'"image":"'+dir_image+'viewpoint.'+imageExtension+'"'
      +'}';
    node=JSON.parse(nodeString);
    nodes.push(node);
  }
  var stakeholders=["Enterprise Architect", "Process Architect", "Application Architect", "Domain Architect", "Operational Manager", "Business Manager", "Business Architect","ICT Architect", "Business Analyst", "Requirements Manager","Employee", "Shareholder", "Information Architect", "Infrastructure Architect", "Manager", "Product Developer", "Product Manager","Stakeholder" ];
  for (i = 0; i < stakeholders.length; i++){
    var stakeholderId=stakeholders[i].toLowerCase().replace(" ","_");
    //image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
    nodeString='{'
      +'"id":"'+stakeholderId+'",'
      +'"shape":"image"' +','
      +'"title":"'+stakeholders[i]+'"'+","
      +'"shape":"image"' +','
      +'"label":"'+stakeholders[i]+'"'+','
      +'"image":"'+dir_image+'stakeholder.'+imageExtension+'"'
      +'}';
    node=JSON.parse(nodeString);
    nodes.push(node);
  }
  nodes.push({id: "viewpoint", shape: 'image',label: 'Viewpoint', image: dir_image + 'viewpoint.'+imageExtension, shape: 'image'});
  edges.push({from: viewpoints[0].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[1].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[2].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[3].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[5].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[7].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[10].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[12].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[13].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[14].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[16].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[17].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[18].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[20].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[21].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  edges.push({from: viewpoints[22].toLowerCase().replace (" and ", "_").replace(" ","_"), to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
  





  edges.push({from: viewpoints[0].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[0].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[0].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[1].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[1].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[1].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[1].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[2].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[2].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[2].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[3].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[3].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[3].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[6].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[17].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[8].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[4].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[5].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[5].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[9].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[10].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[11].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[6].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[7].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[7].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[12].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
   
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[8].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[13].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
   

  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[13].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[10].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[9].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[11].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[10].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[10].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[10].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[8].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[10].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[10].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[11].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[11].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[14].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[12].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[12].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[12].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[6].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[13].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[9].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[13].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[13].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[14].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[14].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[14].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[15].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[14].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[16].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[11].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[15].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[12].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[16].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[16].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[16].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[8].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[16].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[17].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[17].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[17].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[6].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[18].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[1].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[18].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[3].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[18].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[9].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[18].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[16].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[17].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[5].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[8].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[19].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[20].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[0].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[20].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[6].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[20].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[7].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  
  edges.push({from: viewpoints[21].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[9].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[21].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[13].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
 
  edges.push({from: viewpoints[22].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[2].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[22].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[13].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  edges.push({from: viewpoints[22].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[4].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
  

  // All the views are found by mean of an XPATH query, and will be pushed in an array before to be processed
  var queryViews = model.evaluate( '//element[@xsi:type="archimate:ArchimateDiagramModel"]', model, nsResolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );  
  var nbviews = model.evaluate( 'count(//element[@xsi:type="archimate:ArchimateDiagramModel"])', model, nsResolver, XPathResult.ANY_TYPE, null );
  var views=[];

  for (i = 0; i < queryViews.snapshotLength; i++) {
    views.push(queryViews.snapshotItem(i)); 
    nodeString='{'+'"id":"'+views[i].getAttribute('id')+'",'+'"shape":"image"' +','
       +'"title":"'+views[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
       +'"label":"'+views[i].getAttribute('name')+'"'+','
       +'"image":"'+dir_image+'view.'+imageExtension+'"'
       +'}';
    //alert (nodeString);
       node=JSON.parse(nodeString);
    nodes.push(node);
  //now let's associate each view to the viewpoint it is associated with
  var associatedViewpoint="";
  if (views[i].getAttribute('viewpoint')){ 
    associatedViewpoint=views[i].getAttribute('viewpoint');
    edgeString={
      "from": views[i].getAttribute('id'),
      "to": associatedViewpoint,
      "arrows":'to',
      "length": EDGE_LENGTH_MAIN,
      "title":"--(associated viewpoint)->"
    };
    edge=JSON.parse(JSON.stringify(edgeString));
    edges.push(edge);

  };


  //now let's capture all the children for each view creating a dedicated XPATH query for each
    for (j=0; j<views[i].getElementsByTagName("child").length;j++){

      //let's process the diagram objects first
        if (views[i].getElementsByTagName("child")[j].getAttribute("xsi:type")=="archimate:DiagramObject"){
          var archiMateElement=views[i].getElementsByTagName("child")[j].getAttribute("archimateElement");
          var image=model.getElementById(archiMateElement).getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
          var diagramObject=views[i].getElementsByTagName("child")[j].getAttribute("id");
          nodeString='{'+'"id":"'+diagramObject+'",'+'"shape":"image"' +','
            +'"title":"'+model.getElementById(archiMateElement).getAttribute('name')+'"'+","+'"shape":"image"' +','
            +'"label":"'+model.getElementById(archiMateElement).getAttribute('name')+'"'+','
            +'"image":"'+dir_image+'archimate/'+image+'.'+imageExtension+'"'
            +'}';
            
          node=JSON.parse(nodeString);
          //  console.log(node);
          nodes.push(node);
          
          
          edgeString={
            "from": diagramObject,
            "to": archiMateElement,
            "arrows":'to',
            "length": EDGE_LENGTH_MAIN,
            "title":"--(represent)->"
          };
          edge=JSON.parse(JSON.stringify(edgeString));
          edges.push(edge);
         
          edgeString={
            "from": views[i].getAttribute('id'),
            "to": diagramObject,
            "arrows":'to',
            "length": EDGE_LENGTH_MAIN,
            "title":"--(contains)->"
          };
          edge=JSON.parse(JSON.stringify(edgeString));
          edges.push(edge);
          var k=0;
          for (k=0; k<views[i].getElementsByTagName("child")[j].getElementsByTagName("sourceConnection").length;k++){
            var sourceConnection=views[i].getElementsByTagName("child")[j].getElementsByTagName("sourceConnection")[k];
            var archimateRelationship=sourceConnection.getAttribute('archimateRelationship');
            //console.log (archimateRelationship);
            //console.log(model.getElementById(archimateRelationship));
            if (sourceConnection.getAttribute('xsi:type')){
            myTitle="<b>--( </b>";
            myTitle+=sourceConnection.getAttribute('xsi:type').replace("archimate:", "").replace("Relationship", "");
            myTitle+="<b> )--> </b>";
            }

            edgeString={
              "from": sourceConnection.getAttribute('source'),
              "to": sourceConnection.getAttribute('target'),
              "arrows":'to',
              "length": EDGE_LENGTH_MAIN,
              "title": myTitle
            };
            edge=JSON.parse(JSON.stringify(edgeString));
            edges.push(edge);

          }
        }
      }
    
    }

    // Lets now include the model elements

    for (i = 0; i < folders.length; i++) {
      from=folders[i].getAttribute('id');        
      if (folders[i].getAttribute("name")  !="Views"){
        if (folders[i].getAttribute("name")  !="Relations"){
          txt+=folders[i].getAttribute('name')+"  ";
          image="folder";
          nodeString='{'+'"id":"'+folders[i].getAttribute('id')+'",'+'"shape":"image"' +','
             +'"title":"'+folders[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
             +'"label":"'+folders[i].getAttribute('name')+'"'+','
             +'"image":"'+dir_image+'archimate/'+image+'.'+imageExtension+'"'
             +'}';
          //   alert(nodeString);
          node=JSON.parse(nodeString);
          document.getElementById('folders').checked=false;
          if (document.getElementById('folders').checked == true ){
            nodes.push(node);
          }

          nodeString=null;
          var j;
          elements=folders[i].getElementsByTagName("element");
          txt+=elements.length+"<br/>";
          for (j = 0; j < elements.length; j++){
            txt+= "element with name: "+ elements[j].getAttribute("name") + ", id:"+ 
            elements[j].getAttribute("id")+ " and type: "+elements[j].getAttribute("xsi:type") + "<br/>";
            image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
            nodeString='{'+'"id":"'+elements[j].getAttribute('id')+'",'+'"shape":"image"' +','
              +'"title":"'+elements[j].getAttribute('name')+elements[j].getAttribute('xsi:type').replace("archimate:",":")+'"'+","+'"shape":"image"' +','
              +'"label":"'+elements[j].getAttribute('name')+'"'+','
              +'"image":"./img/archimate/'+image+'.'+imageExtension+'"'
              +'}';
            node=JSON.parse(nodeString);
          
            if (elements[j].getAttribute("xsi:type") != "archimate:ArchimateDiagramModel"){
              if (elements[j].getAttribute("xsi:type") != "archimate:SketchModel"){
                if (elements[j].getAttribute("xsi:type") != "archimate:Junction"){
                  if (elements[j].getAttribute("xsi:type") != "archimate:Grouping"){              
                    nodes.push(node);
                    to=elements[j].getAttribute("id");
                    edgeString={
                      "from": from,
                      "to": to,
                      "arrows":'to',
                      "length": EDGE_LENGTH_MAIN,
                      "title":'contains'
                    };
                    edge=JSON.parse(JSON.stringify(edgeString));
                    if (document.getElementById('folders').checked == true ){
                      edges.push(edge);
                    }
                  }
                }
              }
            }else{
             // processing the elements of a view, i.e. the child 

            }
            nodeString=null;
          } 
        } else {
          elements=folders[i].getElementsByTagName("element");
          for (j = 0; j < elements.length; j++){             
            //console.log (elements[j].getAttribute("id"));
            from=elements[j].getAttribute("source");
            to=elements[j].getAttribute("target");
            title=model.getElementById(from).getAttribute('name');
            title+=" <b>--( </b>"+ elements[j].getAttribute("xsi:type").replace("archimate:", "").replace("Relationship", "");
            title+="<b> )--> </b>"+model.getElementById(to).getAttribute('name');
            edgeString={
              "from": from,
              "to": to,
              "arrows":'to',
              "length": EDGE_LENGTH_MAIN,
              "title":title
            };
            edge=JSON.parse(JSON.stringify(edgeString));
            edges.push(edge);
          }
        }  
      }
    }


    container = document.getElementById('ArchiMateModel');
    data = {
        nodes: nodes,
        edges: edges
    };
    document.getElementById("ArchiMateModel").innerHTML = "";

    ArchiMateModel = new vis.Network(container, data, options);
  
}

function nsResolver(prefix) {
  switch(prefix){
    case "xsi":return 'http://www.w3.org/2001/XMLSchema-instance';
    default: return null;
  }
}
function displaySVG(button)
{
    if (button.style.backgroundColor=='palegreen'){
        button.style.backgroundColor='lightgray';
        imageExtension="png";
        
    }
    else{
        button.style.backgroundColor='palegreen';

        imageExtension="svg";
    } 
}
function setModel(modelType)
{
    
    myModelType=modelType.name;

    document.getElementById("ERSelection-pane").style.display="none";
    document.getElementById("RSelection-pane").style.display="none";
    document.getElementById("ArchiMateLanguage").style.display="none";
    document.getElementById("physicConfiguration").style.display="none";
    document.getElementById("displayPropertyButton").style.backgroundColor="white";
    document.getElementById("event").style.display="none";
    document.getElementById("displayEventButton").style.backgroundColor="white";
    document.getElementById("viewpoint").style.display="none";
    document.getElementById("displayViewpointButton").style.backgroundColor="white";
    document.getElementById("ER").style.backgroundColor='white';
    document.getElementById("R").style.backgroundColor='white';

    modelType.style.backgroundColor='lightgray';
    
    switch (myModelType){
    case "ER":
       document.getElementById("ERSelection-pane").style.display="block";
       selectedModel=myModelType;
       break;
    case "R":
       document.getElementById("RSelection-pane").style.display="block";
       selectedModel=myModelType;
       break;
    default:
       break;
    } 
}
function displayEvent(button){

  if (button.style.backgroundColor=='white'){
      button.style.backgroundColor='lightgray';
      document.getElementById("event").style.display="block";
  }
  else{
      button.style.backgroundColor='white';
      document.getElementById("event").style.display="none";
  }

}
function displayViewpoint(button){
  
 if (button.style.backgroundColor=='white'){
      button.style.backgroundColor='lightgray';
      document.getElementById("ERSelection-pane").style.display="none";
      document.getElementById("RSelection-pane").style.display="none";
      document.getElementById("viewpoint").style.display="block";
      //  document.getElementById("ER").style.backgroundColor='white';
      document.getElementById("R").style.backgroundColor='white';
      //document.getElementById("ArchiMateLanguage").style.display="none";
      document.getElementById("physicConfiguration").style.display="none";
      if (document.getElementById("SV").checked==false && document.getElementById("VS").checked==false){
          document.getElementById("SV").checked=true;
      }   
  } else {
      button.style.backgroundColor='white';
      document.getElementById("viewpoint").style.display="none";  
    }
}