wfTask == "Payment" && wfStatus == "Paid" ^ deactivateTask("Payment"); closeTask("Closure","Payment Completed");
wfTask == "Payment" && wfStatus == "Notice Sent" ^ editAppSpecific("Notice Sent Date",dateAdd(null,0));
wfTask == "Payment" && wfStatus == "Waived" ^ removeFee("FIFAFEE","FINAL"); removeFee("PRINAMT","FINAL"); removeFee("PENALTY","FINAL"); removeFee("INT","FINAL");deactivateTask("Payment"); closeTask("Closure","Waived");
wfTask == "Payment" && wfStatus == "Released" ^ removeFee("FIFAFEE","FINAL"); removeFee("PRINAMT","FINAL"); removeFee("PENALTY","FINAL"); removeFee("INT","FINAL"); deactivateTask("Payment"); closeTask("Closure","Released");
wfTask == "Payment" && wfStatus == "In Rem" ^ removeFee("FIFAFEE","FINAL"); removeFee("PRINAMT","FINAL"); removeFee("PENALTY","FINAL"); removeFee("INT","FINAL"); deactivateTask("Payment"); closeTask("Closure","In Rem");
wfTask == "Payment" && wfStatus == "Paid From Feeder System" ^ deactivateTask("Payment"); closeTask("Closure","Payment Completed");