document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var dateEl = document.getElementById('status-date-text');
  var timeEl = document.getElementById('status-time-text');

  if (dateEl && timeEl) {
    var dateFmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta',
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
    var timeFmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Jakarta',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });

    function updateStatusBar() {
      var now = new Date();
      dateEl.textContent = dateFmt.format(now);
      timeEl.textContent = timeFmt.format(now);
    }

    updateStatusBar();
    setInterval(updateStatusBar, 1000);
  }
});
