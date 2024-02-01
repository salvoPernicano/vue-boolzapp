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
            message: 'warzonata?',
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
            message: 'inter-juve metto 1 fisso si?',
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
            message: "l'hai fixato quel bug?",
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
            message: 'sai cosa fanno i topi alieni? i cerchi nel grana',
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
            message: 'devo implementare il delete message',
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
            message: 'ma qualcuno li leggerà mai sti messaggi?',
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
            message: 'comunque oggi è il mio compleanno',
            status: 'received'
            }
        ]
      },

     ],
     currentContactIndex : 0,
    orario : ``,
     newMessage : '',
     search : '',
    }
  },
  methods : {
    chooseContact : function(index){
      this.currentContactIndex = index;  
    },
    responseMessage : function() {
      const DateTime = luxon.DateTime;
      const todayDate = DateTime.now();
      const dataFormattata = todayDate.toLocaleString(DateTime.DATETIME_SHORT);
        this.responseText = {
          date: dataFormattata,
          message: "ok",
          status: 'sent'
        };
        this.contacts[this.currentContactIndex].messages.push(this.responseText) 
    },
    sendMessage : function(index){
      const DateTime = luxon.DateTime;
      const todayDate = DateTime.now();
      const dataFormattata = todayDate.toLocaleString(DateTime.DATETIME_SHORT);
      let newSentMessage =      {
        date: dataFormattata,
        message: this.newMessage,
        status: 'received'
        };
        this.contacts[this.currentContactIndex].messages.push(newSentMessage);
        this.newMessage = '';
        setTimeout(this.responseMessage,2000);
    },
    deleteMessage : function(index , messaggio){
     console.log(index , messaggio);
     this.contacts[this.currentContactIndex].messages.splice(index,1)

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