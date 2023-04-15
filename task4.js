

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.




function getCount(str) {
 
    let sum = 0
 for (const getcount of str) {
     if(getcount=='a' || getcount == 'e' || getcount == 'i' || getcount == 'o' || getcount == 'u') {
         sum+=1
          
}

}
console.log(sum);
}
  getCount('abracadabraeue')