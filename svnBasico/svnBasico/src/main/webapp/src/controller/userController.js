App.Controller.UserController = Backbone.View.extend({
        el: '#main',
        initialize: function(options) {
            this.editTemplate = _.template($('#user').html());
            var self = this;
            Backbone.on('user-create', function(params) {
                self.create(params);
            });
            Backbone.on('user-save', function(params) {
                self.save(params);
            });
            Backbone.on('user-cancel', function(params) {
                self.cancel(params);
            });
        },
        create: function() {
            this.userModel = new App.Model.UserModel();
            this._renderEdit();
        },
        save:function() { 
            var model = $('#userForm').serializeObject();
            var Frases = new Array();
            Frases[0] = "Biodiesel PBR&B tattooed Thundercats Godard...";
            Frases[1] = "Irony craft beer street art, banjo Helvetica tattooed High Life...";
            Frases[2] = "DIY fixie High Life selfies...";
            Frases[3] = "8-bit four loko distillery meh, trust fund Helvetica slow-carb High Life Vice craft beer tofu asymmetrical mlkshk...";
            Frases[4] = "Cred salvia retro ethnic, post-ironic Marfa photo booth...";
            Frases[5] = "Squid 90's banh mi, High Life VHS food truck paleo Portland flexitarian ethnic DIY +1 Odd Future...";
            Frases[6] = "Ethnic skateboard banh mi, Wes Anderson shabby chic direct trade hashtag church-key Shoreditch normcore vinyl bicycle rights forage...";
            Frases[7] = "Sustainable chillwave drinking vinegar Vice keytar disrupt...";
            Frases[8] = "Tousled Cosby sweater tofu freegan Pitchfork fap...";
            Frases[9] = "Keytar photo booth flexitarian, Tonx art party hashtag craft beer food truck mustache pickled...";
            Frases[10] = "Tousled readymade literally pop-up, raw denim whatever stumptown messenger bag Pitchfork kogi VHS...";
            Frases[11] = "Banh mi McSweeney's 8-bit stumptown umami, Helvetica farm-to-table ethnic occupy seitan post-ironic 3 wolf moon cray cardigan meh...";
            Frases[12] = "Banjo polaroid sustainable Williamsburg pickled actually, distillery gluten-free sartorial +1 jean shorts Wes Anderson keffiyeh...";
            Frases[13] = "Cornhole Bushwick artisan, post-ironic freegan wolf cliche DIY kogi vinyl...";
            Frases[14] = "Jean shorts master cleanse slow-carb McSweeney's, Godard selvage locavore single-origin coffee banjo...";
            var top = Frases.length;
            var alet = Math.round(Math.random()*(top-1));
            console.log('Número aleatorio: ' + alet);
            //alert('saved model: '+JSON.stringify(model));
            document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>"+"El usuario "+model.firstName+" "+model.lastName+" nació el "+model.birthday+", y se puede decir que: "+ Frases[alet]+"</div>";
        },
        cancel: function(){
            alert('Cancel');
        },
        _renderEdit: function() {
            var self = this;
            self.$el.html(self.editTemplate({user: self.userModel}));
        }
    });

