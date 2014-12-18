$.qtipMakeOptions = function(container, ajax) {
    var options = {
        content: {
            text: container.children('div.tooltip_text')
        },
        position: {
            my: 'left center',
            at: 'right center',
            target: 'event',
            viewport: RB.$(window), // Keep it on-screen at all times if possible
            adjust: {
              screen: true
            }
        },
        hide: {
          fixed: true,
          event: 'mouseleave'

        },
        style: {
          classes: 'backlog-qtip'
        }
    };
    if (ajax) {
      var id = container.children('.id .v').text();
      options['content'] = {
              text: '<div class="tooltip_text">Loading...</div>',
              ajax: {
                url: RB.urlFor('show_tooltip', {id: id}),
                type: 'GET',
                data: { project_id: RB.constants.project_id }, //to satisfy before_filter and authorize
                once: true
              }
            };
    }
    return options;
}

$(function($) {
  RB.util.initToolTip();
});
