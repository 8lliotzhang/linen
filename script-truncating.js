//the world's least secure encryption system since the caesar cipher
//by 8lliotz


TEST_MSG = "ABCDEF 123 G-H!?"
SAMPLE_MSG = "TURKEY TROTS TO WATER GG FROM CINCPAC ACTION COM THIRD FLEET INFO COMINCH CTF SEVENTY-SEVEN X WHERE IS RPT WHERE IS TASK FORCE THIRTY FOUR RR THE WORLD WONDERS"
FLOAT_ACC = 3


M = 0.129
B = -5


const ALPHABET_CHARS = new Array(...'�ABCDEFGHIJKLMNOPQRSTUVXWYZ1234567890- ')

function strToIndex(string){ 
    upString = string.toUpperCase()
    var plaintextArray = new Array(...upString)
    var idxArray = new Array (plaintextArray.length)
    
    //temp check that alphabetchars is a real thing
    //for(i in ALPHABET_CHARS){
    //    console.log(i + ": "+  ALPHABET_CHARS[i])
    //}
    //console.log("--END ALPHABET INIT--")
    //init empty arr of same length of plaintextarray 
    
    for(i in plaintextArray){
       try{
            numberedValue = ALPHABET_CHARS.findIndex(char => plaintextArray[i].includes(char))

            if (numberedValue == -1){ //sets to -1 when char not there so we just correct it to be the missing char (28)
                numberedValue = 0
            }

            //console.log(i + " - plaintext is arr value: " + numberedValue)
       }
        catch(e)
        {
            numberedValue = 0 //temp correct the value.
            console.log("at char "+ i + ", something mysterious and unexpected happened: " + e)
        }

        idxArray[i] = numberedValue
        //map the position of the char 
    }
    return idxArray
}

function indexToCode(inArr, m, b){
    codeArray = new Array(inArr.length)
    
    for (i in inArr){
        codeArray[i] = (inArr[i] - b) / m
        if (codeArray[i] != Math.floor(codeArray[i])){ // if round down not the same, then its prob like some float
            codeArray[i] = codeArray[i].toFixed(FLOAT_ACC) // then round to float acc.
        }

        //HERE DO TRUNCATING TO 3 FIGURES
    }
    //console.log(codeArray)

    //alert(codeArray)
    return codeArray

}


function encode(input, m, b){
    
    indexArr = strToIndex(input)
    
    document.getElementById("output_str").innerHTML = indexToCode(indexArr,m,b)
    document.getElementById("output").style.visibility = 'visible'
    return(indexToCode(indexArr, m, b))

}

function decode(code, m, b){
    codeArray = code.split(",")
    //alert("decoding")
    plaintext = ""
    decodedArr = new Array(codeArray.length)
    for (i in codeArray){
        decodedArr[i] = Math.round((codeArray[i] * m) + parseFloat(b)) 
        //PLEASE PLEASE PLEASE DONT BREAK DOWN ON ME
        
        thingToAdd = ALPHABET_CHARS[decodedArr[i]]
        if (thingToAdd == null){
            thingToAdd = "�"
        }
    
        plaintext += thingToAdd
    }

    console.log(decodedArr)
    console.log(plaintext)

    document.getElementById("output_str").innerHTML = plaintext
    document.getElementById("output").style.visibility = 'visible'

    return plaintext
}


//console.log(encode(SAMPLE_MSG, m=M, b=B))
//console.log(decode(encode(SAMPLE_MSG, m=M, b=B), m=M, b=B))
