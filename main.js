const { createApp } = Vue

createApp({
  data() {
    return {
     contacts : [
      {
        name: 'Michele',
        avatar: './assets/img/avatar_1.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Fabio',
        avatar: './assets/img/avatar_2.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'tu spacchi gnuste',
            status: 'received'
            }
        ]
      },
      {
        name: 'Samuele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Alessandro B.',
        avatar: './assets/img/avatar_4.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Alessandro L.',
        avatar: './assets/img/avatar_5.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Claudia',
        avatar: './assets/img/avatar_6.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Federico',
        avatar: './assets/img/avatar_7.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },
      {
        name: 'Davide',
        avatar: './assets/img/avatar_8.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'received'
            }
        ]
      },

     ],
     currentContactIndex : 0,
     newMessage : '',
     search : '',
    }
  },
  methods : {
    chooseContact : function(index){
      this.currentContactIndex = index;
      console.log(index, currentContactIndex);
      
    },
    responseMessage : function() {
        this.responseText = {
          date: '10/01/2020 15:30:55',
          message: "ok",
          status: 'sent'
        };
        console.log(this.responseText);
        this.contacts[this.currentContactIndex].messages.push(this.responseText) 
    },
    sendMessage : function(index){
      let newSentMessage =      {
        date: '10/01/2020 15:30:55',
        message: this.newMessage,
        status: 'received'
        };
        this.contacts[this.currentContactIndex].messages.push(newSentMessage);
        this.newMessage = '';

        setTimeout(this.responseMessage,2000);
    }
  },
  computed: {
    filteredList() {
      return this.contacts.filter(element => {
       return element.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}).mount('#app')