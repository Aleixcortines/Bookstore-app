var dataVue = new Vue({

    el: '#app',
    //on mounted We put this function is to call my json (on myjason.com url)
    mounted() {
        this.cargarPage();
    },

    // This is the model.

    data: {

       
        booksJson:[],
        searchBook:"",
      

    },
    
     computed:{
        
         searchItems: function(){
             
             return this.booksJson.filter((book) => {
                 
                 var nameFilters = book.titulo.toLowerCase().match(this.searchBook.toLowerCase());
                 
                 return nameFilters;
                 
             })
         }
    },

    // Functions we will be using.
    methods: {
        //function to call the json on myjason.com
        cargarPage() {

            this.$http.get('https://api.myjson.com/bins/udbm5')
                .then((response) => {

                    //on this variables I put the values of my json 

        
                    this.booksJson = response.body.books;

                });
        },
        
       
              
    },
    
   

});
