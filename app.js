$(document).ready(function(){

    let warna1 = 0, warna2 = 0, warna3 = 0, warna4 = 0;
    let ket1, ket2, ket3, ket4;

    $(".download").on('click', function () {
        html2canvas(document.getElementById("color")).then(function (canvas) {                   
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
            anchorTag.download = "color pallete.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.click();

            // ------- tambahan --------
            // source : https://codepedia.info/convert-html-to-image-in-jquery-div-or-table-to-jpg-png
            // kalau ingin menampilkan preview
            // document.getElementById("previewImg").appendChild(canvas);
            // -------------------------
            
        });
    });

    // convert rgba to hex
    function rgb2hex(rgb){
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
         ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
         ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
    }

    $('.generate').click(function (e) { 
        e.preventDefault();
        for(i=1;i <= 4;i++){
            warna1 = Math.round(Math.random() * 255)
            warna2 = Math.round(Math.random() * 255)
            warna3 = Math.round(Math.random() * 255)
            warna4 = Math.round(Math.random() * 255)

            if(i === 1){
                $('.color-1').css('backgroundColor',`rgba(${warna1},${warna2},${warna3},${warna4})`);

                ket1 = rgb2hex($('.color-1').css('backgroundColor'));
                $('.kode-warna-1').html(ket1);
            }
            else if (i === 2){
                $('.color-2').css('backgroundColor',`rgba(${warna1},${warna2},${warna3},${warna4})`);

                ket2 = rgb2hex($('.color-2').css('backgroundColor'));
                $('.kode-warna-2').html(ket2);
            }
            else if (i === 3){
                $('.color-3').css('backgroundColor',`rgba(${warna1},${warna2},${warna3},${warna4})`);

                ket3 = rgb2hex($('.color-3').css('backgroundColor'));
                $('.kode-warna-3').html(ket3);
            }
            else if (i === 4){
                $('.color-4').css('backgroundColor',`rgba(${warna1},${warna2},${warna3},${warna4})`);

                ket4 = rgb2hex($('.color-4').css('backgroundColor'));
                $('.kode-warna-4').html(ket4);
            }
        }
        
    });
})
