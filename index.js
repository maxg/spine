var derby = require('derby');

var app = module.exports = derby.createApp('spine', __filename);

app.use(require('d-bootstrap'));

app.loadViews(__dirname + '/views');
app.loadStyles(__dirname + '/styles');

app.get('/', function(page, model, params, next) {
  var spine = model.at('spine');
  spine.subscribe(function(err) {
    if (err) { return next(err); }
    spine.setNull('prompts', []);
    spine.setNull('responses.'+model.get('_session.userId'), {});
    page.render();
  });
});

app.proto.add = function() {
  this.model.push('spine.prompts', { id: this.model.id(), text: '' });
};
