/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function ($) {
    $.datepicker.regional['de'] = {
        clearText: 'löschen',
        clearStatus: 'aktuelles Datum löschen',
        closeText: 'schließen',
        closeStatus: 'ohne Änderungen schließen',
        prevText: 'Zurück',
        prevStatus: 'letzten Monat zeigen',
        nextText: 'Vor',
        nextStatus: 'nächsten Monat zeigen',
        currentText: 'heute',
        currentStatus: '',
        monthNames: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
        monthNamesShort: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
        monthStatus: 'anderen Monat anzeigen',
        yearStatus: 'anderes Jahr anzeigen',
        weekHeader: 'Wo',
        weekStatus: 'Woche des Monats',
        dayNames: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
        dayNamesShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayNamesMin: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
        dayStatus: 'Setze DD als ersten Wochentag',
        dateStatus: 'Wähle D, M d',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        initStatus: 'Wähle ein Datum',
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['de']);
});
var datepickerOptions = {
    changeMonth: true,
    changeYear: true,
    buttonImageOnly: true,
    buttonText: 'Datum ausw\u00e4hlen',
    buttonImage: '/images/calender.gif',
    showOn: 'button'
  };
