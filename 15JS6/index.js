// C1 cơ bản thường viết dễ hiểu
// import module1 from './module'
// export default module1;


// -------


// C2 viêt tắt
export { default }
from './module.js'

// /Có thể đặt lại tên cho module (thấy không cần lắm)
export { default as newNameModule }
from './module.js'