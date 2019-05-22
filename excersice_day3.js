
var user = [
    { departmentId: 1, username: "Name 1", point: 8 },
    { departmentId: 2, username: "Name 2", point: 7 },
    { departmentId: 3, username: "Name 3", point: 10}
    ],
    departments = [
    { id: 1, code: "code1.com", name: "CODER", companyId: 11 },
    { id: 2, code: "code2.com", name: "Manager", companyId: 12},
    { id: 3, code: "code3.com", name: "ProjectManager", companyId: 13}
    ];
    companies = [
    { id: 11, code: "company1", name: "ABAB" },
    { id: 12, code: "company2", name: "CDCD" },
    { id: 13, code: "company3", name: "EFEF" }
    ];

// kiểu dữ liệu trả về GSON
var arrCompany = [
    { companyCode, companyName, departments :[
        { departmentCode, departmentName, users :[
            { username, point }
        ]}
    ]}
];
var formatSystemCompany = JSON.stringify(arrCompany);

//hàm trả dữ liệu về 1 file data GSON
function getSystemCompany ( ) {
   for (let i=0; i<companies.length; i++) {
        document.getElementById(companies[i]).innerHTML = arrCompany;
       for (let j=0; j<departments.length; j++) {
           document.getElementById(departments[j]).innerHTML = arrCompany;
           for (let k=0; k<user.length; k++) {
               document.getElementById(user[k]).innerHTML = arrCompany;
           }
       }
   }
}

//sắp xếp tăng dần theo point
function compare(){ 
    return [].slice.call(arguments).sort(function(a,b){ 
      return b - a; 
    }); 
  }
  compare(getSystemCompany);

//hàm hiển thị dữ liệu
function display (getSystemCompany) {
  array.forEach(function print(element) {
      console.log(element);
  });
}

//random codeId 
var min = 1;
var max = 9;
var number = 3;
var valueRange = max - min + 1;
function randomCompanyId(min, max) {
    return Math.floor(Math.random() * valueRange);
}

function randomDepartmentId(min, max) {
    return Math.floor(Math.floor()*valueRange);
}

// random dữ liệu cho các mảng
function initializeData(max, min) {
   for(let i=0; i< number; i++) {
    // object company    
        companies.id = randomCompanyId(min, max);
        companies.name = "nameRandom1";
        companies.code = "codeRandom1";
    // object department
        departments.id = randomDepartmentId(min, max);
        departments.companyId = companies.id;
        departments.name = "randomDepartment1";
        departments.code = "codeDepartment1";
    // object user
        user.departmentId = departments.id;
        user.name = "userRandom1";
        user.point = 5;
   }
}

