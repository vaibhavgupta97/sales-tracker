let ctx=document.getElementById('monthlySales').getContext('2d');
let piCtx=document.getElementById('deptSales').getContext('2d');
let yearlyLabel=document.getElementById('yearlyTotal');
let monthlySales=Array.of(12000000,7700230,9000000,12454540);
let monthlyLabels=Array.of('Jan-Mar','Apr-Jun','Jul-Sep','Oct-Dec');
let deptSales=Array.of(12,9,3);
let deptLabels=Array.of('Hiking','Running','Hunting');
function addYealyTotal(a,b,c,d){
    return a+b+c;
}
let yearlyTotal=addYealyTotal(...monthlySales);
yearlyLabel.innerHTML="&#x20B9;" +yearlyTotal;
var monthlySalesChart=new Chart(ctx,{
    type:'bar',
    data:{labels :
        monthlyLabels,
        datasets:[{
            label:'# of Sales',
            data:monthlySales,
            backgroundColor:["rgba(238,184,104,1)",
        "rgba(75,166,223,1)",
    "rgba(239,118,122,1)",
    "rgba(10,75,100,1)",],
    borderWidth:0,
}]
},
options:{
    scales:{
        yAxes:[{
            ticks:{
                beginAtZero:true,
            }
        }]
    }}
});
var deptSalesChart=new Chart(piCtx,{
    type:'pie',
    data:{labels :
        deptLabels,
        datasets:[{
            label:'# of Sales',
            data:deptSales,
            backgroundColor:["rgba(238,184,104,1)",
        "rgba(75,166,223,1)",
    "rgba(239,118,122,1)",],
    borderWidth:0,
}]
},
options:{
    }
});