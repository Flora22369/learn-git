var flora22369={
    chunk: function(array, size = 1){
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

    flattenDeep: function(array){
        return array.reduce((result,it) => {
            if(Array.isArray(it)){
                return result.concat(it)
            }
            return result.concat(it)
        },[])
    },

    flattenDepth: function(array , depth = 1){
        if(depth == 0){
            return array
        }
        var result = []
        for(var i = 1; i <=array.length; i++){
            if(Array.isArray(array) && depth >= 1){
                result = result.concat(flattenDepth(array[i],depth - 1))
            }else{
                result.push(array[i])
            }
        }
        return result
    },

   pairs: function() {

   }

    

         
}