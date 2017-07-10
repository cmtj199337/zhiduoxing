<template id="timerBtn">
    <button v-on:click="run" :disabled="disabled || time > 0">{{ text }}</button>
</template>

<script>
export default{
	name: 'timerBtn',
  	props: {
	    second: {
	      type: Number,
	      default: 60
	    },
	    disabled: {
	      type: Boolean,
	      default: false
	    }
  	},
	data () {
	   	return {
	     	time: 0
	   	}
	},
	methods: {
  	run: function () {
   		this.time = this.second
          this.timer()
  	},
    start: function(){
      this.time = this.second;
      this.timer();
    },
    stop: function(){
      this.time = 0;
      this.disabled = false;
    },
    setDisabled: function(val){
      this.disabled = val;
    },
    timer: function () {
      	if (this.time > 0) {
              this.time--;
              setTimeout(this.timer, 1000);
          }else{
            this.disabled = false;
          }
    }
	},
	computed: {
  	text: function () {
    		return this.time > 0 ? this.time + 's 后重新获取' : '获取验证码';
    	}
  } 
}
	
</script>