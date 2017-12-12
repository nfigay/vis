function loadArchi()
{
  var txt="";
  var elements="";
  var nodes=[];
  var edges=[];
  var data;
  var nodeString;
  var from="";
  var to="";
  var myTitle="";
  var EDGE_LENGTH_MAIN = 150;
  var EDGE_LENGTH_SUB = 50;
  var options = {interaction:{hover:false},
  physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
      barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
  configure: { filter:function (option, path) {
      if (path.indexOf('physics') !== -1) { return true;}
      if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
  container: document.getElementById('configureDisplay')}
  };
    axios({
        method:'get',
        url:'http://www.eads-iw.net/html/archi-axios/test.archimate',
        responseType:'document'
      })
    .then(function (response) {
      console.log(response);
      //alert(response.data.getElementById("a1e1464a-3b78-4c82-971e-c7c9ca96bb5e").getAttribute('name'));

      var folders = response.data.getElementsByTagName("folder");
      
      // var myPath1='count(/element[@xsi:type="archimate:ArchimateDiagramModel"])';
      // var myPath1='count(/element[@xsi:type])';
      // var myPath1='count(/folder)';
      // var nbviews = response.data.evaluate( 'count(//*[local-name() = "element"][@*[local-name() = "xsi:type"]="archimate:ArchimateDiagramModel"])', response.data, null, XPathResult.ANY_TYPE, null );
      // alert (nbviews.numberValue);
      var i;      
      //var views = response.data.evaluate( '//*[local-name() = "element"][@*[local-name() = "xsi:type"]="archimate:ArchimateDiagramModel"]', response.data, null, XPathResult.ANY_TYPE, null );
      var queryViews = response.data.evaluate( '//*[local-name() = "element"][@*[local-name() = "xsi:type"]="archimate:ArchimateDiagramModel"]', response.data, null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );
    //  var query2Views = response.data.evaluate( '//*[local-name() = "element"][@*[local-name() = "xsi:type"]="archimate:ArchimateDiagramModel"]', response.data, null,XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null );
      
      var nbviews = response.data.evaluate( 'count(//*[local-name() = "element"][@*[local-name() = "xsi:type"]="archimate:ArchimateDiagramModel"])', response.data, null, XPathResult.ANY_TYPE, null );
      
      
     // alert ("nbviews.numberValue:"+ nbviews.numberValue);
     // alert ("views.length: "+ queryViews.snapshotLength);
     // try {
     //   var thisNode = query2Views.iterateNext();        
     //   while (thisNode) {
     // console.log( thisNode.textContent );
     // if (typeof thisNode != 'undefined') {console.log(thisnode.tagName);}
     //     thisNode = query2Views.iterateNext();
     //   }	
     // }
     // catch (e) {
     //   console.log( 'Error: ' + e );
     // }
      var views=[];
      var views2=[];
      views2=queryViews.snapshotItem;
      for (i = 0; i < queryViews.snapshotLength; i++) {
        views.push(queryViews.snapshotItem(i)); 
        nodeString='{'+'"id":"'+views[i].getAttribute('id')+'",'+'"shape":"image"' +','
           +'"title":"'+views[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
           +'"label":"'+views[i].getAttribute('name')+'"'+','
           +'"image":"../img/view.svg"'
           +'}';
        node=JSON.parse(nodeString);
      //  console.log(node);
        nodes.push(node);

      //now let's capture all the children for each view creating a dedicated XPATH query for each
      for (j=0; j<views[i].getElementsByTagName("child").length;j++){
        if (views[i].getElementsByTagName("child")[j].getAttribute("xsi:type")=="archimate:DiagramObject"){
          var archiMateElement=views[i].getElementsByTagName("child")[j].getAttribute("archimateElement");
          var image=response.data.getElementById(archiMateElement).getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
          var diagramObject=views[i].getElementsByTagName("child")[j].getAttribute("id");
          nodeString='{'+'"id":"'+diagramObject+'",'+'"shape":"image"' +','
            +'"title":"'+response.data.getElementById(archiMateElement).getAttribute('name')+'"'+","+'"shape":"image"' +','
            +'"label":"'+response.data.getElementById(archiMateElement).getAttribute('name')+'"'+','
            +'"image":"../img/archimate/'+image+'.svg"'
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
            console.log (archimateRelationship);
            console.log(response.data.getElementById(archimateRelationship));
          //myTitle= sourceConnection.getAttribute('xsi-type');
          //console.log ("xsi-type: "+sourceConnection.getAttribute('xsi-type'));
          //console.log ("typeof source: "+typeof sourceConnection.getAttribute('xsi-type'));
          //console.log ("typeof title: "+typeof myTitle + " : " + myTitle);
          if (myTitle){
            console.log(myTitle.length);
            //myTitle=myTitle.replace("archimate:", "").replace("Relationship", "");
            //myTitle = " <b>--( </b>"+ myTitle + "<b> )--> </b>";
            console.log(myTitle);
          }
            //var title=response.data.getElementById(archimateRelationship).getAttribute("xsi:type");
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

      for (i = 0; i < folders.length; i++) {
        from=folders[i].getAttribute('id');        
        if (folders[i].getAttribute("name")  !="Views"){
          if (folders[i].getAttribute("name")  !="Relations"){
            txt+=folders[i].getAttribute('name')+"  ";
            image="folder";
            nodeString='{'+'"id":"'+folders[i].getAttribute('id')+'",'+'"shape":"image"' +','
               +'"title":"'+folders[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
               +'"label":"'+folders[i].getAttribute('name')+'"'+','
               +'"image":"../img/archimate/'+image+'.svg"'
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
                +'"image":"../img/archimate/'+image+'.svg"'
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
              title=response.data.getElementById(from).getAttribute('name');
              title+=" <b>--( </b>"+ elements[j].getAttribute("xsi:type").replace("archimate:", "").replace("Relationship", "");
              title+="<b> )--> </b>"+response.data.getElementById(to).getAttribute('name');
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
  
      ArchiMateLanguage = new vis.Network(container, data, options);

 // Example concerning usage of XPATH      
 //     var paragraphCount = document.evaluate( 'count(//p)', document, null, XPathResult.ANY_TYPE, null );
 //     document.getElementById("demo").innerHTML = txt;    
 //     alert( 'This document contains ' + paragraphCount.numberValue + ' paragraph elements' ); 
    })
    .catch(function (error) {
      console.log(error);
    });   

}
function nsResolver(prefix) {
  switch(prefix){
    case "archimate":return 'http://www.archimatetool.com/archimate';
    case "xsi":return 'http://www.w3.org/2001/XMLSchema-instance';
    default: return 'http://www.archimatetool.com/archimate';
 // var ns = {
 //   'archimate': 'http://www.archimatetool.com/archimate',
 //   'xsi' : 'http://www.w3.org/2001/XMLSchema-instance'  
 // };
 // return ns[prefix] || null;
  }
}




