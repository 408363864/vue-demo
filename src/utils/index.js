 export function debounce(func, wait, immediate) {
   let timeout, args, context, timestamp, result;

   const later = function() {
    // 据上一次触发时间间隔
     const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
     if (last < wait && last > 0) {
       timeout = setTimeout(later, wait - last);
     } else {
       timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
       if (!immediate) {
         result = func.apply(context, args);
         if (!timeout) context = args = null;
       }
     }
   };

   return function(...args) {
     context = this;
     timestamp = +new Date();
     const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
     if (!timeout) timeout = setTimeout(later, wait);
     if (callNow) {
       result = func.apply(context, args);
       context = args = null;
     }

     return result;
   };
 }


  export function deepClone(source) {
   if (!source && typeof source !== 'object') {
     throw new Error('error arguments', 'shallowClone');
   }
   const targetObj = source.constructor === Array ? [] : {};
   for (const keys in source) {
     if (source.hasOwnProperty(keys)) {
       if (source[keys] && typeof source[keys] === 'object') {
         targetObj[keys] = source[keys].constructor === Array ? [] : {};
         targetObj[keys] = deepClone(source[keys]);
       } else {
         targetObj[keys] = source[keys];
       }
     }
   }
   return targetObj;
 }


  export function toggleClass(element, className) {
   if (!element || !className) {
     return;
   }
   let classString = element.className;
   const nameIndex = classString.indexOf(className);
   if (nameIndex === -1) {
     classString += '' + className;
   } else {
     classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
   }
   element.className = classString;
 }

  export function param(json) {
   if (!json) return '';
   return cleanArray(Object.keys(json).map(key => {
     if (json[key] === undefined) return '';
     return encodeURIComponent(key) + '=' +
            encodeURIComponent(json[key]);
   })).join('&');
 }

  export function param2Obj(url) {
   const search = url.split('?')[1];
   if (!search) {
     return {}
   }
   return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
 }