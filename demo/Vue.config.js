module.exprots = {
    devServer : {
        proxy : {
            "/hd" : {
                "target" : "http://10.9.25.38:80",
                "changeOrigin" : true ,
                pathRewrite : {
                    "^/hd" : ""
                }
            }
        }
    }
}