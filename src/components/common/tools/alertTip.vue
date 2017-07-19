 <template>
    <div class="alet_container">
	    <section class="tip_text_container">
            <div class="tip_icon">
                <span></span>
                <span></span>
            </div>
            <p class="tip_text">{{alertText}}</p>
            <div class="confrim" @click="closeTip">确认</div>
        </section>
    </div>
</template>

<script>
    export default {
    	data(){
            return{
                positionY: 0,
                timer: null,
            }
        },
        mounted(){
      
        },
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>

<style scoped>
	@keyframes tipMove{
       0%   { transform: scale(1) }
       35%  { transform: scale(.8) }
       70%  { transform: scale(1.1) }
       100% { transform: scale(1) }
    }
    .alet_container{
    	position: fixed;
    	top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;
        background: rgba(0,0,0,0.5)
    }
    .tip_text_container{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -8rem;
        margin-left: -8rem;
        width: 16rem;
        animation: tipMove .4s ;
        background-color: rgba(255,255,255,1);
        border: 1px;
        padding-top: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border: 1px;
        border-radius: 0.25rem;
    }
    .tip_text_container .tip_icon{
        width: 3rem;
        height: 3rem;
        border: 0.15rem solid #f8cb86;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .tip_text_container .tip_icon span:first-child{
        width: 0.12rem;
        height: 1.5rem;
        background-color: #f8cb86;
    }
    .tip_text_container .tip_icon span:last-child{
        width: 0.2rem;
        height: 0.2rem;
        border: 1px;
        border-radius: 50%;
        margin-top: .2rem;
        background-color: #f8cb86;
    }

    .tip_text{
        font-size: 0.7rem;
        color: #333;
        line-height: .9rem;
        text-align: center;
        margin: .8rem 0;
        padding: 0 .4rem;
    }
    .confrim{
        font-size: 1.2rem;
        color: #fff;
        font-weight: bold;
        padding: 0.3rem 0;
        background-color: #4cd964;
        width: 100%;
        text-align: center;
        line-height: 1.8rem;
        border: 1px;
        border-bottom-left-radius: 0.25rem;
        border-bottom-right-radius: 0.25rem;
    }
    
</style>
