function Bumps(){
    this.CheckCarStatus = function(road){
        let bumpCounter = 0;
       for(let i = 0; i < road.length; i ++)
       {
           if(road[i] == "n"){
                bumpCounter++;
           }
           if(bumpCounter > 15)
           {
               return "Car Dead";
           }
       }
       return "WhooHoo!";
    }
}