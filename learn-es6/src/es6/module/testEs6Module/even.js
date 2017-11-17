/**
 * Created by hehui on 2016/11/19.
 */
import { odd } from './odd'
export var counter = 0;
export function even(n) {
    counter++;
    return n == 0 || odd(n - 1);
}