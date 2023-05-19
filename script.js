let imagesData = [
    {
        photo: 'photos/photo00.jpg',
        title: 'Pontiusova noční můra',
        description: '"Žádným rytířem by nebyl, nebýt těch očarovaných sil, ke kterým přišel úplnou náhodou." To není vůbec žádná pravda, Pontius je statečným bojovníkem!'
    },
    {
        photo: 'photos/photo01.jpg',
        title: 'Údolí močálů',
        description: 'Žabičky máme rádi, těch se nebojíme. Ale kdože nás to sleduje?'
    },
    {
        photo: 'photos/photo02.jpg',
        title: 'Pochod mechem',
        description: 'Květiny nám naštěstí trochu pomohly.'
    },
    {
        photo: 'photos/photo03.jpg',
        title: 'Zkamenělý strom',
        description: 'Ničeho se nebojíme a dál se vypravíme!'
    },
    {
        photo: 'photos/photo04.jpg',
        title: 'Otevřený portál',
        description: 'Hopsa hejsa, kdo najde Pontiuse?'
    },
    {
        photo: 'photos/photo05.jpg',
        title: 'Ohnivý šíp',
        description: 'Zoja možná chtěla zasáhnout obraz starého šlechtice a přitom málem podpálila celý zámek.'
    },
    {
        photo: 'photos/photo06.jpg',
        title: 'Lítý boj',
        description: 'Boj začíná. Pontiusovi vlaje plášť, Zoja střílí a Amadeus se rozhlíží okolo.'
    },
    {
        photo: 'photos/photo07.jpg',
        title: 'Amadeova noční můra',
        description: 'Uvaříme tetičce něco dobrého. Jen jestli se nám podaří nasměrovat paprsek do správného portálu.'
    },
    {
        photo: 'photos/photo08.jpg',
        title: 'Hrůzná bažina',
        description: 'Jen co se dostaneme přes smrtící mechy, zrušíme všechny příšery, co nás čekají na druhém břehu.'
    },
    {
        photo: 'photos/photo09.jpg',
        title: 'Všichni tady zemřeme!',
        description: 'Někteří z nás teda už mrtví jsou, že?'
    },
    {
        photo: 'photos/photo10.jpg',
        title: 'Připravit ke startu…',
        description: 'Šlápneme na to? No, snad nešlápneme vedle.'
    },
    {
        photo: 'photos/photo11.jpg',
        title: '… a běžíme!',
        description: 'Někdo břichem hodně napřed a nahoru, snad mi to neuklouzne.'
    },
    {
        photo: 'photos/photo12.jpg',
        title: 'Boj s ohnivým prasetem a dalšími',
        description: 'A co tam dělá ten Amadeus? Zase se rozhlíží?'
    },
    {
        photo: 'photos/photo13.jpg',
        title: 'Pavouci nás drtí',
        description: 'A Amadeus utíká pryč?!'
    },
    {
        photo: 'photos/photo14.jpg',
        title: 'Podej sem tu krychli',
        description: 'Pontius a Zoja jinak asi vybuchnou…'
    },
    {
        photo: 'photos/photo15.jpg',
        title: 'Co nás čeká v jeskyni?',
        description: 'Amadeus je nějak pozadu - asi musel dělat printscreen!'
    },
    {
        photo: 'photos/photo16.jpg',
        title: 'Vystřelený šíp',
        description: 'To bude zásah, že už nebude potřeba ani Pontiusova snaha.'
    },
    {
        photo: 'photos/photo17.jpg',
        title: 'Jezevec',
        description: 'Tady jsme potkali jezevce a báli se, aby mu ty brejličky nespadly.'
    }
];

let currentPhoto = 0;
let numberOfPhotos = 17;
let lastlySeenPhoto = 0;

imagesData.forEach((element) => {
    $('.thumbnail-container').append('<div class="thumbnail"> <img src="' + element.photo + '" alt="' + element.title + '"' + 'data-number="' + imagesData.indexOf(element) + '">' 
    + '<div class="thumbnail-title">' + element.title + '</div></div>');
});

$('.thumbnail-container').on('click', '.thumbnail', (event) => {
    currentPhoto = parseInt($(event.target).attr('data-number'));
    loadPhoto(currentPhoto);
});

function loadPhoto(photoNumber) {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo').attr('alt', imagesData[photoNumber].title);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);
    if (photoNumber !== lastlySeenPhoto) {
        $('.thumbnail[data-number="' + lastlySeenPhoto + '"]').css('border', '5px double white');
        // $('.thumbnail[data-number="' + lastlySeenPhoto + '"]').css('border', '5px double white');
    };
    $('.thumbnail[data-number="' + photoNumber + '"]').css('border', '5px double black');
    lastlySeenPhoto = photoNumber;
    // $('.thumbnail.00').css('border', '5px double black');
    // event.target.parentNode.style = 'text-decoration: line-through';
    // imagesData[photoNumber].description);
};
// $('[data-number]').thumbnail.css =;
// $('.thumbnail').[0].css('border', '5px double black');

loadPhoto(currentPhoto);

$('.right-arrow').click(() => {
    if (currentPhoto < numberOfPhotos) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 0;
        loadPhoto(currentPhoto);
    };
});

$('.left-arrow').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
        loadPhoto(currentPhoto);
    } else {
        currentPhoto = 17;
        loadPhoto(currentPhoto);
    };
});

// function loadThumbnail(photo) {

//     // $('.thumbnail').attr('src', imagesData[photoNumber].photo);
//     // $('#photo-title').text(imagesData[photoNumber].title);
//     // $('.thumbnail').attr('alt', imagesData[photoNumber].title);
//     // $('#photo-description').text(imagesData[photoNumber].description);
// };

// $('.thumbnail-container').append('<img class="thumbnail">');
// loadThumbnail(0);