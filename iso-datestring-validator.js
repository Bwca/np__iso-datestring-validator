module.exports=function(a,b="-"){const c=new RegExp(`^(?!0{4}${b}0{2}${b}0{2})((?=[0-9]{4}${b}(((0[^2])|1[0-2])|02(?=${b}(([0-1][0-9])|2[0-8])))${b}[0-9]{2})|(?=((([13579][26])|([2468][048])|(0[48]))0{2})|([0-9]{2}((((0|[2468])[48])|[2468][048])|([13579][26])))${b}02${b}29))(?:[0-9]{4})${b}(?!((0[469])|11)${b}31)((?:0[1,3-9]|1[0-2])|(?:02(?!${b}3)))${b}(?:[0-2][0-9]|3[0-1])$`);return c.test(a)};