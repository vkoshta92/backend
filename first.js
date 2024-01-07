Process.nextTick(()=>{
    console.log('M');
})

// sare asyc me sbse phle chlega.


// ye nexttick ke bd chlge pr agar 0 settimeout lga h to  un dono me koi bhi phle chl skta hai.
setImmediate(()=>{
    console.log('G');
})
