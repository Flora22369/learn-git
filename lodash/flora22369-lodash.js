var flora22369={
    chunk:function(array, size = 1){
        let rest = []
        let temp = []
        for(let i=0 ; i<array.length ; i++){
            temp.push(array[i])
            if(temp.length===size){
                rest.push(temp)
                temp = []
            }
        }
        if(temp[0]){
            rest.push(temp)
        }
        return rest
    },

    compact: function(array){
        let result = []
        for(let i=0 ; i<array.length ; i++){
            if(array){
                result.push(array)
            }
        }
        return array
    }
         
}