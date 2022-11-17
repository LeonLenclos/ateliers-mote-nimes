const { createApp } = Vue




createApp({
data() {
    return {
    index:index,
    indexOpen:false,
    infoOpen:false,
    message: 'Hello Vue!',
    i:0,
    j:0,
    }
},
methods:{
    select(i, j){
        this.indexOpen = false;
        this.$refs.iframe.focus();
        this.$refs.iframe.contentDocument.body.focus();

        this.i=i;
        this.j=j;
    },
    navigate(incr){
        this.indexOpen = false;
        this.$refs.iframe.focus();
        this.$refs.iframe.contentDocument.body.focus();
        this.j += incr;
        if(this.j >= this.index[this.i].games.length){
            this.j = 0;
            this.i = (this.i + 1) % this.index.length;
            
        }
        else if(this.j < 0){
            this.i = this.i - 1;
            if(this.i < 0) this.i = this.index.length-1;
            this.j = this.index[this.i].games.length-1;
        }
    },
    get(i, j){
        return this.index[i].games[j]
    },
    getCurrent(){
        return this.get(this.i, this.j)
    }
}
}).mount('#app')
