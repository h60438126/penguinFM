const getTemplateDate = time => {
    let date = new Date(time)
    let y = date.getFullYear()
    let M = date.getMonth()
    let d = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()

    // 给月日十分加零 1 -> 01  10 -> 10
    M = prefixIntrger(M)
    d = prefixIntrger(d)
    h = prefixIntrger(h)
    m = prefixIntrger(m)

    return `${y}-${M}-${d} ${h}:${m}`
}

const prefixIntrger = (n) => {
    n = n + ''
    // 1 -> 1        12 -> 2
    // 01 -> 2      012 -> 3
    // 0             1
    n = (0 + n).substr(n.length - 1)
    return n
}

export {getTemplateDate}
