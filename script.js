/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log

    let mapEM=arr.filter((value)=>{
        return value.profession==='developer'
    });

    let map=mapEM.map((value)=>{
        return value.name;           
    });
    
    // let map=arr.map((value)=>{
    //     if(value.profession==='developer'){
    //         return value.name;
    //     }
    // })

    console.log(map);
   
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log

    arr.forEach((value)=>{
        if(value.profession=='developer'){
          console.log(value.name);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj={
        id:4,
        name:"susan"
        ,age:"20",
        profession:"intern"
    }
    arr.push(obj);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let result=arr.filter(Object => {
        return Object.profession!=='admin';
    })
    console.log(result);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1=[
        { id: 4, name: "Nick", age: "23", profession: "SDE"},
        { id: 5, name: "Vicky", age: "22", profession: "UI"},
        // { id: 6, name: "Lucky", age: "24", profession: "Graphic"},
        { id: 7, name: "Lucy", age: "21", profession: "Java Developer"}
    ]
    let combination=arr.concat(arr1);
    console.log(combination);
  }