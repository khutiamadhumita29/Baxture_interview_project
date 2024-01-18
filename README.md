# Baxture_interview_project
Node.js Backend Developer Take-Home Assignment: Text File Analysis System

//API List 

1. http://localhost:3000/fileupload  : POST 

This  API is used for File upload . in query params we need to pass as formData with key "file".

2. http://localhost:3000/fileAnalysis?action=countUniqueWords : POST

this API is used to do file analysis and return taskId. we need to paas action as queryparams with different parameter. 
we need to pass id in body params as key id, wordName 
parameters are below 
countUniqueWords
countWords
findTopKWords


3. http://localhost:3000/fileAnalysis?taskId=65a95d99ea8cb434b5c7fb80 :  GET
this API is used to get stored data from database .



