#include <stdio.h>

int main(){
    int a,b,c,x;
    printf("Enter the four kalas:");
    scanf("%d %d %d %d",&a,&b,&c,&x);
    if (x==a || x==b || x==c){
        printf("YES");
    }
    else{
        printf("NO");
    }
    
}