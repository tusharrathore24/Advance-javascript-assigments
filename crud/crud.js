let Item=[]
getitem = () => {
  let item = document.getElementById("crud").value;
  let hido=document.getElementById("hid").value;

  let data=JSON.parse(localStorage.getItem("Item"))
  let length=data!=null?data.length+1:1;

  if(hido!=""){
    let result=data.map((i)=>{
      if(i.id=hido){
        i.itemName=item
      }
      return i;
    });
    Item=result
  }
  else{
    let obj={
      id:length,
      itemName:item
    }
    Item.push(obj)
  }
  document.getElementById("crud").value=""
  localStorage.setItem("Item",JSON.stringify(Item))
  disp()
};

disp=()=>{
    let data=JSON.parse(localStorage.getItem("Item"))
    console.log(data);
    
    tr="";
    data.map((i)=>{
        tr+=`<tr><td>${i.itemName}</td>
        <td><button class="btn btn-danger" onclick="deledata(${i.id})">Delete</button></td>
        <td><button class="btn btn-danger" onclick="editdata(${i.id})">Edit</button></td></tr>`
    })
    console.log(tr);
    
    document.getElementById("itemTable").innerHTML=tr
}
disp()

deledata=(id)=>{
    let data=JSON.parse(localStorage.getItem("Item"))
    const result=data.filter((i)=>{
    return i.id!=id
  })
  let j = 1;
  a = result.map((i) => {
    i.id = j++;
    return i;
  });
  localStorage.setItem("Item", JSON.stringify(result));
  disp();
}

editdata=(id)=>{
  let data=JSON.parse(localStorage.getItem("Item"))
  let edit=data.find((i)=>{
    return i.id==id
  })
  document.getElementById("crud").value=edit.itemName;
  document.getElementById("hid").value=id
  disp()
}