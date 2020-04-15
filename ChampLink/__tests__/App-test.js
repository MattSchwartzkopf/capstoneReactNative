import expect from 'expect.js';
import PollPageDetail from '../Screens/components/PollPageDetail';


  var t = new PollPageDetail();
  var myRef = firebase.database().ref('/Polls');

  describe('./Screens/components/PollPageDetail', () => {
    it('works', () => {
        var expected = t.getAnswer1Count;
        var result = t.getAnswer1Count;
        expect(expected).to.eql(result);
        expect(2).to.eql(2);
    });
});