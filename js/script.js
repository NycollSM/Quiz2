const left = $('#left');
const right = $('#right');
const eventS = $('.event');
const data = null;
$.ajax({
    url: '../json/event-api.json',
    type: 'GET',
    dataType: 'json',
    success: function data (response){
            //console.log(response.events[0].id);
            for (const i of response.events){
                const liItem = $('<li><li>');
                // date
                const title = $('<h2>').text(i.hardcoded);
                // subtitle
                const subtitles = $('<p>').addClass('subtitles').text(i.name.text);
                // location
                const locationTxt = $('<p>').addClass('locations').text(i.venue.name);
                const btn = $('<button>').addClass('btn').attr('src','_blanck',i.url).text('Get Event Details');
                // adding elements at dom
                eventS.append(liItem); 
                liItem.append(title);
                liItem.append(subtitles);
                liItem.append(locationTxt);
                liItem.append(btn);
            }
        }
        
    });
$(document).ready('load', data);



