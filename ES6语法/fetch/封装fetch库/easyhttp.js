/**
 * 封装fetch
 * 更快，更简单的请求数据
 */

class EasyHttp {
    //get
    get(url) {  //请求数据
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    //post
    post(url, data) { //传输数据
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    //put
    put(url, data) { //更新数据
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }
    //delete
    delete(url) {  //请求数据
        return new Promise((resolve, reject) => {
            fetch(url,{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
                .then(res => res.json())
                .then(data => resolve("数据删除成功"))
                .catch(err => reject(err))
        })
    }


}