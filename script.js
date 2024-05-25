var arr=[
{"name":"Samyu", 
"age":25,"Skill":["JS","React","Python"]},
{"name":"Varadh", 
"age":29,"Skill":["CSS","React","HTML"]},
{"name":"Raj", 
"age":28,"Skill":["JS","HTML","DotNet"]},
{"name":"Sela", 
"age":23,"Skill":["HTML","React","Java"]}
];
console.log("For Loop");
console.log("-----------------------");
for(var i=0;i<arr.length;i++){
 console.log(arr[i].name, 
    arr[i].age,arr[i].Skill);
}
console.log("-----------------------");
console.log("For IN Loop");
console.log("-----------------------");
for(var a in arr){
    console.log(arr[a].name,arr[a].age);
    var s=[];
        for(var b in arr[a].Skill){
            s.push(arr[a].Skill[b]);
        }  
        console.log(`Skills : ${s.join(",")}`);
}
console.log("-----------------------");
console.log("For OF Loop");
console.log("-----------------------");
for(var obj of arr){
console.log(obj.name, obj.age, obj.Skill);
}
console.log("-----------------------");
console.log("ForEach Loop");
console.log("-----------------------");
arr.forEach((ele)=>console.log(ele.name, ele.age));
