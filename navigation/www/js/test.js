var i=0;
var text="";
while(i<3)
{ 	
text+="<ion-content><ion-card><ion-card-content><img src=img/bjork-live.png><ion-item><ion-icon name='musical-notes' item-left style=color: #d03e84></ion-icon>albums<ion-badge item-right>9</ion-badge></ion-item></ion-card-content></ion-card></ion-content>";
i++;
}
document.getElementById("main").innerHTML = text;
