{
    let cont = document.getElementById('CONT');
    cont.innerHTML = '';

    let mallDecoder = String.fromCharCode;

    let mall = 'mall';
    let mallCode = mall.charCodeAt(2) - 3;

    mall += 'to:';

    let updatedMall = mall.substring(0, 2);
    updatedMall += mallDecoder(mallCode);
    updatedMall += mall.substring(3);

    let firstHalf = '&#x64;&#97;&#x74;&#97;&#x70;&#114;&#x69;&#x76;&#x61;&#x63;&#121;&#x40;&#x6F;&#x6E;'
    let secondHalf = '&#45;&#x73;&#x74;&#x61;&#x67;&#x65;&#x2E;&#99;&#108;&#x69;&#x63;&#x6B;';
    
    let href = '<a href="' + updatedMall + firstHalf + secondHalf + '">' + firstHalf + secondHalf + '</a>';

    cont.innerHTML += href;
}
