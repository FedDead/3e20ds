var nt;
for(i=0;i<=5;i++){
    nt=1;
    if(i==5){
        for(j=0;j<=i;j++){
            console.log(nt+" ");
            nt=nt*(i-j)/(j+1);
        }
    }
}
