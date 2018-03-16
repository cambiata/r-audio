import React from 'react';
import RAudioNode from './../base/audio-node.jsx';

export default class RDelay extends RAudioNode {
  constructor(props) {
    super(props);

    this.params = {
      delayTime: props.delayTime
    };
  }

  componentWillMount() {
    super.componentWillMount();

    if (!this.node || !(this.node instanceof DelayNode)) {
      this.node = this.context.audio.createDelay();
      this.context.nodes.set(this.props.identifier, this.node);
    }

    this.updateParams = this.updateParams.bind(this);
    this.updateParams(this.props);
  }
}
