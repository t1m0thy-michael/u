/**
 * returns a random number value between `min` and `max`
 */
export const randomNumber = (min: number = 0, max: number = 10): number => Math.random() * (max - min) + min