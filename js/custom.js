  (function($) {
    "use strict";
        $('.site-header').affix({
          offset: {
            top: 100,
            bottom: function () {
              return (this.bottom = $('.footer').outerHeight(true))
            }
          }
        })

        function count($this){
          var current = parseInt($this.html(), 10);
              current = current + 1; /* Where 50 is increment */  
              $this.html(++current);
                  if(current > $this.data('count')){
                      $this.html($this.data('count'));
                  } else {    
                      setTimeout(function(){count($this)}, 50);
                  }
              }           
              $(".stat-count").each(function() {
                $(this).data('count', parseInt($(this).html(), 10));
                $(this).html('0');
          count($(this));
        });

        $('[data-toggle="tooltip"]').tooltip();
        
  })(jQuery);


      $.getJSON("https://spreadsheets.google.com/feeds/list/1t2_HHLkibAybPORmXuDDEFEyetC3p7r1blQRpjzinXg/od6/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var name = data.feed.entry[i]['gsx$_cn6ca']['$t'];
        var age = data.feed.entry[i]['gsx$_cokwr']['$t'];
        var email = data.feed.entry[i]['gsx$_cpzh4']['$t'];

        document.getElementById('demo').innerHTML += ('<tr>'+'<td>'+name+'</td>'+'<td>'+age+'</td>'+'<td>'+email+'</td>'+'</tr>');

      }
    });

function fullscreeninit(){
    jQuery('#theButton').click(function() {

      if(!document.getElementById("tax_book"))presentation("merge_lyrics");
      else presentation("tamil_verse");
      document.getElementById("output_outer").style.width = "100%";
      document.getElementById("output_outer").style.height = "80%";
      document.getElementById("output_outer").style.padding = "0px";

      var elem = document.getElementById("output_outer");


      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      }

      var buttons = document.getElementsByClassName("fontSizeButtons")[0];
      if(!buttons){
        var div = document.createElement('div');
        div.className = 'fontSizeButtons';
        
        if(!document.getElementById("tax_book"))
        div.innerHTML = '<span class="fontSizeButton" > <button type="button" onclick="changeFontSize(\'increase\')">A+</button></span><span class="fontSizeButton" > <button type="button" onclick="changeFontSize(\'decrease\')">A-</button></span><span class="fontSizeButton" > <button id="englishButton" onclick="changeToTamilEnglish()" type="button" >Tamil & English</button></span><span class="fontSizeButton" > <button id="englishButton" onclick="changeToEnglish()" type="button" >English</button></span><span class="fontSizeButton" id="mergeButton_hide"  > <button id="mergeButton" onclick="changeToTamil()" type="button" >Tamil</button></span><span class="fontSizeButton" > <button onclick="add(\'plus\')" >Down</button></span><span class="fontSizeButton" > <button onclick="add(\'minus\')" >Up</button></span><span class="fontSizeButton" > <button id="exitButton" onclick="exitscreen()" type="button" >Exit</button></span>';
        else 
          div.innerHTML = '<span class="fontSizeButton" > <button type="button" onclick="changeFontSize(\'increase\')">A+</button></span><span class="fontSizeButton" > <button type="button" onclick="changeFontSize(\'decrease\')">A-</button></span><span class="fontSizeButton" ><span class="fontSizeButton" > <button onclick="add(\'plus\')" >Down</button></span><span class="fontSizeButton" > <button onclick="add(\'minus\')" >Up</button></span><span class="fontSizeButton" > <button id="exitButton" onclick="exitscreen()" type="button" >Exit</button></span>';
        elem.prepend(div);

      }


    });
    fullscreenextras();
  }