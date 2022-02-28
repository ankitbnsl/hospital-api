To use this project -
clone the project 
npm install
npm start
Now server will be runninh at port 3000
It it a hospital-api project which has total 6 routes ->
1) http://localhost:3000/doctors/register
     To check this , in postman pass username and password keys with their values in body(x-www-form-urlencoded) , it will create new doctor and  give u details in json format
2)http://localhost:3000/doctors/login  
   To check this , in postman pass username and password keys with their values in body(x-www-form-urlencoded) , it will login doctor nd pass jwt token
3) http://localhost:3000/patients/register
     To check this , in postman pass phone_number and name keys with their values in body(x-www-form-urlencoded) , it will login create new patient and give u details in json format
4)http://localhost:3000/patients/id of patient/create-report
   To check this , in postman copy the id of any patient and use in url , and in body(x-www-form-urlencoded) pass status key with its value, also before creating report dont forget to login doctor and copy the jwt token recievd after login doctor,
   paste that copied token in this request header with key - Authorization and value - Bearer and copied token
5)http://localhost:3000/patients/id of patient/all-reports
    To check this , in postman copy the id of any patient and use in url, it will return all the reports associated with this patient 
6)http://localhost:3000/reports/any status
    To check this , in postman , pass any status in url and it will return all the reports associated with this status
