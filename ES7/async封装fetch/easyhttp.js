/**
 * 封装fetch
 * 更快，更简单的请求数据
 */

class EasyHttp {
    //get
    async get(url) { //请求数据
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //post
    async post(url, data) { //传输数据
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;

    }
    //put
    async put(url, data) { //更新数据
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json();
        return resData;
    }
    //delete
    async delete(url) { //删除数据
        const response = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        const resData = await "数据删除成功"
        return resData;
    }
}