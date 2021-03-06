var CreateVolumeBackupView = Backbone.View.extend({

    _template: _.itemplate($('#createVolumeBackupFormTemplate').html()),

    events: {
      'click #cancelBtn': 'close',
      'click .close': 'close',
      'click #createBtn': 'create',
      'click .modal-backdrop': 'close'
    },

    onClose: function() {
        this.undelegateEvents();
        this.unbind();
    },

    initialize: function() {
    },

    render: function () {
        if ($('#create_volume_modal').html() != null) {
            return;
        }
        $(this.el).append(this._template());
        $('.modal:last').modal();
        return this;
    },

    close: function(e) {
        $('#create_volume_backup_modal').remove();
        $('.modal-backdrop').remove();
        this.onClose();
    },

    create: function(e) {
        var name = $('input[name=name]').val();
        var description = $('textarea[name=description]').val();
        var backup = new VolumeBackup();
        backup.set({volume_id: this.options.volume_id, name: name, description: description});
        backup.save(undefined, UTILS.Messages.getCallbacks("Volume backup "+ name + " created.", "Error creating volume backup "+ name, {context: this}));
    }

});