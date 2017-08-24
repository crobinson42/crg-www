(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-104878794-1');
// code below for use only when testing/debugging with local files
ga('set', 'checkProtocolTask', null); // Disable file protocol checking.
ga('set', 'checkStorageTask', null); // Disable cookie storage checking.
ga('set', 'historyImportTask', null); // Disable history checking (requires reading from cookies).
ga('send', 'pageview');

/*
// code below for use in production
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104878794-1', 'auto');
ga('send', 'pageview');
*/

document.querySelectorAll('.quoteButton').forEach(el => {  

  el.addEventListener('click', () => {
      ga('send', 'event', 'Quote Button', 'clicked', 'quotes');     
      console.log(el.innerHTML);
  })
});

document.querySelectorAll('.navigation').forEach(el => {
  
  el.addEventListener('click', () => {		
   	  ga('send', 'event', el.innerHTML, 'clicked', 'navigation');
   	  console.log(el.innerHTML);
  })
});









 















