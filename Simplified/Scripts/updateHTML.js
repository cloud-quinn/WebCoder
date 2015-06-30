

        $(document).ready(function () {
            //user's code is rendered live in an iframe on screen
            var updateHTML = function () {
                var htmlCode = $('#htmlCode').val();
                var cssCode = $('#cssCode').val();
                $('#htmlResult').empty();
                window.iframe = $('<iframe></iframe>');
                iframe.attr('src', 'about:_blank')
                iframe.addClass('col-md-12');
                $('#htmlResult').append(iframe);
                iframe[0].contentDocument.write(htmlCode);
                iframe[0].contentDocument.write("<style>" + cssCode + "</style>");
                checkStage(); //draggable is removed in the final activities
            };
            setInterval(updateHTML, 1000);

        });
