

function updateHTML() {
            //user's code is written to a hidden iframe for validation
                var htmlCode = $('#htmlCode').val();
                var cssCode = $('#cssCode').val();
                $('#htmlResult').empty();
                window.iframe = $('<iframe></iframe>');
                iframe.attr('src', '/iframe.html')
                iframe.addClass('col-md-12');
                $('#htmlResult').append(iframe);
                iframe[0].contentDocument.write(htmlCode);
                iframe[0].contentDocument.write("<style>" + cssCode + "</style>");
                checkCode(); 
        }
