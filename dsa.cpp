#include <iostream>
using namespace std;



int main(){
    int a[5] = {1,3,5,7,9};
    int b[5] = {3,1,5,7,9};
    int c[10];
    int o = 0;

    for (int i = 0; i < 5; i++){
        for (int j = 0; j <5; j++){
            if(a[i] == b[j]){
                c[o] = a[i];
                o++;
                break;
            }
        }

    }
    

    for (int i = 0; i < 5; i++){
        if(c[i]){

        cout << c[i] << " ";
        }
    }
    
}