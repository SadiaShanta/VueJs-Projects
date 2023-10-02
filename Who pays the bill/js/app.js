// If state is true then it will show one element if not then it will show another.
// If there is more than 1 name it will show the button check the looser

const app = Vue.createApp({
    data(){
        return{
            state: true,
            inputName: '',
            names:[],
            error: '',
            showError: false,
            result:''
        }
       
    },
    computed:{
        isReady(){
            return this.names.length > 1;
        }
    },
    methods:{
        addNameToList(){
            const userName = this.inputName;
            if(this.validate(userName)){
                this.names.push(userName);
                this.inputName = '';
                this.showError = false;
                console.log(this.names)
            } else {
                this.showError = true;
                console.log('error')
            }
        },
        validate(value){
            this.error = '';

            if(value === ''){
                this.error = 'Sorry,empty name is not accepted';
                return false;
            }
            if(this.names.includes(value)){
                this.error = 'Sorry, this name is already used';
                return false;
            }
            return true;
        },
        removeName(index){
            this.names.splice(index,1)
        },
        getRandomName(){
            return this.names[Math.floor(Math.random() * this.names.length)]
        },
        generateResult(){
            let rand = this.getRandomName();
            if(this.result !==''){
                while(rand === this.result){
                    rand = this.getRandomName();
                }
            }
            this.result = rand;
        },
        showResults(){
            this.generateResult();
            this.state = false;
        },
        resetApp(){
            this.state = true;
            this.inputName = '';
            this.names = [];
            this.error = '';
            this.showError = false;
            this.result =''
        },
        getNewResult(){
            this.generateResult();
        }
    }
}).mount('#app');