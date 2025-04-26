mounted() {
    axios.get('/api/menu-items')
        .then(response => {
            this.menuItems = response.data;
        });
}
