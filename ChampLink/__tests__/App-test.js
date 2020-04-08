import expect from 'expect.js';
import React, { Component } from 'react';
import PollPageDetail from './components/PollPageDetail.js';

class Testing1 extends Component {
  
  describe('./Screens/components/PollPageDetail', () => {
    it('works', () => {
      
        expect(2).to.eql(2);
    });
});
}
