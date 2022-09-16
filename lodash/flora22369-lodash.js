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
            if(array[i]){
                result.push(array[i])
            }
        }
        return result
    },

    fill: function(array , value , start=0, end=array.length){
        for(let i =start ; i<end ; i++){
            array[i] = value
        }
        return array
    },

    drop: function(array, n=1){
        var a = []
        for(i=n ; i<array.length ;i++){
            a.push(array[i])
        }
        return a
    },
    flatten: function(array){
        return array.reduce((result,it) => {
            return result.concat(it)
        },[])
    },
    

         
}