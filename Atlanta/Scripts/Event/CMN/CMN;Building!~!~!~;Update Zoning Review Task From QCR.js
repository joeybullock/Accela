true ^ showDebug = false; showMessage = false;
true ^ parentId = new Array(); parentId = getParents("Building/QCR/*/*"); holdId = capId; capId = parentId[0];
//capId && taskStatus("Close") ^ var zoningTaskComments = getTaskStatus("Zoning Inspection", "N", "N", "Y"); capId = holdId; updateTask("Zoning Review","Approved","Approved from QCR Review:" + "\n" + zoningTaskComments,""); deactivateTask("Plan Coordination");
//capId && taskStatus("Close") ^ copyTaskResultsToAnotherTask(capId,"Zoning Inspection",holdId,"Zoning Review");