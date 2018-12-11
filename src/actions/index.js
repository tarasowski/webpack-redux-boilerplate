export const ADD = 'ADD'
export const SUBTRACT = 'SUBTRACT'
export const ADD_PLAYER = 'ADD_PLAYER'
export const REMOVE_PLAYER = 'REMOVE_PLAYER'


export const increment = () => ({
    type: 'ADD'
})

export const decrement = () => ({
    type: 'SUBTRACT'
})

export const addPlayer = () => ({
    type: 'ADD_PLAYER'
})

export const removePlayer = () => ({
    type: 'REMOVE_PLAYER'
})

