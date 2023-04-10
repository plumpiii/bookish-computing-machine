var a=Array();
a[0]="yaakov";
a[1]="john";
a[2]="jen";
a[3]="paul";
a[4]="paula";
a[5]="laura";
a[6]="Jim";
a[7]="Jason";
a[8]="frank";
a[9]="larry";


for( var i=0; i<a.length; i++){
    if(a[i].charAt(0)==='J'||  a[i].charAt(0)==='j'){
        console.log("GOODBYE "+a[i])
    }
    else{
        console.log("hello "+a[i])
    }
}