true ^ showDebug = false; showMessage = false;
true ^ parentId = new Array(); parentId = getParents("Building/Multi Family/*/*");
wfTask == "Inclusionary Zoning Review" && wfStatus == "60% AMI Complied" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","60% AMI Complied"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "80% AMI Complied" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","80% AMI Complied"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "No Review Required" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","No Review Required"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "Invoice In-Lieu Fee" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","Invoice In-Lieu Fee"); capId = holdId;
(wfTask == "Inclusionary Zoning Review" || wfTask == "Compliance Sign Off") && wfStatus == "Revisions Required" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","Revisions Required"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "Denied" ^ holdId = capId; capId = parentId[0]; if(capId != null) closeTask("Inclusionary Zoning Review","Denied"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "In Review" ^ holdId = capId; capId = parentId[0]; if(capId != null) updateTask("Inclusionary Zoning Review","In Review"); capId = holdId;
wfTask == "Inclusionary Zoning Review" && wfStatus == "Pending" ^ holdId = capId; capId = parentId[0]; if(capId != null) updateTask("Inclusionary Zoning Review","Pending"); capId = holdId;