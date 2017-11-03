
//var listActivities=document.getElementsByClassName("pv-recent-activity-detail__feed-container")[0].childNodes;
//var list= document.getElementsByClassName("content-analytics-entry-point");

var container=document.getElementById("voyager-feed");
var children = new Array();
for(var child in container.childNodes) {
    if(container.childNodes[child].nodeType == 1) {
        children.push(child);
    }
var content=container.childNodes;
var text="Number of activity nodes:"+ children.length;
var analytics;

for (var i = 0; i < content.length; i++) {
 //   alert (listActivities[i].className);
    if (content[i].className == "article") {
    text= text + "\n" + "id:" + content[i].getAttribute("id") ;
    text= text + "\t" + "data-id:" + content[i].getAttribute("data-id") ;
    analytics=content[i].getElementsByClassName("analytics-entry-point");
    }
 //  text=text +"\n"+ analytics[0].href;
    
    
//    + " href:"+ listArticles[i].getElementsByClassName("content-analytics-entry-point")[0].getElementsByClassName("analytics-entry-point")[0].href;
}
alert (text);

