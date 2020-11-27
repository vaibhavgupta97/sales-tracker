let ctx=document.getElementById('monthlySales').getContext('2d');
let piCtx=document.getElementById('deptSales').getContext('2d');
let monthlySales=Array.of(12,9,3);
let monthlyLabels=Array.of('Oct','Nov','Dec');
var monthlySalesChart=new Chart(ctx,{
    type:'bar',
    data:{labels :
        monthlyLabels,
        datasets:[{
            label:'# of Sales',
            data:monthlySales,
            backgroundColor:["rgba(238,184,104,1)",
        "rgba(75,166,223,1)",
    "rgba(239,118,122,1)",],
    borderWidth:0,
}]
},
options:{
    scales:{
        yAxis:[{
            ticks:{
                beginAtZero:false,
            }
        }]
    }}
});
var deptSalesChart=new Chart(piCtx,{
    type:'pie',
    data:{labels :
        ['Hiking','Running','Hunting'],
        datasets:[{
            label:'# of Sales',
            data:[12,19,3],
            backgroundColor:["rgba(238,184,104,1)",
        "rgba(75,166,223,1)",
    "rgba(239,118,122,1)",],
    borderWidth:0,
}]
},
options:{
    }
});