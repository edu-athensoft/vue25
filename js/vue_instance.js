var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Athens",
       lastname  : "Singh",
       address    : "Mumbai"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })