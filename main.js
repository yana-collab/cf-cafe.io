const App = {
    data() {
        return {
            placeholderString: "Введите название" ,
            title: "Список заметок" ,
            inputValue: '' ,
            notes: ['']
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        },
        addNewNote() {
            if(this.inputValue !== '') {
            this.notes.push(this.inputValue)
            this.inputValue = ''
        }
    },
    toUpperCase(item) {
        return item.toUpperCase()
    },

        removeNote(i) {
            this.notes.splice(i, 1)
        }
    },

    watch: {
       inputValue(value) {
           if(value.length > 10 ) {
               this.inputValue = ''
           }
       }
    }

}

Vue.createApp(App).mount('#app')