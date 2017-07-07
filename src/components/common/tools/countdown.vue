<template id="timerBtn">
    <button :disabled="disabled || time > 0">
        {{ text }}
    </button>
</template>

<script>
export default{
	name: 'login',
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
	data:function () {
	   	return {
	     	time: 0
	   	}
	},
  	methods: {
    	run: function () {
     		this.$emit('run');
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
      		return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
      	}
    } 
}
	
</script>