import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate';
import messages from '../assets/zh_CN.js';
Validator.updateDictionary({
    zh_CN: {
        messages
    }
});
const config = {
    errorBagName: 'errors',
    delay: 0,
    locale: 'zh_CN',
    messages: null,
    strict: true
};


Validator.extend('mobile', {
    messages: {
      zh_CN:field => '请输入正确手机号',
    },
    validate: value => {
      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
Validator.extend('regIdCard', {
    messages: {
      zh_CN:field => '输入正确的身份证号',
    },
    validate: value => {
      return value.length == /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(value)
    }
});



Vue.use(VeeValidate,config);