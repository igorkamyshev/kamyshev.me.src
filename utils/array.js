export const filterUniq = arr => [...new Set(arr)]

export const flatten = arr => arr.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
)
