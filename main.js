 const $=document.querySelector.bind(document);
 const $$=document.querySelectorAll.bind(document);
 const cd=$(".header-info-img");
 const header=$(".header-name_song");
 const img=$(".header-info-img");
 const audio=$("audio");
 const play=$(".btn-play_stop");
 const back=$(".btn-back");
 const next=$(".btn-next");
 const loop=$(".btn-loop");
 const random=$(".btn-random");
 const runtime=$(".header-seek input");
 const checksong=$(".main-list-music");
 const cdwith=cd.offsetWidth;
 const cdheigth=cd.offsetHeight;
//  const currentindex=1; vẫn được
 const app={
     currentindex:0,
     isrun:false,
     isloop:false,
     israndom:false,
     songs:[
        {
            name:"Yêu Là Cưới",
            singer:"Phát Hồ",
            img:"./asset/img/yeulacuoi.jfif",
            link:"./asset/music/YeuLaCuoi-PhatHo.mp3"
         },
         {
             name:"Thê Lương",
             singer:"Phúc Chinh",
             img:"./asset/img/theluong.jpg",
             link:"./asset/music/Tải Bài Hát Thê Lương MP3 - Download Miễn Phí.mp3"
         },
         {
            name:"Sài Gòn Đau Lòng Quá",
            singer:"Hứa kim Tuyền,Hoàng Duyên",
            img:"./asset/img/saigondaulongqua.jpg",
            link:"./asset/music/SaiGonDauLongQua.mp3"
        },
        {
            name:"Khuê Mộc Lang",
            singer:"Hương Ly, Jombie",
            img:"./asset/img/khue_moc_lan.jpg",
            link:"./asset/music/Khuê mộc lan.mp3"
        },
        {
            name:"ALOHA",
            singer:"Jo Jung Suk" ,
            img:"./asset/img/alo-ha.jpg",
            link:"./asset/music/Aloha-Cool_ck5v.mp3" 
        },
         {
            name:"Thương Nhau Tới Bến",
            singer:"Nal",
            img:"./asset/img/thương nhau tới bến.jpg",
            link:"./asset/music/ThuongNhauToiBen-Nal.mp3"
         },
         {
            name:"Khách Mời(嘉宾)",
            singer:"Lộ Phi Văn(Lu Fei Wen)",
            img:"./asset/img/khachmoi.jpg",
            link:"./asset/music/KhachMoi-LoPhiVanLuFeiWen.mp3"
         },
         {
            name:"Bao Giờ Anh Quên",
            singer:"Anh Quân Idol",
            img:"./asset/img/baogioanhquen.jpg",
            link:"./asset/music/BaoGioAnhQuen.mp3"
         },
         {
            name:"Thời Không Sai Lệch / 错位时空",
            singer:"Ngải Thần",
            img:"https://avatar-nct.nixcdn.com/song/2021/01/17/4/1/0/a/1610872364691.jpg",
            link:"https://tainhac123.com/listen/thoi-khong-sai-lech-ngai-than.dKz91dfQFOkc.html"
         },
         {
            name:"Yêu Em Nguyện Không Hối Tiếc / 我爱你不问归期",
            singer:"Bạch Tiểu Bạch",
            img:"https://i.ytimg.com/vi/kyImqFaE0HY/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/yeu-em-nguyen-khong-hoi-tiec-bach-tieu-bach.KHHR7BrJuKG7.html"
         },
         {
            name:"Đạp Sơn Hà",
            singer:"Thập Thất Thúc Ni",
            img:"https://i.ytimg.com/vi/13OFPSuVA4w/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/dap-son-ha-thap-that-thuc-ni.DJh2ekrxhUtD.html"
         },
         {
            name:"Chờ Đợi Có Đáng Sợ",
            singer:"Andiez",
            img:"https://i.ytimg.com/vi/WE05tPmCj8k/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/cho-doi-co-dang-so-andiez.PSm0SS4EC1FZ.html"
         },
         {
            name:"Hàng Ngàn Hàng Vạn / 千千万万",
            singer:"Thâm Hải Ngư Tử Tương",
            img:"https://i.ytimg.com/vi/IiJ9g2U_Wvg/maxresdefault.jpg",
            link:"https://tainhac123.com/listen/hang-ngan-hang-van-tham-hai-ngu-tu-tuong.UPgem9ifUzvP.html"
         },
         {
            name:"Thế Giới Lớn Như Vậy Vẫn Gặp Được Anh",
            singer:"Trình Hưởng",
            img:"https://scontent.xx.fbcdn.net/v/t1.15752-9/p206x206/241652851_440693887255445_3392071263527594856_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=aee45a&_nc_ohc=I91g-7OoKtUAX9U9ZLm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=ada7c1c51b5328531f8ce57776bd8707&oe=6169ACF6",
            link:"https://tainhacmienphi.biz/get/song/api/131841"
         },
         {
            name:"Bỏ Em Vào Balo",
            singer:"Út Nhị",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEfKM3EyyD1WETgi1Is9Tj1eL4Dh5jRgJGCQ&usqp=CAU",
            link:"./asset/music/BoEmVaoBaLoCover-UtNhi.mp3"
         },
         {
            name:"Chúng Ta Sau Này",
            singer:" T.R.I",
            img:"https://leecoffee.net/wp-content/uploads/2021/02/Chung-Ta-Sau-Nay-T.R.jpg",
            link:"https://tainhac123.com/listen/chung-ta-sau-nay-tri.61Wkf72FX7be.html"
         },
     ],
     Render(){
         const htmls=this.songs.map((song,index) =>{
                return`
            <div class="list-music__item" data-index="${index}">
                <img src="${song.img}" alt="" class="item-img">
                <div class="list-music__item-info">
                    <div class="music-name">${song.name}</div>
                    <div class="music-singer">${song.singer}</div>
                </div>
                <div class="option">
                    <i class="ti-more-alt"></i>
                </div>
            </div>
            `
         });
         $(".main-list-music").innerHTML= htmls.join('');
     },
     defindproperties(){
         Object.defineProperty(this,'currentsong',{
             get: function(){
                 return this.songs[this.currentindex];
             }
         })
     },
     handlevent(){
        const _this=this;
        const cdmade= cd.animate([
            {
                transform:'rotate(360deg)'
            }
        ],{
            duration:20000,
            iterations:Infinity,
        })
        cdmade.pause();
        document.onscroll=function(){
            const scroll=window.scrollY || document.documentElement.scrollTop;
            const newwith=cdwith -scroll;
            const newheigth=cdheigth-scroll;
            cd.style.width=newwith>0?newwith +"px":0;
            cd.style.height=newheigth>0?newheigth +"px":0;
            cd.style.opacity=newwith/cdwith;
        }
        play.onclick=function(){
            if(audio.paused==true){
                audio.play();
                $(".ti-control-play").className="ti-control-pause";
                _this.isrun=true;
            }
            else{
                audio.pause();
                $(".ti-control-pause").className="ti-control-play";
                _this.isrun=false;
            }
        }
        back.onclick=function(){
            if(_this.israndom==false){
                if(_this.currentindex<=0){
                    _this.currentindex=_this.songs.length - 1;
                    // _this.loadcurrentsong();
                }
                else{
                    _this.currentindex--;
                    // _this.loadcurrentsong();
                }
            }
            else{
                _this.randommusic();
            }
            _this.loadcurrentsong();
           if(_this.isrun==true){
               audio.play();
           }
        }
        next.onclick=function(){
            if(_this.israndom==false){
                if(_this.currentindex >= _this.songs.length - 1){
                    _this.currentindex=0;
                    // _this.loadcurrentsong();
                }
                else{
                    _this.currentindex++;
                    // _this.loadcurrentsong();
                }
            }
            else{
                _this.randommusic();
            }
            _this.loadcurrentsong();
            if(_this.isrun==true){
                audio.play();
            }
        }
        audio.onplay=function(){
            cdmade.play();
        }
        audio.onpause=function(){
            cdmade.pause();
        }
        audio.onended=function(){
            if(_this.isloop==false){
                if(_this.currentindex>=0 && _this.currentindex<_this.songs.length-1){
                    _this.currentindex++;
                }
                else{
                    _this.currentindex=0;
                }
            }
            if(_this.israndom==true&&_this.isloop==false){
                _this.randommusic();
            }
                _this.loadcurrentsong();
                audio.play();
        }
        audio.ontimeupdate=function(){
            if(audio.duration){
                const timeproces=Math.floor(audio.currentTime/audio.duration *100);
                runtime.value=timeproces;
            }
        }
        runtime.onchange=function(e){
            const seektime=audio.duration/100 *e.target.value;
            audio.currentTime=seektime;
        }
        loop.onclick=function(){
            _this.isloop=!_this.isloop;
            loop.classList.toggle("active",_this.isloop);
        }
        random.onclick=function(){
            _this.israndom=!_this.israndom;
            random.classList.toggle("active",_this.israndom);
        }
        checksong.onclick=function(e){
            const song=e.target.closest(".list-music__item:not(.activesong)");
            if(song && !e.target.closest(".option")){
                if(song){
                    _this.currentindex=song.dataset.index;
                    _this.loadcurrentsong();
                    audio.play();
                    if(_this.isrun==false){
                        $(".ti-control-play").className="ti-control-pause";
                        _this.isrun=true;
                    }
                }
            }
        }
     },
    randommusic(){
        let newindex;
        do{
            newindex=Math.floor(Math.random()*(this.songs.length-1));
        }
        while(this.currentindex===newindex);
        this.currentindex=newindex;
    },
    loadcurrentsong(){
        header.textContent=this.currentsong.name.toUpperCase();
        img.src=this.currentsong.img;
        audio.src=this.currentsong.link;
        const active= $$(".list-music__item");
        active.forEach(element => {
            element.classList.remove("activesong");
        });
        active[this.currentindex].classList.add("activesong");
        setTimeout(() => {
            active[this.currentindex].scrollIntoView({
                behavior: "smooth", 
                block: "nearest", 
            });  
        }, 300);
    },
     start(){
         this.defindproperties();
         this.Render();
        //  this.loadcurrentsong();
         this.handlevent();
         this.loadcurrentsong();
     }
}
app.start();