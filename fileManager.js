const fs=require("fs");

const fileName="myfile.txt";
fs.writeFile(fileName,"Welcome to Node.js File Manager",(err)=>{
    if(err){
        console.log("Error creating file");
    }
    else{
        console.log("File Created Successfully");
        fs.readFile(fileName,"utf8",(err,data)=>{
            if(err){
                console.log("Error reading file");
            }
            else{
                console.log("File Content:",data);
                fs.appendFile(fileName,"\nFile Updated Successfully",(err)=>{
                    if(err){
                        console.log("Error updating file");
                    }
                    else{
                        console.log("File Updated");

                        fs.unlink(fileName,(err)=>{
                            if(err){
                                console.log("Error deleting file");
                            }
                            else{
                                console.log("File Deleted Successfully");
                            }
                        });
                    }
                });
            }
        });
    }
});
