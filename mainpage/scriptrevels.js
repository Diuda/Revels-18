var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; };
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Easel = function() {
    function Easel() {
        _classCallCheck(this, Easel);

        var activated = false;

        if (!!window.CanvasRenderingContext2D) {
            //cast existence to boolean

            this.activated = true;
            this.setGlobalVariables();
            this.acquireViewportSize();
            this.background = '#000';
            this.started = false;
            D.body.appendChild(C); {
                var _d = document.createElement('style');
                _d.type = 'text/css';
                _d.rel = 'stylesheet';
                _d.innerHTML = '\n        body{\n          background-color: ' + this.background + ';\n          margin:0;\n        }\n        canvas{\n          position:fixed;\n          left:0;top:0;right:0;bottom:0;\n        }';
                D.querySelector('head').appendChild(_d);
                this.setCanvasSize();
            }
            activated = true;
        } //end if
        return activated;
    }

    _createClass(Easel, [{
        key: 'setGlobalVariables',
        value: function setGlobalVariables() {
            var _this = this;
            window.W = window;
            window.D = document;
            window.M = Math;
            window.C = document.createElement('canvas');
            window.ctx = C.getContext('2d');
            window.R = function(f, g, e) {
                f = !g ? 0 * (g = f) : f > g ? g + (d = f) - g : f;
                e = e || 0;
                g = M.random() * (g - f) + f;
                return e ? g | 0 : g;
            };
            window.V = this.acquireViewportSize();
            window.onresize = function() {
                V = _this.acquireViewportSize();
                _this.setCanvasSize();
                _this.config();
                _this.redraw();
            };
        }
    }, {
        key: 'redraw',
        value: function redraw() {

            if (!this.started) {
                this.config();
                this.started = true;
            } //end if
            this.beforeDraw();
            this.onDraw();
        }
    }, {
        key: 'config',
        value: function config() {
            return true;
        }
    }, {
        key: 'beforeDraw',
        value: function beforeDraw() {

            ctx.fillStyle = this.background;
            ctx.fillRect(0, 0, V.w, V.h);
        }
    }, {
        key: 'onDraw',
        value: function onDraw() {
            return true;
        }
    }, {
        key: 'setCanvasSize',
        value: function setCanvasSize() {
            C.width = V.w;
            C.height = V.h;
        }
    }, {
        key: 'acquireContext',
        value: function acquireContext() {
            return W.ctx = C.getContext('2d');
        }
    }, {
        key: 'acquireViewportSize',
        value: function acquireViewportSize() {
            var d = W,
                b = 'inner';

            if (!d.innerWidth) {
                b = 'client';
                d = D.documentElement || D.body;
            } //end if
            return {
                w: d[b + 'Width'],
                h: d[b + 'Height']
            };
        }
    }]);

    return Easel;
}();

var Particle = function() {
    function Particle() {

        _classCallCheck(this, Particle);

        this.x = R(0, V.w, 1);
        this.y = R(0, V.h, 1);
        this.z = R(0, 3, 1);
        this.currentColor = this.generateColor();
        this.targetColor = this.generateColor();
        this.size = R(1, 3, 1);
    }

    _createClass(Particle, [{
        key: 'move',
        value: function move() {
            if (this.x > 0 && R(0, 2, 1) > 0) {
                this.x--;
            } else if (this.x < V.w) {
                this.x++;
            } //end if
            if (this.y > 0 && R(0, 2, 1) > 0) {
                this.y--;
            } else if (this.y < V.h) {
                this.y++;
            } //end if
            ctx.fillStyle = this.getColor(false);
            ctx.fillRect(this.x, this.y, this.size, this.size);
        }
    }, {
        key: 'getColor',
        value: function getColor(change) {

            var r = void 0,
                g = void 0,
                b = void 0,
                tc = this.targetColor,
                cc = this.currentColor; //brevity

            if (change) {
                r = tc.r !== cc.r ? this.targetColor.r = tc.r > cc.r ? tc.r - 1 : tc.r + 1 : false;
                g = tc.g !== cc.g ? this.targetColor.g = tc.g > cc.g ? tc.g - 1 : tc.g + 1 : false;
                r = tc.b !== cc.b ? this.targetColor.b = tc.b > cc.b ? tc.b - 1 : tc.b + 1 : false;
                if (!(r & g & b)) this.targetColor = this.generateColor();
            } //end if
            return 'rgba(' + tc.r + ',' + tc.g + ',' + tc.b + ',' + tc.a + ')';
        }
    }, {
        key: 'generateColor',
        value: function generateColor() {
            return {
                r: R(230, 100, 1),
                g: R(220, 100, 1),
                b: R(250, 100, 1),
                a: 1
            };
        }
    }]);

    return Particle;
}();

var easel = new Easel(),
    particle = new Particle(),
    initialized = false;

if (easel) {
    easel.config = function() {
        return easel.background = '#003';
    };
    main();
} //end if

function main() {
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.fillRect(0, 0, V.w, V.h);
    for (var i = 0; i < 5000; i++) {
        particle.move();
    }
    if (R(0, 100, 1) < 5) particle.getColor(true); //graduate color
    requestAnimationFrame(main);
} //end main()
//# sourceURL=pen.js
var revels = document.createElement('img');
revels.setAttribute("src", "Revels.svg");
revels.setAttribute("width", "100%");
revels.setAttribute("height", "60%");
revels.setAttribute("id", "revels-logo");
revels.setAttribute("class", "revlog animated bounceIn")
revels.setAttribute("style", "opacity:1;position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);z-index:10;");
document.body.appendChild(revels);

// var eventdiv= document.createElement('div');
// eventdiv.setAttribute("class", "svg-wrapper");
// eventdiv.setAttribute("style", "position:absolute;");
// document.body.appendChild(eventdiv);
// var dabba = document.createElement('svg');
// dabba.setAttribute("height", "60");
// dabba.setAttribute("width","320");
// dabba.setAttribute("xmlns", "http://www.w3.org/2000/svg");
// eventdiv.appendChild(dabba);
// var recta= document.createElement('rect');
// recta.setAttribute("class", "shape");
// recta.setAttribute("height", "60");
// recta.setAttribute("width","320");
// dabba.appendChild(recta);
// var tex=document.createElement('div');
// tex.setAttribute("class", "text");
// tex.setAttribute("style", "color:white;");
// eventdiv.appendChild(tex);
// var link=document.createElement('a');
// link.setAttribute("href","load.html");
// link.innerHTML="Events";
// tex.appendChild(link);


list = document.getElementsByClassName("svgwrap");
console.log(list);

for(var i = 0; i < list.length; i++)
{   
    // console.log("a")
    list[i].addEventListener("mouseover", function(e){
        // console.log("asd");
    this.classList.remove("drawBackwards");
    this.classList.add("drawForwards");
    });

    list[i].addEventListener("mouseout", function(e){
        // console.log("asda");
    this.classList.remove("drawForwards");
    this.classList.add("drawBackwards");
    });
}

if(screen.width < 450)
{
    var contain_width = document.getElementById("sampletext").clientWidth;
    links = document.getElementsByClassName("links");
    for(var i = 0; i < links.length; i++)
    {
        var link_width = links[i].clientWidth;
        links[i].setAttribute("style", "transform: translateX(" + ((contain_width-link_width)/2) + "px)");
    }
    console.log(contain_width, link_width);
}