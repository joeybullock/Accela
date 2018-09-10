true ^ showDebug = false; showMessage = true;
{Stormwater Mgmt Facilities Required} == "Yes" && (({Operations & Maintenance Plan Received} != "CHECKED") || ({Inspections & Maintenance Agreement Received} != "CHECKED")) ^ message="Op & Maint Plan and Insp & Maint Agreement must be received for required Stormwater Mgmt Facility"; showMessage = true; cancel = true;
{Dedicated Infrastructure} != "Yes" && {Dedicated Infrastructure} != "No" ^ message="Must enter Y or N for 'Dedicated Infrastructure'"; showMessage = true; cancel = true;
(({CoA Streambank Buffer Encroachment Required} == "CHECKED") && ({CoA Streambank Buffer Encroachment Received} != "CHECKED")) ^ message="Required CoA Streambank Buffer Encroachment must be Received"; showMessage = true; cancel = true;
(({Ga EPD Buffer Variance Required} == "CHECKED") && ({Ga EPD Buffer Variance Received} != "CHECKED")) ^ message="Required Ga EPD Buffer Variance must be Received"; showMessage = true; cancel = true;
(({Army Corps of Engineers Permit Required} == "CHECKED") && ({Army Corps of Engineers Permit Received} != "CHECKED")) ^ message="Required Army Corps of Engineers Permit must be Received"; showMessage = true; cancel = true;
({State Waters} != "Yes" && {State Waters} != "No")  ^ message="Must enter Y or N for 'State Waters' field"; showMessage = true; cancel = true;
({Flood Zone} != "Yes" && {Flood Zone} != "No") ^ message="Must enter Y or N in 'Flood Zone 1' field"; showMessage = true; cancel = true;
({Flood Zone2} != "Yes" && {Flood Zone2} != "No") ^ message="Must enter Y or N in 'Flood Zone 2' field"; showMessage = true; cancel = true;
({Wetlands} != "Yes" && {Wetlands} != "No") ^ message="Must enter Y or N in 'Wetlands' field"; showMessage = true; cancel = true;
({Stormwater Mgmt Facilities Required} != "Yes" && {Stormwater Mgmt Facilities Required} != "No") ^ message="Must enter Y or N for 'Stormwater Mgmt Facilities Required'"; showMessage = true; cancel = true;
({Total Acreage} == null || {Disturbed Acreage} == null) ^ message="Must enter a value for Total Acreage and Disturbed Acreage"; showMessage = true; cancel = true;
({Excavation Bond Req'd} != "Yes" && {Excavation Bond Req'd} != "No") ^ message="Must enter Y or N in 'Excavation Bond Req'd' field"; showMessage = true; cancel = true;
({Performance Bond Req'd} != "Yes" && {Performance Bond Req'd} != "No") ^ message="Must enter Y or N in 'Performance Bond Req'd' field"; showMessage = true; cancel = true;
(appMatch("Building/Residential/*/*")) && ({Site Inspection Residential} != "Yes" && {Site Inspection Residential} != "No") ^ message="Must enter Y or N in 'Site Inspection Residential' field"; showMessage = true; cancel = true;
(appMatch("Building/Commercial/*/*")) && ({Site Inspection Commercial} != "Yes" && {Site Inspection Commercial} != "No") ^ message="Must enter Y or N in 'Site Inspection Commercial' field"; showMessage = true; cancel = true;
(appMatch("Building/Multi Family/*/*")) && ({Site Inspection Multi Family} != "Yes" && {Site Inspection Multi Family} != "No") ^ message="Must enter Y or N in 'Site Inspection Multi Family' field"; showMessage = true; cancel = true;
(appMatch("Building/Residential/*/*")) && ({Sewer Connection Inspection Residential} != "Yes" && {Sewer Connection Inspection Residential} != "No") ^ message="Must enter Y or N in 'Sewer Connection Inspection Residential' field"; showMessage = true; cancel = true;
({NPDES} != "Yes" && {NPDES} != "No") ^ message="Must enter Y or N in 'NPDES' field"; showMessage = true; cancel = true;