/**
 * returns a random integer value between `min` and `max`
 */
export const randomInt = (min: number = 0, max: number = 10): number => Math.floor(Math.random() * (max - min + 1)) + min