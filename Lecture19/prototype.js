var parent = {
  value : "parentValue",
  obj : {
    objValue : "parentObjValue"
  },
  walk : function(){
    console.log("Walking!");
  }
};

var child = Object.create(parent);
console.log("Child Value ", child.value);
console.log("Child Object Value ", child.obj.objValue);
console.log("Parent Value ", parent.value);
console.log("Parent Object Value ", parent.obj.objValue);
console.log("Parent : ", parent);
console.log("Child : ", child);

child.value = "childValue";
child.obj.objValue = "childObjValue";
console.log("Child Value ", child.value);
console.log("Child Object Value ", child.obj.objValue);
console.log("Parent Value ", parent.value);
console.log("Parent Object Value ", parent.obj.objValue);
console.log("Parent : ", parent);
console.log("Child : ", child);
