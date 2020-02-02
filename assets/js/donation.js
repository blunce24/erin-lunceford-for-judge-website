(function(){
      var scripts = document.getElementsByTagName('script'),
          thisScriptTag = scripts[scripts.length - 1],
          iframe = document.createElement('iframe');

      thisScriptTag.parentNode.insertBefore(iframe, thisScriptTag);
      iframe.src = 'https://politics.raisethemoney.com/elunceford?iframe=true';
      iframe.width = '100%'; iframe.scrolling = 'no';
      iframe.setAttribute('seamless', true);
      iframe.setAttribute('frameBorder', 0);

      window.addEventListener('message', function(e) {
        iframe.height = e.data;
      });
    })();
