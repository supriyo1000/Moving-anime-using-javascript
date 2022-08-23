class TickerAnimation{
    constructor(selector){
        this.area = document.querySelector(selector+'.area');
        this.ticker = document.querySelector(selector+' .ticker');
        this.init();
    }

    init(){
        this.x = 0;
        this.y = 0;
        this.swidth = this.area.clientWidth;
        this.sheight = this.area.clientHeight;
        this.speed = parseInt(this.ticker.getAttribute('aria-speed'));
        this.direct = this.ticker.getAttribute('aria-direction');
        this.tickerWidth = this.ticker.clientWidth;
        this.tickerHeight = this.ticker.clientHeight;
        this.isRun = true;

        this.setarea();
    }

    setarea(){
        // Set Height in Area
        this.area.style.height = this.tickerHeight+'px';
        this.area.style.margin = '2px 0px';
        this.area.style.padding = '1px 0px';
        console.log(this.tickerHeight);
    }


    left(value){
        if(this.x > (-this.tickerWidth)){
            this.x = this.x - (this.speed || value || 1);
            this.ticker.style.left = this.x +'px';
        }else{
            this.x =this. swidth;
            this.ticker.style.left = this.x +'px';
        }
    }

    right(){
        if(this.x < this.swidth){
            this.x = this.x + (this.speed || this.value || 1);
            this.ticker.style.left = this.x +'px';
        }else{
            this.x = -this.tickerWidth;
            this.ticker.style.left = this.x +'px';
        }
    }

    mouse(){
        this.area.addEventListener('mouseover', ()=>{
            this.isRun = false;
            this.render();
        });
        this.area.addEventListener('mouseout', ()=>{
            // console.log('mouseout');
            this.isRun = true;
            this.render();
        });
    }

    render = () => {
        if(this.direct == 'right') this.right(); 
        else this.left();
    
        if(this.isRun){
            requestAnimationFrame(this.render);
        }
    };
}