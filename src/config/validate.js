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
      return value.length == 18 && /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)
    }
});
Validator.extend('isPassport', {
    messages: {
      zh_CN:field => '护照格式不正确',
    },
    validate: value => {
      return value.length == /^[a-zA-Z0-9]{5,17}$/.test(value)
    }
});
Validator.extend('isHKMacao', {
    messages: {
      zh_CN:field => '港澳通行证格式不正确',
    },
    validate: value => {
      return value.length == /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/.test(value)
    }
});
Validator.extend('isXsz', {
    messages: {
      zh_CN:field => '学生证格式不正确',
    },
    validate: value => {
      return value.length == /^[0-9]{10}$/.test(value)
    }
});
Validator.extend('jsJgz', {
    messages: {
      zh_CN:field => '军官证格式不正确',
    },
    validate: value => {
      return value.length == /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)
    }
});
Vue.use(VeeValidate,config);