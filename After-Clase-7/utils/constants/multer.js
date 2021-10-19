let multer = require("multer");
let path = require("path");

module.exports = (arr = false, folder = 'uploads', nameformdata = 'files') => {
    if(arr){
        return multer ({
            dest:  path.join(__dirname, `../../public/${type}/${folder}`)
        }).array(nameformdata);

    }else{
        return multer ({
            dest:  path.join(__dirname, `../../public/${type}/${folder}`)
        }).single(nameformdata);
    }
    return multer.array('file');

}