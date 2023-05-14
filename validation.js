function Validation()
{
    this.KiemTraRong = function (value)
    {
        if(value.trim() === "")
        {
            return true;
        }
        return false;
    }
    this.KiemTraEmail = function (value) {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(value.toLowerCase());
    }
    this.KiemTraHoTen = function (value)
    {
        let re = /^([a-zA-Z]+)\s+([a-zA-Z]+)$/;
        return re.test(value)
    }
    this.KiemTraUserName=function (value)
    {
        let re=/^[a-zA-Z0-9]+$/;
        return re.test(value)
    }
    this.KiemTraPassword=function(value){
        if(value.length>=6){
            return true
        }
        return false
    }
}