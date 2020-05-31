 let student = [
        { age : 'ariel', name:35, class:'angular'},
        { name : 'yakov', age:33, class:'angular 2'},
        { name : 'asher', age:44, class:'angular 2'},
        { name : 'shuli', age:55, class:'angular 3'},
        { name : 'avi', age:6, class:'angular 4'},
    ]

    //option A
    // let myTemplate = `<li>
    //     <label>name: </label><span>[name]</span><br>
    //     <label>age: </label><span>[age]</span><br>
    //     <label>class: </label><span>[class]</span><br>
    // </li>`

    function render(template, dataArr){
        let h=''
        let r = /\[(.*)\]/g;
        let propertiesInTemplate = template.match(r)

        for (let i = 0; i < propertiesInTemplate.length; i++) {
            let p = propertiesInTemplate[i];
            p = p.replace('[', '').replace(']', '')
            console.log(p);
            propertiesInTemplate[i] = p
        }

        dataArr.forEach(item => {
            let itemHtml = template
            propertiesInTemplate.forEach(p =>{
                let propValue = item[p]
                itemHtml = itemHtml.replace(`[${p}]`, propValue)
            })
            h += itemHtml
        });
        return h
    }

    //option B
    let myTemplate = document.getElementById('template_student').innerHTML
    
    let myList = document.getElementById('myList')
    myList.innerHTML = render(myTemplate, student)