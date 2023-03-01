let content = document.querySelector('#content');

setInterval(()=>{
    let newContent = document.querySelector("#content")
    newContent.style.backgroundColor = content.style.backgroundColor === 'pink' ? 'red' : 'pink';
}, 2000);
