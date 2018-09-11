true ^ branch ("WTUA:Enforcement/Complaint/Code Enforcement/NA:Code Subprocess");showDebug = false; showMessage = false;
wfTask == "NPU Supervisor Review" && wfStatus == "Assigned" ^ scheduleInspection("Initial Inspection",0, {Code Inspectors}, null, workDescGet(capId));closeTask("NPU Supervisor Review","Assigned");
wfTask == "NPU Supervisor Review" && wfStatus == "Closed" ^ deactivateTask("NPU Supervisor Review");activateTask("Close"); editTaskDueDate("Close",dateAdd(null,1));
wfTask == "NPU Supervisor Review" && wfStatus  == "Transfer to Court" ^ activateTask("Court");activateTask("Court Supervisor Review","BOCC COURT"); assignTask("Court Supervisor Review", {Code Inspectors}); editTaskDueDate("Court Supervisor Review",dateAdd(null,1)); deactivateTask("NPU Supervisor Review");
wfTask == "Ownership Research" && wfStatus == "Owner Found" ^ scheduleInspectDate("Initial Inspection", nextWorkDay(dateAdd(wfDateMMDDYYYY,0)), getLastScheduledInspector("Initial Inspection"), null,workDescGet(capId));
wfTask == "Research Analyst" && wfStatus == "Return to NPU Supervisor" ^ deactivateTask("Research Analyst");activateTask("NPU Supervisor Review"); assignTask("NPU Supervisor Review", {Code Inspectors}); editTaskDueDate("NPU Supervisor Review",dateAdd(null,1));
wfTask == "NPU Supervisor Review" && wfStatus == "Return to Clerical" ^ deactivateTask("NPU Supervisor Review");activateTask("Generate Notice - Citation Letter","BOCC CODE COMPLAINT"); assignTask("Generate Notice - Citation Letter", {Code Inspectors}); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));deactivateTask("Research Analyst");
wfTask == "Supervisor Review" && wfStatus == "In Progress" ^ updateTask("Supervisor Review","In Progress");
wfTask == "Supervisor Review" && wfStatus == "Scheduled" ^ scheduleInspectDate("Initial Inspection",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId));
wfTask == "Supervisor Review" && wfStatus == "Officer Error Return" ^ scheduleInspectDate("Follow Up Action",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId)); closeTask("Supervisor Review","Officer Error Return");activateTask("Initial Inspection");
wfTask == "Supervisor Review" && wfStatus == "Return to Clerical" ^ deactivateTask("Supervisor Review");activateTask("Generate Notice - Citation Letter","BOCC CODE COMPLAINT"); assignTask("Generate Notice - Citation Letter", {Code Inspectors}); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));deactivateTask("Research Analyst");
wfTask == "Supervisor Review" && wfStatus == "Refer to Compliance Resolution" ^ deactivateTask("Supervisor Review");activateTask("Compliance Resolution");activateTask("Compliance Review","BOCC COMPLIANCE RESOLUTION"); editTaskDueDate("Compliance Review",dateAdd(null,1));
//wfTask == "Supervisor Review" && wfStatus  == "Unresolvable" ^ deactivateTask("Supervisor Review");activateTask("Compliance Resolution");activateTask("Unresolvable","BOCC COMPLIANCE RESOLUTION"); editTaskDueDate("Unresolvable",dateAdd(null,1));
wfTask == "Supervisor Review" && wfStatus == "Schedule Citation Stop" ^ scheduleInspectDate("Citation Service Stop",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId)); closeTask("Supervisor Review","Schedule Citaiton Stop");activateTask("Initial Inspection");
wfTask == "Supervisor Review" && wfStatus == "Void" ^ deactivateTask("Supervisor Review");activateTask("Close");closeTask("Close","Void");
wfTask == "Supervisor Review" && wfStatus == "Close" ^ deactivateTask("Supervisor Review");activateTask("Close");closeTask("Close","Closed");
wfTask == "Initial Inspection" && wfStatus == "Return to Supervisor" ^ deactivateTask("Initial Inspection");activateTask("Supervisor Review"); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "No Violation Found" ^ deactivateTask("Initial Inspection");activateTask("Close");closeTask("Close","No Violation Found");
wfTask == "Initial Inspection" && wfStatus == "Transfer to Another Agency" ^ deactivateTask("Initial Inspection");activateTask("Close");closeTask("Close","Transferred to Another Agency");
wfTask == "Initial Inspection" && wfStatus == "Notice to Clerical" ^ deactivateTask("Initial Inspection");activateTask("Generate Notice - Citation Letter"); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "Notice Hand Delivered" && typeof(NOTICEDATES) =="object" ^ scheduleInspectDate("Reinspection", nextWorkDay(dateAdd(NOTICEDATES[(NOTICEDATES.length-1)]["Notice Finish Date"],+0)),getLastScheduledInspector("Initial Inspection"), null, workDescGet(capId));deactivateTask("Initial Inspection"); activateTask("Re-Inspection");
wfTask == "Initial Inspection" && wfStatus == "Citation-Schedule Service" ^ deactivateTask("Initial Inspection");activateTask("Supervisor Review");editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "Citation to Clerical" ^ deactivateTask("Initial Inspection");activateTask("Generate Notice - Citation Letter"); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "Citation Served" && typeof(CITATIONS) =="object" ^ scheduleInspectDate("Court Reinspection", nextWorkDay(dateAdd(CITATIONS[(CITATIONS.length-1)]["Court Date"],-2)), getLastInspector("Initial Inspection"), null, "My Comment"); deactivateTask("Initial Inspection","BOCC CODE COMPLAINT");activateTask("Court","BOCC COURT");activateTask("PreCourt ReInspection","BOCC COURT");activateTask("Court Appearance","BOCC COURT"); editTaskDueDate("Court Appearance",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "Refer to Staff Research" ^ deactivateTask("Initial Inspection");activateTask("Supervisor Review");editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Initial Inspection" && wfStatus == "Complied" ^ deactivateTask("Initial Inspection");activateTask("Close");closeTask("Close","Complied");
wfTask == "Staff Research" && wfStatus == "Return to Supervisor" ^ deactivateTask("Staff Research");activateTask("Supervisor Review"); assignTask("Supervisor Review", {Code Inspectors}); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Staff Research" && wfStatus == "Return to Officer" ^ deactivateTask("Staff Research");activateTask("Initial Inspection");scheduleInspectDate("Follow Up Action",nextWorkDay(dateAdd(wfDateMMDDYYYY,0)), {Code Inspectors}, null, workDescGet(capId)); assignTask("Initial Inspection", {Code Inspectors})
wfTask == "Staff Research" && wfStatus  == "Return to Compliance Review" ^ deactivateTask("Staff Research");activateTask("Compliance Resolution");activateTask("Compliance Review","BOCC COMPLIANCE RESOLUTION"); editTaskDueDate("Compliance Review",dateAdd(null,1));
wfTask == "Supervisor Review" && wfStatus == "Transfer to BOB-Zoning" ^ updateTask("Supervisor Review","Transfer to BOB-Zoning"); assignTask("Supervisor Review", {Code Inspectors}); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Return to Supervisor" ^ deactivateTask("Generate Notice - Citation Letter");activateTask("Supervisor Review"); assignTask("Supervisor Review", {Code Inspectors}); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Notice Mailed" && typeof(NOTICEDATES) =="object" ^ scheduleInspectDate("Reinspection", nextWorkDay(dateAdd(NOTICEDATES[(NOTICEDATES.length-1)]["Notice Finish Date"],+0)), {Code Inspectors}, null, workDescGet(capId));
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Citation Unserved" ^ deactivateTask("Generate Notice - Citation Letter");activateTask("Supervisor Review"); assignTask("Supervisor Review", {Code Inspectors}); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Citation Served by Sheriff" && typeof(CITATIONS) =="object" ^ scheduleInspectDate("Court Reinspection", nextWorkDay(dateAdd(CITATIONS[(CITATIONS.length-1)]["Court Date"],-3)), {Code Inspectors}, null, workDescGet(capId));deactivateTask("Generate Notice - Citation Letter","Citation Served by Sheriff");activateTask("Court");activateTask("PreCourt ReInspection","BOCC COURT");activateTask("Court Appearance","BOCC COURT"); editTaskDueDate("Court Appearance",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Complied" ^ deactivateTask("Re-Inspection"); activateTask("Close"); closeTask("Close","Complied");
wfTask == "Re-Inspection" && wfStatus == "Extension Request" ^ deactivateTask("Re-Inspection");activateTask("Extension Review"); if(matches({NPU},"H","L","M","P","Q","R","S","T","X","Y")) ^ assignTask("Extension Review","SHINES"); if(matches({NPU},"A","B","C","D","G","I","J","K")) ^ assignTask("Extension Review","EBROTHERS"); if(matches({NPU},"E","F","N","O","V","W","Z")) ^ assignTask("Extension Review","DTALLEY"); editTaskDueDate("Extension Review",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Refer to Staff Research" ^ deactivateTask("Re-Inspection");activateTask("Staff Research"); editTaskDueDate("Research Analyst",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Citation-Schedule Service" ^ deactivateTask("Re-Inspection");activateTask("Supervisor Review");editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Citation to Clerical" ^ deactivateTask("Re-Inspection");activateTask("Generate Notice - Citation Letter");editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Citation Served" && typeof(CITATIONS) =="object" ^ scheduleInspectDate("Court Reinspection", nextWorkDay(dateAdd(CITATIONS[(CITATIONS.length-1)]["Court Date"],-2)), getLastInspector("Reinspection"), null, workDescGet(capId)); deactivateTask("Re-Inspection","BOCC CODE COMPLAINT");activateTask("Court");activateTask("PreCourt ReInspection","BOCC COURT");activateTask("Court Appearance","BOCC COURT"); editTaskDueDate("Court Appearance",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Return to Supervisor" ^ deactivateTask("Re-Inspection");activateTask("Supervisor Review"); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Re-Inspection" && wfStatus == "Missed Inspection" ^ deactivateTask("Re-Inspection");activateTask("Supervisor Review"); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Extension Review" && wfStatus == "Extension Denied" ^ scheduleInspectDate("ReInsp Follow Up Action",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId)); closeTask("Extension Review","Extension Denied");activateTask("Re-Inspection");deactivateTask("PreCourt ReInspection","BOCC COURT");deactivateTask("Court");
wfTask == "Supervisor Review" && wfStatus == "Schedule ReInspection" ^ scheduleInspectDate("Reinspection",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId)); closeTask("Supervisor Review","Schedule ReInspection");activateTask("Re-Inspection");deactivateTask("Initial Inspection");
wfTask == "Initial Inspection" && wfStatus == "Missed Inspection" ^ deactivateTask("Initial Inspection");activateTask("Supervisor Review"); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Extension Review" && wfStatus == "Extension Approved"  && typeof(NOTICEDATES) =="object" ^ extDate = ""; if(!matches(NOTICEDATES[(NOTICEDATES.length-1)]["Ext Finish Date"],null,"",undefined)) extDate = NOTICEDATES[(NOTICEDATES.length-1)]["Ext Finish Date"]; else extDate = NOTICEDATES[(NOTICEDATES.length-1)]["Ext Finish Date"]; scheduleInspectDate("Reinspection", nextWorkDay(extDate), {Code Inspectors}, null, workDescGet(capId));deactivateTask("Extension Review");activateTask("Re-Inspection");
wfTask == "Supervisor Review" && wfStatus == "Refer to Staff Research" ^ deactivateTask("Supervisor Review");activateTask("Staff Research","BOCC CODE COMPLAINT"); assignTask("Staff Research", {Code Inspectors}); editTaskDueDate("Staff Research",dateAdd(null,1));deactivateTask("Research Analyst");
//wfTask == "Generate Notice - Citation Letter" && wfStatus == "Citation Unserved" ^ deactivateTask("Generate Notice - Citation Letter");activateTask("Staff Research"); assignTask("Staff Research", {Code Inspectors}); editTaskDueDate("Staff Research",dateAdd(null,1));
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Incomplete Data" ^ scheduleInspectDate("Follow Up Action",nextWorkDay(dateAdd(wfDateMMDDYYYY,-1)), {Code Inspectors}, null, workDescGet(capId)); closeTask("Generate Notice - Citation Letter","Incomplete Data");activateTask("Initial Inspection"); deactivateTask("Re-Inspection");
wfTask == "Staff Research" && wfStatus == "Extended Research" ^ assignTask("Staff Research", {Code Inspectors}); editTaskDueDate("Staff Research",dateAdd(null,3));
wfTask == "Staff Research" && wfStatus == "Return to Clerical" ^ deactivateTask("Staff Research");activateTask("Generate Notice - Citation Letter","BOCC CODE COMPLAINT"); assignTask("Generate Notice - Citation Letter", {Code Inspectors}); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));deactivateTask("Research Analyst");
wfTask == "Generate Notice - Citation Letter" && wfStatus == "Placard Letter Mailed" ^ deactivateTask("Generate Notice - Citation Letter");activateTask("Supervisor Review"); assignTask("Supervisor Review", {Code Inspectors}); editTaskDueDate("Supervisor Review",dateAdd(null,1));
wfTask == "Compliance Review" && wfStatus == "Return to Supervisor" ^ deactivateTask("Compliance Review"); deactivateTask("Compliance Resolution"); updateTask("Compliance Resolution","Return to Supervisor","",""); activateTask("Supervisor Review");
wfTask == "Inspection-Assessment" && wfStatus == "Denied" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); activateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION');activateTask("Compliance Resolution",'BOCC CODE COMPLAINT');
wfTask == "Inspection-Assessment" && wfStatus == "Complied by Owner-CC" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner-CC",'BOCC CODE COMPLAINT');
wfTask == "Inspection-Assessment" && wfStatus == "Complied by Owner-Demo" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner-Demo",'BOCC CODE COMPLAINT');
wfTask == "Title Search" && wfStatus == "Search Received-Return" ^ activateTask("Compliance Review"); deactivateTask("Title Search"); deactivateTask("In-Rem");
wfTask == "Supervisor Review" && wfStatus == "Return to Clerical-Notice" ^ deactivateTask("Supervisor Review");activateTask("Generate Notice - Citation Letter","BOCC CODE COMPLAINT"); assignTask("Generate Notice - Citation Letter", {Code Inspectors}); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));deactivateTask("Research Analyst");
wfTask == "Supervisor Review" && wfStatus == "Return to Clerical-Citation" ^ deactivateTask("Supervisor Review");activateTask("Generate Notice - Citation Letter","BOCC CODE COMPLAINT"); assignTask("Generate Notice - Citation Letter", {Code Inspectors}); editTaskDueDate("Generate Notice - Citation Letter",dateAdd(null,1));deactivateTask("Research Analyst");
wfTask == "Board Hearing" && wfStatus == "Complied By Owner- Rehab" ^ deactivateTask("Board Hearing",'BOC IN REM V11.2010'); activateTask("Lien Filing",'BOC IN REM V11.2010');
wfTask == "Board Hearing" && wfStatus == "Complied by Owner-CC" ^ deactivateTask("Board Hearing",'BOC IN REM V11.2010'); activateTask("Lien Filing",'BOC IN REM V11.2010');
wfTask == "Board Hearing" && wfStatus == "Complied by Owner-Demo" ^ deactivateTask("Board Hearing",'BOC IN REM V11.2010'); activateTask("Lien Filing",'BOC IN REM V11.2010');
wfTask == "Hearing Follow Up" && wfStatus == "9-Clean-Close" ^ deactivateTask("Hearing Follow Up",'BOC IN REM V11.2010'); activateTask("Clean-Close",'BOC IN REM V11.2010');
wfTask == "UDC Hearing" && wfStatus == "Denied - Reapply" ^ deactivateTask("UDC Hearing",'BOC IN REM V11.2010'); activateTask("UDC Processing",'BOC IN REM V11.2010');
wfTask == "Lien Filing" && wfStatus == "Lien Filing Received-CC" ^ deactivateTask("Lien Filing",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); activateTask("Close",'BOCC CODE COMPLAINT');
wfTask == "Lien Filing" && wfStatus == "Lien Filing Received-Demo" ^ deactivateTask("Lien Filing",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); activateTask("Close",'BOCC CODE COMPLAINT');
wfTask == "Lien Filing" && wfStatus == "Lien Filing Received-Rehab" ^ deactivateTask("Lien Filing",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); activateTask("Close",'BOCC CODE COMPLAINT');
wfTask == "Inspection-Assessment" && wfStatus == "Complied By Owner- Rehab" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner- Rehab",'BOCC CODE COMPLAINT');
wfTask == "Title Search" && wfStatus == "4-Title Received-Return" ^ deactivateTask("Title Search",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); activateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION');
wfTask == "UDC Processing" && wfStatus == "Section 106 Clearance Approved" ^ deactivateTask("UDC Processing",'BOC IN REM V11.2010'); activateTask("Asbestos Survey",'BOC IN REM V11.2010');
wfTask == "UDC Hearing" && wfStatus == "Approved" ^ deactivateTask("UDC Hearing",'BOC IN REM V11.2010'); activateTask("Asbestos Survey",'BOC IN REM V11.2010');
wfTask == "UDC Hearing" && wfStatus == "Denied - Reapply" ^ deactivateTask("UDC Hearing",'BOC IN REM V11.2010'); activateTask("UDC Processing",'BOC IN REM V11.2010');
wfTask == "Compliance Review" && wfStatus == "Rtn to Supvr - Incomplete File" ^ deactivateTask("Compliance Review"); deactivateTask("Compliance Resolution"); updateTask("Compliance Resolution","Rtn to Supvr - Incomplete File","",""); activateTask("Supervisor Review");
wfTask == "Compliance Review" && wfStatus == "Rtn to Supvr - New Ownership" ^ deactivateTask("Compliance Review"); deactivateTask("Compliance Resolution"); updateTask("Compliance Resolution","Rtn to Supvr - New Ownership","",""); activateTask("Supervisor Review");
wfTask == "Lien Filing" && wfStatus == "Lien Filing Request Submitted" ^ deactivateTask("Lien Filing",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); activateTask("Close",'BOCC CODE COMPLAINT');
wfTask == "Clean-Close" && wfStatus == "7-Notice to Proceed Issued" ^ deactivateTask("Clean-Close",'BOC IN REM V11.2010'); activateTask("Inspection Scheduling",'BOC IN REM V11.2010');
wfTask == "Compliance Review" && wfStatus == "Complied by Owner-CC" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner-CC",'BOCC CODE COMPLAINT');
wfTask == "Compliance Review" && wfStatus == "Complied by Owner-Rehab" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner-CC",'BOCC CODE COMPLAINT');
wfTask == "Compliance Review" && wfStatus == "Complied by Owner-Demo" ^ deactivateTask("Inspection-Assessment",'BOC IN REM V11.2010'); deactivateTask("In Rem",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Review",'BOCC COMPLIANCE RESOLUTION'); deactivateTask("Compliance Resolution",'BOCC CODE COMPLAINT'); updateTask("Close","Complied By Owner-CC",'BOCC CODE COMPLAINT');