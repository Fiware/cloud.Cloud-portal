var NovaVolumeSnapshotDetailView = Backbone.View.extend({

    _template: _.itemplate($('#volumeSnapshotDetailTemplate').html()),

    initialize: function() {
        this.model.bind("change", this.render, this);
        this.model.fetch();
    },

    onClose: function () {
        this.model.unbind("change", this.render, this);
        this.undelegateEvents();
        this.unbind();
    },

    render: function () {
        if ($("#volumeSnapshot_details").html() == null) {
            UTILS.Render.animateRender(this.el, this._template, {model:this.model});
        } else {
            $(this.el).html(this._template({model:this.model}));
        }
        return this;
    }

});