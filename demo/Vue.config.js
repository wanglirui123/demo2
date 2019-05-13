console.log("pz");
module.exports = {
    devServer : {
        proxy : {
            "/api":{
                "target" : "http://10.9.25.38:80",
                "changeOrigin" : true ,
                "pathRewrite":{
                    "^/api":""
                }
            }
        }
    }
}