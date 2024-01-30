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
            status: 'sent'
            }
        ]
      },
      {
        name: 'Michele',
        avatar: './assets/img/avatar_2.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'Michele',
        avatar: './assets/img/avatar_3.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'Fabio',
        avatar: './assets/img/avatar_4.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'Samuele',
        avatar: './assets/img/avatar_5.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'Alessandro',
        avatar: './assets/img/avatar_6.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'CLaudia',
        avatar: './assets/img/avatar_7.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },
      {
        name: 'Federico',
        avatar: './assets/img/avatar_8.jpg',
        visible: true,
        messages : [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            }
        ]
      },

     ]
    }
  }
}).mount('#app')