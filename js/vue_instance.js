var  vm = new Vue({
    el: '#vue_det',
    data: {
       firstname : "Athens",
       lastname  : "Zhang",
       address    : "Mumbai"
    },
    methods: {
       mydetails : function() {
          return "I am "+this.firstname +" "+ this.lastname;
       }
    }
 })