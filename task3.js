let integer = "";
function wholenumber(arr) {
  let array = [];
  for (let i = 0; i <= arr; i++){
   if ((i % 2 == 0) && (i % 3 == 0) && (i % 5 == 0)){
    integer = "yu-gi-oh"
      console.log("yu-gi-oh")
    } else if ((i % 2 == 0) && (i % 3 == 0)){
      integer = "yu-gi"
      console.log("yu-gi")
    } else if ((i % 3 == 0) && (i % 5 == 0)){
      integer = "gi-oh"
      console.log("gi-oh")
    } else if ((i % 5 == 0) && (i % 2 == 0)){
      integer = "yu-oh"
      console.log("yu-oh")
    } else if (i % 2 == 0){
      integer = "yu"
      console.log("yu")
    } else if (i % 3 == 0){
      integer = "gi"
      console.log("gi")
    } else if (i % 5 == 0){
      integer = "oh"
      console.log("oh")
    } else {
      console.log(i)
    }
  }

}     console.log(wholenumber(100));