var myModel="ArchiMagineModelDynamicViewer";
var displayViews=false;
var folderName=null;
var elementType=null;
var clusterViews=false;
var displayViewpoints=false;
var displayStakeholders=false;
var filterViewpoints=false;
var filterStakeholders=false;
var ArchiMateModel = null;
var selectedModel="ER";
var folders=null;
var W4S=null;
var loadedDataOptions = {};
var loadedData = null;
var ArchiMateObjects=["Resource","Capability", "Course_Of_Action","Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Contract", "Representation", "Product", "Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Data_Object", "Node", "Device", "System_Software","Technology_Collaboration", "Technology_Interface", "Path","Communication_Network", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Artifact", "Equipment", "Facility", "Distribution_Network", "Material", "Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value", "WorkPackage", "Deliverable", "Implementation_Event", "Plateau", "Gap", "Location", "Grouping", "Junction"];
var StrategyObjectsWithNames=["Resource", "Capability", "Course_Of_Action" ];
var BusinessObjectsWithNames=["Actor","Business_Role", "Business_Collaboration", "Business_Interface", "Business_Process", "Business_Function", "Business_Interaction", "Business_Event", "Business_Service", "Business_Object", "Contract", "Representation", "Product"];
var ApplicationObjectsWithNames=["Application_Component", "Application_Collaboration", "Application_Interface", "Application_Function", "Application_Interaction", "Application_Process", "Application_Event","Application_Service", "Data_Object"];
var TechnicalObjectsWithNames=["Node", "Device", "System_Software","Technology_Collaboration", "Technology_Interface", "Path","Communication_Network", "Technology_Function", "Technology_Process", "Technology_Interaction", "Technology_Event", "Technology_Service", "Artifact", "Equipment", "Facility", "Distribution_Network", "Material"];
var MotivationObjectsWithNames=["Stakeholder", "Driver", "Assessment", "Goal", "Outcome", "Principle", "Requirement", "Constraint", "Meaning", "Value"];
var ImplementationMigrationObjectWithNames=["WorkPackage", "Deliverable", "Implementation_Event", "Plateau", "Gap"];
var OtherObjectsWithNames=["Location", "Grouping", "Junction"];
var StrategyObjectsWithId=[0,1,2];
var BusinessObjectsWithId=[4,5,6,7,9,9,10,11,12,13,14,15,16];
var ApplicationObjectsWithId=[17,18,19,20,21,22,23,24,25];
var TechnicalObjectsWithId=[26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
var MotivationObjectsWithId=[43,44,45,46,47,48,49,50,51,52];
var ImplementationMigrationObjectWithId=[53,54,55,56,57];
var OtherObjectsWithId=[59,60,61];
var Viewpoints=["Application Cooperation","Application Usage", "Business Process Cooperation", "Capability","Goal Realization", "Implementation and Deployment", "Implementation and Migration", "Information Structure", "Layered", "Migration","Motivation","Organization","Outcome Realization","Physical", "Product", "Project","Requirements Realization","Resource","Service Realization","StakeholderHL","Strategy","Technology","Technology Usage"];
var ViewpointsWithId=[ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var Stakeholders=["Enterprise Architect", "Process Architect", "Application Architect", "Domain Architect", "Operational Manager", "Business Manager", "Business Architect","ICT Architect", "Business Analyst", "Requirements Manager","Employee", "Shareholder", "Information Architect", "Infrastructure Architect", "Manager", "Product Developer", "Product Manager","Stakeholder" ];
var StakeholdersWithId=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var W4S=[
    [0,1,2],
    [0,1,2,3],
    [1,3,4],
    [0,5,6],
    [0,4,5,7,8,17],
    [2,3],
    [0,7,9,10,11],
    [3,12],
    [0,1,2,3,13],
    [0,1,2,3,10,11,13],
    [0,4,7,8],
    [0,1,3,10,11,14],
    [0,5,6],
    [9,13],
    [1,3,15,16],
    [0,5,7,11,12],
    [0,4,7,8],
    [0,5,6],
    [1,3,9,16],
    [0,4,5,7,8,17],
    [0,6,7],
    [9,13],
    [2,4,13]
];
var O4W=[
    [16,17,18,19,20,21,22,23,24,57,58],
    [3,4,5,7,8,9,10,12,16,17,18,19,20,21,22,23,24,58],
    [3,4,5,6,7,8,9,10,11,12,14,16,17,18,19,20,21,22,23,24,57,58],
    [0,1,46,58],
    [45,46,47,48,49,58],
    [16,17,18,19,20,21,22,23,24,27,29,30,32,33,34,36,37,58],
    [3,4,5,7,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,18,29,30,31,32,33,34,35,36,37,45,48,49,52,53,54,55,56,57,58],
    [12,14,24,37,50,58],
    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],
    [55,56,58],
    [42,43,44,45,46,47,48,49,50,51,58],
    [3,4,5,6,57,58],
    [0,1,3,4,5,6,7,8,9,10,11,12,13,14,15,6,17,18,19,20,21,22,23,24,25,26,27,18,29,30,31,32,33,34,35,36,37,46,50,51,57,58],
    [25,26,30,31,38,39,40,41,57,58],
    [3,4,5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,21,22,23,24,36,37,41,41,58],
    [3,4,45,64,65,66,58],
    [,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,45,46,48,49,50,51,57,58],
    [0,1,52,58],
    [3,4,5,6,7,8,9,10,11,12,14,16,17,18,19,20,21,22,23,24,58],
    [42,43,44,45,46,58],
    [0,1,2,46,58],
    [25,26,27,18,29,30,31,32,33,34,35,36,37,57,58],
    [16,17,19,20,21,22,25,26,27,28,29,30,31,32,33,34,35,36,37,58]
];

var ArchiMateRelations=
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



function initArchiMate(){
  document.getElementById("model").value="ArchiMagineModelDynamicViewer";
  document.getElementById("ERSelection-pane").style.display="none";
  document.getElementById("RSelection-pane").style.display="none";
  document.getElementById("relationsButtons").style.display="none";
  document.getElementById("relationsCheckbox").style.display="none";
  document.getElementById("entitiesCheck").style.display="none";
  document.getElementById("ArchiMateModel").style.display="block";
  document.getElementById('configureDisplay').innerHTML="";
  document.getElementById("physicConfiguration").style.display="none";
  document.getElementById("event").style.display="none";
  document.getElementById("viewpoint").style.display="none";
  document.getElementById("displayPropertyButton").style.backgroundColor="white";
  document.getElementById("displayEventButton").style.backgroundColor="white";
  document.getElementById("displayViewpointButton").style.backgroundColor="white";
  document.getElementById("displayViewsButton").style.backgroundColor="white";
  document.getElementById("R").style.display="white";
  document.getElementById("ER").style.backgroundColor="white";
  document.getElementById("displayPropertyButton").style.display="block";
  document.getElementById("displayEventButton").style.display="block";
  document.getElementById("displaySVGButton").style.backgroundColor="lightgray";
  document.getElementById("filterStakeholder").checked=false;
  document.getElementById("filterViewpoint").checked=false;
  loadArchi();
}


function loadArchi()
{
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
  loadedData=null;
  loadedData=new vis.DataSet(loadedDataOptions);
  destroy();
  document.getElementById('configureDisplay').innerHTML="";
  checkedRelations=[];
  checkedEntities=[];
  document.getElementById("RSelection-pane").style.display="none";
  document.getElementById("ERSelection-pane").style.display="none";
  document.getElementById("displayPropertyButton").style.display="block";
  document.getElementById("displayEventButton").style.display="block";
  

  if (selectedModel=="ER" || selectedModel=="R"){document.getElementById("ArchiMateModel").style.display="block";}
 
  
  inputRelations = document.getElementsByClassName('relationsCheckbox');
  inputEntities = document.getElementsByClassName('entitiesCheckbox');
   
  var options = {
    nodes: {
      shape: 'dot',
      scaling: {
        min: 10,
        max: 30
        },
      font: {
        size: 12,
        face: 'Tahoma'
      }
    },
    edges: {
      width: 0.15,
      color: {inherit: 'from'},
      smooth: {
        type: 'continuous'
      }
     },
    physics: {
      stabilization: {
        enabled:true,
        iterations:2000,
        updateInterval:25
    },
      barnesHut: {
        gravitationalConstant: -80000,
        springConstant: 0.001,
        springLength: 200
      }
    },
    interaction: {
      tooltipDelay: 200,
      hideEdgesOnDrag: true
    },
    configure: { filter:function (option, path) {
      if (path.indexOf('physics') !== -1) { return true;}
      if (path.indexOf('smooth') !== -1 || option === 'smooth') {return true;} return false;},
      container: document.getElementById('configureDisplay')
    }
  };


  for (i = 0; i < Viewpoints.length; i++){
    
    loadedData.add([{
      id:Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_").replace(" ","_")+"_viewpoint",
      shape:"image",
      title:Viewpoints[i],
      label:Viewpoints[i], 
      mass:10,
      image:dir_image+"viewpoint"+imageExtension,
      type:"viewpoint",
      noe:"node"
      }]);
    loadedData.add([{
      from:Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_"),
      to:"viewpoint",
      arrows:'to',
      length: EDGE_LENGTH_MAIN,
      label:"is a",
      title:"is a",
      type:"viewpoint_typing",
      noe:"edge"
      }]);
  }

  for (i = 0; i < Stakeholders.length; i++){
    loadedData.add([{
      id:Stakeholders[i].toLowerCase().replace(" ","_")+"_stakeholder",
      shape:"image",
      title: Stakeholders[i],
      label: Stakeholders[i], 
      mass:10,
      image:dir_image+"stakeholder"+imageExtension,
      group:"stakeholders",
      type:"node"
      }]);
    loadedData.add([{
      from:Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_"),
      to:"stakeholder",
      arrows:'to',
      length: EDGE_LENGTH_MAIN,
      label:"is a",
      title:"is a",
      type:"stakeholder_typing",
      noe:"edge"
      }]);
  }
  for (i = 0; i < W4S.length; i++){
    for (j = 0; j < W4S[i].length; j++){
     loadedData.add([{
      from:Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_"),
      to: Stakeholders[j].toLowerCase().replace(" ","_"),
      arrows:'to',
      length: EDGE_LENGTH_MAIN,
      label:"concerns",
      title:"concerns",
      type:"W4S",
      noe:"edge"
      }]);
    }
  } 

  for (i = 0; i < O4W.length; i++){
    for (j = 0; j < O4W[i].length; j++){

     loadedData.add([{
      from:ArchiMateObjects[O4W[i][j]],
      to:Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_"),
      arrows:'to',
      length: EDGE_LENGTH_MAIN,
      label:"belongTo",
      title:"belongsTo",
      type:"O4W",
      noe:"edge"
      }]);
    }
  } 
  
  if (document.getElementById("displayViewpoint").checked==true){
    
    nodes.push({id: "viewpoint", shape: 'image',label: 'Viewpoint', image: dir_image + 'viewpoint.'+imageExtension, shape: 'image'});
             
    
    // A node is first created for each ArchiMate viewpoint, relying on the way Archi captures it, i.e. with a property viewpoint
    for (i = 0; i < Viewpoints.length; i++){
      var viewpointId=Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_").replace(" ","_")+"_viewpoint";
      //image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
      nodeString='{'
      +'"id":"'+viewpointId+'",'
      +'"shape":"image"' +','
      +'"title":"'+Viewpoints[i]+'"'+","
      +'"label":"'+Viewpoints[i]+'"'+','
      +'" mass":10 ,'
      +'"image":"'+dir_image+'viewpoint.'+imageExtension+'"'
      +'}';
      node=JSON.parse(nodeString);
      nodes.push(node);
      edges.push({from: viewpointId, to: "viewpoint",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});

     //to be moved and updated in order filtering views and displayed model elements 
      if (document.getElementById("filterViewpoint").checked==true){
        //in order being able filtering the viewpoints to display on the network - requires a list of clickable viewpion buttons
        if (document.getElementById(viewpointId).checked==true){ }
        else{ }
      }
    }
  }
  if (document.getElementById("displayStakeholder").checked==true){
    nodes.push({id: "stakeholder", shape: 'image',label: 'Stakeholder', image: dir_image + 'stakeholder.'+imageExtension, shape: 'image'});

    
    for (i = 0; i < Stakeholders.length; i++){
      var stakeholderId=Stakeholders[i].toLowerCase().replace(" ","_")+"_stakeholder";
      //image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
      nodeString='{'
      +'"id":"'+stakeholderId+'",'
      +'"shape":"image"' +','
      +'"title":"'+Stakeholders[i]+'"'+","
      +'"shape":"image"' +','
      +'"label":"'+Stakeholders[i]+'"'+','
      +'"image":"'+dir_image+'stakeholder.'+imageExtension+'"'
      +'}';
      node=JSON.parse(nodeString);  
      if (document.getElementById(stakeholderId).checked==true){
        nodes.push(node); 
        edges.push({from: stakeholderId, to: "stakeholder",  arrows:'to', length: EDGE_LENGTH_MAIN, label:"is a", title:"is a"});
      }
//to be moved and updated in order filtering views and displayed model elements 
     
      if (document.getElementById("filterStakeholder").checked==true){
       // alert (stakeholderId);
        if (document.getElementById(stakeholderId).checked==true){}
      }else{

      }
    }



  if (document.getElementById("displayStakehloder").checked==true || document.getElementById("displayViewpoint").checked==true){}
  else {
    for (i = 0; i < W4S.length; i++){
      for (j = 0; j < W4S[i].length; j++){
       edges.push({from: Viewpoints[i].toLowerCase().replace (" and ", "_").replace(" ","_"), to: stakeholders[i][j].toLowerCase().replace(" ","_"),  arrows:'to', length: EDGE_LENGTH_MAIN, label:"concerns", title:"concerns"});
      }
    } 
  }


if (displayViews){
  // All the views are found by mean of an XPATH query, and will be pushed in an array before to be processed
  var queryViews = model.evaluate( '//element[@xsi:type="archimate:ArchimateDiagramModel"]', model, nsResolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null );  
  var nbviews = model.evaluate( 'count(//element[@xsi:type="archimate:ArchimateDiagramModel"])', model, nsResolver, XPathResult.ANY_TYPE, null );
  var views=[];
  var viewIds=[];
  var viewNames=[];

  for (i = 0; i < queryViews.snapshotLength; i++) {
    views.push(queryViews.snapshotItem(i)); 
    nodeString='{'+'"id":"'+views[i].getAttribute('id')+'",'+
       +'"title":"'+views[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
       +'"label":"'+views[i].getAttribute('name')+'"'+','
       +'"image":"'+dir_image+'view.'+imageExtension+'"'
       +'}';
    console.log (nodeString);
    node=JSON.parse(nodeString);
    nodes.push(node);
    console.log ("10");
  loadedData.add([{
    id:views[i].getAttribute('id'),
    shape:"image",
    title:views[i].getAttribute('name'),
    label: "view", 
    mass:10,
    image:dir_image+"view"+imageExtension,
    type:"views",
    noe:"node"
    }]);

    viewIds.push(views[i].getAttribute('id'));
    viewNames.push(views[i].getAttribute('name'));


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
    console.log ("9");
    loadedData.add([{
      from:views[i].getAttribute('id'),
      to:views[i].getAttribute('viewpoint'),
      arrows:'to',
      length: EDGE_LENGTH_MAIN,
      label:"--(associated viewpoint)->",
      title:"--(associated viewpoint)->",
      type:"view_viewpoints_association",
      noe:"edge"
      }]);
  };


  //now let's capture all the children for each view creating a dedicated XPATH query for each
    for (j=0; j<views[i].getElementsByTagName("child").length;j++){

      //let's process the diagram objects first
        if (views[i].getElementsByTagName("child")[j].getAttribute("xsi:type")=="archimate:DiagramObject"){
          var archiMateElement=views[i].getElementsByTagName("child")[j].getAttribute("archimateElement");
          var image=model.getElementById(archiMateElement).getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
          var diagramObject=views[i].getElementsByTagName("child")[j].getAttribute("id");
          console.log ("8");
          loadedData.add([{
            id:views[i].getElementsByTagName("child")[j].getAttribute("id"),
            shape:"image",
            title:model.getElementById(archiMateElement).getAttribute('name'),
            label: model.getElementById(archiMateElement).getAttribute('name'), 
            mass:10,
            image:dir_image+'archimate/'+image+'.'+imageExtension,
            type:"DiagramObject",
            noe:"node"
            }]);
      
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
          console.log ("7");

          loadedData.add([{
            from:diagramObject,
            to:archiMateElement,
            arrows:'to',
            length: EDGE_LENGTH_MAIN,
            label:"--(represent)->",
            title:"--(represent)->",
            type:"represent",
            noe:"edge"
            }]);
         
          edgeString={
            "from": views[i].getAttribute('id'),
            "to": diagramObject,
            "arrows":'to',
            "length": EDGE_LENGTH_MAIN,
            "title":"--(contains)->"
          };
          console.log ("6");
          loadedData.add([{
            from:views[i].getAttribute('id'),
            to:diagramObject,
            arrows:'to',
            length: EDGE_LENGTH_MAIN,
            label:"--(contains)->",
            title:"--(contains)->",
            type:"view_contains_diagramObject",
            noe:"edge"
            }]);
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
            console.log ("5");
            loadedData.add([{
              from:sourceConnection.getAttribute('source'),
              to:sourceConnection.getAttribute('target'),
              arrows:'to',
              length: EDGE_LENGTH_MAIN,
              label:myTitle,
              title:myTitle,
              type:sourceConnection.getAttribute('xsi:type').replace("archimate:", "").replace("Relationship", ""),
              noe:"edge"
              }]);
            edge=JSON.parse(JSON.stringify(edgeString));
            edges.push(edge);

          }
        }
      }
    
    }
  }
}
 
    // Lets now include the model elements
    var folders = model.getElementsByTagName("folder");
    console.log(folders);

    for (i = 0; i < folders.length; i++) {
      from=folders[i].getAttribute('id');
      folderName= folders[i].getAttribute("name");   
          
      switch(folderName){
        case "Views": console.log ("Views"); 
          nodeString=null;
          elements=folders[i].getElementsByTagName("element");
          for (j = 0; j < elements.length; j++){
            elementType=elements[j].getAttribute("xsi:type");
            switch(elementType){
              case "archimate:ArchimateDiagramModel":
              default: break;
            }
          
           // if (elements[j].getAttribute("xsi:type") != "archimate:ArchimateDiagramModel"){
           //   if (elements[j].getAttribute("xsi:type") != "archimate:SketchModel"){
           //     if (elements[j].getAttribute("xsi:type") != "archimate:Junction"){
           //       if (elements[j].getAttribute("xsi:type") != "archimate:Grouping"){              
           //         nodes.push(node);
           //         to=elements[j].getAttribute("id");
           //         edgeString={
           //           "from": from,
           //           "to": to,
           //           "arrows":'to',
           //           "length": EDGE_LENGTH_MAIN,
           //           "title":'contains'
           //         };
           //         edge=JSON.parse(JSON.stringify(edgeString));
           //         console.log ("2");
           //         loadedData.add([{
           //           from:from,
           //           to:to,
           //           arrows:'to',
           //           length: EDGE_LENGTH_MAIN,
           //           label:'contains',
           //           title:'contains',
           //           type:'contains',
           //             noe:"edge"
           //             }]);
           //
           //            if (document.getElementById('folders').checked == true ){
           //            edges.push(edge);
           //          }
           //       }
           //     }
           //   }
           // }  
          }
          break;
        case "Relations":
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
            console.log ("1");
            loadedData.add([{
              from:from,
              to:to,
              arrows:'to',
              length: EDGE_LENGTH_MAIN,
              label:'contains',
              title:model.getElementById(from).getAttribute('name'),
              type:elements[j].getAttribute("xsi:type").replace("archimate:", "").replace("Relationship", ""),
              noe:"edge"
              }]);
            }
          break;
        default:
          txt+=folders[i].getAttribute('name')+"  ";
          //if folders checked, ear folder is loaded in the network 
          if (document.getElementById('folders').checked == true ){
            image="folder";
            nodeString='{'+'"id":"'+folders[i].getAttribute('id')+'",'+'"shape":"image"' +','
               +'"title":"'+folders[i].getAttribute('name')+'"'+","+'"shape":"image"' +','
               +'"label":"'+folders[i].getAttribute('name')+'"'+','
               +'"image":"'+dir_image+'archimate/'+image+'.'+imageExtension+'"'
               +'}';
             node=JSON.parse(nodeString);
             nodes.push(node);
             console.log ("4_");
          }
          //if folders checked, each folder is loaded in the dataset
          if (document.getElementById('folders').checked == true ){
            console.log ("4");
            loadedData.add([{
              id:folders[i].getAttribute('id'),
              shape:"image",
              title:folders[i].getAttribute('name'),
              label: folders[i].getAttribute('name'), 
              mass:10,
              image:dir_image+'archimate/'+image+'.'+imageExtension,
              type:"folder",
              noe:"node"
              }]);
          }
          nodeString=null;
          elements=folders[i].getElementsByTagName("element");
          txt+=elements.length+"<br/>";

          // capture of model elements in the folder
          for (j = 0; j < elements.length; j++){

            txt+= "element with name: "+ elements[j].getAttribute("name") + ", id:"+ 
            elements[j].getAttribute("id")+ " and type: "+elements[j].getAttribute("xsi:type") + "<br/>";

            //  Just element which are direct child of the folder are considered 
            //  in order to avoid duplication of the element in the dataset
            if (elements[j].parentElement.getAttribute('id')==folders[i].getAttribute("id")){
              image= elements[j].getAttribute('xsi:type').toLowerCase().replace("archimate:", "").replace("application", "application-").replace("business", "business-").replace("data", "data-").replace("technology", "technology-").replace("implementation", "implementation-").replace("distribution", "distribution-").replace("communication", "communication-").replace("courseofaction", "course-of-action").replace("systemsoftware", "system-software");
              nodeString='{'+'"id":"'+elements[j].getAttribute('id')+'",'+'"shape":"image"' +','
                +'"title":"'+elements[j].getAttribute('name')+elements[j].getAttribute('xsi:type').replace("archimate:",":")+'"'+","+'"shape":"image"' +','
                +'"label":"'+elements[j].getAttribute('name')+'"'+','
                +'"image":"./img/archimate/'+image+'.'+imageExtension+'"'
                +'}';
              node=JSON.parse(nodeString);
              nodes.push(node);
              console.log ("3_");
            }

             //  Just element which are direct child of the folder are considered 
             //  in order to avoid duplication of the element in the dataset
            if (elements[j].parentElement.getAttribute('id')==folders[i].getAttribute("id")){
              console.log ("3");
              loadedData.add([{
                id:elements[j].getAttribute('id'),
                shape:"image",
                title:elements[j].getAttribute('name')+elements[j].getAttribute('xsi:type').replace("archimate:",":"),
                label: elements[j].getAttribute('name'), 
                mass:10,
                image:dir_image+'archimate/'+image+'.'+imageExtension,
                type:"ModelElement",
                noe:"node"
                }]);
            }          
           
            nodeString=null;
          } 
        } 
      }
    container = document.getElementById('ArchiMateModel');
    data = {
        nodes: nodes,
        edges: edges
    };
    document.getElementById("ArchiMateModel").innerHTML = "";
    document.getElementById('configureDisplay').innerHTML="";

    ArchiMateModel = new vis.Network(container, data, options);

    ArchiMateModel.on("stabilizationProgress", function(params) {
      document.getElementById('loadingBar').style.display = 'block';
      document.getElementById('loadingBar').style.opacity = 1;
      document.getElementById('bar').style.width = '20px';
      document.getElementById('text').innerHTML = '0%';
      var maxWidth = 496;
      var minWidth = 20;
      var widthFactor = params.iterations/params.total;
      var width = Math.max(minWidth,maxWidth * widthFactor);

      document.getElementById('bar').style.width = width + 'px';
      document.getElementById('text').innerHTML = Math.round(widthFactor*100) + '%';
  });
  ArchiMateModel.on("stabilizationIterationsDone", function() {
      document.getElementById('text').innerHTML = '100%';
      document.getElementById('bar').style.width = '496px';
      document.getElementById('loadingBar').style.opacity = 0;
      // really clean the dom element
      setTimeout(function () {document.getElementById('loadingBar').style.display = 'none';}, 500);
  });
    ArchiMateModel.on("click", onClickModelNodes); 
    
    ArchiMateModel.on("oncontext", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>oncontext (right click) event:</h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("dragStart", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragStart event:</h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("dragging", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragging event:</h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("dragEnd", function (params) {
      params.event = "[original event]";
      document.getElementById('eventSpan').innerHTML = '<h2>dragEnd event:</h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("zoom", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>zoom event:</h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("showPopup", function (params) {
      document.getElementById('eventSpan').innerHTML = '<h2>showPopup event: </h2>' + JSON.stringify(params, null, 4);
      });
      ArchiMateModel.on("hidePopup", function () {
      console.log('hidePopup Event');
      });
      ArchiMateModel.on("select", function (params) {
      console.log('select Event:', params);
      });
      ArchiMateModel.on("selectNode", function (params) {
      console.log('selectNode Event:', params);
      });
      ArchiMateModel.on("selectEdge", function (params) {
      console.log('selectEdge Event:', params);
      });
      ArchiMateModel.on("deselectNode", function (params) {
      console.log('deselectNode Event:', params);
      });
      ArchiMateModel.on("deselectEdge", function (params) {
      console.log('deselectEdge Event:', params);
      });
      ArchiMateModel.on("hoverNode", function (params) {
      console.log('hoverNode Event:', params);
      });
      ArchiMateModel.on("hoverEdge", function (params) {
      console.log('hoverEdge Event:', params);
      });
      ArchiMateModel.on("blurNode", function (params) {
      console.log('blurNode Event:', params);
      });
      ArchiMateModel.on("blurEdge", function (params) {
      console.log('blurEdge Event:', params);
      });
      // clustering the views and the contained diagram objets
      if (clusterViews){
        for (i = 0; i < viewIds.length; i++) {
          var clusterOptionsByData = {
            processProperties: function(clusterOptions, childNodes) {
              clusterOptions.label = "[" + viewNames[i] + "]";
              return clusterOptions;
            },
            clusterNodeProperties: {borderWidth:3, shape:'image', font:{size:30}, image:dir_image+'view.'+imageExtension}
        };
          ArchiMateModel.clusterByConnection(viewIds[i], clusterOptionsByData);
          console.log("clustering view:"+viewIds[i]);
        }
      }
  
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

function setModel(modelType){

  if (modelType.style.backgroundColor=='white'){
    myModelType=modelType.name;
    document.getElementById("ERSelection-pane").style.display="none";
    document.getElementById("RSelection-pane").style.display="none";
    document.getElementById("ArchiMateModel").style.display="none";
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
  }  else{
    modelType.style.backgroundColor='white';
    document.getElementById("ERSelection-pane").style.display="none";
    document.getElementById("RSelection-pane").style.display="none";
    document.getElementById("ArchiMateModel").style.display="block";
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
      displayViewpoints=true;
      document.getElementById("ERSelection-pane").style.display="none";
      document.getElementById("RSelection-pane").style.display="none";
      document.getElementById("viewpoint").style.display="block";
      document.getElementById("views").style.display="none";
      //  document.getElementById("ER").style.backgroundColor='white';
      document.getElementById("R").style.backgroundColor='white';
      document.getElementById("displayViewsButton").style.backgroundColor='white';
      //document.getElementById("ArchiMateLanguage").style.display="none";
      document.getElementById("physicConfiguration").style.display="none";
      if (document.getElementById("SV").checked==false && document.getElementById("VS").checked==false){
          document.getElementById("SV").checked=true;
      }   
  } else {
      button.style.backgroundColor='white';
      document.getElementById("viewpoint").style.display="none";
      //displayViewpoints=false;  
    }
}

function displayViewPane(button){
  
  if (button.style.backgroundColor=='white'){
       button.style.backgroundColor='lightgray';
       document.getElementById("ERSelection-pane").style.display="none";
       document.getElementById("RSelection-pane").style.display="none";
       document.getElementById("viewpoint").style.display="none";
       document.getElementById("views").style.display="block";
       //  document.getElementById("ER").style.backgroundColor='white';
       document.getElementById("R").style.backgroundColor='white';
       document.getElementById("displayViewpointButton").style.backgroundColor='white';
       //document.getElementById("ArchiMateLanguage").style.display="none";
       document.getElementById("physicConfiguration").style.display="none";
       if (document.getElementById("SV").checked==false && document.getElementById("VS").checked==false){
           document.getElementById("SV").checked=true;
       }   
   } else {
       button.style.backgroundColor='white';
       document.getElementById("views").style.display="none";  
     }
 }
function clickModelElement(button)
{
    idRelation=button.id.replace ("b_", "");
    var c = document.getElementById(idRelation) ;
    c.checked = (c.checked) ? false : true ;
    button.style.backgroundColor='white';
    if (c.checked==true){button.style.backgroundColor='lightgray';}

}
function clickViewpoint(viewpointCheckbox){
    if (document.getElementById("VS").checked && viewpointCheckbox.checked){
        for (i=0; i<W4S[viewpointCheckbox.value].length; i++){
        var s=document.getElementById(Stakeholders[W4S[viewpointCheckbox.value][i]].toLowerCase().replace(" ", "_").replace(" ", "_")+'_stakeholder');
        s.checked=true;
        }
    }
}

function clickStakeholder(stakeholderCheckbox){
    if (document.getElementById("SV").checked && stakeholderCheckbox.checked){
        for (i=0; i<W4S.length; i++){
            if (W4S[i].indexOf(parseInt(stakeholderCheckbox.value))>-1){
                var s=document.getElementById(Viewpoints[i].replace (" and ", "_").toLowerCase().replace(" ", "_").replace(" ", "_")+'_viewpoint');
                 s.checked=true;
            }
        }
    }
}
function SV_VS(check){
  if (check.id=="SV"){document.getElementById("VS").checked=!document.getElementById("SV").checked;}
  if (check.id=="VS"){document.getElementById("SV").checked=!document.getElementById("VS").checked;}
  for (i=0; i<Viewpoints.length; i++){
      var s=document.getElementById(Viewpoints[i].replace (" and ", "_").toLowerCase().replace(" ", "_").replace(" ", "_")+'_viewpoint');
      //alert(Viewpoints[i].replace (" and ", "_").toLowerCase().replace(" ", "_").replace(" ", "_")+'_viewpoint');
      s.checked=false;

      }
  for (i=0; i<Stakeholders.length; i++){
      //alert (Stakeholders[i].toLowerCase().replace(" ", "_").replace(" ", "_")+'_stakeholder');
      var s=document.getElementById(Stakeholders[i].toLowerCase().replace(" ", "_").replace(" ", "_")+'_stakeholder');
      //alert(Stakeholders[i].toLowerCase().replace(" ", "_").replace(" ", "_")+'_stakeholder');
      s.checked=false;
  
  }
}

function DE_Cl(check){
  if (check.id=="displayViews"){
    displayViews= document.getElementById("displayViews").checked;
    if (displayViews==false){
      document.getElementById("clusterViews").checked=false;
      clusterViews=false;
    }
  }
  if (check.id=="clusterViews"){
    clusterViews=document.getElementById("clusterViews").checked;
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
function onClickModelNodes(params){
  params.event = "[original event]";
  document.getElementById('eventSpan').innerHTML = '<h2>Click event:</h2>' + JSON.stringify(params, null, 4);
  console.log('click event, getNodeAt returns: ' + this.getNodeAt(params.pointer.DOM));
}

function destroy() {
  if (ArchiMateModel !== null) {
      ArchiMateModel.destroy();
      ArchiMateModel = null;
  }
}