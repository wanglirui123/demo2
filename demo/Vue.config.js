module.exprots = {
    devServer : {
        proxy : {
            "/hd" : {
                "target" : "http://127.0.0.1:80",
                "changeOrigin" : true ,
                pathRewrite : {
                    "^/hd" : ""
                }
            }
        }
    }
}