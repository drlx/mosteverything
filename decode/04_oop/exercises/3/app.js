function populate(DOMElement, e) {
    DOMElement.innerHTML = '';
    DOMElement.appendChild(e.render());
}

// IGNORE EVERYTHING ABOVE THIS LINE

class h1 {
    constructor(text) {
        this.text = text;
    }
    render() {
        var ret = document.createElement("h1");
        ret.innerText = this.text;
        return ret;
    }
}

class h2 {
    constructor(text) {
        this.text = text;
    }
    render() {
        var ret = document.createElement("h2");
        ret.innerText = this.text;
        return ret;
    }
}

class h3 {
    constructor(text) {
        this.text = text;
    }
    render() {
        var ret = document.createElement("h3");
        ret.innerText = this.text;
        return ret;
    }
}


class div {
    constructor(children) {
        this.children = children;
    }
    render() {
        var ret = document.createElement("div");
        for (var i = 0; i < this.children.length; i++) {
            ret.appendChild(this.children[i].render());
        }
        return ret;
    }
}

var header1 = new h1("I love javascript");
var header2 = new h2("so much");
var header3 = new h3("not kidding");


populate(document.getElementById('root'),
    new div(  [header1,header2,header3]  ))  


