const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    const CopyOfcats = [...cats];
    CopyOfcats.push(name);
    return CopyOfcats;
}

function prependCat(name) {
    const CopyOfcats = [...cats];
    CopyOfcats.unshift(name);
    return CopyOfcats;
}

function removeLastCat() {
    const CopyOfcats = [...cats];
    CopyOfcats.pop();
    return CopyOfcats;
}

function removeFirstCat() {
    const CopyOfcats = [...cats];
    CopyOfcats.shift();
    return CopyOfcats;
}