const app = new Vue({
    el: '#app',
    data: {
        cds: [],
        actualGenre: 'all'
    },
    created() {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( result => {
            this.cds = result.data.response;
        })
        .catch(error => {
            console.log(error);
        })
    },
    methods: {
        filterGenre() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                let cdFiltered = result.data.response;

                if (this.actualGenre !== 'all') {
                    cdFiltered = cdFiltered.filter( cd => cd.genre.toLowerCase() === this.actualGenre )
                }

                this.cds = cdFiltered;
            })
            .catch();
        }
    }
});