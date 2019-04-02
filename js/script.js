const left = $('#left');
const right = $('#right');
const events = $('.event__info');
const data = null;
$.ajax({
    url: '../json/event-api.json',
    type: 'GET',
    dataType: 'json',
    success: function data (response){
        for (const i of response.events){
            console.log(i);
            const liItem = $('<li><li>');
            // date
            const title = $('<h2>');
            title.text(i.hardcoded);
            // subtitle
            const subtitles = $('<p>').addClass('event__subtitle');
            subtitles.text(i.name.text);
            // location
            const locationTxt = $('<p>').addClass('event__location');
            locationTxt.text(i.venue.name);
            const btn = $('<button>').addClass('event__button').attr('src','_blanck',i.url)
            btn.text('Get Event Details');
            // adding elements at dom
            events.append(liItem); 
            liItem.append(title);
            liItem.append(subtitles);
            liItem.append(locationTxt);
            liItem.append(btn);
        }
        }
        
    });
$(document).ready('load', data);



