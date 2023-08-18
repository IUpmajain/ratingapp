let form = document.querySelector('form')
let box = document.querySelector('.container')
let select = document.querySelector('select')
let textarea = document.querySelector('textarea')

const saverate = ((e)=>{
    e.preventDefault()
    let div = document.createElement('div')
    div.classList = 'fs-5 p-2 fw-semibold border rounded bg-s bg-dark w-75 bg-gradient'
    div.innerHTML=`<p class="text-info">Your given Rating is:&nbsp;${select.value}</p>
    <p class="text-info">Your Review is: &nbsp;${textarea.value}</p>`

    let delbtn = document.createElement('button')
    delbtn.className='btn btn-danger'
    delbtn.innerText="Delete"
    div.appendChild(delbtn)
    alert("your review is saved")
    box.appendChild(div)
    form.reset()
   
})

const deleterate = ((e)=>{
    if(e.target.className.includes('btn-danger')){
        let div = e.target.parentElement;
        box.removeChild(div)
        alert("your saved review will delete")
    }
})
box.addEventListener('click', deleterate)

form.addEventListener('submit', saverate)