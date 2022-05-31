import { TYPE_LOG } from './constType.js'

function myLog(log, type = TYPE_LOG) {
    console[type](log);
}
export default myLog