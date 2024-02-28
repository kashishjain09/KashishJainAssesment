function fetchData(){
    return new Promise((resolve,reject)=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            if(response.ok)
                return response.json();
            else return new Error('check your code ')
        })
        .then(data=>{
            resolve(data)
            console.log(data)
        })
        .catch(error=>{
            reject(error)
        })
    })
}
async function getData() {
    try {
        let data = await fetchData();
        let tbody = document.getElementById('tbody'); 
        let newData = data.map(t => {
            return {
                userId:t.id,
                title:t.title 
            };
        });
        console.log(newData);
        newData.slice(0,5).forEach(title => {
            let row = tbody.insertRow();
            let userIdCell = row.insertCell();
            userIdCell.textContent = title.userId;
            let titleCell = row.insertCell();
            titleCell.textContent = title.title;
        });
    } catch (error) {
        throw new Error('Something went wrong')
    }
}
getData();

