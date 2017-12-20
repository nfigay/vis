var nodes = null;
var edges = null;
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

var eventDisplay=false;
var parameterDisplay=false;

var DIR = './img/';
var EDGE_LENGTH_MAIN = 150;
var EDGE_LENGTH_SUB = 50;
var Arcticles=null;
var x=0;
var y=0;
var z=0;
var seed = 2;


// Called when the Visualization API is loaded.
function draw() {

    destroy();
    nodes = [];
    edges = [];
    document.getElementById('configureDisplay').innerHTML="";

    document.getElementById("displayPropertyButton").style.display="block";
    document.getElementById("displayEventButton").style.display="block";
 


    container = document.getElementById('Releases');
    data = {
        nodes: nodes,
        edges: edges
    };
    document.getElementById("Releases").innerHTML = "";

   Releases = new vis.Network(container, data, options);
    Releases.on("doubleClick", function (params) {
               params.event = "[original event]";
               document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);
               draw();
               });
    Releases.on("click", onClickArchiMateNodes); 
    
    Releases.on("oncontext", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
      });
    Releases.on("dragStart", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
      });
    Releases.on("dragging", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
      });
    Releases.on("dragEnd", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
      });
    Releases.on("zoom", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
      });
    Releases.on("showPopup", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
      });
      Releases.on("hidePopup", function () {
      console.log('hidePopup Event');
      });
    Releases.on("select", function (params) {
      console.log('select Event:', params);
      });
    Releases.on("selectNode", function (params) {
      console.log('selectNode Event:', params);
      });
    Releases.on("selectEdge", function (params) {
      console.log('selectEdge Event:', params);
      });
    Releases.on("deselectNode", function (params) {
      console.log('deselectNode Event:', params);
      });
    Releases.on("deselectEdge", function (params) {
      console.log('deselectEdge Event:', params);
      });
    Releases.on("hoverNode", function (params) {
      console.log('hoverNode Event:', params);
      });
    Releases.on("hoverEdge", function (params) {
      console.log('hoverEdge Event:', params);
      });
    Releases.on("blurNode", function (params) {
      console.log('blurNode Event:', params);
      });
    Releases.on("blurEdge", function (params) {
      console.log('blurEdge Event:', params);
      });
}

function destroy() {
    if (Arcticles !== null) {
        Releases.destroy();
        Releases = null;
    }
}


