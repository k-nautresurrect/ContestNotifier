const URL = "https://kontests.net/api/v1/all/"
async function required(){
    const response = await fetch(URL)
    const users = await response.json()
    console.log(users[2].name)
    for (let i = 0; i<users.length;i++){
        if (users[i].in_24_hours = 'YES'){
            const name = users[i].name
            const url = users[i].url
            const element = document.createElement('div')
            const matter = document.createTextNode(name)
            var a = document.createElement('a')
            var link = document.createTextNode('LINK')
            a.appendChild(link)
            a.title = 'LINK'
            a.href = url
            
            element.appendChild(matter)
            
            const list1 = document.getElementById("div_id")
            list1.appendChild(element)
            list1.appendChild(a)
    }
    
        // const div_section = document.createElementbyID('div')
        // div_section.setAttribute('id','div_id')
        // div_section.innerHTML = '<h1>name</h1><br><button>url</button><br>'
    }

}

required()
