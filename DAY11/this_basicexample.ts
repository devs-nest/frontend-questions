// a basic example for 'this' pointer

function foo() {
    console.log(this.b);
}

const boo = {
    b: 34,
    fooboo: foo,
}

foo();
boo.fooboo();