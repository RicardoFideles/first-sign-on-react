export function inc () {
    return { type : 'INC' }
}

export function des () {
    return { type : 'DEC' }
}

export function stepChanged (e) {
    return { 
            type : 'STEP_CHANGED',
            payload : e.target.value
        }
}