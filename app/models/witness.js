import DS from 'ember-data';

export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  title: DS.attr('string', {defaultValue: 'Darth'}),
  fullName: Ember.computed('fName', function () {
    return this.get('fName') + ' - ' + this.get('email');
  }),
  titleName: Ember.computed('fullName', function () {
    return this.get('title') + ' ' + this.get('fullName');
  })
});
