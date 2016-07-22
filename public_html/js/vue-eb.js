Vue.directive('datepicker', {
  bind: function () {
    var vm = this.vm;
    var key = this.expression;
    $(this.el).datepicker({
      dateFormat: 'dd.mm.yy',
      onClose: function (date) {
        vm.$set(key, date.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[\/\-\.]\d{4}$/) ? date : '');
      }
    });
  },
  update: function (val) {
    $(this.el).datepicker('setDate', val);
    console.log('update Datepicker');
  }
});
Vue.directive('selectmenu', {
  bind: function () {
    var vm = this.vm;
    var key = this.expression;
    $(this.el).selectmenu({change: function (event, ui) {
        vm.$set(key, ui.item.value);
      }});
  },
  update: function (val) {
    $(this.el).selectmenu().val(val).selectmenu('refresh');
    console.log('update Selectmenu');
  }
});
