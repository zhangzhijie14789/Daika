/**
 * Created by zzj on 2016/5/19.
 */
function change_pic(){
    var imgObj = document.getElementById("caocao_pic");
    var Flag=(imgObj.getAttribute("src",2)=="img/116.png")
    imgObj.src=Flag?"img/119.png":"img/116.png";
    var sum_1=document.getElementById('SUM');
    sum_1.value=sum_1.value=='1'?'2':'1';
}
var i=0;
function aObject() {
    i=1;
}
function  Alert() {
    var a=confirm("确定要提交吗");
    if(a==true)
    {
        if(i==0)
        {
            document.getElementById('Object').action="33333.html?save=1";}
        else
        {
            document.getElementById('Object').action="33333.html?submit=1";}
        return true;
    }
    else {
        return false;
    }

}