//OLD AND DEPRECATED
//OLD AND DEPRECATED
//OLD AND DEPRECATED
//OLD AND DEPRECATED

TEST_MSG = "ABCDEF 123 G-H!?"
SAMPLE_MSG = "TURKEY TROTS TO WATER GG FROM CINCPAC ACTION COM THIRD FLEET INFO COMINCH CTF SEVENTY-SEVEN X WHERE IS RPT WHERE IS TASK FORCE THIRTY FOUR RR THE WORLD WONDERS"

m = 0.129
b = -5

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
    // console.log(idxArray)
    return idxArray

}

function indexToCode(inArr){
    codeArray = new Array(inArr.length)
    
    for (i in inArr){
        codeArray[i] = (inArr[i] - b) / m
    }
    //console.log(codeArray)

    return codeArray

}


function encode(input){
    console.log("wahoo")
    alert("wahoo")
    indexArr = strToIndex(input)
    return(indexToCode(indexArr))
}

function decode(code){
    plaintext = ""

    for (i in code){
        decodedIdx = (code[i] * m) + b
        //console.log(decodedIdx)
        plaintext += ALPHABET_CHARS[decodedIdx]
    }

    return plaintext
}


console.log(encode(TEST_MSG))
console.log(decode(encode(TEST_MSG)))