function initEclipse(){


        document.getElementById("Releases").style.display="block";
        document.getElementById("physicConfiguration").style.display="none";
        document.getElementById("event").style.display="none";

        document.getElementById("displayPropertyButton").style.backgroundColor="white";
        document.getElementById("displayEventButton").style.backgroundColor="white";
 

        document.getElementById("displayPropertyButton").style.display="block";
        document.getElementById("displayEventButton").style.display="block";
        
        //Creation of vis DataSets for Nodes and Edges
         //The idea is to take advantage of DataSet and DataView features
         
         nodes = [];
         edges = [];
         document.getElementById("Releases").innerHTML = "";

         ReleasesNodesDataSet = new vis.DataSet(nodes);
         ReleasesEdgesDataSet = new vis.DataSet(edges);


         
         
         ReleasesNodesDataSet.on('*', function (event, properties, senderId) {
           console.log('event', event, properties);
         });
         ReleasesEdgesDataSet.on('*', function (event, properties, senderId) {
            console.log('event', event, properties);
          });



         ReleasesNodesDataSet.add ([
         {id: 0, image: './img/Merry_Christmas_and_Happy_New_Year-4792.svg', shape: 'image'},    
         {id: 1, image: './img/Christmas_train_4546.svg', shape: 'image'},
         {id: 2, image: './img/Winter_stars_4530.svg', shape: 'image'},
         {id: 3, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 4, image: './img/gifts-4701.svg', shape: 'image'},
         {id: 5, image: './img/Christmas_bear-4707.svg', shape: 'image'},
         {id: 6, image: './img/gifts-4701.svg', shape: 'image'},
         {id: 7, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 8, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 9, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 10, image: './img/gifts-4701.svg', shape: 'image'},
         {id: 11, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 12, image: './img/gifts-4701.svg', shape: 'image'},
         {id: 13, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 14, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 15, image: './img/Snowflakes-4740.svg', shape: 'image'},
         {id: 16, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 17, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 18, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 19, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 20, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 21, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 22, image: './img/Snowflakes-4505.svg', shape: 'image'},
         {id: 23, image: './img/Snowflakes-47445050.svg', shape: 'image'},
         {id: 24, image: './img/gifts_bag_Santa-4772', shape: 'image'},
         {id: 25, image: './img/gifts_bag_Santa-4772.svg', shape: 'image'},
         {id: 26, image: './img/gifts_bag_Santa-4772.svg', shape: 'image'},
         {id: 27, image: './img/Christmas_balls-4960', shape: 'image'},
         {id: 28, image: './img/Christmas_balls-4960', shape: 'image'},
         {id: 29, image: './img/Christmas_balls-4960.svg', shape: 'image'},
         {id: 30, image: './img/Christmas_balls-4960.svg', shape: 'image'}
         ]);

         ReleasesEdgesDataSet.add([
        {from: 0, to: 1 ,color:{color:'white'}},
         {from: 0, to: 2 ,color:{color:'white'}},
         
         {from: 0, to: 4,color:{color:'white'}},
         {from: 0, to: 5,color:{color:'white'}}       
         ]);




         var data = {
             nodes: ReleasesNodesDataSet,
            edges: ReleasesEdgesDataSet
         };
 

         
         var container = document.getElementById('Releases');

         
         var options = {interaction:{hover:false},
         physics:{enabled: true, timestep: 0.5, adaptiveTimestep: true, maxVelocity: 50, minVelocity: 0.1, solver: 'barnesHut',
             barnesHut: { gravitationalConstant: -1000, centralGravity: 0.1, springLength: 95, springConstant: 0.04, damping: 0.09, avoidOverlap: 0}},
         configure: { filter:function (option, path) {
             if (path.indexOf('physics') !== -1) { return true;}
             if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
         },
         container: document.getElementById('configureDisplay')
     };
         Releases = new vis.Network(container, data, options);




         Releases.on("doubleClick", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>doubleClick event:</h2>' + JSON.stringify(params, null, 4);

                    });
        Releases.on("click", onClickArchiMateNodes); 

        Releases.on("oncontext", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("dragStart", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("dragging", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("dragEnd", function (params) {
                    params.event = "[original event]";
                    document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("zoom", function (params) {
                    document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("showPopup", function (params) {
                    document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
                    });
        Releases.on("hidePopup", function () {
                    console.log('hidePopup Event');
                    });
        Releases.on("select", function (params) {
                    console.log('select Event:', params);
                    });
        Releases.on("selectNode", function (params) {
                    console.log('selectNode Event:', params);
                    });
        Releases.on("selectEdge", function (params) {
                    console.log('selectEdge Event:', params);
                    });
        Releases.on("deselectNode", function (params) {
                    console.log('deselectNode Event:', params);
                    });
        Releases.on("deselectEdge", function (params) {
                    console.log('deselectEdge Event:', params);
                    });
        Releases.on("hoverNode", function (params) {
                    console.log('hoverNode Event:', params);
                    });
        Releases.on("hoverEdge", function (params) {
                    console.log('hoverEdge Event:', params);
                   });
        Releases.on("blurNode", function (params) {
                   console.log('blurNode Event:', params);
                   });
        Releases.on("blurEdge", function (params) {
                   console.log('blurEdge Event:', params);
                   });



};

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




function displayProperty(button){
    if (button.style.backgroundColor=='white'){
        button.style.backgroundColor='lightgray';
        document.getElementById("physicConfiguration").style.display="block";
    }
    else{
        button.style.backgroundColor='white';
        document.getElementById("physicConfiguration").style.display="none";
    }
    
}



function onClickArchiMateNodes(params){
params.event = "[original event]";
document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));

}



