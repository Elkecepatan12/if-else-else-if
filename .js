
const total1 =90


if(total1>=200){
 diskon= total1*15/100
 total_akhir=total1-diskon
 console.log(total_akhir)
}
else if(total1>100 && total1<199){
  diskon= total1*10/100
  total_akhir=total1-diskon
  console.log(total_akhir)
}
else{
  console.log(total1)
}

