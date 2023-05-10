
async function Printresult() {
    try {
      const result = await promise;
      console.log(result); // to print "success"
    } catch (error) {
      console.log(error); //to print "error"
    }
  }



const promise = new Promise((resolve, reject) => {
    //Some asynchronous work can be done here
    //...

    const success = true; //If success is false, an error message shows up and if true, "success" shows up

    if (success==true) {
      resolve("success");
    } else {
      reject("error");
    }
  });
  

  
  
  Printresult();
  