

module.exports = function check(str, br) {

let g=0;
let po;

        


function dubl(stroka){
 
    if(stroka=='') return '';
    
    let str1='';
    let flag=0;

    for(let i=0;i<br.length;i++){
        if(stroka.indexOf(br[i][0]+br[i][1])!=-1) {
            flag=1; 
            po=stroka.indexOf(br[i][0]+br[i][1]);

            str1=stroka.slice(0,po) +stroka.slice(po+2) ;                                                
            break;     
        }

        
        

    }
    g++;
   
    
    if (flag==1) return dubl(str1);
    
    if (flag==0) return '*';

}

   
    if (dubl(str).length==0) {
        return true;
    } else {
        return false;
    }


}

