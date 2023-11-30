

function titleCase(string){

    const splitted = string.toLowerCase().split(' ');
    console.log((splitted));

    for (let i = 0; i < splitted.length; i++) {
        splitted[i] =  splitted[i][0].toUpperCase() + splitted[i].slice(1);
        console.log(splitted[i]);
    }

    return splitted.join(' ');
}
titleCase('the sun is shining');

module.exports = titleCase;
