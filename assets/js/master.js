let bus = document.getElementsByClassName('bus')[0]
let pics = document.querySelectorAll('.bus>img')
let right = document.getElementById('right')
let left = document.getElementById('left')
let circle = document.getElementById('circle')
bus.style.width = ((pics.length) * 400) + 'px'
let turn = 0
pics.forEach((val) => {
    let _li = document.createElement('li')
    circle.appendChild(_li)
})
let _li = document.querySelectorAll('li')
_li.forEach((val, i) => {
    val.addEventListener('click', () => {
        _li.forEach((cal) => {
            cal.style.background = 'transparent'
        })
        val.style.background = 'black'
        turn = i
        bus.style.left = -(turn * 400) + 'px'
        console.log(turn, i);
        leftCheck()
        rightCheck()
    })
})
checkCircle()
right.addEventListener('click', () => {
    if (turn < (pics.length) - 1) {
        turn++
        bus.style.left = -(turn * 400) + 'px'
        checkCircle()
        if (turn == (pics.length) - 1) {
            right.style.right = '-10%'
        } else {
            right.style.right = '5%'
        }
    }
    leftCheck()

})
function leftCheck() {
    if (turn > 0) {
        left.style.left = '5%'
    } else {
        left.style.left = '-10%'
    }
}

left.addEventListener('click', () => {
    if (turn >= 1) {
        turn--
        bus.style.left = -(turn * 400) + 'px'
        checkCircle()
        if (turn == 0) {
            left.style.left = '-10%'
        } else {
            left.style.left = '5%'
        }
    }
    rightCheck()
})
function rightCheck() {
    if (turn < (pics.length) - 1) {
        right.style.right = '5%'
    } else {
        right.style.right = '-10%'
    }
}
function checkCircle() {
    _li.forEach((val, i) => {
        if (
            turn == i
        ) {
            val.style.background = 'black'
        } else {
            val.style.background = 'transparent'
        }

    })
}
