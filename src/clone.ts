// TODO: proper implementation of deep clone. This is crap.
// TODO: at least use decycle !
const clone = (obj: object): object => JSON.parse(JSON.stringify(obj))

export default clone