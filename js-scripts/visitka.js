document.forms.container.onsubmit = function() {
            var name = this.name.value,
            surname = this.surname.value,
            phone = this.phone.value;
            var pers_data = document.getElementById("pers-data");
            var data_list = pers_data.children[1];
            for (var i = 0; i < data_list.children.length; i++){
                data_list.children[i].lastChild.value = this.children[i].value;
            }
            return false;
        };