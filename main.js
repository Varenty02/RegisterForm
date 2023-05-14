
const getEle=(id)=>{
    return document.getElementById(id);
}
const getValueById=(id)=>{
    return getEle(id).value;
}
function isValidDate(day, month, year) {
    // Tạo đối tượng ngày với tham số truyền vào
    const today=new Date()
    const date = new Date(year, month , day);
    const daysInMonth = new Date(year, month, 0).getDate();
    return (day <= daysInMonth)&&(date.getTime() <today.getTime());
  }
const submit=(e)=>{
    e.preventDefault()
    //Lấy name,userName,password,email
    let name=getValueById("name");
    let userName=getValueById("userName");
    let password=getValueById("password");
    let passwordConfirm=getValueById("passwordConfirm")
    let email=getValueById("email");
    //Lấy gender
    let radios=document.getElementsByName("gender");
    let gender="";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
          gender = radios[i].value;
          break;
        }
    }
    //Lấy favorite
    let favorite=""
    let checkboxes = document.getElementsByName("favorite");
    for (let i = 0; i < checkboxes.length; i++) {
       if(checkboxes[i].checked){
        favorite+=" "+checkboxes[i].value;
       }
    }
    //Lấy dOB
    let day=getValueById("day");
    let month=getValueById("month");
    let year=getValueById("year");
    //lấy address
    let address=""
    address=getValueById("address");

    //validate
    let validation=new Validation();
    let err=``
    if(validation.KiemTraRong(name)){
        err+=`
        Tên không được để trống`
    }else if(!validation.KiemTraHoTen(name)){
        err+=`
        Tên chưa hợp lệ`
    }
    if(validation.KiemTraRong(userName)){
        err+=`
        Username không được để trống`
    }else if(!validation.KiemTraUserName(userName)){
        err+=`
        Username chưa hợp lệ`
    }
    if(validation.KiemTraRong(password)){
        err+=`
        Mật khẩu không được để trống`
    }
    if(validation.KiemTraRong(passwordConfirm)){
        err+=`
        Mật khẩu chưa nhập lại`
    }else if(passwordConfirm!=password){
        err+=`
        Mật khẩu không trùng nhau`
    }
    if(validation.KiemTraRong(email)){
        err+=`
        Email không được để trống`
    }else if(!validation.KiemTraEmail(email)){
        err+=`
        Email chưa hợp lệ`
    }
    if(validation.KiemTraRong(gender)){
        err+=`
        Bạn chưa chọn giới tính`
    }
    if(validation.KiemTraRong(favorite)){
        err+=`
        Bạn chưa chọn sở thích`
    }
    if(!isValidDate(day,month,year)){
        err+=`
        Ngày này không tồn tại`
    }
    if(validation.KiemTraRong(address)){
        err+=`
        Địa chỉ không được để trống`
    }
    if(err!=""){
        alert(err)
    }
}
let submitButton=getEle("submit")
submitButton.addEventListener("click",submit)