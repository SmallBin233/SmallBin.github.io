function changeGrayFirst(){
    clearInterval(lp1);
    function loop(){
        if(b < 132){
            a = a - 1;
            b = b + 1;
            c = c - 1;
        }
        else if(a > 132){
            a = a - 1;
            c = c - 1;
        }
        else if(c > 132){
            c = c - 1;
        }
        else if(a == 132&&b == 132&&c == 132){
            clearInterval(lp1);
        }
        lifirst.style.background="linear-gradient(rgb("+ a +" ,"+ a +" ,"+ a +"),rgb("+ b +","+ c +","+ c +"))";
    }
    lp1=setInterval(loop, 4);
}
function changeGraySecond(){
    clearInterval(lp2);
    function loop(){
        if(e < 132){
            d = d - 1;
            e = e + 1;
            f = f - 1;
        }
        else if(d > 132){
            d = d - 1;
            f = f - 1;
        }
        else if(f > 132){
            f = f - 1;
        }
        else if(d == 132&&e == 132&&f == 132){
            clearInterval(lp2);
        }
        lisecond.style.background="linear-gradient(rgb("+ d +" ,"+ d +" ,"+ d +"),rgb("+ e +","+ f +","+ f +"))";
    }
    lp2 = setInterval(loop, 4);
}
function changeGrayThird(){
    clearInterval(lp3);
    function loop(){
        if(h < 132){
            g = g - 1;
            h = h + 1;
            i = i - 1;
        }
        else if(g > 132){
            g = g - 1;
            i = i - 1;
        }
        else if(i > 132){
            i = i - 1;
        }
        else if(g == 132&&h == 132&&i == 132){
            clearInterval(lp3);
        }
        lithird.style.background="linear-gradient(rgb("+ g +" ,"+ g +" ,"+ g +"),rgb("+ h +","+ i +","+ i +"))";
    }
    lp3=setInterval(loop, 4);
}
function changeGrayFourth(){
    clearInterval(lp4);
    function loop(){
        if(k < 132){
            j = j - 1;
            k = k + 1;
            l = l - 1;
        }
        else if(j > 132){
            j = j - 1;
            l = l - 1;
        }
        else if(l > 132){
            l = l - 1;
        }
        else if(j == 132&&k == 132&&l == 132){
            clearInterval(lp4);
        }
        lifourth.style.background = "linear-gradient(rgb("+ j +" ,"+ j +" ,"+ j +"),rgb("+ k +","+ l +","+ l +"))";
    }
    lp4=setInterval(loop, 4);
}
function changeGrayFifth(){
    clearInterval(lp5);
    function loop(){
        if(n < 132){
            m = m - 1;
            n = n + 1;
            o = o - 1;
        }
        else if(m > 132){
            m = m - 1;
            o = o - 1;
        }
        else if(o > 132){
            o = o - 1;
        }
        else if(m == 132&&n == 132&&o == 132){
            clearInterval(lp5);
        }
        lififth.style.background = "linear-gradient(rgb("+ m +" ,"+ m +" ,"+ m +"),rgb("+ n +","+ o +","+ o +"))";
    }
    lp5 = setInterval(loop, 4);
}
a = 182, b = 117, c = 204,
d = 182, e = 117, f = 204,
g = 182, h = 117, i = 204,
j = 182, k = 117, l = 204,
m = 182, n = 117, o = 204,
lp1 = null, lp2 = null, lp3 = null, lp4 = null, lp5 = null, lifirst = null, lisecond = null, lithird = null, lifourth = null, lififth = null;
lifirst = document.getElementById('li-first');
lisecond = document.getElementById('li-second');
lithird = document.getElementById('li-third');
lifourth = document.getElementById('li-fourth');
lififth = document.getElementById('li-fifth');
function changeReturnFirst() {
    clearInterval(lp1);
    function loop(){
        if(b > 117){
            a = a + 1;
            b = b - 1;
            c = c + 1;
        }
        else if(a < 182){
            a = a + 1;
            c = c + 1;
        }
        else if(c < 204){
            c = c + 1;
        }
        else if(a == 182&&b == 117&&c == 204){
            clearInterval(lp1);
        }
        lifirst.style.background = "linear-gradient(rgb("+ a +" ,"+ a +" ,"+ a +"),rgb("+ b +","+ c +","+ c +"))";
    }
    lp1 = setInterval(loop, 4);
}
function changeReturnSecond() {
    clearInterval(lp2);
    function loop(){
        if(e > 117){
            d = d + 1;
            e = e - 1;
            f = f + 1;
        }
        else if(d<182){
            d = d + 1;
            f = f + 1;
        }
        else if(f<204){
            f = f + 1;
        }
        else if(d == 182&&e == 117&&f == 204){
            clearInterval(lp2);
        }
        lisecond.style.background = "linear-gradient(rgb("+ d +" ,"+ d +" ,"+ d +"),rgb("+ e +","+ f +","+ f +"))";
    }
    lp2=setInterval(loop, 4);
}
function changeReturnThird() {
    clearInterval(lp3);
    function loop(){
        if(h > 117){
            g = g + 1;
            h = h - 1;
            i = i + 1;
        }
        else if(g < 182){
            g = g + 1;
            i = i + 1;
        }
        else if(i < 204){
            i = i + 1;
        }
        else if(g == 182&&h == 117&&i == 204){
            clearInterval(lp3);
        }
        lithird.style.background = "linear-gradient(rgb("+ g +" ,"+ g +" ,"+ g +"),rgb("+ h +","+ i +","+ i +"))";
    }
    lp3=setInterval(loop, 4);
}
function changeReturnFourth() {
    clearInterval(lp4);
    function loop(){
        if(k > 117){
            j = j + 1;
            k = k - 1;
            l = l + 1;
        }
        else if( j< 182){
            j = j + 1;
            l = l + 1;
        }
        else if(l < 204){
            l = l + 1;
        }
        else if(j == 182&&k == 117&&l == 204){
            clearInterval(lp4);
        }
        lifourth.style.background = "linear-gradient(rgb("+ j +" ,"+ j +" ,"+ j +"),rgb("+ k +","+ l +","+ l +"))";
    }
    lp4=setInterval(loop, 4);
}
function changeReturnFifth() {
    clearInterval(lp5);
    function loop(){
        if(n > 117){
            m = m + 1;
            n = n - 1;
            o = o + 1;
        }
        else if(m < 182){
            m = m + 1;
            o = o + 1;
        }
        else if(o < 204){
            o = o + 1;
        }
        else if(m == 182&&n == 117&&o == 204){
            clearInterval(lp5);
        }
        lififth.style.background = "linear-gradient(rgb("+ m +" ,"+ m +" ,"+ m +"),rgb("+ n +","+ o +","+ o +"))";
    }
    lp5=setInterval(loop, 4);
}
