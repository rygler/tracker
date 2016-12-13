import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: "Rafi",
      lName: "Gal",
      email: "rafi@strangemoments.com"
    });
    return [witnessRecord];
  }
});
